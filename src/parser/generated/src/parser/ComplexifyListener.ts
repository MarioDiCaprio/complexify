// Generated from src/parser/Complexify.g4 by ANTLR 4.9.0-SNAPSHOT



type SymbolDeclaration = Partial<{
    name: string; // The name of the symbol being declared (one character!)
    type: 'function' | 'constant'; // The type of the declaration
    value: string; // The value of the symbol being declared i.e. the value that is returned when invoking the symbol
    initialOrder: number; // The initial order of the declaration. The n-th declaration should have order n.
    isPlot: boolean; // Whether the symbol should be plotted
    arguments: string[]; // if the symbol is a function, a list of arguments. E.g: f(x, y) has arguments ['x', 'y'].
    dependencies: string[]; // a list of all symbols (their names) on which this symbol is dependent. E.g: f(x) = g(x) + a is dependent on ['g', 'a']
}>;



import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./ComplexifyParser";
import { AssignmentContext } from "./ComplexifyParser";
import { AdditionContext } from "./ComplexifyParser";
import { MultiplicationContext } from "./ComplexifyParser";
import { FractionOrPowerContext } from "./ComplexifyParser";
import { PowerContext } from "./ComplexifyParser";
import { AtomContext } from "./ComplexifyParser";
import { NumContext } from "./ComplexifyParser";
import { ElementContext } from "./ComplexifyParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ComplexifyParser`.
 */
export interface ComplexifyListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ComplexifyParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexifyParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexifyParser.addition`.
	 * @param ctx the parse tree
	 */
	enterAddition?: (ctx: AdditionContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.addition`.
	 * @param ctx the parse tree
	 */
	exitAddition?: (ctx: AdditionContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexifyParser.multiplication`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.multiplication`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexifyParser.fractionOrPower`.
	 * @param ctx the parse tree
	 */
	enterFractionOrPower?: (ctx: FractionOrPowerContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.fractionOrPower`.
	 * @param ctx the parse tree
	 */
	exitFractionOrPower?: (ctx: FractionOrPowerContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexifyParser.power`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.power`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexifyParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexifyParser.num`.
	 * @param ctx the parse tree
	 */
	enterNum?: (ctx: NumContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.num`.
	 * @param ctx the parse tree
	 */
	exitNum?: (ctx: NumContext) => void;

	/**
	 * Enter a parse tree produced by `ComplexifyParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;
}

