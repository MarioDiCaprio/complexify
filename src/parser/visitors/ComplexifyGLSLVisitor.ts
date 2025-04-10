import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ComplexifyLexer as Lexer } from "../generated/src/parser/ComplexifyLexer";
import { ParseContext, AssignmentContext, AdditionContext, MultiplicationContext, FractionContext, PowerContext, AtomContext } from "../generated/src/parser/ComplexifyParser";
import {ComplexifyVisitor} from "../generated/src/parser/ComplexifyVisitor";
import {group} from "@/parser/visitors/visitorUtils";

export default class ComplexifyGLSLVisitor implements Required<ComplexifyVisitor<string>> {

    plottedSymbol?: string;
    constants: string[] = [];
    functions: string[] = [];

    visitParse(ctx: ParseContext): string {
        let result = ctx.assignment()
            .map(a => this.visitAssignment(a))
            .join('\n\n');
        if (!this.plottedSymbol) {
            return result;
        }
        if (this.constants.includes(this.plottedSymbol)) {
            result += `\n\nplottedFunction(vec2 arg) {\n    return ${this.plottedSymbol}_CONST;\n}`;
            return result;
        }
        result += `\n\nplottedFunction(vec2 arg) {\n    return ${this.plottedSymbol}_FUNC(arg);\n}`;
        return result;
    }

    visitAssignment(ctx: AssignmentContext): string {
        const isPlot = ctx._isPlot?.text;
        const name = ctx._c1.text!;
        const arg = ctx._c2?.text;
        const lhs = this.visitAddition(ctx._a);
        // assign plotting context
        if (isPlot) {
            this.plottedSymbol = name;
        }
        // constant assignment
        if (!arg) {
            this.constants.push(name);
            return `vec2 ${name}_CONST = ${lhs};`;
        }
        // function assignment
        this.functions.push(name);
        return `vec2 ${name}_FUNC(vec2 ${arg}) {\n    return ${lhs};\n}`;
    }

    visitAddition(ctx: AdditionContext): string {
        const terms: string[] = [];

        // first term is mandatory
        const m1 = this.visitMultiplication(ctx._m1);
        if (ctx._sign1?.type === Lexer.MINUS) {
            terms.push(`multC(-1.0, ${m1})`);
        } else {
            terms.push(m1);
        }

        // all successor terms
        for (let i = 0; i < ctx._m2.length; i++) {
            const m = this.visitMultiplication(ctx._m2[i]);
            const sign = ctx._sign2[i];
            if (sign.type === Lexer.MINUS) {
                terms.push(`multC(-1.0, ${m})`);
            } else {
                terms.push(m);
            }
        }

        // combine result
        if (terms.length == 1) {
            return terms[0];
        }
        return group('addC(', ', ', ')', terms);
    }

    visitMultiplication(ctx: MultiplicationContext): string {
        const terms: string[] = [];

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
        return group('multC(', ', ', ')', terms);
    }

    visitFraction(ctx: FractionContext): string {
        const numerator = this.visitAddition(ctx._numerator);
        const denominator = this.visitAddition(ctx._denominator);
        return `divideC(${numerator}, ${denominator})`;
    }

    visitPower(ctx: PowerContext): string {
        if (ctx.SQRT()) {
            const term = this.visitAddition(ctx._sqrt);
            return `sqrtC(${term})`;
        }

        const base = this.visitAtom(ctx._base);
        if (!ctx.POW()) {
            return base;
        }
        const exponent = this.visitAddition(ctx._exponent);
        return `powC(${base}, ${exponent})`;
    }

    visitAtom(ctx: AtomContext): string {
        if (ctx._const_predef) {
            switch (ctx._const_predef.type) {
                case Lexer.I:
                    return 'i_CONST';
                case Lexer.E:
                    return 'e_CONST';
                case Lexer.PI:
                    return 'pi_CONST';
            }
        }
        if (ctx._func_predef) {
            const arg = this.visitAddition(ctx._func_predef_arg);
            switch (ctx._func_predef.type) {
                case Lexer.SIN:
                    return `sin_FUNC(${arg})`;
                case Lexer.COS:
                    return `cos_FUNC(${arg})`;
                case Lexer.TAN:
                    return `tan_FUNC(${arg})`;
                case Lexer.COT:
                    return `cot_FUNC(${arg})`;
                case Lexer.SEC:
                    return `sec_FUNC(${arg})`;
                case Lexer.CSC:
                    return `csc_FUNC(${arg})`;
                case Lexer.SINH:
                    return `sinh_FUNC(${arg})`;
                case Lexer.COSH:
                    return `cosh_FUNC(${arg})`;
                case Lexer.TANH:
                    return `tanh_FUNC(${arg})`;
                case Lexer.LOG:
                    return `log_FUNC(${arg})`;
                case Lexer.LN:
                    return `ln_FUNC(${arg})`;
                case Lexer.RE:
                    return `Re_FUNC(${arg})`;
                case Lexer.IM:
                    return `Im_FUNC(${arg})`;
            }
        }
        if (ctx._func_operatorname) {
            const arg = this.visitAddition(ctx._func_operatorname_arg);
            switch (ctx._func_operatorname.type) {
                case Lexer.CIS:
                    return `cisC(${arg})`;
            }
        }
        if (ctx._num) {
            return `vec2(${ctx._num.text!}, 0)`;
        }
        if (ctx._user_def_symbol) {
            const symbol = ctx._user_def_symbol.text!;
            if (ctx._user_def_symbol_arg) {
                const arg = this.visitAddition(ctx._user_def_symbol_arg);
                return `${symbol}_FUNC(${arg})`;
            }
            if (this.constants.includes(symbol)) {
                return `${symbol}_CONST`;
            }
            return symbol;
        }
        if (ctx._parantheses_arg) {
            const arg = this.visitAddition(ctx._parantheses_arg);
            return `(${arg})`;
        }
        throw new Error('Error parsing expression: ' + ctx.text);
    }

    //////////////////////////////////////////////////////////////////////////

    visit(tree: ParseTree): string {
        throw new Error("Method not implemented.");
    }

    visitChildren(node: RuleNode): string {
        throw new Error("Method not implemented.");
    }

    visitTerminal(node: TerminalNode): string {
        throw new Error("Method not implemented.");
    }

    visitErrorNode(node: ErrorNode): string {
        throw new Error("Method not implemented.");
    }

}