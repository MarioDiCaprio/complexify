// Generated from src/parser/Complexify.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParseContext } from "./ComplexifyParser";
import { AssignmentContext } from "./ComplexifyParser";
import { AdditionContext } from "./ComplexifyParser";
import { MultiplicationContext } from "./ComplexifyParser";
import { FractionContext } from "./ComplexifyParser";
import { PowerContext } from "./ComplexifyParser";
import { AtomContext } from "./ComplexifyParser";


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
	 * Visit a parse tree produced by `ComplexifyParser.fraction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFraction?: (ctx: FractionContext) => Result;

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
}

