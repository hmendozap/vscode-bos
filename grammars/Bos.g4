/*
* Copyright (C) 2019, Hector Mendoza <mendoza@progress-psd.com>
* All rights reserved.
*
* This software may be modified and distributed under the terms
* of the MIT license. See the LICENSE file for details.
*/

/*
* BOS 1.0 Grammar for ANTLR4
*
* This is a BOS 1.0 grammar
*
* The grammar is derived from the Visual Basic 6.0 ANTLR Grammar & language
* reference http://msdn.microsoft.com/en-us/library/aa338033%28v=vs.60%29.aspx
*/

grammar Bos;


// module ----------------------------------

// entry point
startRule
   : module EOF
   ;

// Update module imports location
module
   : WS? NEWLINE* (moduleVersion)? (moduleHeader NEWLINE +)? NEWLINE* moduleImports? NEWLINE* moduleConfig? NEWLINE* moduleBody? NEWLINE* WS?
   ;

moduleImports
   : (importStmt NEWLINE+) +
   ;

moduleHeader
   : VERSION WS DOUBLELITERAL (WS CLASS)?
   ;

// TODO: change this to parse the version number if its false and 0
// TODO: create a rule for string literal to handle the version
moduleVersion
   : MACRO_VERSION WS+ STRINGLITERAL WS+ FALSE WS INTEGERLITERAL WS? NEWLINE+  BYTE_ORDER_MARK
   ;

moduleConfig
   : BEGIN NEWLINE + moduleConfigElement + END NEWLINE +
   ;

moduleConfigElement
   : ambiguousIdentifier WS? EQ WS? literal NEWLINE
   ;

moduleBody
   : moduleBodyElement (NEWLINE + moduleBodyElement)*
   ;

moduleBodyElement
   : classStmt
   | moduleBlock
   | enumerationStmt
   | eventStmt
   | functionStmt
   | propertyGetStmt
   | propertySetStmt
   | propertyLetStmt
   | subStmt
   | typeStmt
   ;

// class statements ---------------------------------
classBody
   : classBodyElement (NEWLINE + classBodyElement)*
   ;


classBodyElement
   : block
   | enumerationStmt
   | eventStmt
   | functionStmt
   | propertyGetStmt
   | propertySetStmt
   | subStmt
   ;

// block ----------------------------------

moduleBlock
   : block
   ;

importStmt
   : IMPORT WS type
   ;

block
   : blockStmt (NEWLINE + WS? blockStmt)*
   ;

blockStmt
   : constStmt
   | dateStmt
   | doLoopStmt
   | endStmt
   | exitStmt
   | forEachStmt
   | forNextStmt
   | getStmt
   | ifThenElseStmt
   | letStmt
   | loadStmt
   | lockStmt
   | nameStmt
   | returnStmt
   | selectCaseStmt
   | setStmt
   | timeStmt
   | unloadStmt
   | variableStmt
   | withStmt
   | implicitCallStmt_InStmt
   ;

// statements ----------------------------------

classStmt
   : (visibility WS)? CLASS WS (classBaseStmt NEWLINE +) (classBody NEWLINE+)? END_CLASS
   ;

classBaseStmt
   : WS? ambiguousIdentifier WS (extendsStmt | implementsStmt) 
   ;

constStmt
   : (publicPrivateGlobalVisibility WS)? CONST WS constSubStmt (WS? COMMA WS? constSubStmt)*
   ;

constSubStmt
   : ambiguousIdentifier typeHint? (WS asTypeClause)? WS? EQ WS? valueStmt
   ;

dateStmt
   : DATE WS? EQ WS? valueStmt
   ;

// TODO: Add Do While (without the loop)
doLoopStmt
   : DO NEWLINE + (block NEWLINE +)? LOOP
   | DO WS (WHILE | UNTIL) WS valueStmt NEWLINE + (block NEWLINE +)? LOOP
   | DO NEWLINE + (block NEWLINE +) LOOP WS (WHILE | UNTIL) WS valueStmt
   ;

endStmt
   : END
   ;

enumerationStmt
   : (publicPrivateVisibility WS)? ENUM WS ambiguousIdentifier NEWLINE + (enumerationStmt_Constant)* END_ENUM
   ;

enumerationStmt_Constant
   : ambiguousIdentifier (WS? EQ WS? valueStmt)? NEWLINE +
   ;

eventStmt
   : (visibility WS)? EVENT WS ambiguousIdentifier WS? argList
   ;

extendsStmt
   : EXTENDS WS complexType
   ;

exitStmt
   : EXIT_DO
   | EXIT_FOR
   | EXIT_FUNCTION
   | EXIT_PROPERTY
   | EXIT_SUB
   ;

forEachStmt
   : FOREACH WS ambiguousIdentifier WS IN WS valueStmt NEWLINE+ (block NEWLINE+)? NEXT
   ;

// forEachStmt
//    : FOR EACH WS ambiguousIdentifier typeHint? WS IN WS valueStmt NEWLINE + (block NEWLINE +)? NEXT (WS ambiguousIdentifier)?
//    ;

forNextStmt
   : FOR WS iCS_S_VariableOrProcedureCall typeHint? (WS asTypeClause)? WS? EQ WS? valueStmt WS TO WS valueStmt (WS STEP WS valueStmt)? NEWLINE + (block NEWLINE +)? NEXT (WS ambiguousIdentifier typeHint?)?
   ;

functionStmt
   : (visibility WS)? (STATIC WS)? FUNCTION WS ambiguousIdentifier (WS? argList)? (WS asTypeClause)? NEWLINE + (block NEWLINE +)? END_FUNCTION
   ;

getStmt
   : GET WS valueStmt WS? COMMA WS? valueStmt? WS? COMMA WS? valueStmt
   ;

ifThenElseStmt
   : IF WS ifConditionStmt WS THEN WS blockStmt (WS ELSE WS blockStmt)? # inlineIfThenElse
   | ifBlockStmt ifElseIfBlockStmt* ifElseBlockStmt? END_IF # blockIfThenElse
   ;

ifBlockStmt
   : IF WS ifConditionStmt WS THEN NEWLINE + (block NEWLINE +)?
   ;

ifConditionStmt
   : valueStmt
   ;

ifElseIfBlockStmt
   : ELSEIF WS ifConditionStmt WS THEN NEWLINE + (block NEWLINE +)?
   ;

ifElseBlockStmt
   : ELSE NEWLINE + (block NEWLINE +)?
   ;

implementsStmt
   : IMPLEMENTS WS complexType
   ;

letStmt
   : implicitCallStmt_InStmt WS? (EQ | PLUS_EQ | MINUS_EQ) WS? valueStmt
   ;

loadStmt
   : LOAD WS valueStmt
   ;

lockStmt
   : LOCK WS valueStmt (WS? COMMA WS? valueStmt (WS TO WS valueStmt)?)?
   ;

nameStmt
   : NAME WS valueStmt WS AS WS valueStmt
   ;

// TODO: Change this stmt
propertyGetStmt
   : (visibility WS)? (STATIC WS)? PROPERTY_GET WS ambiguousIdentifier typeHint? (WS? argList)? (WS asTypeClause)? NEWLINE + (block NEWLINE +)? END_PROPERTY
   ;

propertySetStmt
   : (visibility WS)? (STATIC WS)? PROPERTY_SET WS ambiguousIdentifier (WS? argList)? NEWLINE + (block NEWLINE +)? END_PROPERTY
   ;

propertyLetStmt
   : (visibility WS)? (STATIC WS)? PROPERTY_LET WS ambiguousIdentifier (WS? argList)? NEWLINE + (block NEWLINE +)? END_PROPERTY
   ;

returnStmt
   : RETURN (WS valueStmt)?
   ;

selectCaseStmt
   : SELECT WS CASE WS valueStmt NEWLINE + sC_Case* WS? END_SELECT
   ;

sC_Case
   : CASE WS sC_Cond WS? (COLON? NEWLINE* | NEWLINE +) (block NEWLINE +)?
   ;

// ELSE first, so that it is not interpreted as a variable call
sC_Cond
   : ELSE # caseCondElse
   | sC_CondExpr (WS? COMMA WS? sC_CondExpr)* #caseCondExpr
   ;

sC_CondExpr
   : IS WS? comparisonOperator WS? valueStmt # caseCondExprIs
   | valueStmt # caseCondExprValue
   | valueStmt WS TO WS valueStmt # caseCondExprTo
   ;

setStmt
   : SET WS implicitCallStmt_InStmt WS? EQ WS? valueStmt
   ;

subStmt
   : (visibility WS)? (STATIC WS)? SUB WS ambiguousIdentifier (WS? argList)? NEWLINE + (block NEWLINE +)? END_SUB
   ;

timeStmt
   : TIME WS? EQ WS? valueStmt
   ;

typeStmt
   : (visibility WS)? TYPE WS ambiguousIdentifier NEWLINE + (typeStmt_Element)* END_TYPE
   ;

typeStmt_Element
   : ambiguousIdentifier (WS? LPAREN (WS? subscripts)? WS? RPAREN)? (WS asTypeClause)? NEWLINE +
   ;

typeOfStmt
   : TYPEOF WS valueStmt (WS IS WS type)?
   ;

unloadStmt
   : UNLOAD WS valueStmt
   ;


// operator precedence is represented by rule order
valueStmt
   : literal                                                         # vsLiteral
   | implicitCallStmt_InStmt                                         # vsICS
   | LPAREN WS? valueStmt (WS? COMMA WS? valueStmt)* WS? RPAREN      # vsStruct
   | NEW WS valueStmt                                                # vsNew
   | typeOfStmt                                                      # vsTypeOf
   // | ADDRESSOF WS valueStmt                                          # vsAddressOf
   | implicitCallStmt_InStmt WS? ASSIGN WS? valueStmt                # vsAssign
   | valueStmt WS? POW WS? valueStmt                                 # vsPow
   | MINUS WS? valueStmt                                             # vsNegation
   | PLUS WS? valueStmt                                              # vsPlus
   | valueStmt WS? DIV WS? valueStmt                                 # vsDiv
   | valueStmt WS? MULT WS? valueStmt                                # vsMult
   | valueStmt WS? MOD WS? valueStmt                                 # vsMod
   | valueStmt WS? PLUS WS? valueStmt                                # vsAdd
   | valueStmt WS? MINUS WS? valueStmt                               # vsMinus
   | valueStmt WS? AMPERSAND WS? valueStmt                             # vsAmp
   | valueStmt WS? EQ WS? valueStmt                                  # vsEq
   | valueStmt WS? NEQ WS? valueStmt                                 # vsNeq
   | valueStmt WS? LT WS? valueStmt                                  # vsLt
   | valueStmt WS? GT WS? valueStmt                                  # vsGt
   | valueStmt WS? LEQ WS? valueStmt                                 # vsLeq
   | valueStmt WS? GEQ WS? valueStmt                                 # vsGeq
   | valueStmt WS LIKE WS valueStmt                                  # vsLike
   | valueStmt WS IS WS valueStmt                                    # vsIs
   | NOT (WS valueStmt | LPAREN WS? valueStmt WS? RPAREN)            # vsNot
   | valueStmt WS? AND WS? valueStmt                                 # vsAnd
   | valueStmt WS? OR WS? valueStmt                                  # vsOr
   | valueStmt WS? XOR WS? valueStmt                                 # vsXor
   | valueStmt WS? EQV WS? valueStmt                                 # vsEqv
   ;

variableStmt
   : (DIM | STATIC | visibility) WS variableListStmt
   ;

variableListStmt
   : variableSubStmt (WS? COMMA WS? variableSubStmt)*
   ;

variableSubStmt
   : ambiguousIdentifier typeHint? (WS? LPAREN WS? (subscripts WS?)? RPAREN WS?)? (WS asTypeClause)? (WS? EQ WS? valueStmt)?
   ;

withStmt
   : WITH WS (NEW WS)? implicitCallStmt_InStmt NEWLINE + (block NEWLINE +)? END_WITH
   ;

// complex call statements ----------------------------------

// Explicits call are not used in Bos

implicitCallStmt_InBlock
   : iCS_B_MemberProcedureCall
   | iCS_B_ProcedureCall
   ;

// parantheses are forbidden in case of args
// variables cannot be called in blocks
// certainIdentifier instead of ambiguousIdentifier for preventing ambiguity with statement keywords
iCS_B_ProcedureCall
   : certainIdentifier (WS argsCall)?
   ;

iCS_B_MemberProcedureCall
   // : implicitCallStmt_InStmt? DOT ambiguousIdentifier typeHint? (WS argsCall)?
   : implicitCallStmt_InStmt? DOT ambiguousIdentifier typeHint? (WS argsCall)? (WS? LPAREN subscripts RPAREN)*
   ;

// iCS_S_MembersCall first, so that member calls are not resolved as separate iCS_S_VariableOrProcedureCalls
implicitCallStmt_InStmt
   : iCS_S_MembersCall
   | iCS_S_VariableOrProcedureCall
   | iCS_S_ProcedureOrArrayCall
   | iCS_S_DictionaryCall
   ;

iCS_S_VariableOrProcedureCall
   : ambiguousIdentifier typeHint? dictionaryCallStmt?
   ;

iCS_S_ProcedureCall
   : (ambiguousIdentifier | baseType | iCS_S_NestedProcedureCall) WS? (LPAREN WS? (argsCall WS?)? RPAREN)+
   ;

iCS_S_ArrayCall
   : ambiguousIdentifier WS? L_SQUARE_BRACKET WS? valueStmt WS? R_SQUARE_BRACKET
   ;

iCS_S_ProcedureOrArrayCall
   : iCS_S_ProcedureCall
   | iCS_S_ArrayCall
   ;
   // |
   // : (ambiguousIdentifier | baseType | iCS_S_NestedProcedureCall) typeHint? WS? (LPAREN WS? (argsCall WS?)? RPAREN)+ dictionaryCallStmt?
   // ;

iCS_S_NestedProcedureCall
    : ambiguousIdentifier typeHint? WS? LPAREN WS? (argsCall WS?)? RPAREN
    ;


iCS_S_MembersCall
   : (iCS_S_VariableOrProcedureCall | iCS_S_ProcedureOrArrayCall)? iCS_S_MemberCall + dictionaryCallStmt?
   ;

iCS_S_MemberCall
   : WS? DOT (iCS_S_VariableOrProcedureCall | iCS_S_ProcedureOrArrayCall)
   ;

iCS_S_DictionaryCall
   : dictionaryCallStmt
   ;

// atomic call statements ----------------------------------

argsCall
   : (argCall? WS? (COMMA | SEMICOLON) WS?)* argCall (WS? (COMMA | SEMICOLON) WS? argCall?)*
   ;

//TODO: Clean the (WS)?
argCall
   : WS? valueStmt
   ;

dictionaryCallStmt
   : EXCLAMATIONMARK ambiguousIdentifier typeHint?
   ;

// atomic rules for statements
argList
   : LPAREN (WS? arg (WS? COMMA WS? arg)*)? WS? RPAREN
   ;

//TODO: Clean the (WS)?
arg
   : (OPTIONAL WS)? (WS)? ambiguousIdentifier typeHint? (WS? LPAREN WS? RPAREN)? (WS asTypeClause)? (WS? argDefaultValue)?
   ;

argDefaultValue
   : EQ WS? valueStmt
   ;

subscripts
   : subscript (WS? COMMA WS? subscript)*
   ;

subscript
   : (valueStmt WS TO WS)? valueStmt
   ;

// atomic rules ----------------------------------

ambiguousIdentifier
   : (IDENTIFIER | ambiguousKeyword) +
   | L_SQUARE_BRACKET (IDENTIFIER | ambiguousKeyword) + R_SQUARE_BRACKET
   ;

// field length is not used in BOS
asTypeClause
   : AS WS (NEW WS)? type
   ;

baseType
   : BOOLEAN
   | BYTE
   | COLLECTION
   | DATE
   | DOUBLE
   | INTEGER
   | LONG
   | OBJECT
   | SINGLE
   | STRING
   ;

certainIdentifier
   : IDENTIFIER (ambiguousKeyword | IDENTIFIER)*
   | ambiguousKeyword (ambiguousKeyword | IDENTIFIER) +
   ;

comparisonOperator
   : LT
   | LEQ
   | GT
   | GEQ
   | EQ
   | NEQ
   | IS
   | LIKE
   ;

complexType
   : ambiguousIdentifier (DOT ambiguousIdentifier)*
   ;

letterrange
   : certainIdentifier (WS? MINUS WS? certainIdentifier)?
   ;

literal
   : COLORLITERAL
   | DATELITERAL
   | DOUBLELITERAL
   | FILENUMBER
   | INTEGERLITERAL
   | OCTALLITERAL
   | STRINGLITERAL
   | TRUE
   | FALSE
   | NOTHING
   | NULL
   ;

publicPrivateVisibility
    : PRIVATE
    | PUBLIC
    ;

publicPrivateGlobalVisibility
    : PRIVATE
    | PUBLIC
    | GLOBAL
    ;

type
   : (baseType | complexType) (WS? L_SQUARE_BRACKET WS? R_SQUARE_BRACKET)?
   ;

typeHint
   : AMPERSAND
   | AT
   | DOLLAR
   | EXCLAMATIONMARK
   | HASH
   | PERCENT
   ;

visibility
   : PRIVATE
   | PUBLIC
   | FRIEND
   | GLOBAL
   ;

// ambiguous keywords
ambiguousKeyword
   : ADDRESSOF
   | ALIAS
   | AND
   | AS
   | BEGIN
   | BINARY
   | BOOLEAN
   | BYTE
   | CASE
   | CLASS
   | COLLECTION
   | CONST
   | DATE
   | DIM
   | DO
   | DOUBLE
   | EACH
   | ELSE
   | ELSEIF
   | END
   | ENUM
   | EQV
   | EVENT
   | FALSE
   | FRIEND
   | FOR
   | FUNCTION
   | GET
   | GLOBAL
   | IF
   | IMPLEMENTS
   | IN
   | INPUT
   | IS
   | INTEGER
   | LOAD
   | LOCK
   | LONG
   | LOOP
   | LIKE
   | ME
   | MOD
   | NAME
   | NEXT
   | NEW
   | NOT
   | NOTHING
   | NULL
   | OBJECT
   | ON
   | OPTIONAL
   | OR
   | OUTPUT
   | PRIVATE
   | PUBLIC
   | RETURN
   | SELECT
   | SET
   | SHARED
   | SINGLE
   | STATIC
   | STEP
   | STRING
   | SUB
   | THEN
   | TIME
   | TO
   | TRUE
   | TYPE
   | TYPEOF
   | UNLOAD
   | UNTIL
   | VERSION
   | WHILE
   | WITH
   | XOR
   ;

// lexer rules --------------------------------------------------------------------------------

// keywords

ADDRESSOF
   : A D D R E S S O F
   ;


ALIAS
   : A L I A S
   ;


AND
   : A N D
   ;


AS
   : A S
   ;


BEGIN
   : B E G I N
   ;


BEGINPROPERTY
   : B E G I N P R O P E R T Y
   ;


BINARY
   : B I N A R Y
   ;


BOOLEAN
   : B O O L E A N
   ;


BYTE
   : B Y T E
   ;


CASE
   : C A S E
   ;


CLASS
   : C L A S S
   ;


COLLECTION
   : C O L L E C T I O N
   ;


CONST
   : C O N S T
   ;


DATE
   : D A T E
   ;


DIM
   : D I M
   ;


DO
   : D O
   ;


DOUBLE
   : D O U B L E
   ;


EACH
   : E A C H
   ;


ELSE
   : E L S E
   ;


ELSEIF
   : E L S E I F
   ;


END_CLASS
   : E N D ' ' C L A S S
   ;


END_ENUM
   : E N D ' ' E N U M
   ;


END_FUNCTION
   : E N D ' ' F U N C T I O N
   ;


END_IF
   : E N D WS+ I F
   ;


END_PROPERTY
   : E N D ' ' P R O P E R T Y
   ;


END_SELECT
   : E N D ' ' S E L E C T
   ;


END_SUB
   : E N D ' ' S U B
   ;


END_TYPE
   : E N D ' ' T Y P E
   ;


END_WITH
   : E N D ' ' W I T H
   ;


END
   : E N D
   ;


ENDPROPERTY
   : E N D P R O P E R T Y
   ;


ENUM
   : E N U M
   ;


EQV
   : E Q V
   ;


EVENT
   : E V E N T
   ;


EXTENDS
   : E X T E N D S
   ;


EXIT_DO
   : E X I T ' ' D O
   ;


EXIT_FOR
   : E X I T ' ' F O R
   ;


EXIT_FUNCTION
   : E X I T ' ' F U N C T I O N
   ;


EXIT_PROPERTY
   : E X I T ' ' P R O P E R T Y
   ;


EXIT_SUB
   : E X I T ' ' S U B
   ;


FALSE
   : F A L S E
   ;


FRIEND
   : F R I E N D
   ;


FOR
   : F O R
   ;


FOREACH
   : F O R E A C H
   ;


FUNCTION
   : F U N C T I O N
   ;


GET
   : G E T
   ;


GLOBAL
   : G L O B A L
   ;


IF
   : I F
   ;


IMPORT
   : I M P O R T
   ;


IMPLEMENTS
   : I M P L E M E N T S
   ;


IN
   : I N
   ;


INPUT
   : I N P U T
   ;


IS
   : I S
   ;


INTEGER
   : I N T E G E R
   ;


LOAD
   : L O A D
   ;


LOCK
   : L O C K
   ;


LONG
   : L O N G
   ;


LOOP
   : L O O P
   ;


LIKE
   : L I K E
   ;


MACRO_VERSION
   : HASH V E R S I O N
   ;

ME
   : M E
   ;


MOD
   : M O D
   ;


NAME
   : N A M E
   ;


NEXT
   : N E X T
   ;


NEW
   : N E W
   ;


NOT
   : N O T
   ;


NOTHING
   : N O T H I N G
   ;


NULL
   : N U L L
   ;


OBJECT
   : O B J E C T
   ;


ON
   : O N
   ;


OPTIONAL
   : O P T I O N A L
   ;


OR
   : O R
   ;


OUTPUT
   : O U T P U T
   ;


PRIVATE
   : P R I V A T E
   ;


PROPERTY_GET
   : P R O P E R T Y ' ' G E T
   ;


PROPERTY_LET
   : P R O P E R T Y ' ' L E T
   ;


PROPERTY_SET
   : P R O P E R T Y ' ' S E T
   ;


PUBLIC
   : P U B L I C
   ;


RETURN
   : R E T U R N
   ;


SELECT
   : S E L E C T
   ;


SET
   : S E T
   ;


SHARED
   : S H A R E D
   ;


SINGLE
   : S I N G L E
   ;


STATIC
   : S T A T I C
   ;


STEP
   : S T E P
   ;


STRING
   : S T R I N G
   ;


SUB
   : S U B
   ;


THEN
   : T H E N
   ;


TIME
   : T I M E
   ;


TO
   : T O
   ;


TRUE
   : T R U E
   ;


TYPE
   : T Y P E
   ;


TYPEOF
   : T Y P E O F
   ;


UNLOAD
   : U N L O A D
   ;


UNTIL
   : U N T I L
   ;


VERSION
   : V E R S I O N
   ;


WHILE
   : W H I L E
   ;


WITH
   : W I T H
   ;


XOR
   : X O R
   ;

// symbols

AMPERSAND
   : '&'
   ;


ASSIGN
   : ':='
   ;


AT
   : '@'
   ;


COLON
   : ':'
   ;


COMMA
   : ','
   ;


DIV
   : '\\' | '/'
   ;


DOLLAR
   : '$'
   ;


DOT
   : '.'
   ;


EQ
   : '='
   ;


EXCLAMATIONMARK
   : '!'
   ;


GEQ
   : '>='
   ;


GT
   : '>'
   ;


HASH
   : '#'
   ;


LEQ
   : '<='
   ;

LBRACE
    : '{'
    ;


LPAREN
   : '('
   ;


LT
   : '<'
   ;


MINUS
   : '-'
   ;


MINUS_EQ
   : '-='
   ;


MULT
   : '*'
   ;


NEQ
   : '<>'
   ;


PERCENT
   : '%'
   ;


PLUS
   : '+'
   ;


PLUS_EQ
   : '+='
   ;


POW
   : '^'
   ;


RBRACE
    : '}'
    ;


RPAREN
   : ')'
   ;


SEMICOLON
   : ';'
   ;


L_SQUARE_BRACKET
   : '['
   ;


R_SQUARE_BRACKET
   : ']'
   ;

// literals

STRINGLITERAL
   : '"' (~ ["\r\n] | '""')* '"'
   ;


DATELITERAL
   : HASH (~ [#\r\n])* HASH
   ;


COLORLITERAL
   : '&H' [0-9A-F] + AMPERSAND?
   ;


INTEGERLITERAL
   : (PLUS | MINUS)? ('0' .. '9') + (('e' | 'E') INTEGERLITERAL)* (HASH | AMPERSAND | EXCLAMATIONMARK | AT)?
   ;


DOUBLELITERAL
   : (PLUS | MINUS)? ('0' .. '9')* DOT ('0' .. '9') + (('e' | 'E') (PLUS | MINUS)? ('0' .. '9') +)* (HASH | AMPERSAND | EXCLAMATIONMARK | AT)?
   ;


FILENUMBER
   : HASH LETTERORDIGIT +
   ;

OCTALLITERAL
   : (PLUS | MINUS)? '&O' [0-7] + AMPERSAND?
   ;

// misc
FRX_OFFSET
    : COLON [0-9A-F]+
    ;

GUID
    : LBRACE [0-9A-F]+ MINUS [0-9A-F]+ MINUS [0-9A-F]+ MINUS [0-9A-F]+ MINUS [0-9A-F]+ RBRACE
    ;

// identifier
BYTE_ORDER_MARK: '\uFEFF';

IDENTIFIER
   : LETTER LETTERORDIGIT*
   ;

// whitespace, line breaks, comments, ...

LINE_CONTINUATION
   : ' ' '_' '\r'? '\n' -> channel(HIDDEN)
   ;


NEWLINE
   : WS? ('\r'? '\n' | COLON ' ') WS?
   ;


COMMENT
   : WS? ('//') (~ ('\n' | '\r'))* -> channel(2)
   ; // Now with new channel for comments


WS
   : [ \t] +
   ;

// letters

fragment LETTER
   : [a-zA-Z_äöüÄÖÜáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛàèìòùÀÈÌÒÙãẽĩõũÃẼĨÕŨçÇ]
   ;


fragment LETTERORDIGIT
   : [a-zA-Z0-9_äöüÄÖÜáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛàèìòùÀÈÌÒÙãẽĩõũÃẼĨÕŨçÇ]
   ;

// case insensitive chars

fragment A
   : ('a' | 'A')
   ;


fragment B
   : ('b' | 'B')
   ;


fragment C
   : ('c' | 'C')
   ;


fragment D
   : ('d' | 'D')
   ;


fragment E
   : ('e' | 'E')
   ;


fragment F
   : ('f' | 'F')
   ;


fragment G
   : ('g' | 'G')
   ;


fragment H
   : ('h' | 'H')
   ;


fragment I
   : ('i' | 'I')
   ;


fragment J
   : ('j' | 'J')
   ;


fragment K
   : ('k' | 'K')
   ;


fragment L
   : ('l' | 'L')
   ;


fragment M
   : ('m' | 'M')
   ;


fragment N
   : ('n' | 'N')
   ;


fragment O
   : ('o' | 'O')
   ;


fragment P
   : ('p' | 'P')
   ;


fragment Q
   : ('q' | 'Q')
   ;


fragment R
   : ('r' | 'R')
   ;


fragment S
   : ('s' | 'S')
   ;


fragment T
   : ('t' | 'T')
   ;


fragment U
   : ('u' | 'U')
   ;


fragment V
   : ('v' | 'V')
   ;


fragment W
   : ('w' | 'W')
   ;


fragment X
   : ('x' | 'X')
   ;


fragment Y
   : ('y' | 'Y')
   ;


fragment Z
   : ('z' | 'Z')
   ;
