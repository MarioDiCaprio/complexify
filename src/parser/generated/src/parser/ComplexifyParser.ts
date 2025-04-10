// Generated from src/parser/Complexify.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ComplexifyListener } from "./ComplexifyListener";
import { ComplexifyVisitor } from "./ComplexifyVisitor";


export class ComplexifyParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly NUMBER = 2;
	public static readonly CHAR = 3;
	public static readonly ESCAPE = 4;
	public static readonly PLUS = 5;
	public static readonly MINUS = 6;
	public static readonly TIMES = 7;
	public static readonly DIVIDE = 8;
	public static readonly FRAC = 9;
	public static readonly POW = 10;
	public static readonly SQRT = 11;
	public static readonly LEFT = 12;
	public static readonly RIGHT = 13;
	public static readonly LEFT_BRACE = 14;
	public static readonly RIGHT_BRACE = 15;
	public static readonly COMA = 16;
	public static readonly SEMICOLON = 17;
	public static readonly EQUALS = 18;
	public static readonly OPERATORNAME = 19;
	public static readonly PLOTTED_FUNC = 20;
	public static readonly I = 21;
	public static readonly E = 22;
	public static readonly PI = 23;
	public static readonly SIN = 24;
	public static readonly COS = 25;
	public static readonly TAN = 26;
	public static readonly COT = 27;
	public static readonly SEC = 28;
	public static readonly CSC = 29;
	public static readonly SINH = 30;
	public static readonly COSH = 31;
	public static readonly TANH = 32;
	public static readonly LOG = 33;
	public static readonly LN = 34;
	public static readonly RE = 35;
	public static readonly IM = 36;
	public static readonly CIS = 37;
	public static readonly WS = 38;
	public static readonly LATEX_WS = 39;
	public static readonly RULE_parse = 0;
	public static readonly RULE_assignment = 1;
	public static readonly RULE_addition = 2;
	public static readonly RULE_multiplication = 3;
	public static readonly RULE_fraction = 4;
	public static readonly RULE_power = 5;
	public static readonly RULE_atom = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "assignment", "addition", "multiplication", "fraction", "power", 
		"atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'operatorname'", undefined, undefined, "'\\'", "'+'", "'-'", 
		undefined, "'/'", undefined, "'^'", undefined, undefined, undefined, "'{'", 
		"'}'", "','", "';'", "'='", undefined, "'@'", "'i'", "'e'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'cis'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "NUMBER", "CHAR", "ESCAPE", "PLUS", "MINUS", "TIMES", 
		"DIVIDE", "FRAC", "POW", "SQRT", "LEFT", "RIGHT", "LEFT_BRACE", "RIGHT_BRACE", 
		"COMA", "SEMICOLON", "EQUALS", "OPERATORNAME", "PLOTTED_FUNC", "I", "E", 
		"PI", "SIN", "COS", "TAN", "COT", "SEC", "CSC", "SINH", "COSH", "TANH", 
		"LOG", "LN", "RE", "IM", "CIS", "WS", "LATEX_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ComplexifyParser._LITERAL_NAMES, ComplexifyParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ComplexifyParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Complexify.g4"; }

	// @Override
	public get ruleNames(): string[] { return ComplexifyParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ComplexifyParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ComplexifyParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ComplexifyParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.assignment();
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComplexifyParser.SEMICOLON) {
				{
				{
				this.state = 15;
				this.match(ComplexifyParser.SEMICOLON);
				this.state = 16;
				this.assignment();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ComplexifyParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ComplexifyParser.PLOTTED_FUNC) {
				{
				this.state = 22;
				_localctx._isPlot = this.match(ComplexifyParser.PLOTTED_FUNC);
				}
			}

			this.state = 25;
			_localctx._c1 = this.match(ComplexifyParser.CHAR);
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ComplexifyParser.LEFT) {
				{
				this.state = 26;
				this.match(ComplexifyParser.LEFT);
				this.state = 27;
				_localctx._c2 = this.match(ComplexifyParser.CHAR);
				this.state = 28;
				this.match(ComplexifyParser.RIGHT);
				}
			}

			this.state = 31;
			this.match(ComplexifyParser.EQUALS);
			this.state = 32;
			_localctx._a = this.addition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addition(): AdditionContext {
		let _localctx: AdditionContext = new AdditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ComplexifyParser.RULE_addition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ComplexifyParser.PLUS || _la === ComplexifyParser.MINUS) {
				{
				this.state = 34;
				_localctx._sign1 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ComplexifyParser.PLUS || _la === ComplexifyParser.MINUS)) {
					_localctx._sign1 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 37;
			_localctx._m1 = this.multiplication();
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 38;
				_localctx.__tset85 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ComplexifyParser.PLUS || _la === ComplexifyParser.MINUS)) {
					_localctx.__tset85 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				_localctx._sign2.push(_localctx.__tset85);
				this.state = 39;
				_localctx._multiplication = this.multiplication();
				_localctx._m2.push(_localctx._multiplication);
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ComplexifyParser.PLUS || _la === ComplexifyParser.MINUS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplication(): MultiplicationContext {
		let _localctx: MultiplicationContext = new MultiplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ComplexifyParser.RULE_multiplication);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ComplexifyParser.FRAC:
				{
				this.state = 44;
				_localctx._fraction = this.fraction();
				_localctx._fractions.push(_localctx._fraction);
				}
				break;
			case ComplexifyParser.NUMBER:
			case ComplexifyParser.CHAR:
			case ComplexifyParser.ESCAPE:
			case ComplexifyParser.SQRT:
			case ComplexifyParser.LEFT:
			case ComplexifyParser.I:
			case ComplexifyParser.E:
			case ComplexifyParser.PI:
				{
				this.state = 45;
				_localctx._power = this.power();
				_localctx._powers.push(_localctx._power);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComplexifyParser.TIMES) {
				{
				{
				this.state = 48;
				this.match(ComplexifyParser.TIMES);
				this.state = 51;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ComplexifyParser.FRAC:
					{
					this.state = 49;
					_localctx._fraction = this.fraction();
					_localctx._fractions.push(_localctx._fraction);
					}
					break;
				case ComplexifyParser.NUMBER:
				case ComplexifyParser.CHAR:
				case ComplexifyParser.ESCAPE:
				case ComplexifyParser.SQRT:
				case ComplexifyParser.LEFT:
				case ComplexifyParser.I:
				case ComplexifyParser.E:
				case ComplexifyParser.PI:
					{
					this.state = 50;
					_localctx._power = this.power();
					_localctx._powers.push(_localctx._power);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fraction(): FractionContext {
		let _localctx: FractionContext = new FractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ComplexifyParser.RULE_fraction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(ComplexifyParser.FRAC);
			this.state = 59;
			this.match(ComplexifyParser.LEFT_BRACE);
			this.state = 60;
			_localctx._numerator = this.addition();
			this.state = 61;
			this.match(ComplexifyParser.RIGHT_BRACE);
			this.state = 62;
			this.match(ComplexifyParser.LEFT_BRACE);
			this.state = 63;
			_localctx._denominator = this.addition();
			this.state = 64;
			this.match(ComplexifyParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public power(): PowerContext {
		let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ComplexifyParser.RULE_power);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ComplexifyParser.NUMBER:
			case ComplexifyParser.CHAR:
			case ComplexifyParser.ESCAPE:
			case ComplexifyParser.LEFT:
			case ComplexifyParser.I:
			case ComplexifyParser.E:
			case ComplexifyParser.PI:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 66;
				_localctx._base = this.atom();
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ComplexifyParser.POW) {
					{
					this.state = 67;
					this.match(ComplexifyParser.POW);
					this.state = 68;
					this.match(ComplexifyParser.LEFT_BRACE);
					this.state = 69;
					_localctx._exponent = this.addition();
					this.state = 70;
					this.match(ComplexifyParser.RIGHT_BRACE);
					}
				}

				}
				break;
			case ComplexifyParser.SQRT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.match(ComplexifyParser.SQRT);
				this.state = 75;
				this.match(ComplexifyParser.LEFT_BRACE);
				this.state = 76;
				_localctx._sqrt = this.addition();
				this.state = 77;
				this.match(ComplexifyParser.RIGHT_BRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ComplexifyParser.RULE_atom);
		let _la: number;
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				_localctx._const_predef = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ComplexifyParser.I) | (1 << ComplexifyParser.E) | (1 << ComplexifyParser.PI))) !== 0))) {
					_localctx._const_predef = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.match(ComplexifyParser.ESCAPE);
				this.state = 83;
				_localctx._func_predef = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (ComplexifyParser.SIN - 24)) | (1 << (ComplexifyParser.COS - 24)) | (1 << (ComplexifyParser.TAN - 24)) | (1 << (ComplexifyParser.COT - 24)) | (1 << (ComplexifyParser.SEC - 24)) | (1 << (ComplexifyParser.CSC - 24)) | (1 << (ComplexifyParser.SINH - 24)) | (1 << (ComplexifyParser.COSH - 24)) | (1 << (ComplexifyParser.TANH - 24)) | (1 << (ComplexifyParser.LOG - 24)) | (1 << (ComplexifyParser.LN - 24)) | (1 << (ComplexifyParser.RE - 24)) | (1 << (ComplexifyParser.IM - 24)))) !== 0))) {
					_localctx._func_predef = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 84;
				this.match(ComplexifyParser.LEFT);
				this.state = 85;
				_localctx._func_predef_arg = this.addition();
				this.state = 86;
				this.match(ComplexifyParser.RIGHT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 88;
				this.match(ComplexifyParser.ESCAPE);
				this.state = 89;
				this.match(ComplexifyParser.T__0);
				this.state = 90;
				this.match(ComplexifyParser.LEFT_BRACE);
				this.state = 91;
				_localctx._func_operatorname = this.match(ComplexifyParser.CIS);
				this.state = 92;
				this.match(ComplexifyParser.RIGHT_BRACE);
				this.state = 93;
				this.match(ComplexifyParser.LEFT);
				this.state = 94;
				_localctx._func_operatorname_arg = this.addition();
				this.state = 95;
				this.match(ComplexifyParser.RIGHT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 97;
				_localctx._num = this.match(ComplexifyParser.NUMBER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 98;
				_localctx._user_def_symbol = this.match(ComplexifyParser.CHAR);
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ComplexifyParser.LEFT) {
					{
					this.state = 99;
					this.match(ComplexifyParser.LEFT);
					this.state = 100;
					_localctx._user_def_symbol_arg = this.addition();
					this.state = 101;
					this.match(ComplexifyParser.RIGHT);
					}
				}

				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 105;
				this.match(ComplexifyParser.LEFT);
				this.state = 106;
				_localctx._parantheses_arg = this.addition();
				this.state = 107;
				this.match(ComplexifyParser.RIGHT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)r\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x03\x02\x03\x02\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02\x17" +
		"\v\x02\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		" \n\x03\x03\x03\x03\x03\x03\x03\x03\x04\x05\x04&\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x06\x04+\n\x04\r\x04\x0E\x04,\x03\x05\x03\x05\x05\x051\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x056\n\x05\x07\x058\n\x05\f\x05\x0E\x05;" +
		"\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07K\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07R\n\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bj\n\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\bp\n\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x02\x05\x03\x02\x07\b\x03\x02\x17\x19\x03\x02\x1A&\x02" +
		"z\x02\x10\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06%\x03\x02\x02\x02" +
		"\b0\x03\x02\x02\x02\n<\x03\x02\x02\x02\fQ\x03\x02\x02\x02\x0Eo\x03\x02" +
		"\x02\x02\x10\x15\x05\x04\x03\x02\x11\x12\x07\x13\x02\x02\x12\x14\x05\x04" +
		"\x03\x02\x13\x11\x03\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02" +
		"\x02\x02\x15\x16\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02\x17\x15\x03\x02" +
		"\x02\x02\x18\x1A\x07\x16\x02\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02" +
		"\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1F\x07\x05\x02\x02\x1C\x1D\x07\x0E" +
		"\x02\x02\x1D\x1E\x07\x05\x02\x02\x1E \x07\x0F\x02\x02\x1F\x1C\x03\x02" +
		"\x02\x02\x1F \x03\x02\x02\x02 !\x03\x02\x02\x02!\"\x07\x14\x02\x02\"#" +
		"\x05\x06\x04\x02#\x05\x03\x02\x02\x02$&\t\x02\x02\x02%$\x03\x02\x02\x02" +
		"%&\x03\x02\x02\x02&\'\x03\x02\x02\x02\'*\x05\b\x05\x02()\t\x02\x02\x02" +
		")+\x05\b\x05\x02*(\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02" +
		",-\x03\x02\x02\x02-\x07\x03\x02\x02\x02.1\x05\n\x06\x02/1\x05\f\x07\x02" +
		"0.\x03\x02\x02\x020/\x03\x02\x02\x0219\x03\x02\x02\x0225\x07\t\x02\x02" +
		"36\x05\n\x06\x0246\x05\f\x07\x0253\x03\x02\x02\x0254\x03\x02\x02\x026" +
		"8\x03\x02\x02\x0272\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x02" +
		"9:\x03\x02\x02\x02:\t\x03\x02\x02\x02;9\x03\x02\x02\x02<=\x07\v\x02\x02" +
		"=>\x07\x10\x02\x02>?\x05\x06\x04\x02?@\x07\x11\x02\x02@A\x07\x10\x02\x02" +
		"AB\x05\x06\x04\x02BC\x07\x11\x02\x02C\v\x03\x02\x02\x02DJ\x05\x0E\b\x02" +
		"EF\x07\f\x02\x02FG\x07\x10\x02\x02GH\x05\x06\x04\x02HI\x07\x11\x02\x02" +
		"IK\x03\x02\x02\x02JE\x03\x02\x02\x02JK\x03\x02\x02\x02KR\x03\x02\x02\x02" +
		"LM\x07\r\x02\x02MN\x07\x10\x02\x02NO\x05\x06\x04\x02OP\x07\x11\x02\x02" +
		"PR\x03\x02\x02\x02QD\x03\x02\x02\x02QL\x03\x02\x02\x02R\r\x03\x02\x02" +
		"\x02Sp\t\x03\x02\x02TU\x07\x06\x02\x02UV\t\x04\x02\x02VW\x07\x0E\x02\x02" +
		"WX\x05\x06\x04\x02XY\x07\x0F\x02\x02Yp\x03\x02\x02\x02Z[\x07\x06\x02\x02" +
		"[\\\x07\x03\x02\x02\\]\x07\x10\x02\x02]^\x07\'\x02\x02^_\x07\x11\x02\x02" +
		"_`\x07\x0E\x02\x02`a\x05\x06\x04\x02ab\x07\x0F\x02\x02bp\x03\x02\x02\x02" +
		"cp\x07\x04\x02\x02di\x07\x05\x02\x02ef\x07\x0E\x02\x02fg\x05\x06\x04\x02" +
		"gh\x07\x0F\x02\x02hj\x03\x02\x02\x02ie\x03\x02\x02\x02ij\x03\x02\x02\x02" +
		"jp\x03\x02\x02\x02kl\x07\x0E\x02\x02lm\x05\x06\x04\x02mn\x07\x0F\x02\x02" +
		"np\x03\x02\x02\x02oS\x03\x02\x02\x02oT\x03\x02\x02\x02oZ\x03\x02\x02\x02" +
		"oc\x03\x02\x02\x02od\x03\x02\x02\x02ok\x03\x02\x02\x02p\x0F\x03\x02\x02" +
		"\x02\x0E\x15\x19\x1F%,059JQio";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComplexifyParser.__ATN) {
			ComplexifyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ComplexifyParser._serializedATN));
		}

		return ComplexifyParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexifyParser.SEMICOLON);
		} else {
			return this.getToken(ComplexifyParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexifyParser.RULE_parse; }
	// @Override
	public enterRule(listener: ComplexifyListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexifyListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexifyVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public _isPlot!: Token;
	public _c1!: Token;
	public _c2!: Token;
	public _a!: AdditionContext;
	public EQUALS(): TerminalNode { return this.getToken(ComplexifyParser.EQUALS, 0); }
	public CHAR(): TerminalNode[];
	public CHAR(i: number): TerminalNode;
	public CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexifyParser.CHAR);
		} else {
			return this.getToken(ComplexifyParser.CHAR, i);
		}
	}
	public addition(): AdditionContext {
		return this.getRuleContext(0, AdditionContext);
	}
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.RIGHT, 0); }
	public PLOTTED_FUNC(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.PLOTTED_FUNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexifyParser.RULE_assignment; }
	// @Override
	public enterRule(listener: ComplexifyListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexifyListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexifyVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionContext extends ParserRuleContext {
	public value: string | undefined;
	public _sign1!: Token;
	public _m1!: MultiplicationContext;
	public _PLUS!: Token;
	public _sign2: Token[] = [];
	public _MINUS!: Token;
	public __tset85!: Token;
	public _multiplication!: MultiplicationContext;
	public _m2: MultiplicationContext[] = [];
	public multiplication(): MultiplicationContext[];
	public multiplication(i: number): MultiplicationContext;
	public multiplication(i?: number): MultiplicationContext | MultiplicationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicationContext);
		} else {
			return this.getRuleContext(i, MultiplicationContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexifyParser.PLUS);
		} else {
			return this.getToken(ComplexifyParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexifyParser.MINUS);
		} else {
			return this.getToken(ComplexifyParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexifyParser.RULE_addition; }
	// @Override
	public enterRule(listener: ComplexifyListener): void {
		if (listener.enterAddition) {
			listener.enterAddition(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexifyListener): void {
		if (listener.exitAddition) {
			listener.exitAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexifyVisitor<Result>): Result {
		if (visitor.visitAddition) {
			return visitor.visitAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicationContext extends ParserRuleContext {
	public value: string | undefined;
	public _fraction!: FractionContext;
	public _fractions: FractionContext[] = [];
	public _power!: PowerContext;
	public _powers: PowerContext[] = [];
	public fraction(): FractionContext[];
	public fraction(i: number): FractionContext;
	public fraction(i?: number): FractionContext | FractionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FractionContext);
		} else {
			return this.getRuleContext(i, FractionContext);
		}
	}
	public power(): PowerContext[];
	public power(i: number): PowerContext;
	public power(i?: number): PowerContext | PowerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PowerContext);
		} else {
			return this.getRuleContext(i, PowerContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexifyParser.TIMES);
		} else {
			return this.getToken(ComplexifyParser.TIMES, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexifyParser.RULE_multiplication; }
	// @Override
	public enterRule(listener: ComplexifyListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexifyListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexifyVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FractionContext extends ParserRuleContext {
	public value: string | undefined;
	public _numerator!: AdditionContext;
	public _denominator!: AdditionContext;
	public FRAC(): TerminalNode { return this.getToken(ComplexifyParser.FRAC, 0); }
	public LEFT_BRACE(): TerminalNode[];
	public LEFT_BRACE(i: number): TerminalNode;
	public LEFT_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexifyParser.LEFT_BRACE);
		} else {
			return this.getToken(ComplexifyParser.LEFT_BRACE, i);
		}
	}
	public RIGHT_BRACE(): TerminalNode[];
	public RIGHT_BRACE(i: number): TerminalNode;
	public RIGHT_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ComplexifyParser.RIGHT_BRACE);
		} else {
			return this.getToken(ComplexifyParser.RIGHT_BRACE, i);
		}
	}
	public addition(): AdditionContext[];
	public addition(i: number): AdditionContext;
	public addition(i?: number): AdditionContext | AdditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionContext);
		} else {
			return this.getRuleContext(i, AdditionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexifyParser.RULE_fraction; }
	// @Override
	public enterRule(listener: ComplexifyListener): void {
		if (listener.enterFraction) {
			listener.enterFraction(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexifyListener): void {
		if (listener.exitFraction) {
			listener.exitFraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexifyVisitor<Result>): Result {
		if (visitor.visitFraction) {
			return visitor.visitFraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowerContext extends ParserRuleContext {
	public value: string | undefined;
	public _base!: AtomContext;
	public _exponent!: AdditionContext;
	public _sqrt!: AdditionContext;
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public POW(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.POW, 0); }
	public LEFT_BRACE(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.RIGHT_BRACE, 0); }
	public addition(): AdditionContext | undefined {
		return this.tryGetRuleContext(0, AdditionContext);
	}
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.SQRT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexifyParser.RULE_power; }
	// @Override
	public enterRule(listener: ComplexifyListener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexifyListener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexifyVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public value: string | undefined;
	public _const_predef!: Token;
	public _func_predef!: Token;
	public _func_predef_arg!: AdditionContext;
	public _func_operatorname!: Token;
	public _func_operatorname_arg!: AdditionContext;
	public _num!: Token;
	public _user_def_symbol!: Token;
	public _user_def_symbol_arg!: AdditionContext;
	public _parantheses_arg!: AdditionContext;
	public I(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.I, 0); }
	public E(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.E, 0); }
	public PI(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.PI, 0); }
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.ESCAPE, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.RIGHT, 0); }
	public addition(): AdditionContext | undefined {
		return this.tryGetRuleContext(0, AdditionContext);
	}
	public SIN(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.SIN, 0); }
	public COS(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.COS, 0); }
	public TAN(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.TAN, 0); }
	public COT(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.COT, 0); }
	public SEC(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.SEC, 0); }
	public CSC(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.CSC, 0); }
	public SINH(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.SINH, 0); }
	public COSH(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.COSH, 0); }
	public TANH(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.TANH, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.LOG, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.LN, 0); }
	public RE(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.RE, 0); }
	public IM(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.IM, 0); }
	public LEFT_BRACE(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.RIGHT_BRACE, 0); }
	public CIS(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.CIS, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.NUMBER, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComplexifyParser.RULE_atom; }
	// @Override
	public enterRule(listener: ComplexifyListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ComplexifyListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComplexifyVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


