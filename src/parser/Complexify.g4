grammar Complexify;


parse:
    // multiple assignments are coma-separated
    assignment (SEMICOLON assignment)*
;


assignment:
    // If this symbol is given, then the function will be plotted!
    isPlot=PLOTTED_FUNC?
    // Assign a character
    c1=CHAR
    // First, assume the assignment is constant (i.e. not a function)
    // If paranthesis are given, then the assignment is actually a function
    // Otherwise, it is indeed a constant
    (LEFT c2=CHAR RIGHT)?
    EQUALS a=addition
;


addition returns [value: string | undefined]:
    sign1=(PLUS|MINUS)? m1=multiplication
    (sign2+=(PLUS|MINUS) m2+=multiplication)+
;


multiplication returns [value: string | undefined]:
    (fractions+=fraction | powers+=power)
    (TIMES (fractions+=fraction | powers+=power))*
;

fraction returns [value: string | undefined]:
    FRAC
    LEFT_BRACE numerator=addition RIGHT_BRACE
    LEFT_BRACE denominator=addition RIGHT_BRACE
;

// power
power returns [value: string | undefined]:
    // power
    base=atom (POW LEFT_BRACE exponent=addition RIGHT_BRACE)?
    |
    // square root
    SQRT LEFT_BRACE sqrt=addition RIGHT_BRACE
;


// a function, variable, number or nested expression
atom returns [value: string | undefined]:
    // predefined constants
    const_predef=(I | E | PI)
    |
    // predefined functions
    ESCAPE func_predef=(SIN | COS | TAN | COT | SEC | CSC | SINH | COSH | TANH | LOG | LN | RE | IM)
    LEFT func_predef_arg=addition RIGHT
    |
    // predefined functions (with \operatorname{...})
    ESCAPE 'operatorname'
    LEFT_BRACE func_operatorname=CIS RIGHT_BRACE
    LEFT func_operatorname_arg=addition RIGHT
    |
    // number
    num=NUMBER
    |
    // user-defined declared function or constant (and, in case of functions, a function argument)
    user_def_symbol=CHAR
    (LEFT user_def_symbol_arg=addition RIGHT)?
    |
    // nested expression, i.e. in parantheses
    LEFT parantheses_arg=addition RIGHT
;


//////////////////////////////////////////////////////////////////////////////////


NUMBER: ('0'..'9')+ ('.' ('0'..'9')?)?;
CHAR: [a-zA-Z];

ESCAPE: '\\';

PLUS:   '+';
MINUS:  '-';
TIMES:  ESCAPE 'cdot';
DIVIDE: '/';
FRAC: ESCAPE 'frac';
POW:  '^';
SQRT: ESCAPE 'sqrt';
LEFT:   '(' | ESCAPE 'left(';
RIGHT:  ')' | ESCAPE 'right)';
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
COMA:   ',';
SEMICOLON: ';';
EQUALS: '=';
OPERATORNAME: ESCAPE 'operatorname';
PLOTTED_FUNC: '@';

// constants
I: 'i';
E: 'e';
PI: ESCAPE 'pi';

// functions
SIN: ESCAPE 'sin';
COS: ESCAPE 'cos';
TAN: ESCAPE 'tan';
COT: ESCAPE 'cot';
SEC: ESCAPE 'sec';
CSC: ESCAPE 'csc';
SINH: ESCAPE 'sinh';
COSH: ESCAPE 'cosh';
TANH: ESCAPE 'tanh';
LOG: ESCAPE 'log';
LN: ESCAPE 'ln';
RE: ESCAPE 'Re';
IM: ESCAPE 'IM';

// functions with operator name
CIS: 'cis';

WS: [ \n\f\r\t]+ -> skip;
LATEX_WS: '\\ '+ -> skip;