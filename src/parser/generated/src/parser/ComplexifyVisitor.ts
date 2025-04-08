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



import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ComplexifyParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ComplexifyVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ComplexifyParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexifyParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexifyParser.addition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexifyParser.multiplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexifyParser.fractionOrPower`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFractionOrPower?: (ctx: FractionOrPowerContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexifyParser.power`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexifyParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexifyParser.num`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNum?: (ctx: NumContext) => Result;

	/**
	 * Visit a parse tree produced by `ComplexifyParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;
}

