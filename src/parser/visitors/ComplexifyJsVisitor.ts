import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ComplexifyLexer as Lexer } from "../generated/src/parser/ComplexifyLexer";
import { ParseContext, AssignmentContext, AdditionContext, MultiplicationContext, FractionContext, PowerContext, AtomContext } from "../generated/src/parser/ComplexifyParser";
import {ComplexifyVisitor} from "../generated/src/parser/ComplexifyVisitor";
import {applyConvolutions} from "@/parser/visitors/visitorUtils";

import * as MathC from "@/shaders/complexMath";
import {ComplexFunction} from "@/shaders/complexMath";


export default class ComplexifyJsVisitor implements ComplexifyVisitor<MathC.ComplexFunction | undefined> {

    variable?: string
    plottedSymbol?: string
    constants: { [c: string]: MathC.Complex } = {}
    functions: { [c: string]: MathC.ComplexFunction } = {}

    visitParse(ctx: ParseContext): MathC.ComplexFunction | undefined {
        ctx.assignment().forEach(a => this.visitAssignment(a));
        if (!this.plottedSymbol) {
            return undefined;
        }
        if (this.plottedSymbol in this.constants) {
            return () => this.constants[this.plottedSymbol!];
        }
        return this.functions[this.plottedSymbol!];
    }

    visitAssignment(ctx: AssignmentContext): ComplexFunction {
        const isPlot = ctx._isPlot?.text;
        const name = ctx._c1.text!;
        const arg = ctx._c2?.text;
        this.variable = arg;
        const lhs = this.visitAddition(ctx._a);

        // assign plotting context
        if (isPlot) {
            this.plottedSymbol = name;
        }
        // constant assignment
        if (!arg) {
            this.constants[name] = lhs(MathC.ZERO);
        } else {
            this.functions[name] = lhs;
        }
        // return type not really used, but required anyway
        return lhs;
    }

    visitAddition(ctx: AdditionContext): MathC.ComplexFunction {
        const terms: MathC.ComplexFunction[] = [];

        // first term is mandatory
        const m1 = this.visitMultiplication(ctx._m1);
        if (ctx._sign1?.type === Lexer.MINUS) {
            terms.push(z => MathC.multiply({ r: -1, i: 0 }, m1(z)));
        } else {
            terms.push(m1);
        }

        // all successor terms
        for (let i = 0; i < ctx._m2.length; i++) {
            const m = this.visitMultiplication(ctx._m2[i]);
            const sign = ctx._sign2[i];
            if (sign.type === Lexer.MINUS) {
                terms.push(z => MathC.multiply({ r: -1, i: 0 }, m(z)));
            } else {
                terms.push(m);
            }
        }

        // combine result
        if (terms.length == 1) {
            return terms[0];
        }
        return applyConvolutions(
            terms,
            (a, b) => (z => MathC.add(a(z), b(z)))
        );
    }

    visitMultiplication(ctx: MultiplicationContext): MathC.ComplexFunction {
        const terms: MathC.ComplexFunction[] = [];

        // push all fractions
        ctx._fractions.forEach(f => {
            terms.push(this.visitFraction(f));
        });

        // push all powers
        ctx._powers.forEach(p => {
            terms.push(this.visitPower(p));
        });

        // combine result
        if (terms.length == 1) {
            return terms[0];
        }
        return applyConvolutions(
            terms,
            (a, b) => (z => MathC.multiply(a(z), b(z)))
        );
    }

    visitFraction(ctx: FractionContext): MathC.ComplexFunction {
        const numerator = this.visitAddition(ctx._numerator);
        const denominator = this.visitAddition(ctx._denominator);
        return z => MathC.divide(numerator(z), denominator(z));
    }

    visitPower(ctx: PowerContext): MathC.ComplexFunction {
        if (ctx.SQRT()) {
            const term = this.visitAddition(ctx._sqrt);
            return z => MathC.sqrt(term(z));
        }

        const base = this.visitAtom(ctx._base);
        if (!ctx.POW()) {
            return base;
        }
        const exponent = (ctx._atomic_exponent)? this.visitAtom(ctx._atomic_exponent) : this.visitAddition(ctx._composite_exponent);
        return z => MathC.pow(base(z), exponent(z));
    }

    visitAtom(ctx: AtomContext): MathC.ComplexFunction {
        if (ctx._const_predef) {
            switch (ctx._const_predef.type) {
                case Lexer.I:
                    return () => MathC.I;
                case Lexer.E:
                    return () =>  ({ r: Math.E, i: 0 });
                case Lexer.PI:
                    return () => ({ r: Math.PI, i: 0 });
            }
        }
        if (ctx._func_predef) {
            const arg = this.visitAddition(ctx._func_predef_arg);
            switch (ctx._func_predef.type) {
                case Lexer.SIN:
                    return z => MathC.sin(arg(z));
                case Lexer.COS:
                    return z => MathC.cos(arg(z));
                case Lexer.TAN:
                    return z => MathC.tan(arg(z));
                case Lexer.COT:
                    return z => MathC.cot(arg(z));
                case Lexer.SEC:
                    return z => MathC.sec(arg(z));
                case Lexer.CSC:
                    return z => MathC.csc(arg(z));
                case Lexer.SINH:
                    return z => MathC.sinh(arg(z));
                case Lexer.COSH:
                    return z => MathC.cosh(arg(z));
                case Lexer.TANH:
                    return z => MathC.tanh(arg(z));
                case Lexer.LOG:
                    return z => MathC.log(arg(z));
                case Lexer.LN:
                    return z => MathC.ln(arg(z));
                case Lexer.RE:
                    return z => MathC.re(arg(z));
                case Lexer.IM:
                    return z => MathC.im(arg(z));
            }
        }
        if (ctx._func_operatorname) {
            const arg = this.visitAddition(ctx._func_operatorname_arg);
            switch (ctx._func_operatorname.type) {
                case Lexer.CIS:
                    return z => MathC.cis(arg(z));
            }
        }
        if (ctx._num) {
            return () => ({ r: parseFloat(ctx._num.text!), i: 0 });
        }
        if (ctx._user_def_symbol) {
            const symbol = ctx._user_def_symbol.text!;
            if (ctx._user_def_symbol_arg) {
                const arg = this.visitAddition(ctx._user_def_symbol_arg);
                const func = this.functions[symbol];
                return z => func(arg(z));
            }
            if (symbol in this.constants) {
                return () => this.constants[symbol];
            }
            if (symbol === this.variable) {
                return z => z;
            }
        }
        if (ctx._parantheses_arg) {
            const arg = this.visitAddition(ctx._parantheses_arg);
            return z => arg(z);
        }
        throw new Error('Error parsing expression: ' + ctx.text);
    }

    //////////////////////////////////////////////////////////////////////////////////////

    visit(tree: ParseTree): MathC.ComplexFunction {
        throw new Error("Method not implemented.");
    }
    visitChildren(node: RuleNode): MathC.ComplexFunction {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): MathC.ComplexFunction {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): MathC.ComplexFunction {
        throw new Error("Method not implemented.");
    }

}