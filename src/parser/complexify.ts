import {CharStreams, CommonTokenStream} from "antlr4ts";
import { ComplexifyLexer } from "./generated/src/parser/ComplexifyLexer";
import { ComplexifyParser } from "./generated/src/parser/ComplexifyParser";
import ComplexifyParseError from "@/parser/errors/ComplexifyParseError";
import ComplexifyGLSLVisitor from "@/parser/visitors/ComplexifyGLSLVisitor";
import ComplexifyJsVisitor from "@/parser/visitors/ComplexifyJsVisitor";

import {ComplexFunction} from "@/shaders/complexMath";


export function parse(input?: string): [string, ComplexFunction] | never {
    if (!input) {
        throw new ComplexifyParseError("Input is empty or undefined, so nothing can be parsed");
    }
    let glslOutput: string;
    let jsOutput: ComplexFunction | undefined;
    try {
        const charStream = CharStreams.fromString(input);
        const lexer = new ComplexifyLexer(charStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new ComplexifyParser(tokenStream);
        const context = parser.parse();
        const glslVisitor = new ComplexifyGLSLVisitor();
        const jsVisitor = new ComplexifyJsVisitor();
        glslOutput = glslVisitor.visitParse(context)
        jsOutput = jsVisitor.visitParse(context);
    } catch (error: any) {
        throw new ComplexifyParseError("A syntax error occurred while parsing the input", error);
    }
    if (!jsOutput) {
        throw new ComplexifyParseError("No symbol marked for plot. Prefix plotted symbol with '@'");
    }
    return [glslOutput, jsOutput];
}