// Generated from src/components/app/(graphing)/parser/.antlr/Complex.g4 by ANTLR 4.9.0-SNAPSHOT



type SymbolDeclaration = Partial<{
    name: string; // The name of the symbol being declared (one character!)
    type: 'function' | 'constant'; // The type of the declaration
    value: string; // The value of the symbol being declared i.e. the value that is returned when invoking the symbol
    initialOrder: number; // The initial order of the declaration. The n-th declaration should have order n.
    isPlot: boolean; // Whether the symbol should be plotted
    arguments: string[]; // if the symbol is a function, a list of arguments. E.g: f(x, y) has arguments ['x', 'y'].
    dependencies: string[]; // a list of all symbols (their names) on which this symbol is dependent. E.g: f(x) = g(x) + a is dependent on ['g', 'a']
}>;



import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ComplexLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly NUMBER = 20;
	public static readonly CHAR = 21;
	public static readonly PLUS = 22;
	public static readonly MINUS = 23;
	public static readonly TIMES = 24;
	public static readonly DIVIDE = 25;
	public static readonly POW = 26;
	public static readonly SQRT = 27;
	public static readonly LEFT = 28;
	public static readonly RIGHT = 29;
	public static readonly LEFT_BRACE = 30;
	public static readonly RIGHT_BRACE = 31;
	public static readonly COMA = 32;
	public static readonly SEMICOLON = 33;
	public static readonly EQUALS = 34;
	public static readonly PLOTTED_FUNC = 35;
	public static readonly WS = 36;
	public static readonly LATEX_WS = 37;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "NUMBER", "CHAR", "PLUS", "MINUS", "TIMES", "DIVIDE", 
		"POW", "SQRT", "LEFT", "RIGHT", "LEFT_BRACE", "RIGHT_BRACE", "COMA", "SEMICOLON", 
		"EQUALS", "PLOTTED_FUNC", "WS", "LATEX_WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'i'", "'e'", "'\\'", "'pi'", "'sin'", "'cos'", "'tan'", "'cot'", 
		"'sec'", "'csc'", "'sinh'", "'cosh'", "'tanh'", "'log'", "'ln'", "'Re'", 
		"'Im'", "'\\peratorname{'", "'cis'", undefined, undefined, "'+'", "'-'", 
		"'\\dot'", "'\\rac'", "'^'", "'\\qrt'", undefined, undefined, "'{'", "'}'", 
		"','", "';'", "'='", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "NUMBER", 
		"CHAR", "PLUS", "MINUS", "TIMES", "DIVIDE", "POW", "SQRT", "LEFT", "RIGHT", 
		"LEFT_BRACE", "RIGHT_BRACE", "COMA", "SEMICOLON", "EQUALS", "PLOTTED_FUNC", 
		"WS", "LATEX_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ComplexLexer._LITERAL_NAMES, ComplexLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ComplexLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	/**
	* Creates a string that represents a function with two arguments.
	* Since more than two arguments can be given, the remaining arguments
	* are nested inside of the function. The result is a string that represents
	* the GLSL version of the expression (defined under `src/public/glsl/complexMath.glsl`).

	* Example: Parse the expression `2 + 4 + 6`
	* - start: `add(`
	* - delimiter: `, `
	* - end: `)`
	* - args: [2, 4, 6]
	* - result: `add(2, add(4, 6))`

	* @param start The starting expression
	* @param delimiter The separator for each element
	* @param end The ending expression
	* @param args An array of arguments for the function
	* @returns The equivalent string in GLSL
	*/
	private group(start: string, delimiter: string, end: string, args: string[]): string {
	    if (args.length == 1) {
	        return args[0];
	    }
	    return start + args[0] + delimiter + this.group(start, delimiter, end, args.slice(1)) + end;
	};

	// The context of the current declaration
	currentSymbol: (undefined | SymbolDeclaration) = undefined;

	symbols: {[name: string]: SymbolDeclaration} = {};

	plotSymbol: string | undefined = undefined;

	private compareSymbols(a: SymbolDeclaration, b: SymbolDeclaration): number {
	    const aDependsOnB = a?.dependencies?.includes(b?.name as string);
	    const bDependsOnA = b?.dependencies?.includes(a?.name as string);
	    
	    if (aDependsOnB && bDependsOnA)
	        return 0;
	    else if (aDependsOnB)
	        return 1;
	    else if (bDependsOnA)
	        return -1;
	    if (a.type === 'constant' && b.type === 'function')
	        return -1;
	    else if (b.type === 'constant' && a.type === 'function')
	        return 1;
	    else if (a.isPlot && !b.isPlot)
	        return 1;
	    else if (b.isPlot && !a.isPlot)
	        return -1;
	    else
	        return 0;
	}

	private symbolToGLSL(symbol: SymbolDeclaration): string {
	    const args = symbol.arguments?.map(x => 'vec2 ' + x + '_VAR').join(', ');
	    return symbol.type === 'constant' || !symbol.arguments?
	`vec2 ${symbol.name}_CONST() {
	    return ${symbol.value};
	}`
	    :
	`
	vec2 ${symbol.name}_FUNC(${args}) {
	    return ${symbol.value};
	}
	`;
	}


	// The merged tmp array, i.e. the full GLSL code
	result: string = '';



	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ComplexLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Complex.g4"; }

	// @Override
	public get ruleNames(): string[] { return ComplexLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ComplexLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ComplexLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ComplexLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\'\xF0\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x06\x15\x9F\n\x15\r\x15" +
		"\x0E\x15\xA0\x03\x15\x03\x15\x05\x15\xA5\n\x15\x05\x15\xA7\n\x15\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\xCA\n\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\xD4\n\x1E" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03" +
		"%\x06%\xE3\n%\r%\x0E%\xE4\x03%\x03%\x03&\x03&\x06&\xEB\n&\r&\x0E&\xEC" +
		"\x03&\x03&\x02\x02\x02\'\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
		"\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I" +
		"\x02&K\x02\'\x03\x02\x04\x04\x02C\\c|\x05\x02\v\f\x0E\x0F\"\"\x02\xF6" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
		"\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02" +
		"\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02" +
		"!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03" +
		"\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02" +
		"\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x02" +
		"5\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02" +
		"\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02" +
		"\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03" +
		"\x02\x02\x02\x02K\x03\x02\x02\x02\x03M\x03\x02\x02\x02\x05O\x03\x02\x02" +
		"\x02\x07Q\x03\x02\x02\x02\tS\x03\x02\x02\x02\vV\x03\x02\x02\x02\rZ\x03" +
		"\x02\x02\x02\x0F^\x03\x02\x02\x02\x11b\x03\x02\x02\x02\x13f\x03\x02\x02" +
		"\x02\x15j\x03\x02\x02\x02\x17n\x03\x02\x02\x02\x19s\x03\x02\x02\x02\x1B" +
		"x\x03\x02\x02\x02\x1D}\x03\x02\x02\x02\x1F\x81\x03\x02\x02\x02!\x84\x03" +
		"\x02\x02\x02#\x87\x03\x02\x02\x02%\x8A\x03\x02\x02\x02\'\x99\x03\x02\x02" +
		"\x02)\x9E\x03\x02\x02\x02+\xA8\x03\x02\x02\x02-\xAA\x03\x02\x02\x02/\xAC" +
		"\x03\x02\x02\x021\xAE\x03\x02\x02\x023\xB4\x03\x02\x02\x025\xBA\x03\x02" +
		"\x02\x027\xBC\x03\x02\x02\x029\xC9\x03\x02\x02\x02;\xD3\x03\x02\x02\x02" +
		"=\xD5\x03\x02\x02\x02?\xD7\x03\x02\x02\x02A\xD9\x03\x02\x02\x02C\xDB\x03" +
		"\x02\x02\x02E\xDD\x03\x02\x02\x02G\xDF\x03\x02\x02\x02I\xE2\x03\x02\x02" +
		"\x02K\xEA\x03\x02\x02\x02MN\x07k\x02\x02N\x04\x03\x02\x02\x02OP\x07g\x02" +
		"\x02P\x06\x03\x02\x02\x02QR\x07^\x02\x02R\b\x03\x02\x02\x02ST\x07r\x02" +
		"\x02TU\x07k\x02\x02U\n\x03\x02\x02\x02VW\x07u\x02\x02WX\x07k\x02\x02X" +
		"Y\x07p\x02\x02Y\f\x03\x02\x02\x02Z[\x07e\x02\x02[\\\x07q\x02\x02\\]\x07" +
		"u\x02\x02]\x0E\x03\x02\x02\x02^_\x07v\x02\x02_`\x07c\x02\x02`a\x07p\x02" +
		"\x02a\x10\x03\x02\x02\x02bc\x07e\x02\x02cd\x07q\x02\x02de\x07v\x02\x02" +
		"e\x12\x03\x02\x02\x02fg\x07u\x02\x02gh\x07g\x02\x02hi\x07e\x02\x02i\x14" +
		"\x03\x02\x02\x02jk\x07e\x02\x02kl\x07u\x02\x02lm\x07e\x02\x02m\x16\x03" +
		"\x02\x02\x02no\x07u\x02\x02op\x07k\x02\x02pq\x07p\x02\x02qr\x07j\x02\x02" +
		"r\x18\x03\x02\x02\x02st\x07e\x02\x02tu\x07q\x02\x02uv\x07u\x02\x02vw\x07" +
		"j\x02\x02w\x1A\x03\x02\x02\x02xy\x07v\x02\x02yz\x07c\x02\x02z{\x07p\x02" +
		"\x02{|\x07j\x02\x02|\x1C\x03\x02\x02\x02}~\x07n\x02\x02~\x7F\x07q\x02" +
		"\x02\x7F\x80\x07i\x02\x02\x80\x1E\x03\x02\x02\x02\x81\x82\x07n\x02\x02" +
		"\x82\x83\x07p\x02\x02\x83 \x03\x02\x02\x02\x84\x85\x07T\x02\x02\x85\x86" +
		"\x07g\x02\x02\x86\"\x03\x02\x02\x02\x87\x88\x07K\x02\x02\x88\x89\x07o" +
		"\x02\x02\x89$\x03\x02\x02\x02\x8A\x8B\x07^\x02\x02\x8B\x8C\x07q\x02\x02" +
		"\x8C\x8D\x07r\x02\x02\x8D\x8E\x07g\x02\x02\x8E\x8F\x07t\x02\x02\x8F\x90" +
		"\x07c\x02\x02\x90\x91\x07v\x02\x02\x91\x92\x07q\x02\x02\x92\x93\x07t\x02" +
		"\x02\x93\x94\x07p\x02\x02\x94\x95\x07c\x02\x02\x95\x96\x07o\x02\x02\x96" +
		"\x97\x07g\x02\x02\x97\x98\x07}\x02\x02\x98&\x03\x02\x02\x02\x99\x9A\x07" +
		"e\x02\x02\x9A\x9B\x07k\x02\x02\x9B\x9C\x07u\x02\x02\x9C(\x03\x02\x02\x02" +
		"\x9D\x9F\x042;\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0" +
		"\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA6\x03\x02\x02\x02\xA2" +
		"\xA4\x070\x02\x02\xA3\xA5\x042;\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03" +
		"\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA2\x03\x02\x02\x02\xA6\xA7\x03" +
		"\x02\x02\x02\xA7*\x03\x02\x02\x02\xA8\xA9\t\x02\x02\x02\xA9,\x03\x02\x02" +
		"\x02\xAA\xAB\x07-\x02\x02\xAB.\x03\x02\x02\x02\xAC\xAD\x07/\x02\x02\xAD" +
		"0\x03\x02\x02\x02\xAE\xAF\x07^\x02\x02\xAF\xB0\x07e\x02\x02\xB0\xB1\x07" +
		"f\x02\x02\xB1\xB2\x07q\x02\x02\xB2\xB3\x07v\x02\x02\xB32\x03\x02\x02\x02" +
		"\xB4\xB5\x07^\x02\x02\xB5\xB6\x07h\x02\x02\xB6\xB7\x07t\x02\x02\xB7\xB8" +
		"\x07c\x02\x02\xB8\xB9\x07e\x02\x02\xB94\x03\x02\x02\x02\xBA\xBB\x07`\x02" +
		"\x02\xBB6\x03\x02\x02\x02\xBC\xBD\x07^\x02\x02\xBD\xBE\x07u\x02\x02\xBE" +
		"\xBF\x07s\x02\x02\xBF\xC0\x07t\x02\x02\xC0\xC1\x07v\x02\x02\xC18\x03\x02" +
		"\x02\x02\xC2\xCA\x07*\x02\x02\xC3\xC4\x07^\x02\x02\xC4\xC5\x07n\x02\x02" +
		"\xC5\xC6\x07g\x02\x02\xC6\xC7\x07h\x02\x02\xC7\xC8\x07v\x02\x02\xC8\xCA" +
		"\x07*\x02\x02\xC9\xC2\x03\x02\x02\x02\xC9\xC3\x03\x02\x02\x02\xCA:\x03" +
		"\x02\x02\x02\xCB\xD4\x07+\x02\x02\xCC\xCD\x07^\x02\x02\xCD\xCE\x07t\x02" +
		"\x02\xCE\xCF\x07k\x02\x02\xCF\xD0\x07i\x02\x02\xD0\xD1\x07j\x02\x02\xD1" +
		"\xD2\x07v\x02\x02\xD2\xD4\x07+\x02\x02\xD3\xCB\x03\x02\x02\x02\xD3\xCC" +
		"\x03\x02\x02\x02\xD4<\x03\x02\x02\x02\xD5\xD6\x07}\x02\x02\xD6>\x03\x02" +
		"\x02\x02\xD7\xD8\x07\x7F\x02\x02\xD8@\x03\x02\x02\x02\xD9\xDA\x07.\x02" +
		"\x02\xDAB\x03\x02\x02\x02\xDB\xDC\x07=\x02\x02\xDCD\x03\x02\x02\x02\xDD" +
		"\xDE\x07?\x02\x02\xDEF\x03\x02\x02\x02\xDF\xE0\x07B\x02\x02\xE0H\x03\x02" +
		"\x02\x02\xE1\xE3\t\x03\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02" +
		"\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02" +
		"\x02\x02\xE6\xE7\b%\x02\x02\xE7J\x03\x02\x02\x02\xE8\xE9\x07^\x02\x02" +
		"\xE9\xEB\x07\"\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02" +
		"\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
		"\xEE\xEF\b&\x02\x02\xEFL\x03\x02\x02\x02\n\x02\xA0\xA4\xA6\xC9\xD3\xE4" +
		"\xEC\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComplexLexer.__ATN) {
			ComplexLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ComplexLexer._serializedATN));
		}

		return ComplexLexer.__ATN;
	}

}

