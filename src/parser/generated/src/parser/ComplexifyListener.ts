// Generated from src/parser/Complexify.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./ComplexifyParser";
import { AssignmentContext } from "./ComplexifyParser";
import { AdditionContext } from "./ComplexifyParser";
import { MultiplicationContext } from "./ComplexifyParser";
import { FractionContext } from "./ComplexifyParser";
import { PowerContext } from "./ComplexifyParser";
import { AtomContext } from "./ComplexifyParser";


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
	 * Enter a parse tree produced by `ComplexifyParser.fraction`.
	 * @param ctx the parse tree
	 */
	enterFraction?: (ctx: FractionContext) => void;
	/**
	 * Exit a parse tree produced by `ComplexifyParser.fraction`.
	 * @param ctx the parse tree
	 */
	exitFraction?: (ctx: FractionContext) => void;

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
}

