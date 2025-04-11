import {CharStreams, CommonTokenStream} from "antlr4ts";
import { ComplexifyLexer } from "./generated/src/parser/ComplexifyLexer";
import { ComplexifyParser } from "./generated/src/parser/ComplexifyParser";
import ComplexifyGLSLVisitor from "@/parser/visitors/ComplexifyGLSLVisitor";

import * as MathC from "@/shaders/complexMath";
import ComplexifyJsVisitor from "@/parser/visitors/ComplexifyJsVisitor";

/**
 * This function parses the given input. It converts LaTeX math into
 * GLSL-readable code to plot the given function.
 * @param input The code as LaTeX math
 * @returns The code in GLSL
 */
export function parseToGLSL(input: string | undefined): string {
    if (!input) {
        return '';
    }
    const charStream = CharStreams.fromString(input);
    const lexer = new ComplexifyLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ComplexifyParser(tokenStream);

    try {
        const parseContext = parser.parse();
        const glslVisitor = new ComplexifyGLSLVisitor();

        return glslVisitor.visitParse(parseContext);
    } catch (error) {
        console.error(error);
        return "";
    }
}

export function parseToJs(input: string | undefined): MathC.ComplexFunction | undefined {
    if (!input) {
        return undefined;
    }
    const charStream = CharStreams.fromString(input);
    const lexer = new ComplexifyLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ComplexifyParser(tokenStream);

    try {
        const parseContext = parser.parse();
        const jsVisitor = new ComplexifyJsVisitor();

        return jsVisitor.visitParse(parseContext);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}