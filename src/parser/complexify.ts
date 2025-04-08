import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import { ComplexifyLexer } from "./generated/src/parser/ComplexifyLexer";
import { ComplexifyParser } from "./generated/src/parser/ComplexifyParser";

/**
 * This function parses the given input. It converts LaTeX math into
 * GLSL-readable code to plot the given function.
 * @param input The code as LaTeX math
 * @returns The code in GLSL
 */
export function parse(input: string | undefined): string {
    if (!input) {
        return '';
    }
    const chars = new ANTLRInputStream(input);
    const lexer = new ComplexifyLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new ComplexifyParser(tokens);
    parser.removeErrorListeners();
    parser.parse();
    return parser.result;
}