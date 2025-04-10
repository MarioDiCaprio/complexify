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
	public static readonly NUMBER = 1;
	public static readonly CHAR = 2;
	public static readonly ESCAPE = 3;
	public static readonly PLUS = 4;
	public static readonly MINUS = 5;
	public static readonly TIMES = 6;
	public static readonly DIVIDE = 7;
	public static readonly FRAC = 8;
	public static readonly POW = 9;
	public static readonly SQRT = 10;
	public static readonly LEFT = 11;
	public static readonly RIGHT = 12;
	public static readonly LEFT_BRACE = 13;
	public static readonly RIGHT_BRACE = 14;
	public static readonly COMA = 15;
	public static readonly SEMICOLON = 16;
	public static readonly EQUALS = 17;
	public static readonly OPERATORNAME = 18;
	public static readonly PLOTTED_FUNC = 19;
	public static readonly I = 20;
	public static readonly E = 21;
	public static readonly PI = 22;
	public static readonly SIN = 23;
	public static readonly COS = 24;
	public static readonly TAN = 25;
	public static readonly COT = 26;
	public static readonly SEC = 27;
	public static readonly CSC = 28;
	public static readonly SINH = 29;
	public static readonly COSH = 30;
	public static readonly TANH = 31;
	public static readonly LOG = 32;
	public static readonly LN = 33;
	public static readonly RE = 34;
	public static readonly IM = 35;
	public static readonly CIS = 36;
	public static readonly WS = 37;
	public static readonly LATEX_WS = 38;
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
		undefined, undefined, undefined, "'\\'", "'+'", "'-'", undefined, "'/'", 
		undefined, "'^'", undefined, undefined, undefined, "'{'", "'}'", "','", 
		"';'", "'='", undefined, "'@'", "'i'", "'e'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'cis'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NUMBER", "CHAR", "ESCAPE", "PLUS", "MINUS", "TIMES", "DIVIDE", 
		"FRAC", "POW", "SQRT", "LEFT", "RIGHT", "LEFT_BRACE", "RIGHT_BRACE", "COMA", 
		"SEMICOLON", "EQUALS", "OPERATORNAME", "PLOTTED_FUNC", "I", "E", "PI", 
		"SIN", "COS", "TAN", "COT", "SEC", "CSC", "SINH", "COSH", "TANH", "LOG", 
		"LN", "RE", "IM", "CIS", "WS", "LATEX_WS",
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
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComplexifyParser.PLUS || _la === ComplexifyParser.MINUS) {
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
				this.state = 44;
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
	public multiplication(): MultiplicationContext {
		let _localctx: MultiplicationContext = new MultiplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ComplexifyParser.RULE_multiplication);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ComplexifyParser.FRAC:
				{
				this.state = 45;
				_localctx._fraction = this.fraction();
				_localctx._fractions.push(_localctx._fraction);
				}
				break;
			case ComplexifyParser.NUMBER:
			case ComplexifyParser.CHAR:
			case ComplexifyParser.SQRT:
			case ComplexifyParser.LEFT:
			case ComplexifyParser.OPERATORNAME:
			case ComplexifyParser.I:
			case ComplexifyParser.E:
			case ComplexifyParser.PI:
			case ComplexifyParser.SIN:
			case ComplexifyParser.COS:
			case ComplexifyParser.TAN:
			case ComplexifyParser.COT:
			case ComplexifyParser.SEC:
			case ComplexifyParser.CSC:
			case ComplexifyParser.SINH:
			case ComplexifyParser.COSH:
			case ComplexifyParser.TANH:
			case ComplexifyParser.LOG:
			case ComplexifyParser.LN:
			case ComplexifyParser.RE:
			case ComplexifyParser.IM:
				{
				this.state = 46;
				_localctx._power = this.power();
				_localctx._powers.push(_localctx._power);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComplexifyParser.TIMES) {
				{
				{
				this.state = 49;
				this.match(ComplexifyParser.TIMES);
				this.state = 52;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ComplexifyParser.FRAC:
					{
					this.state = 50;
					_localctx._fraction = this.fraction();
					_localctx._fractions.push(_localctx._fraction);
					}
					break;
				case ComplexifyParser.NUMBER:
				case ComplexifyParser.CHAR:
				case ComplexifyParser.SQRT:
				case ComplexifyParser.LEFT:
				case ComplexifyParser.OPERATORNAME:
				case ComplexifyParser.I:
				case ComplexifyParser.E:
				case ComplexifyParser.PI:
				case ComplexifyParser.SIN:
				case ComplexifyParser.COS:
				case ComplexifyParser.TAN:
				case ComplexifyParser.COT:
				case ComplexifyParser.SEC:
				case ComplexifyParser.CSC:
				case ComplexifyParser.SINH:
				case ComplexifyParser.COSH:
				case ComplexifyParser.TANH:
				case ComplexifyParser.LOG:
				case ComplexifyParser.LN:
				case ComplexifyParser.RE:
				case ComplexifyParser.IM:
					{
					this.state = 51;
					_localctx._power = this.power();
					_localctx._powers.push(_localctx._power);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 58;
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
			this.state = 59;
			this.match(ComplexifyParser.FRAC);
			this.state = 60;
			this.match(ComplexifyParser.LEFT_BRACE);
			this.state = 61;
			_localctx._numerator = this.addition();
			this.state = 62;
			this.match(ComplexifyParser.RIGHT_BRACE);
			this.state = 63;
			this.match(ComplexifyParser.LEFT_BRACE);
			this.state = 64;
			_localctx._denominator = this.addition();
			this.state = 65;
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
			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ComplexifyParser.NUMBER:
			case ComplexifyParser.CHAR:
			case ComplexifyParser.LEFT:
			case ComplexifyParser.OPERATORNAME:
			case ComplexifyParser.I:
			case ComplexifyParser.E:
			case ComplexifyParser.PI:
			case ComplexifyParser.SIN:
			case ComplexifyParser.COS:
			case ComplexifyParser.TAN:
			case ComplexifyParser.COT:
			case ComplexifyParser.SEC:
			case ComplexifyParser.CSC:
			case ComplexifyParser.SINH:
			case ComplexifyParser.COSH:
			case ComplexifyParser.TANH:
			case ComplexifyParser.LOG:
			case ComplexifyParser.LN:
			case ComplexifyParser.RE:
			case ComplexifyParser.IM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				_localctx._base = this.atom();
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ComplexifyParser.POW) {
					{
					this.state = 68;
					this.match(ComplexifyParser.POW);
					this.state = 74;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ComplexifyParser.NUMBER:
					case ComplexifyParser.CHAR:
					case ComplexifyParser.LEFT:
					case ComplexifyParser.OPERATORNAME:
					case ComplexifyParser.I:
					case ComplexifyParser.E:
					case ComplexifyParser.PI:
					case ComplexifyParser.SIN:
					case ComplexifyParser.COS:
					case ComplexifyParser.TAN:
					case ComplexifyParser.COT:
					case ComplexifyParser.SEC:
					case ComplexifyParser.CSC:
					case ComplexifyParser.SINH:
					case ComplexifyParser.COSH:
					case ComplexifyParser.TANH:
					case ComplexifyParser.LOG:
					case ComplexifyParser.LN:
					case ComplexifyParser.RE:
					case ComplexifyParser.IM:
						{
						this.state = 69;
						_localctx._atomic_exponent = this.atom();
						}
						break;
					case ComplexifyParser.LEFT_BRACE:
						{
						this.state = 70;
						this.match(ComplexifyParser.LEFT_BRACE);
						this.state = 71;
						_localctx._composite_exponent = this.addition();
						this.state = 72;
						this.match(ComplexifyParser.RIGHT_BRACE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				break;
			case ComplexifyParser.SQRT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.match(ComplexifyParser.SQRT);
				this.state = 79;
				this.match(ComplexifyParser.LEFT_BRACE);
				this.state = 80;
				_localctx._sqrt = this.addition();
				this.state = 81;
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
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ComplexifyParser.I:
			case ComplexifyParser.E:
			case ComplexifyParser.PI:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
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
			case ComplexifyParser.SIN:
			case ComplexifyParser.COS:
			case ComplexifyParser.TAN:
			case ComplexifyParser.COT:
			case ComplexifyParser.SEC:
			case ComplexifyParser.CSC:
			case ComplexifyParser.SINH:
			case ComplexifyParser.COSH:
			case ComplexifyParser.TANH:
			case ComplexifyParser.LOG:
			case ComplexifyParser.LN:
			case ComplexifyParser.RE:
			case ComplexifyParser.IM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				_localctx._func_predef = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (ComplexifyParser.SIN - 23)) | (1 << (ComplexifyParser.COS - 23)) | (1 << (ComplexifyParser.TAN - 23)) | (1 << (ComplexifyParser.COT - 23)) | (1 << (ComplexifyParser.SEC - 23)) | (1 << (ComplexifyParser.CSC - 23)) | (1 << (ComplexifyParser.SINH - 23)) | (1 << (ComplexifyParser.COSH - 23)) | (1 << (ComplexifyParser.TANH - 23)) | (1 << (ComplexifyParser.LOG - 23)) | (1 << (ComplexifyParser.LN - 23)) | (1 << (ComplexifyParser.RE - 23)) | (1 << (ComplexifyParser.IM - 23)))) !== 0))) {
					_localctx._func_predef = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 87;
				this.match(ComplexifyParser.LEFT);
				this.state = 88;
				_localctx._func_predef_arg = this.addition();
				this.state = 89;
				this.match(ComplexifyParser.RIGHT);
				}
				break;
			case ComplexifyParser.OPERATORNAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.match(ComplexifyParser.OPERATORNAME);
				this.state = 92;
				this.match(ComplexifyParser.LEFT_BRACE);
				this.state = 93;
				_localctx._func_operatorname = this.match(ComplexifyParser.CIS);
				this.state = 94;
				this.match(ComplexifyParser.RIGHT_BRACE);
				this.state = 95;
				this.match(ComplexifyParser.LEFT);
				this.state = 96;
				_localctx._func_operatorname_arg = this.addition();
				this.state = 97;
				this.match(ComplexifyParser.RIGHT);
				}
				break;
			case ComplexifyParser.NUMBER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 99;
				_localctx._num = this.match(ComplexifyParser.NUMBER);
				}
				break;
			case ComplexifyParser.CHAR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 100;
				_localctx._user_def_symbol = this.match(ComplexifyParser.CHAR);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ComplexifyParser.LEFT) {
					{
					this.state = 101;
					this.match(ComplexifyParser.LEFT);
					this.state = 102;
					_localctx._user_def_symbol_arg = this.addition();
					this.state = 103;
					this.match(ComplexifyParser.RIGHT);
					}
				}

				}
				break;
			case ComplexifyParser.LEFT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 107;
				this.match(ComplexifyParser.LEFT);
				this.state = 108;
				_localctx._parantheses_arg = this.addition();
				this.state = 109;
				this.match(ComplexifyParser.RIGHT);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(t\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x03\x02\x03\x02\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02\x17" +
		"\v\x02\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		" \n\x03\x03\x03\x03\x03\x03\x03\x03\x04\x05\x04&\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04+\n\x04\f\x04\x0E\x04.\v\x04\x03\x05\x03\x05\x05\x052" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x05\x057\n\x05\x07\x059\n\x05\f\x05\x0E" +
		"\x05<\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07M" +
		"\n\x07\x05\x07O\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"V\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bl\n\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\br\n\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x05\x03\x02\x06\x07\x03\x02\x16\x18" +
		"\x03\x02\x19%\x02}\x02\x10\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06" +
		"%\x03\x02\x02\x02\b1\x03\x02\x02\x02\n=\x03\x02\x02\x02\fU\x03\x02\x02" +
		"\x02\x0Eq\x03\x02\x02\x02\x10\x15\x05\x04\x03\x02\x11\x12\x07\x12\x02" +
		"\x02\x12\x14\x05\x04\x03\x02\x13\x11\x03\x02\x02\x02\x14\x17\x03\x02\x02" +
		"\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x03\x03\x02\x02" +
		"\x02\x17\x15\x03\x02\x02\x02\x18\x1A\x07\x15\x02\x02\x19\x18\x03\x02\x02" +
		"\x02\x19\x1A\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1F\x07\x04\x02" +
		"\x02\x1C\x1D\x07\r\x02\x02\x1D\x1E\x07\x04\x02\x02\x1E \x07\x0E\x02\x02" +
		"\x1F\x1C\x03\x02\x02\x02\x1F \x03\x02\x02\x02 !\x03\x02\x02\x02!\"\x07" +
		"\x13\x02\x02\"#\x05\x06\x04\x02#\x05\x03\x02\x02\x02$&\t\x02\x02\x02%" +
		"$\x03\x02\x02\x02%&\x03\x02\x02\x02&\'\x03\x02\x02\x02\',\x05\b\x05\x02" +
		"()\t\x02\x02\x02)+\x05\b\x05\x02*(\x03\x02\x02\x02+.\x03\x02\x02\x02," +
		"*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x07\x03\x02\x02\x02.,\x03\x02\x02" +
		"\x02/2\x05\n\x06\x0202\x05\f\x07\x021/\x03\x02\x02\x0210\x03\x02\x02\x02" +
		"2:\x03\x02\x02\x0236\x07\b\x02\x0247\x05\n\x06\x0257\x05\f\x07\x0264\x03" +
		"\x02\x02\x0265\x03\x02\x02\x0279\x03\x02\x02\x0283\x03\x02\x02\x029<\x03" +
		"\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\t\x03\x02\x02\x02<:" +
		"\x03\x02\x02\x02=>\x07\n\x02\x02>?\x07\x0F\x02\x02?@\x05\x06\x04\x02@" +
		"A\x07\x10\x02\x02AB\x07\x0F\x02\x02BC\x05\x06\x04\x02CD\x07\x10\x02\x02" +
		"D\v\x03\x02\x02\x02EN\x05\x0E\b\x02FL\x07\v\x02\x02GM\x05\x0E\b\x02HI" +
		"\x07\x0F\x02\x02IJ\x05\x06\x04\x02JK\x07\x10\x02\x02KM\x03\x02\x02\x02" +
		"LG\x03\x02\x02\x02LH\x03\x02\x02\x02MO\x03\x02\x02\x02NF\x03\x02\x02\x02" +
		"NO\x03\x02\x02\x02OV\x03\x02\x02\x02PQ\x07\f\x02\x02QR\x07\x0F\x02\x02" +
		"RS\x05\x06\x04\x02ST\x07\x10\x02\x02TV\x03\x02\x02\x02UE\x03\x02\x02\x02" +
		"UP\x03\x02\x02\x02V\r\x03\x02\x02\x02Wr\t\x03\x02\x02XY\t\x04\x02\x02" +
		"YZ\x07\r\x02\x02Z[\x05\x06\x04\x02[\\\x07\x0E\x02\x02\\r\x03\x02\x02\x02" +
		"]^\x07\x14\x02\x02^_\x07\x0F\x02\x02_`\x07&\x02\x02`a\x07\x10\x02\x02" +
		"ab\x07\r\x02\x02bc\x05\x06\x04\x02cd\x07\x0E\x02\x02dr\x03\x02\x02\x02" +
		"er\x07\x03\x02\x02fk\x07\x04\x02\x02gh\x07\r\x02\x02hi\x05\x06\x04\x02" +
		"ij\x07\x0E\x02\x02jl\x03\x02\x02\x02kg\x03\x02\x02\x02kl\x03\x02\x02\x02" +
		"lr\x03\x02\x02\x02mn\x07\r\x02\x02no\x05\x06\x04\x02op\x07\x0E\x02\x02" +
		"pr\x03\x02\x02\x02qW\x03\x02\x02\x02qX\x03\x02\x02\x02q]\x03\x02\x02\x02" +
		"qe\x03\x02\x02\x02qf\x03\x02\x02\x02qm\x03\x02\x02\x02r\x0F\x03\x02\x02" +
		"\x02\x0F\x15\x19\x1F%,16:LNUkq";
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
	public _atomic_exponent!: AtomContext;
	public _composite_exponent!: AdditionContext;
	public _sqrt!: AdditionContext;
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
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
	public OPERATORNAME(): TerminalNode | undefined { return this.tryGetToken(ComplexifyParser.OPERATORNAME, 0); }
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


