// Generated from grammars/Bos.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { BosListener } from "./BosListener";
import { BosVisitor } from "./BosVisitor";


export class BosParser extends Parser {
	public static readonly ACCESS = 1;
	public static readonly ADDRESSOF = 2;
	public static readonly ALIAS = 3;
	public static readonly AND = 4;
	public static readonly ATTRIBUTE = 5;
	public static readonly APPACTIVATE = 6;
	public static readonly APPEND = 7;
	public static readonly AS = 8;
	public static readonly BEEP = 9;
	public static readonly BEGIN = 10;
	public static readonly BEGINPROPERTY = 11;
	public static readonly BINARY = 12;
	public static readonly BOOLEAN = 13;
	public static readonly BYVAL = 14;
	public static readonly BYREF = 15;
	public static readonly BYTE = 16;
	public static readonly CALL = 17;
	public static readonly CASE = 18;
	public static readonly CHDIR = 19;
	public static readonly CHDRIVE = 20;
	public static readonly CLASS = 21;
	public static readonly CLOSE = 22;
	public static readonly COLLECTION = 23;
	public static readonly CONST = 24;
	public static readonly DATE = 25;
	public static readonly DECLARE = 26;
	public static readonly DEFBOOL = 27;
	public static readonly DEFBYTE = 28;
	public static readonly DEFDATE = 29;
	public static readonly DEFDBL = 30;
	public static readonly DEFDEC = 31;
	public static readonly DEFCUR = 32;
	public static readonly DEFINT = 33;
	public static readonly DEFLNG = 34;
	public static readonly DEFOBJ = 35;
	public static readonly DEFSNG = 36;
	public static readonly DEFSTR = 37;
	public static readonly DEFVAR = 38;
	public static readonly DELETESETTING = 39;
	public static readonly DIM = 40;
	public static readonly DO = 41;
	public static readonly DOUBLE = 42;
	public static readonly EACH = 43;
	public static readonly ELSE = 44;
	public static readonly ELSEIF = 45;
	public static readonly END_CLASS = 46;
	public static readonly END_ENUM = 47;
	public static readonly END_FUNCTION = 48;
	public static readonly END_IF = 49;
	public static readonly END_PROPERTY = 50;
	public static readonly END_SELECT = 51;
	public static readonly END_SUB = 52;
	public static readonly END_TYPE = 53;
	public static readonly END_WITH = 54;
	public static readonly END = 55;
	public static readonly ENDPROPERTY = 56;
	public static readonly ENUM = 57;
	public static readonly EQV = 58;
	public static readonly ERASE = 59;
	public static readonly ERROR = 60;
	public static readonly EVENT = 61;
	public static readonly EXIT_DO = 62;
	public static readonly EXIT_FOR = 63;
	public static readonly EXIT_FUNCTION = 64;
	public static readonly EXIT_PROPERTY = 65;
	public static readonly EXIT_SUB = 66;
	public static readonly FALSE = 67;
	public static readonly FILECOPY = 68;
	public static readonly FRIEND = 69;
	public static readonly FOR = 70;
	public static readonly FUNCTION = 71;
	public static readonly GET = 72;
	public static readonly GLOBAL = 73;
	public static readonly GOSUB = 74;
	public static readonly GOTO = 75;
	public static readonly IF = 76;
	public static readonly IMP = 77;
	public static readonly IMPORT = 78;
	public static readonly IMPLEMENTS = 79;
	public static readonly IN = 80;
	public static readonly INPUT = 81;
	public static readonly IS = 82;
	public static readonly INTEGER = 83;
	public static readonly KILL = 84;
	public static readonly LOAD = 85;
	public static readonly LOCK = 86;
	public static readonly LONG = 87;
	public static readonly LOOP = 88;
	public static readonly LEN = 89;
	public static readonly LET = 90;
	public static readonly LIB = 91;
	public static readonly LIKE = 92;
	public static readonly LINE_INPUT = 93;
	public static readonly LOCK_READ = 94;
	public static readonly LOCK_WRITE = 95;
	public static readonly LOCK_READ_WRITE = 96;
	public static readonly LSET = 97;
	public static readonly MACRO_IF = 98;
	public static readonly MACRO_ELSEIF = 99;
	public static readonly MACRO_ELSE = 100;
	public static readonly MACRO_END_IF = 101;
	public static readonly ME = 102;
	public static readonly MID = 103;
	public static readonly MKDIR = 104;
	public static readonly MOD = 105;
	public static readonly NAME = 106;
	public static readonly NEXT = 107;
	public static readonly NEW = 108;
	public static readonly NOT = 109;
	public static readonly NOTHING = 110;
	public static readonly NULL = 111;
	public static readonly OBJECT = 112;
	public static readonly ON = 113;
	public static readonly ON_ERROR = 114;
	public static readonly ON_LOCAL_ERROR = 115;
	public static readonly OPEN = 116;
	public static readonly OPTIONAL = 117;
	public static readonly OPTION_BASE = 118;
	public static readonly OPTION_EXPLICIT = 119;
	public static readonly OPTION_COMPARE = 120;
	public static readonly OPTION_PRIVATE_MODULE = 121;
	public static readonly OR = 122;
	public static readonly OUTPUT = 123;
	public static readonly PARAMARRAY = 124;
	public static readonly PRESERVE = 125;
	public static readonly PRINT = 126;
	public static readonly PRIVATE = 127;
	public static readonly PROPERTY_GET = 128;
	public static readonly PROPERTY_LET = 129;
	public static readonly PROPERTY_SET = 130;
	public static readonly PUBLIC = 131;
	public static readonly PUT = 132;
	public static readonly RANDOM = 133;
	public static readonly RANDOMIZE = 134;
	public static readonly RAISEEVENT = 135;
	public static readonly READ = 136;
	public static readonly READ_WRITE = 137;
	public static readonly REDIM = 138;
	public static readonly REM = 139;
	public static readonly RESET = 140;
	public static readonly RESUME = 141;
	public static readonly RETURN = 142;
	public static readonly RMDIR = 143;
	public static readonly RSET = 144;
	public static readonly SAVEPICTURE = 145;
	public static readonly SAVESETTING = 146;
	public static readonly SEEK = 147;
	public static readonly SELECT = 148;
	public static readonly SENDKEYS = 149;
	public static readonly SET = 150;
	public static readonly SETATTR = 151;
	public static readonly SHARED = 152;
	public static readonly SINGLE = 153;
	public static readonly SPC = 154;
	public static readonly STATIC = 155;
	public static readonly STEP = 156;
	public static readonly STOP = 157;
	public static readonly STRING = 158;
	public static readonly SUB = 159;
	public static readonly TAB = 160;
	public static readonly TEXT = 161;
	public static readonly THEN = 162;
	public static readonly TIME = 163;
	public static readonly TO = 164;
	public static readonly TRUE = 165;
	public static readonly TYPE = 166;
	public static readonly TYPEOF = 167;
	public static readonly UNLOAD = 168;
	public static readonly UNLOCK = 169;
	public static readonly UNTIL = 170;
	public static readonly VARIANT = 171;
	public static readonly VERSION = 172;
	public static readonly WEND = 173;
	public static readonly WHILE = 174;
	public static readonly WIDTH = 175;
	public static readonly WITH = 176;
	public static readonly WITHEVENTS = 177;
	public static readonly WRITE = 178;
	public static readonly XOR = 179;
	public static readonly AMPERSAND = 180;
	public static readonly ASSIGN = 181;
	public static readonly AT = 182;
	public static readonly COLON = 183;
	public static readonly COMMA = 184;
	public static readonly DIV = 185;
	public static readonly DOLLAR = 186;
	public static readonly DOT = 187;
	public static readonly EQ = 188;
	public static readonly EXCLAMATIONMARK = 189;
	public static readonly GEQ = 190;
	public static readonly GT = 191;
	public static readonly HASH = 192;
	public static readonly LEQ = 193;
	public static readonly LBRACE = 194;
	public static readonly LPAREN = 195;
	public static readonly LT = 196;
	public static readonly MINUS = 197;
	public static readonly MINUS_EQ = 198;
	public static readonly MULT = 199;
	public static readonly NEQ = 200;
	public static readonly PERCENT = 201;
	public static readonly PLUS = 202;
	public static readonly PLUS_EQ = 203;
	public static readonly POW = 204;
	public static readonly RBRACE = 205;
	public static readonly RPAREN = 206;
	public static readonly SEMICOLON = 207;
	public static readonly L_SQUARE_BRACKET = 208;
	public static readonly R_SQUARE_BRACKET = 209;
	public static readonly STRINGLITERAL = 210;
	public static readonly DATELITERAL = 211;
	public static readonly COLORLITERAL = 212;
	public static readonly INTEGERLITERAL = 213;
	public static readonly DOUBLELITERAL = 214;
	public static readonly FILENUMBER = 215;
	public static readonly OCTALLITERAL = 216;
	public static readonly FRX_OFFSET = 217;
	public static readonly GUID = 218;
	public static readonly BYTE_ORDER_MARK = 219;
	public static readonly IDENTIFIER = 220;
	public static readonly LINE_CONTINUATION = 221;
	public static readonly NEWLINE = 222;
	public static readonly COMMENT = 223;
	public static readonly WS = 224;
	public static readonly RULE_startRule = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_moduleReferences = 2;
	public static readonly RULE_moduleImports = 3;
	public static readonly RULE_moduleReference = 4;
	public static readonly RULE_moduleReferenceValue = 5;
	public static readonly RULE_moduleReferenceComponent = 6;
	public static readonly RULE_moduleHeader = 7;
	public static readonly RULE_moduleConfig = 8;
	public static readonly RULE_moduleConfigElement = 9;
	public static readonly RULE_moduleAttributes = 10;
	public static readonly RULE_moduleOptions = 11;
	public static readonly RULE_moduleOption = 12;
	public static readonly RULE_moduleBody = 13;
	public static readonly RULE_moduleBodyElement = 14;
	public static readonly RULE_classBody = 15;
	public static readonly RULE_classBodyElement = 16;
	public static readonly RULE_controlProperties = 17;
	public static readonly RULE_cp_Properties = 18;
	public static readonly RULE_cp_SingleProperty = 19;
	public static readonly RULE_cp_PropertyName = 20;
	public static readonly RULE_cp_PropertyValue = 21;
	public static readonly RULE_cp_NestedProperty = 22;
	public static readonly RULE_cp_ControlType = 23;
	public static readonly RULE_cp_ControlIdentifier = 24;
	public static readonly RULE_moduleBlock = 25;
	public static readonly RULE_importStmt = 26;
	public static readonly RULE_attributeStmt = 27;
	public static readonly RULE_block = 28;
	public static readonly RULE_blockStmt = 29;
	public static readonly RULE_appActivateStmt = 30;
	public static readonly RULE_beepStmt = 31;
	public static readonly RULE_chDirStmt = 32;
	public static readonly RULE_chDriveStmt = 33;
	public static readonly RULE_classStmt = 34;
	public static readonly RULE_closeStmt = 35;
	public static readonly RULE_constStmt = 36;
	public static readonly RULE_constSubStmt = 37;
	public static readonly RULE_dateStmt = 38;
	public static readonly RULE_declareStmt = 39;
	public static readonly RULE_deftypeStmt = 40;
	public static readonly RULE_deleteSettingStmt = 41;
	public static readonly RULE_doLoopStmt = 42;
	public static readonly RULE_endStmt = 43;
	public static readonly RULE_enumerationStmt = 44;
	public static readonly RULE_enumerationStmt_Constant = 45;
	public static readonly RULE_eraseStmt = 46;
	public static readonly RULE_errorStmt = 47;
	public static readonly RULE_eventStmt = 48;
	public static readonly RULE_exitStmt = 49;
	public static readonly RULE_filecopyStmt = 50;
	public static readonly RULE_forEachStmt = 51;
	public static readonly RULE_forNextStmt = 52;
	public static readonly RULE_functionStmt = 53;
	public static readonly RULE_getStmt = 54;
	public static readonly RULE_goSubStmt = 55;
	public static readonly RULE_goToStmt = 56;
	public static readonly RULE_ifThenElseStmt = 57;
	public static readonly RULE_ifBlockStmt = 58;
	public static readonly RULE_ifConditionStmt = 59;
	public static readonly RULE_ifElseIfBlockStmt = 60;
	public static readonly RULE_ifElseBlockStmt = 61;
	public static readonly RULE_implementsStmt = 62;
	public static readonly RULE_inputStmt = 63;
	public static readonly RULE_killStmt = 64;
	public static readonly RULE_letStmt = 65;
	public static readonly RULE_lineInputStmt = 66;
	public static readonly RULE_loadStmt = 67;
	public static readonly RULE_lockStmt = 68;
	public static readonly RULE_lsetStmt = 69;
	public static readonly RULE_macroIfThenElseStmt = 70;
	public static readonly RULE_macroIfBlockStmt = 71;
	public static readonly RULE_macroElseIfBlockStmt = 72;
	public static readonly RULE_macroElseBlockStmt = 73;
	public static readonly RULE_midStmt = 74;
	public static readonly RULE_mkdirStmt = 75;
	public static readonly RULE_nameStmt = 76;
	public static readonly RULE_onErrorStmt = 77;
	public static readonly RULE_onGoToStmt = 78;
	public static readonly RULE_onGoSubStmt = 79;
	public static readonly RULE_openStmt = 80;
	public static readonly RULE_outputList = 81;
	public static readonly RULE_outputList_Expression = 82;
	public static readonly RULE_printStmt = 83;
	public static readonly RULE_propertyGetStmt = 84;
	public static readonly RULE_propertySetStmt = 85;
	public static readonly RULE_propertyLetStmt = 86;
	public static readonly RULE_putStmt = 87;
	public static readonly RULE_raiseEventStmt = 88;
	public static readonly RULE_randomizeStmt = 89;
	public static readonly RULE_redimStmt = 90;
	public static readonly RULE_redimSubStmt = 91;
	public static readonly RULE_resetStmt = 92;
	public static readonly RULE_resumeStmt = 93;
	public static readonly RULE_returnStmt = 94;
	public static readonly RULE_rmdirStmt = 95;
	public static readonly RULE_rsetStmt = 96;
	public static readonly RULE_savepictureStmt = 97;
	public static readonly RULE_saveSettingStmt = 98;
	public static readonly RULE_seekStmt = 99;
	public static readonly RULE_selectCaseStmt = 100;
	public static readonly RULE_sC_Case = 101;
	public static readonly RULE_sC_Cond = 102;
	public static readonly RULE_sC_CondExpr = 103;
	public static readonly RULE_sendkeysStmt = 104;
	public static readonly RULE_setattrStmt = 105;
	public static readonly RULE_setStmt = 106;
	public static readonly RULE_stopStmt = 107;
	public static readonly RULE_subStmt = 108;
	public static readonly RULE_timeStmt = 109;
	public static readonly RULE_typeStmt = 110;
	public static readonly RULE_typeStmt_Element = 111;
	public static readonly RULE_typeOfStmt = 112;
	public static readonly RULE_unloadStmt = 113;
	public static readonly RULE_unlockStmt = 114;
	public static readonly RULE_valueStmt = 115;
	public static readonly RULE_variableStmt = 116;
	public static readonly RULE_variableListStmt = 117;
	public static readonly RULE_variableSubStmt = 118;
	public static readonly RULE_whileWendStmt = 119;
	public static readonly RULE_widthStmt = 120;
	public static readonly RULE_withStmt = 121;
	public static readonly RULE_writeStmt = 122;
	public static readonly RULE_explicitCallStmt = 123;
	public static readonly RULE_eCS_ProcedureCall = 124;
	public static readonly RULE_eCS_MemberProcedureCall = 125;
	public static readonly RULE_implicitCallStmt_InBlock = 126;
	public static readonly RULE_iCS_B_ProcedureCall = 127;
	public static readonly RULE_iCS_B_MemberProcedureCall = 128;
	public static readonly RULE_implicitCallStmt_InStmt = 129;
	public static readonly RULE_iCS_S_VariableOrProcedureCall = 130;
	public static readonly RULE_iCS_S_ProcedureOrArrayCall = 131;
	public static readonly RULE_iCS_S_NestedProcedureCall = 132;
	public static readonly RULE_iCS_S_MembersCall = 133;
	public static readonly RULE_iCS_S_MemberCall = 134;
	public static readonly RULE_iCS_S_DictionaryCall = 135;
	public static readonly RULE_argsCall = 136;
	public static readonly RULE_argCall = 137;
	public static readonly RULE_dictionaryCallStmt = 138;
	public static readonly RULE_argList = 139;
	public static readonly RULE_arg = 140;
	public static readonly RULE_argDefaultValue = 141;
	public static readonly RULE_subscripts = 142;
	public static readonly RULE_subscript = 143;
	public static readonly RULE_ambiguousIdentifier = 144;
	public static readonly RULE_asTypeClause = 145;
	public static readonly RULE_baseType = 146;
	public static readonly RULE_certainIdentifier = 147;
	public static readonly RULE_comparisonOperator = 148;
	public static readonly RULE_complexType = 149;
	public static readonly RULE_fieldLength = 150;
	public static readonly RULE_letterrange = 151;
	public static readonly RULE_lineLabel = 152;
	public static readonly RULE_literal = 153;
	public static readonly RULE_publicPrivateVisibility = 154;
	public static readonly RULE_publicPrivateGlobalVisibility = 155;
	public static readonly RULE_type = 156;
	public static readonly RULE_typeHint = 157;
	public static readonly RULE_visibility = 158;
	public static readonly RULE_ambiguousKeyword = 159;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"startRule", "module", "moduleReferences", "moduleImports", "moduleReference", 
		"moduleReferenceValue", "moduleReferenceComponent", "moduleHeader", "moduleConfig", 
		"moduleConfigElement", "moduleAttributes", "moduleOptions", "moduleOption", 
		"moduleBody", "moduleBodyElement", "classBody", "classBodyElement", "controlProperties", 
		"cp_Properties", "cp_SingleProperty", "cp_PropertyName", "cp_PropertyValue", 
		"cp_NestedProperty", "cp_ControlType", "cp_ControlIdentifier", "moduleBlock", 
		"importStmt", "attributeStmt", "block", "blockStmt", "appActivateStmt", 
		"beepStmt", "chDirStmt", "chDriveStmt", "classStmt", "closeStmt", "constStmt", 
		"constSubStmt", "dateStmt", "declareStmt", "deftypeStmt", "deleteSettingStmt", 
		"doLoopStmt", "endStmt", "enumerationStmt", "enumerationStmt_Constant", 
		"eraseStmt", "errorStmt", "eventStmt", "exitStmt", "filecopyStmt", "forEachStmt", 
		"forNextStmt", "functionStmt", "getStmt", "goSubStmt", "goToStmt", "ifThenElseStmt", 
		"ifBlockStmt", "ifConditionStmt", "ifElseIfBlockStmt", "ifElseBlockStmt", 
		"implementsStmt", "inputStmt", "killStmt", "letStmt", "lineInputStmt", 
		"loadStmt", "lockStmt", "lsetStmt", "macroIfThenElseStmt", "macroIfBlockStmt", 
		"macroElseIfBlockStmt", "macroElseBlockStmt", "midStmt", "mkdirStmt", 
		"nameStmt", "onErrorStmt", "onGoToStmt", "onGoSubStmt", "openStmt", "outputList", 
		"outputList_Expression", "printStmt", "propertyGetStmt", "propertySetStmt", 
		"propertyLetStmt", "putStmt", "raiseEventStmt", "randomizeStmt", "redimStmt", 
		"redimSubStmt", "resetStmt", "resumeStmt", "returnStmt", "rmdirStmt", 
		"rsetStmt", "savepictureStmt", "saveSettingStmt", "seekStmt", "selectCaseStmt", 
		"sC_Case", "sC_Cond", "sC_CondExpr", "sendkeysStmt", "setattrStmt", "setStmt", 
		"stopStmt", "subStmt", "timeStmt", "typeStmt", "typeStmt_Element", "typeOfStmt", 
		"unloadStmt", "unlockStmt", "valueStmt", "variableStmt", "variableListStmt", 
		"variableSubStmt", "whileWendStmt", "widthStmt", "withStmt", "writeStmt", 
		"explicitCallStmt", "eCS_ProcedureCall", "eCS_MemberProcedureCall", "implicitCallStmt_InBlock", 
		"iCS_B_ProcedureCall", "iCS_B_MemberProcedureCall", "implicitCallStmt_InStmt", 
		"iCS_S_VariableOrProcedureCall", "iCS_S_ProcedureOrArrayCall", "iCS_S_NestedProcedureCall", 
		"iCS_S_MembersCall", "iCS_S_MemberCall", "iCS_S_DictionaryCall", "argsCall", 
		"argCall", "dictionaryCallStmt", "argList", "arg", "argDefaultValue", 
		"subscripts", "subscript", "ambiguousIdentifier", "asTypeClause", "baseType", 
		"certainIdentifier", "comparisonOperator", "complexType", "fieldLength", 
		"letterrange", "lineLabel", "literal", "publicPrivateVisibility", "publicPrivateGlobalVisibility", 
		"type", "typeHint", "visibility", "ambiguousKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'&'", "':='", 
		"'@'", "':'", "','", undefined, "'$'", "'.'", "'='", "'!'", "'>='", "'>'", 
		"'#'", "'<='", "'{'", "'('", "'<'", "'-'", "'-='", "'*'", "'<>'", "'%'", 
		"'+'", "'+='", "'^'", "'}'", "')'", "';'", "'['", "']'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'\u00EFu00BB\u00BF'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ACCESS", "ADDRESSOF", "ALIAS", "AND", "ATTRIBUTE", "APPACTIVATE", 
		"APPEND", "AS", "BEEP", "BEGIN", "BEGINPROPERTY", "BINARY", "BOOLEAN", 
		"BYVAL", "BYREF", "BYTE", "CALL", "CASE", "CHDIR", "CHDRIVE", "CLASS", 
		"CLOSE", "COLLECTION", "CONST", "DATE", "DECLARE", "DEFBOOL", "DEFBYTE", 
		"DEFDATE", "DEFDBL", "DEFDEC", "DEFCUR", "DEFINT", "DEFLNG", "DEFOBJ", 
		"DEFSNG", "DEFSTR", "DEFVAR", "DELETESETTING", "DIM", "DO", "DOUBLE", 
		"EACH", "ELSE", "ELSEIF", "END_CLASS", "END_ENUM", "END_FUNCTION", "END_IF", 
		"END_PROPERTY", "END_SELECT", "END_SUB", "END_TYPE", "END_WITH", "END", 
		"ENDPROPERTY", "ENUM", "EQV", "ERASE", "ERROR", "EVENT", "EXIT_DO", "EXIT_FOR", 
		"EXIT_FUNCTION", "EXIT_PROPERTY", "EXIT_SUB", "FALSE", "FILECOPY", "FRIEND", 
		"FOR", "FUNCTION", "GET", "GLOBAL", "GOSUB", "GOTO", "IF", "IMP", "IMPORT", 
		"IMPLEMENTS", "IN", "INPUT", "IS", "INTEGER", "KILL", "LOAD", "LOCK", 
		"LONG", "LOOP", "LEN", "LET", "LIB", "LIKE", "LINE_INPUT", "LOCK_READ", 
		"LOCK_WRITE", "LOCK_READ_WRITE", "LSET", "MACRO_IF", "MACRO_ELSEIF", "MACRO_ELSE", 
		"MACRO_END_IF", "ME", "MID", "MKDIR", "MOD", "NAME", "NEXT", "NEW", "NOT", 
		"NOTHING", "NULL", "OBJECT", "ON", "ON_ERROR", "ON_LOCAL_ERROR", "OPEN", 
		"OPTIONAL", "OPTION_BASE", "OPTION_EXPLICIT", "OPTION_COMPARE", "OPTION_PRIVATE_MODULE", 
		"OR", "OUTPUT", "PARAMARRAY", "PRESERVE", "PRINT", "PRIVATE", "PROPERTY_GET", 
		"PROPERTY_LET", "PROPERTY_SET", "PUBLIC", "PUT", "RANDOM", "RANDOMIZE", 
		"RAISEEVENT", "READ", "READ_WRITE", "REDIM", "REM", "RESET", "RESUME", 
		"RETURN", "RMDIR", "RSET", "SAVEPICTURE", "SAVESETTING", "SEEK", "SELECT", 
		"SENDKEYS", "SET", "SETATTR", "SHARED", "SINGLE", "SPC", "STATIC", "STEP", 
		"STOP", "STRING", "SUB", "TAB", "TEXT", "THEN", "TIME", "TO", "TRUE", 
		"TYPE", "TYPEOF", "UNLOAD", "UNLOCK", "UNTIL", "VARIANT", "VERSION", "WEND", 
		"WHILE", "WIDTH", "WITH", "WITHEVENTS", "WRITE", "XOR", "AMPERSAND", "ASSIGN", 
		"AT", "COLON", "COMMA", "DIV", "DOLLAR", "DOT", "EQ", "EXCLAMATIONMARK", 
		"GEQ", "GT", "HASH", "LEQ", "LBRACE", "LPAREN", "LT", "MINUS", "MINUS_EQ", 
		"MULT", "NEQ", "PERCENT", "PLUS", "PLUS_EQ", "POW", "RBRACE", "RPAREN", 
		"SEMICOLON", "L_SQUARE_BRACKET", "R_SQUARE_BRACKET", "STRINGLITERAL", 
		"DATELITERAL", "COLORLITERAL", "INTEGERLITERAL", "DOUBLELITERAL", "FILENUMBER", 
		"OCTALLITERAL", "FRX_OFFSET", "GUID", "BYTE_ORDER_MARK", "IDENTIFIER", 
		"LINE_CONTINUATION", "NEWLINE", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BosParser._LITERAL_NAMES, BosParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BosParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Bos.g4"; }

	// @Override
	public get ruleNames(): string[] { return BosParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BosParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BosParser._ATN, this);
	}
	// @RuleVersion(0)
	public startRule(): StartRuleContext {
		let _localctx: StartRuleContext = new StartRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BosParser.RULE_startRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.module();
			this.state = 321;
			this.match(BosParser.EOF);
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
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BosParser.RULE_module);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 323;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 329;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 326;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 332;
				this.moduleHeader();
				this.state = 334;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 333;
						this.match(BosParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 336;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 340;
				this.moduleReferences();
				}
				break;
			}
			this.state = 346;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 343;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 348;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.IMPORT) {
				{
				this.state = 349;
				this.moduleImports();
				}
			}

			this.state = 355;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 352;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 358;
				this.controlProperties();
				}
				break;
			}
			this.state = 364;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 361;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 368;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 367;
				this.moduleConfig();
				}
				break;
			}
			this.state = 373;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 370;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 376;
				this.moduleAttributes();
				}
				break;
			}
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 379;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 385;
				this.moduleOptions();
				}
				break;
			}
			this.state = 391;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 388;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			this.state = 395;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 394;
				this.moduleBody();
				}
				break;
			}
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BosParser.NEWLINE) {
				{
				{
				this.state = 397;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 403;
				this.match(BosParser.WS);
				}
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
	public moduleReferences(): ModuleReferencesContext {
		let _localctx: ModuleReferencesContext = new ModuleReferencesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BosParser.RULE_moduleReferences);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 406;
					this.moduleReference();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public moduleImports(): ModuleImportsContext {
		let _localctx: ModuleImportsContext = new ModuleImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BosParser.RULE_moduleImports);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 411;
				this.importStmt();
				this.state = 413;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 412;
						this.match(BosParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 415;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.IMPORT);
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
	public moduleReference(): ModuleReferenceContext {
		let _localctx: ModuleReferenceContext = new ModuleReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BosParser.RULE_moduleReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(BosParser.OBJECT);
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 422;
				this.match(BosParser.WS);
				}
			}

			this.state = 425;
			this.match(BosParser.EQ);
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 426;
				this.match(BosParser.WS);
				}
			}

			this.state = 429;
			this.moduleReferenceValue();
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.SEMICOLON) {
				{
				this.state = 430;
				this.match(BosParser.SEMICOLON);
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 431;
					this.match(BosParser.WS);
					}
				}

				this.state = 434;
				this.moduleReferenceComponent();
				}
			}

			this.state = 440;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 437;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 442;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
	public moduleReferenceValue(): ModuleReferenceValueContext {
		let _localctx: ModuleReferenceValueContext = new ModuleReferenceValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BosParser.RULE_moduleReferenceValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(BosParser.STRINGLITERAL);
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
	public moduleReferenceComponent(): ModuleReferenceComponentContext {
		let _localctx: ModuleReferenceComponentContext = new ModuleReferenceComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BosParser.RULE_moduleReferenceComponent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(BosParser.STRINGLITERAL);
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
	public moduleHeader(): ModuleHeaderContext {
		let _localctx: ModuleHeaderContext = new ModuleHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BosParser.RULE_moduleHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.match(BosParser.VERSION);
			this.state = 448;
			this.match(BosParser.WS);
			this.state = 449;
			this.match(BosParser.DOUBLELITERAL);
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 450;
				this.match(BosParser.WS);
				this.state = 451;
				this.match(BosParser.CLASS);
				}
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
	public moduleConfig(): ModuleConfigContext {
		let _localctx: ModuleConfigContext = new ModuleConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BosParser.RULE_moduleConfig);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(BosParser.BEGIN);
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 455;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 461;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 460;
					this.moduleConfigElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 463;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 465;
			this.match(BosParser.END);
			this.state = 467;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 466;
					this.match(BosParser.NEWLINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 469;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public moduleConfigElement(): ModuleConfigElementContext {
		let _localctx: ModuleConfigElementContext = new ModuleConfigElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BosParser.RULE_moduleConfigElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.ambiguousIdentifier();
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 472;
				this.match(BosParser.WS);
				}
			}

			this.state = 475;
			this.match(BosParser.EQ);
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 476;
				this.match(BosParser.WS);
				}
			}

			this.state = 479;
			this.literal();
			this.state = 480;
			this.match(BosParser.NEWLINE);
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
	public moduleAttributes(): ModuleAttributesContext {
		let _localctx: ModuleAttributesContext = new ModuleAttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BosParser.RULE_moduleAttributes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 482;
					this.attributeStmt();
					this.state = 484;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 483;
							this.match(BosParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 486;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public moduleOptions(): ModuleOptionsContext {
		let _localctx: ModuleOptionsContext = new ModuleOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, BosParser.RULE_moduleOptions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 492;
					this.moduleOption();
					this.state = 494;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 493;
							this.match(BosParser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 496;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 500;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public moduleOption(): ModuleOptionContext {
		let _localctx: ModuleOptionContext = new ModuleOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, BosParser.RULE_moduleOption);
		let _la: number;
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BosParser.OPTION_BASE:
				_localctx = new OptionBaseStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this.match(BosParser.OPTION_BASE);
				this.state = 503;
				this.match(BosParser.WS);
				this.state = 504;
				this.match(BosParser.INTEGERLITERAL);
				}
				break;
			case BosParser.OPTION_COMPARE:
				_localctx = new OptionCompareStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.match(BosParser.OPTION_COMPARE);
				this.state = 506;
				this.match(BosParser.WS);
				this.state = 507;
				_la = this._input.LA(1);
				if (!(_la === BosParser.BINARY || _la === BosParser.TEXT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case BosParser.OPTION_EXPLICIT:
				_localctx = new OptionExplicitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 508;
				this.match(BosParser.OPTION_EXPLICIT);
				}
				break;
			case BosParser.OPTION_PRIVATE_MODULE:
				_localctx = new OptionPrivateModuleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 509;
				this.match(BosParser.OPTION_PRIVATE_MODULE);
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
	public moduleBody(): ModuleBodyContext {
		let _localctx: ModuleBodyContext = new ModuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, BosParser.RULE_moduleBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.moduleBodyElement();
			this.state = 521;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 514;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 513;
						this.match(BosParser.NEWLINE);
						}
						}
						this.state = 516;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === BosParser.NEWLINE);
					this.state = 518;
					this.moduleBodyElement();
					}
					}
				}
				this.state = 523;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
	public moduleBodyElement(): ModuleBodyElementContext {
		let _localctx: ModuleBodyElementContext = new ModuleBodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, BosParser.RULE_moduleBodyElement);
		try {
			this.state = 537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 524;
				this.classStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 525;
				this.moduleBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 526;
				this.moduleOption();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 527;
				this.declareStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 528;
				this.enumerationStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 529;
				this.eventStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 530;
				this.functionStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 531;
				this.macroIfThenElseStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 532;
				this.propertyGetStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 533;
				this.propertySetStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 534;
				this.propertyLetStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 535;
				this.subStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 536;
				this.typeStmt();
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
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, BosParser.RULE_classBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.classBodyElement();
			this.state = 548;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 541;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 540;
						this.match(BosParser.NEWLINE);
						}
						}
						this.state = 543;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === BosParser.NEWLINE);
					this.state = 545;
					this.classBodyElement();
					}
					}
				}
				this.state = 550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
	public classBodyElement(): ClassBodyElementContext {
		let _localctx: ClassBodyElementContext = new ClassBodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, BosParser.RULE_classBodyElement);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 551;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 552;
				this.declareStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 553;
				this.enumerationStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 554;
				this.eventStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 555;
				this.functionStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 556;
				this.propertyGetStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 557;
				this.propertySetStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 558;
				this.subStmt();
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
	// @RuleVersion(0)
	public controlProperties(): ControlPropertiesContext {
		let _localctx: ControlPropertiesContext = new ControlPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, BosParser.RULE_controlProperties);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 561;
				this.match(BosParser.WS);
				}
			}

			this.state = 564;
			this.match(BosParser.BEGIN);
			this.state = 565;
			this.match(BosParser.WS);
			this.state = 566;
			this.cp_ControlType();
			this.state = 567;
			this.match(BosParser.WS);
			this.state = 568;
			this.cp_ControlIdentifier();
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 569;
				this.match(BosParser.WS);
				}
			}

			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 572;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 578;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 577;
					this.cp_Properties();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 580;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 582;
			this.match(BosParser.END);
			this.state = 586;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 583;
					this.match(BosParser.NEWLINE);
					}
					}
				}
				this.state = 588;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
	public cp_Properties(): Cp_PropertiesContext {
		let _localctx: Cp_PropertiesContext = new Cp_PropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, BosParser.RULE_cp_Properties);
		try {
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.cp_SingleProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.cp_NestedProperty();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 591;
				this.controlProperties();
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
	// @RuleVersion(0)
	public cp_SingleProperty(): Cp_SinglePropertyContext {
		let _localctx: Cp_SinglePropertyContext = new Cp_SinglePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, BosParser.RULE_cp_SingleProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 594;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 597;
			this.implicitCallStmt_InStmt();
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 598;
				this.match(BosParser.WS);
				}
			}

			this.state = 601;
			this.match(BosParser.EQ);
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 602;
				this.match(BosParser.WS);
				}
			}

			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 605;
				this.match(BosParser.DOLLAR);
				}
				break;
			}
			this.state = 608;
			this.cp_PropertyValue();
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRX_OFFSET) {
				{
				this.state = 609;
				this.match(BosParser.FRX_OFFSET);
				}
			}

			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 612;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
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
	public cp_PropertyName(): Cp_PropertyNameContext {
		let _localctx: Cp_PropertyNameContext = new Cp_PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, BosParser.RULE_cp_PropertyName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 617;
				this.match(BosParser.OBJECT);
				this.state = 618;
				this.match(BosParser.DOT);
				}
				break;
			}
			this.state = 621;
			this.ambiguousIdentifier();
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.LPAREN) {
				{
				this.state = 622;
				this.match(BosParser.LPAREN);
				this.state = 623;
				this.literal();
				this.state = 624;
				this.match(BosParser.RPAREN);
				}
			}

			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BosParser.DOT) {
				{
				{
				this.state = 628;
				this.match(BosParser.DOT);
				this.state = 629;
				this.ambiguousIdentifier();
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.LPAREN) {
					{
					this.state = 630;
					this.match(BosParser.LPAREN);
					this.state = 631;
					this.literal();
					this.state = 632;
					this.match(BosParser.RPAREN);
					}
				}

				}
				}
				this.state = 640;
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
	public cp_PropertyValue(): Cp_PropertyValueContext {
		let _localctx: Cp_PropertyValueContext = new Cp_PropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, BosParser.RULE_cp_PropertyValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.DOLLAR) {
				{
				this.state = 641;
				this.match(BosParser.DOLLAR);
				}
			}

			this.state = 651;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BosParser.FALSE:
			case BosParser.NOTHING:
			case BosParser.NULL:
			case BosParser.TRUE:
			case BosParser.STRINGLITERAL:
			case BosParser.DATELITERAL:
			case BosParser.COLORLITERAL:
			case BosParser.INTEGERLITERAL:
			case BosParser.DOUBLELITERAL:
			case BosParser.FILENUMBER:
			case BosParser.OCTALLITERAL:
				{
				this.state = 644;
				this.literal();
				}
				break;
			case BosParser.LBRACE:
				{
				{
				this.state = 645;
				this.match(BosParser.LBRACE);
				this.state = 646;
				this.ambiguousIdentifier();
				this.state = 647;
				this.match(BosParser.RBRACE);
				}
				}
				break;
			case BosParser.POW:
				{
				this.state = 649;
				this.match(BosParser.POW);
				this.state = 650;
				this.ambiguousIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public cp_NestedProperty(): Cp_NestedPropertyContext {
		let _localctx: Cp_NestedPropertyContext = new Cp_NestedPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, BosParser.RULE_cp_NestedProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 653;
				this.match(BosParser.WS);
				}
			}

			this.state = 656;
			this.match(BosParser.BEGINPROPERTY);
			this.state = 657;
			this.match(BosParser.WS);
			this.state = 658;
			this.ambiguousIdentifier();
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.LPAREN) {
				{
				this.state = 659;
				this.match(BosParser.LPAREN);
				this.state = 660;
				this.match(BosParser.INTEGERLITERAL);
				this.state = 661;
				this.match(BosParser.RPAREN);
				}
			}

			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 664;
				this.match(BosParser.WS);
				this.state = 665;
				this.match(BosParser.GUID);
				}
			}

			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 668;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BEGINPROPERTY) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)) | (1 << (BosParser.DOT - 166)) | (1 << (BosParser.EXCLAMATIONMARK - 166)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 673;
					this.cp_Properties();
					}
					}
					this.state = 676;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BEGINPROPERTY) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)) | (1 << (BosParser.DOT - 166)) | (1 << (BosParser.EXCLAMATIONMARK - 166)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0));
				}
			}

			this.state = 680;
			this.match(BosParser.ENDPROPERTY);
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 681;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
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
	public cp_ControlType(): Cp_ControlTypeContext {
		let _localctx: Cp_ControlTypeContext = new Cp_ControlTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, BosParser.RULE_cp_ControlType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.complexType();
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
	public cp_ControlIdentifier(): Cp_ControlIdentifierContext {
		let _localctx: Cp_ControlIdentifierContext = new Cp_ControlIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, BosParser.RULE_cp_ControlIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.ambiguousIdentifier();
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
	public moduleBlock(): ModuleBlockContext {
		let _localctx: ModuleBlockContext = new ModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, BosParser.RULE_moduleBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.block();
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
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, BosParser.RULE_importStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.match(BosParser.IMPORT);
			this.state = 693;
			this.match(BosParser.WS);
			this.state = 694;
			this.type();
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
	public attributeStmt(): AttributeStmtContext {
		let _localctx: AttributeStmtContext = new AttributeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, BosParser.RULE_attributeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.match(BosParser.ATTRIBUTE);
			this.state = 697;
			this.match(BosParser.WS);
			this.state = 698;
			this.implicitCallStmt_InStmt();
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 699;
				this.match(BosParser.WS);
				}
			}

			this.state = 702;
			this.match(BosParser.EQ);
			this.state = 704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 703;
				this.match(BosParser.WS);
				}
			}

			this.state = 706;
			this.literal();
			this.state = 717;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 708;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 707;
						this.match(BosParser.WS);
						}
					}

					this.state = 710;
					this.match(BosParser.COMMA);
					this.state = 712;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 711;
						this.match(BosParser.WS);
						}
					}

					this.state = 714;
					this.literal();
					}
					}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, BosParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.blockStmt();
			this.state = 732;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 722;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 721;
						this.match(BosParser.NEWLINE);
						}
						}
						this.state = 724;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === BosParser.NEWLINE);
					this.state = 727;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
					case 1:
						{
						this.state = 726;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 729;
					this.blockStmt();
					}
					}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
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
	public blockStmt(): BlockStmtContext {
		let _localctx: BlockStmtContext = new BlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, BosParser.RULE_blockStmt);
		try {
			this.state = 802;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 735;
				this.appActivateStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.attributeStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 737;
				this.chDirStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 738;
				this.chDriveStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 739;
				this.closeStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 740;
				this.constStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 741;
				this.dateStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 742;
				this.deleteSettingStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 743;
				this.deftypeStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 744;
				this.doLoopStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 745;
				this.endStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 746;
				this.eraseStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 747;
				this.errorStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 748;
				this.exitStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 749;
				this.explicitCallStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 750;
				this.filecopyStmt();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 751;
				this.forEachStmt();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 752;
				this.forNextStmt();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 753;
				this.getStmt();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 754;
				this.goSubStmt();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 755;
				this.goToStmt();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 756;
				this.ifThenElseStmt();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 757;
				this.implementsStmt();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 758;
				this.inputStmt();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 759;
				this.killStmt();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 760;
				this.letStmt();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 761;
				this.lineInputStmt();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 762;
				this.lineLabel();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 763;
				this.loadStmt();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 764;
				this.lockStmt();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 765;
				this.lsetStmt();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 766;
				this.macroIfThenElseStmt();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 767;
				this.midStmt();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 768;
				this.mkdirStmt();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 769;
				this.nameStmt();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 770;
				this.onErrorStmt();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 771;
				this.onGoToStmt();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 772;
				this.onGoSubStmt();
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 773;
				this.openStmt();
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 774;
				this.printStmt();
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 775;
				this.putStmt();
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 776;
				this.raiseEventStmt();
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 777;
				this.randomizeStmt();
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 778;
				this.redimStmt();
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 779;
				this.resetStmt();
				}
				break;

			case 46:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 780;
				this.resumeStmt();
				}
				break;

			case 47:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 781;
				this.returnStmt();
				}
				break;

			case 48:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 782;
				this.rmdirStmt();
				}
				break;

			case 49:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 783;
				this.rsetStmt();
				}
				break;

			case 50:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 784;
				this.savepictureStmt();
				}
				break;

			case 51:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 785;
				this.saveSettingStmt();
				}
				break;

			case 52:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 786;
				this.seekStmt();
				}
				break;

			case 53:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 787;
				this.selectCaseStmt();
				}
				break;

			case 54:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 788;
				this.sendkeysStmt();
				}
				break;

			case 55:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 789;
				this.setattrStmt();
				}
				break;

			case 56:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 790;
				this.setStmt();
				}
				break;

			case 57:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 791;
				this.stopStmt();
				}
				break;

			case 58:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 792;
				this.timeStmt();
				}
				break;

			case 59:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 793;
				this.unloadStmt();
				}
				break;

			case 60:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 794;
				this.unlockStmt();
				}
				break;

			case 61:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 795;
				this.variableStmt();
				}
				break;

			case 62:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 796;
				this.whileWendStmt();
				}
				break;

			case 63:
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 797;
				this.widthStmt();
				}
				break;

			case 64:
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 798;
				this.withStmt();
				}
				break;

			case 65:
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 799;
				this.writeStmt();
				}
				break;

			case 66:
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 800;
				this.implicitCallStmt_InBlock();
				}
				break;

			case 67:
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 801;
				this.implicitCallStmt_InStmt();
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
	// @RuleVersion(0)
	public appActivateStmt(): AppActivateStmtContext {
		let _localctx: AppActivateStmtContext = new AppActivateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, BosParser.RULE_appActivateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.match(BosParser.APPACTIVATE);
			this.state = 805;
			this.match(BosParser.WS);
			this.state = 806;
			this.valueStmt(0);
			this.state = 815;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 807;
					this.match(BosParser.WS);
					}
				}

				this.state = 810;
				this.match(BosParser.COMMA);
				this.state = 812;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 811;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 814;
				this.valueStmt(0);
				}
				break;
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
	public beepStmt(): BeepStmtContext {
		let _localctx: BeepStmtContext = new BeepStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, BosParser.RULE_beepStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.match(BosParser.BEEP);
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
	public chDirStmt(): ChDirStmtContext {
		let _localctx: ChDirStmtContext = new ChDirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, BosParser.RULE_chDirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.match(BosParser.CHDIR);
			this.state = 820;
			this.match(BosParser.WS);
			this.state = 821;
			this.valueStmt(0);
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
	public chDriveStmt(): ChDriveStmtContext {
		let _localctx: ChDriveStmtContext = new ChDriveStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, BosParser.RULE_chDriveStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.match(BosParser.CHDRIVE);
			this.state = 824;
			this.match(BosParser.WS);
			this.state = 825;
			this.valueStmt(0);
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
	public classStmt(): ClassStmtContext {
		let _localctx: ClassStmtContext = new ClassStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, BosParser.RULE_classStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 827;
				this.visibility();
				this.state = 828;
				this.match(BosParser.WS);
				}
			}

			this.state = 832;
			this.match(BosParser.CLASS);
			this.state = 833;
			this.match(BosParser.WS);
			this.state = 834;
			this.ambiguousIdentifier();
			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 835;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)) | (1 << (BosParser.PROPERTY_GET - 97)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (BosParser.PROPERTY_SET - 130)) | (1 << (BosParser.PUBLIC - 130)) | (1 << (BosParser.PUT - 130)) | (1 << (BosParser.RANDOM - 130)) | (1 << (BosParser.RANDOMIZE - 130)) | (1 << (BosParser.RAISEEVENT - 130)) | (1 << (BosParser.READ - 130)) | (1 << (BosParser.REDIM - 130)) | (1 << (BosParser.REM - 130)) | (1 << (BosParser.RESET - 130)) | (1 << (BosParser.RESUME - 130)) | (1 << (BosParser.RETURN - 130)) | (1 << (BosParser.RMDIR - 130)) | (1 << (BosParser.RSET - 130)) | (1 << (BosParser.SAVEPICTURE - 130)) | (1 << (BosParser.SAVESETTING - 130)) | (1 << (BosParser.SEEK - 130)) | (1 << (BosParser.SELECT - 130)) | (1 << (BosParser.SENDKEYS - 130)) | (1 << (BosParser.SET - 130)) | (1 << (BosParser.SETATTR - 130)) | (1 << (BosParser.SHARED - 130)) | (1 << (BosParser.SINGLE - 130)) | (1 << (BosParser.SPC - 130)) | (1 << (BosParser.STATIC - 130)) | (1 << (BosParser.STEP - 130)) | (1 << (BosParser.STOP - 130)) | (1 << (BosParser.STRING - 130)) | (1 << (BosParser.SUB - 130)) | (1 << (BosParser.TAB - 130)) | (1 << (BosParser.TEXT - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (BosParser.THEN - 162)) | (1 << (BosParser.TIME - 162)) | (1 << (BosParser.TO - 162)) | (1 << (BosParser.TRUE - 162)) | (1 << (BosParser.TYPE - 162)) | (1 << (BosParser.TYPEOF - 162)) | (1 << (BosParser.UNLOAD - 162)) | (1 << (BosParser.UNLOCK - 162)) | (1 << (BosParser.UNTIL - 162)) | (1 << (BosParser.VARIANT - 162)) | (1 << (BosParser.VERSION - 162)) | (1 << (BosParser.WEND - 162)) | (1 << (BosParser.WHILE - 162)) | (1 << (BosParser.WIDTH - 162)) | (1 << (BosParser.WITH - 162)) | (1 << (BosParser.WITHEVENTS - 162)) | (1 << (BosParser.WRITE - 162)) | (1 << (BosParser.XOR - 162)) | (1 << (BosParser.DOT - 162)) | (1 << (BosParser.EXCLAMATIONMARK - 162)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 840;
				this.classBody();
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 841;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 844;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
			}

			this.state = 848;
			this.match(BosParser.END_CLASS);
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
	public closeStmt(): CloseStmtContext {
		let _localctx: CloseStmtContext = new CloseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, BosParser.RULE_closeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.match(BosParser.CLOSE);
			this.state = 866;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 851;
				this.match(BosParser.WS);
				this.state = 852;
				this.valueStmt(0);
				this.state = 863;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 854;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 853;
							this.match(BosParser.WS);
							}
						}

						this.state = 856;
						this.match(BosParser.COMMA);
						this.state = 858;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
						case 1:
							{
							this.state = 857;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 860;
						this.valueStmt(0);
						}
						}
					}
					this.state = 865;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				}
				break;
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
	public constStmt(): ConstStmtContext {
		let _localctx: ConstStmtContext = new ConstStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, BosParser.RULE_constStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 868;
				this.publicPrivateGlobalVisibility();
				this.state = 869;
				this.match(BosParser.WS);
				}
			}

			this.state = 873;
			this.match(BosParser.CONST);
			this.state = 874;
			this.match(BosParser.WS);
			this.state = 875;
			this.constSubStmt();
			this.state = 886;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 877;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 876;
						this.match(BosParser.WS);
						}
					}

					this.state = 879;
					this.match(BosParser.COMMA);
					this.state = 881;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 880;
						this.match(BosParser.WS);
						}
					}

					this.state = 883;
					this.constSubStmt();
					}
					}
				}
				this.state = 888;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
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
	public constSubStmt(): ConstSubStmtContext {
		let _localctx: ConstSubStmtContext = new ConstSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, BosParser.RULE_constSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 889;
			this.ambiguousIdentifier();
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
				{
				this.state = 890;
				this.typeHint();
				}
			}

			this.state = 895;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 893;
				this.match(BosParser.WS);
				this.state = 894;
				this.asTypeClause();
				}
				break;
			}
			this.state = 898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 897;
				this.match(BosParser.WS);
				}
			}

			this.state = 900;
			this.match(BosParser.EQ);
			this.state = 902;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 901;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 904;
			this.valueStmt(0);
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
	public dateStmt(): DateStmtContext {
		let _localctx: DateStmtContext = new DateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, BosParser.RULE_dateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.match(BosParser.DATE);
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 907;
				this.match(BosParser.WS);
				}
			}

			this.state = 910;
			this.match(BosParser.EQ);
			this.state = 912;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 911;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 914;
			this.valueStmt(0);
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
	public declareStmt(): DeclareStmtContext {
		let _localctx: DeclareStmtContext = new DeclareStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, BosParser.RULE_declareStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 916;
				this.visibility();
				this.state = 917;
				this.match(BosParser.WS);
				}
			}

			this.state = 921;
			this.match(BosParser.DECLARE);
			this.state = 922;
			this.match(BosParser.WS);
			this.state = 928;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BosParser.FUNCTION:
				{
				this.state = 923;
				this.match(BosParser.FUNCTION);
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
					{
					this.state = 924;
					this.typeHint();
					}
				}

				}
				break;
			case BosParser.SUB:
				{
				this.state = 927;
				this.match(BosParser.SUB);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 930;
			this.match(BosParser.WS);
			this.state = 931;
			this.ambiguousIdentifier();
			this.state = 933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
				{
				this.state = 932;
				this.typeHint();
				}
			}

			this.state = 935;
			this.match(BosParser.WS);
			this.state = 936;
			this.match(BosParser.LIB);
			this.state = 937;
			this.match(BosParser.WS);
			this.state = 938;
			this.match(BosParser.STRINGLITERAL);
			this.state = 943;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 939;
				this.match(BosParser.WS);
				this.state = 940;
				this.match(BosParser.ALIAS);
				this.state = 941;
				this.match(BosParser.WS);
				this.state = 942;
				this.match(BosParser.STRINGLITERAL);
				}
				break;
			}
			this.state = 949;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 945;
					this.match(BosParser.WS);
					}
				}

				this.state = 948;
				this.argList();
				}
				break;
			}
			this.state = 953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 951;
				this.match(BosParser.WS);
				this.state = 952;
				this.asTypeClause();
				}
				break;
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
	public deftypeStmt(): DeftypeStmtContext {
		let _localctx: DeftypeStmtContext = new DeftypeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, BosParser.RULE_deftypeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (BosParser.DEFBOOL - 27)) | (1 << (BosParser.DEFBYTE - 27)) | (1 << (BosParser.DEFDATE - 27)) | (1 << (BosParser.DEFDBL - 27)) | (1 << (BosParser.DEFDEC - 27)) | (1 << (BosParser.DEFCUR - 27)) | (1 << (BosParser.DEFINT - 27)) | (1 << (BosParser.DEFLNG - 27)) | (1 << (BosParser.DEFOBJ - 27)) | (1 << (BosParser.DEFSNG - 27)) | (1 << (BosParser.DEFSTR - 27)) | (1 << (BosParser.DEFVAR - 27)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 956;
			this.match(BosParser.WS);
			this.state = 957;
			this.letterrange();
			this.state = 968;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 959;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 958;
						this.match(BosParser.WS);
						}
					}

					this.state = 961;
					this.match(BosParser.COMMA);
					this.state = 963;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 962;
						this.match(BosParser.WS);
						}
					}

					this.state = 965;
					this.letterrange();
					}
					}
				}
				this.state = 970;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
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
	public deleteSettingStmt(): DeleteSettingStmtContext {
		let _localctx: DeleteSettingStmtContext = new DeleteSettingStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, BosParser.RULE_deleteSettingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.match(BosParser.DELETESETTING);
			this.state = 972;
			this.match(BosParser.WS);
			this.state = 973;
			this.valueStmt(0);
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 974;
				this.match(BosParser.WS);
				}
			}

			this.state = 977;
			this.match(BosParser.COMMA);
			this.state = 979;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 978;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 981;
			this.valueStmt(0);
			this.state = 990;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 982;
					this.match(BosParser.WS);
					}
				}

				this.state = 985;
				this.match(BosParser.COMMA);
				this.state = 987;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 986;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 989;
				this.valueStmt(0);
				}
				break;
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
	public doLoopStmt(): DoLoopStmtContext {
		let _localctx: DoLoopStmtContext = new DoLoopStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, BosParser.RULE_doLoopStmt);
		let _la: number;
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 992;
				this.match(BosParser.DO);
				this.state = 994;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 993;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 996;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				this.state = 1004;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 998;
					this.block();
					this.state = 1000;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 999;
						this.match(BosParser.NEWLINE);
						}
						}
						this.state = 1002;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === BosParser.NEWLINE);
					}
					break;
				}
				this.state = 1006;
				this.match(BosParser.LOOP);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1007;
				this.match(BosParser.DO);
				this.state = 1008;
				this.match(BosParser.WS);
				this.state = 1009;
				_la = this._input.LA(1);
				if (!(_la === BosParser.UNTIL || _la === BosParser.WHILE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1010;
				this.match(BosParser.WS);
				this.state = 1011;
				this.valueStmt(0);
				this.state = 1013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1012;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1015;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				this.state = 1023;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 1017;
					this.block();
					this.state = 1019;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 1018;
						this.match(BosParser.NEWLINE);
						}
						}
						this.state = 1021;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === BosParser.NEWLINE);
					}
					break;
				}
				this.state = 1025;
				this.match(BosParser.LOOP);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1027;
				this.match(BosParser.DO);
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1028;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1031;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				{
				this.state = 1033;
				this.block();
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1034;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1037;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
				this.state = 1039;
				this.match(BosParser.LOOP);
				this.state = 1040;
				this.match(BosParser.WS);
				this.state = 1041;
				_la = this._input.LA(1);
				if (!(_la === BosParser.UNTIL || _la === BosParser.WHILE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1042;
				this.match(BosParser.WS);
				this.state = 1043;
				this.valueStmt(0);
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
	// @RuleVersion(0)
	public endStmt(): EndStmtContext {
		let _localctx: EndStmtContext = new EndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, BosParser.RULE_endStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(BosParser.END);
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
	public enumerationStmt(): EnumerationStmtContext {
		let _localctx: EnumerationStmtContext = new EnumerationStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, BosParser.RULE_enumerationStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 1049;
				this.publicPrivateVisibility();
				this.state = 1050;
				this.match(BosParser.WS);
				}
			}

			this.state = 1054;
			this.match(BosParser.ENUM);
			this.state = 1055;
			this.match(BosParser.WS);
			this.state = 1056;
			this.ambiguousIdentifier();
			this.state = 1058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1057;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)))) !== 0) || _la === BosParser.L_SQUARE_BRACKET || _la === BosParser.IDENTIFIER) {
				{
				{
				this.state = 1062;
				this.enumerationStmt_Constant();
				}
				}
				this.state = 1067;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1068;
			this.match(BosParser.END_ENUM);
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
	public enumerationStmt_Constant(): EnumerationStmt_ConstantContext {
		let _localctx: EnumerationStmt_ConstantContext = new EnumerationStmt_ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, BosParser.RULE_enumerationStmt_Constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this.ambiguousIdentifier();
			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.EQ || _la === BosParser.WS) {
				{
				this.state = 1072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 1071;
					this.match(BosParser.WS);
					}
				}

				this.state = 1074;
				this.match(BosParser.EQ);
				this.state = 1076;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1075;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 1078;
				this.valueStmt(0);
				}
			}

			this.state = 1082;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1081;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
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
	public eraseStmt(): EraseStmtContext {
		let _localctx: EraseStmtContext = new EraseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, BosParser.RULE_eraseStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1086;
			this.match(BosParser.ERASE);
			this.state = 1087;
			this.match(BosParser.WS);
			this.state = 1088;
			this.valueStmt(0);
			this.state = 1099;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1090;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 1089;
						this.match(BosParser.WS);
						}
					}

					this.state = 1092;
					this.match(BosParser.COMMA);
					this.state = 1094;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
					case 1:
						{
						this.state = 1093;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 1096;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1101;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
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
	public errorStmt(): ErrorStmtContext {
		let _localctx: ErrorStmtContext = new ErrorStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, BosParser.RULE_errorStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1102;
			this.match(BosParser.ERROR);
			this.state = 1103;
			this.match(BosParser.WS);
			this.state = 1104;
			this.valueStmt(0);
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
	public eventStmt(): EventStmtContext {
		let _localctx: EventStmtContext = new EventStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, BosParser.RULE_eventStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 1106;
				this.visibility();
				this.state = 1107;
				this.match(BosParser.WS);
				}
			}

			this.state = 1111;
			this.match(BosParser.EVENT);
			this.state = 1112;
			this.match(BosParser.WS);
			this.state = 1113;
			this.ambiguousIdentifier();
			this.state = 1115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1114;
				this.match(BosParser.WS);
				}
			}

			this.state = 1117;
			this.argList();
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
	public exitStmt(): ExitStmtContext {
		let _localctx: ExitStmtContext = new ExitStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, BosParser.RULE_exitStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1119;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (BosParser.EXIT_DO - 62)) | (1 << (BosParser.EXIT_FOR - 62)) | (1 << (BosParser.EXIT_FUNCTION - 62)) | (1 << (BosParser.EXIT_PROPERTY - 62)) | (1 << (BosParser.EXIT_SUB - 62)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public filecopyStmt(): FilecopyStmtContext {
		let _localctx: FilecopyStmtContext = new FilecopyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, BosParser.RULE_filecopyStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			this.match(BosParser.FILECOPY);
			this.state = 1122;
			this.match(BosParser.WS);
			this.state = 1123;
			this.valueStmt(0);
			this.state = 1125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1124;
				this.match(BosParser.WS);
				}
			}

			this.state = 1127;
			this.match(BosParser.COMMA);
			this.state = 1129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1128;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1131;
			this.valueStmt(0);
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
	public forEachStmt(): ForEachStmtContext {
		let _localctx: ForEachStmtContext = new ForEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, BosParser.RULE_forEachStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1133;
			this.match(BosParser.FOR);
			this.state = 1134;
			this.match(BosParser.WS);
			this.state = 1135;
			this.match(BosParser.EACH);
			this.state = 1136;
			this.match(BosParser.WS);
			this.state = 1137;
			this.ambiguousIdentifier();
			this.state = 1139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
				{
				this.state = 1138;
				this.typeHint();
				}
			}

			this.state = 1141;
			this.match(BosParser.WS);
			this.state = 1142;
			this.match(BosParser.IN);
			this.state = 1143;
			this.match(BosParser.WS);
			this.state = 1144;
			this.valueStmt(0);
			this.state = 1146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1145;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1150;
				this.block();
				this.state = 1152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1151;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
				break;
			}
			this.state = 1158;
			this.match(BosParser.NEXT);
			this.state = 1161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1159;
				this.match(BosParser.WS);
				this.state = 1160;
				this.ambiguousIdentifier();
				}
				break;
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
	public forNextStmt(): ForNextStmtContext {
		let _localctx: ForNextStmtContext = new ForNextStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, BosParser.RULE_forNextStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1163;
			this.match(BosParser.FOR);
			this.state = 1164;
			this.match(BosParser.WS);
			this.state = 1165;
			this.iCS_S_VariableOrProcedureCall();
			this.state = 1167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
				{
				this.state = 1166;
				this.typeHint();
				}
			}

			this.state = 1171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1169;
				this.match(BosParser.WS);
				this.state = 1170;
				this.asTypeClause();
				}
				break;
			}
			this.state = 1174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1173;
				this.match(BosParser.WS);
				}
			}

			this.state = 1176;
			this.match(BosParser.EQ);
			this.state = 1178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1177;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1180;
			this.valueStmt(0);
			this.state = 1181;
			this.match(BosParser.WS);
			this.state = 1182;
			this.match(BosParser.TO);
			this.state = 1183;
			this.match(BosParser.WS);
			this.state = 1184;
			this.valueStmt(0);
			this.state = 1189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1185;
				this.match(BosParser.WS);
				this.state = 1186;
				this.match(BosParser.STEP);
				this.state = 1187;
				this.match(BosParser.WS);
				this.state = 1188;
				this.valueStmt(0);
				}
			}

			this.state = 1192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1191;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1196;
				this.block();
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1197;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
				break;
			}
			this.state = 1204;
			this.match(BosParser.NEXT);
			this.state = 1210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				{
				this.state = 1205;
				this.match(BosParser.WS);
				this.state = 1206;
				this.ambiguousIdentifier();
				this.state = 1208;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
				case 1:
					{
					this.state = 1207;
					this.typeHint();
					}
					break;
				}
				}
				break;
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
	public functionStmt(): FunctionStmtContext {
		let _localctx: FunctionStmtContext = new FunctionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, BosParser.RULE_functionStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 1212;
				this.visibility();
				this.state = 1213;
				this.match(BosParser.WS);
				}
			}

			this.state = 1219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.STATIC) {
				{
				this.state = 1217;
				this.match(BosParser.STATIC);
				this.state = 1218;
				this.match(BosParser.WS);
				}
			}

			this.state = 1221;
			this.match(BosParser.FUNCTION);
			this.state = 1222;
			this.match(BosParser.WS);
			this.state = 1223;
			this.ambiguousIdentifier();
			this.state = 1228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 1224;
					this.match(BosParser.WS);
					}
				}

				this.state = 1227;
				this.argList();
				}
				break;
			}
			this.state = 1232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1230;
				this.match(BosParser.WS);
				this.state = 1231;
				this.asTypeClause();
				}
			}

			this.state = 1235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1234;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (BosParser.PUBLIC - 131)) | (1 << (BosParser.PUT - 131)) | (1 << (BosParser.RANDOM - 131)) | (1 << (BosParser.RANDOMIZE - 131)) | (1 << (BosParser.RAISEEVENT - 131)) | (1 << (BosParser.READ - 131)) | (1 << (BosParser.REDIM - 131)) | (1 << (BosParser.REM - 131)) | (1 << (BosParser.RESET - 131)) | (1 << (BosParser.RESUME - 131)) | (1 << (BosParser.RETURN - 131)) | (1 << (BosParser.RMDIR - 131)) | (1 << (BosParser.RSET - 131)) | (1 << (BosParser.SAVEPICTURE - 131)) | (1 << (BosParser.SAVESETTING - 131)) | (1 << (BosParser.SEEK - 131)) | (1 << (BosParser.SELECT - 131)) | (1 << (BosParser.SENDKEYS - 131)) | (1 << (BosParser.SET - 131)) | (1 << (BosParser.SETATTR - 131)) | (1 << (BosParser.SHARED - 131)) | (1 << (BosParser.SINGLE - 131)) | (1 << (BosParser.SPC - 131)) | (1 << (BosParser.STATIC - 131)) | (1 << (BosParser.STEP - 131)) | (1 << (BosParser.STOP - 131)) | (1 << (BosParser.STRING - 131)) | (1 << (BosParser.SUB - 131)) | (1 << (BosParser.TAB - 131)) | (1 << (BosParser.TEXT - 131)) | (1 << (BosParser.THEN - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (BosParser.TIME - 163)) | (1 << (BosParser.TO - 163)) | (1 << (BosParser.TRUE - 163)) | (1 << (BosParser.TYPE - 163)) | (1 << (BosParser.TYPEOF - 163)) | (1 << (BosParser.UNLOAD - 163)) | (1 << (BosParser.UNLOCK - 163)) | (1 << (BosParser.UNTIL - 163)) | (1 << (BosParser.VARIANT - 163)) | (1 << (BosParser.VERSION - 163)) | (1 << (BosParser.WEND - 163)) | (1 << (BosParser.WHILE - 163)) | (1 << (BosParser.WIDTH - 163)) | (1 << (BosParser.WITH - 163)) | (1 << (BosParser.WITHEVENTS - 163)) | (1 << (BosParser.WRITE - 163)) | (1 << (BosParser.XOR - 163)) | (1 << (BosParser.DOT - 163)) | (1 << (BosParser.EXCLAMATIONMARK - 163)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 1239;
				this.block();
				this.state = 1241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1240;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
			}

			this.state = 1247;
			this.match(BosParser.END_FUNCTION);
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
	public getStmt(): GetStmtContext {
		let _localctx: GetStmtContext = new GetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, BosParser.RULE_getStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1249;
			this.match(BosParser.GET);
			this.state = 1250;
			this.match(BosParser.WS);
			this.state = 1251;
			this.valueStmt(0);
			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1252;
				this.match(BosParser.WS);
				}
			}

			this.state = 1255;
			this.match(BosParser.COMMA);
			this.state = 1257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				{
				this.state = 1256;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1259;
				this.valueStmt(0);
				}
				break;
			}
			this.state = 1263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1262;
				this.match(BosParser.WS);
				}
			}

			this.state = 1265;
			this.match(BosParser.COMMA);
			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1266;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1269;
			this.valueStmt(0);
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
	public goSubStmt(): GoSubStmtContext {
		let _localctx: GoSubStmtContext = new GoSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, BosParser.RULE_goSubStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1271;
			this.match(BosParser.GOSUB);
			this.state = 1272;
			this.match(BosParser.WS);
			this.state = 1273;
			this.valueStmt(0);
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
	public goToStmt(): GoToStmtContext {
		let _localctx: GoToStmtContext = new GoToStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, BosParser.RULE_goToStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1275;
			this.match(BosParser.GOTO);
			this.state = 1276;
			this.match(BosParser.WS);
			this.state = 1277;
			this.valueStmt(0);
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
	public ifThenElseStmt(): IfThenElseStmtContext {
		let _localctx: IfThenElseStmtContext = new IfThenElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, BosParser.RULE_ifThenElseStmt);
		let _la: number;
		try {
			this.state = 1304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				_localctx = new InlineIfThenElseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1279;
				this.match(BosParser.IF);
				this.state = 1280;
				this.match(BosParser.WS);
				this.state = 1281;
				this.ifConditionStmt();
				this.state = 1282;
				this.match(BosParser.WS);
				this.state = 1283;
				this.match(BosParser.THEN);
				this.state = 1284;
				this.match(BosParser.WS);
				this.state = 1285;
				this.blockStmt();
				this.state = 1290;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
				case 1:
					{
					this.state = 1286;
					this.match(BosParser.WS);
					this.state = 1287;
					this.match(BosParser.ELSE);
					this.state = 1288;
					this.match(BosParser.WS);
					this.state = 1289;
					this.blockStmt();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new BlockIfThenElseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1292;
				this.ifBlockStmt();
				this.state = 1296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BosParser.ELSEIF) {
					{
					{
					this.state = 1293;
					this.ifElseIfBlockStmt();
					}
					}
					this.state = 1298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.ELSE) {
					{
					this.state = 1299;
					this.ifElseBlockStmt();
					}
				}

				this.state = 1302;
				this.match(BosParser.END_IF);
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
	// @RuleVersion(0)
	public ifBlockStmt(): IfBlockStmtContext {
		let _localctx: IfBlockStmtContext = new IfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, BosParser.RULE_ifBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1306;
			this.match(BosParser.IF);
			this.state = 1307;
			this.match(BosParser.WS);
			this.state = 1308;
			this.ifConditionStmt();
			this.state = 1309;
			this.match(BosParser.WS);
			this.state = 1310;
			this.match(BosParser.THEN);
			this.state = 1312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1311;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				this.state = 1316;
				this.block();
				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1317;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
				break;
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
	public ifConditionStmt(): IfConditionStmtContext {
		let _localctx: IfConditionStmtContext = new IfConditionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, BosParser.RULE_ifConditionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1324;
			this.valueStmt(0);
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
	public ifElseIfBlockStmt(): IfElseIfBlockStmtContext {
		let _localctx: IfElseIfBlockStmtContext = new IfElseIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, BosParser.RULE_ifElseIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			this.match(BosParser.ELSEIF);
			this.state = 1327;
			this.match(BosParser.WS);
			this.state = 1328;
			this.ifConditionStmt();
			this.state = 1329;
			this.match(BosParser.WS);
			this.state = 1330;
			this.match(BosParser.THEN);
			this.state = 1332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1331;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1342;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1336;
				this.block();
				this.state = 1338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1337;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
				break;
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
	public ifElseBlockStmt(): IfElseBlockStmtContext {
		let _localctx: IfElseBlockStmtContext = new IfElseBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, BosParser.RULE_ifElseBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1344;
			this.match(BosParser.ELSE);
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1345;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (BosParser.PUBLIC - 131)) | (1 << (BosParser.PUT - 131)) | (1 << (BosParser.RANDOM - 131)) | (1 << (BosParser.RANDOMIZE - 131)) | (1 << (BosParser.RAISEEVENT - 131)) | (1 << (BosParser.READ - 131)) | (1 << (BosParser.REDIM - 131)) | (1 << (BosParser.REM - 131)) | (1 << (BosParser.RESET - 131)) | (1 << (BosParser.RESUME - 131)) | (1 << (BosParser.RETURN - 131)) | (1 << (BosParser.RMDIR - 131)) | (1 << (BosParser.RSET - 131)) | (1 << (BosParser.SAVEPICTURE - 131)) | (1 << (BosParser.SAVESETTING - 131)) | (1 << (BosParser.SEEK - 131)) | (1 << (BosParser.SELECT - 131)) | (1 << (BosParser.SENDKEYS - 131)) | (1 << (BosParser.SET - 131)) | (1 << (BosParser.SETATTR - 131)) | (1 << (BosParser.SHARED - 131)) | (1 << (BosParser.SINGLE - 131)) | (1 << (BosParser.SPC - 131)) | (1 << (BosParser.STATIC - 131)) | (1 << (BosParser.STEP - 131)) | (1 << (BosParser.STOP - 131)) | (1 << (BosParser.STRING - 131)) | (1 << (BosParser.SUB - 131)) | (1 << (BosParser.TAB - 131)) | (1 << (BosParser.TEXT - 131)) | (1 << (BosParser.THEN - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (BosParser.TIME - 163)) | (1 << (BosParser.TO - 163)) | (1 << (BosParser.TRUE - 163)) | (1 << (BosParser.TYPE - 163)) | (1 << (BosParser.TYPEOF - 163)) | (1 << (BosParser.UNLOAD - 163)) | (1 << (BosParser.UNLOCK - 163)) | (1 << (BosParser.UNTIL - 163)) | (1 << (BosParser.VARIANT - 163)) | (1 << (BosParser.VERSION - 163)) | (1 << (BosParser.WEND - 163)) | (1 << (BosParser.WHILE - 163)) | (1 << (BosParser.WIDTH - 163)) | (1 << (BosParser.WITH - 163)) | (1 << (BosParser.WITHEVENTS - 163)) | (1 << (BosParser.WRITE - 163)) | (1 << (BosParser.XOR - 163)) | (1 << (BosParser.DOT - 163)) | (1 << (BosParser.EXCLAMATIONMARK - 163)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 1350;
				this.block();
				this.state = 1352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1351;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1354;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
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
	public implementsStmt(): ImplementsStmtContext {
		let _localctx: ImplementsStmtContext = new ImplementsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, BosParser.RULE_implementsStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1358;
			this.match(BosParser.IMPLEMENTS);
			this.state = 1359;
			this.match(BosParser.WS);
			this.state = 1360;
			this.ambiguousIdentifier();
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
	public inputStmt(): InputStmtContext {
		let _localctx: InputStmtContext = new InputStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, BosParser.RULE_inputStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1362;
			this.match(BosParser.INPUT);
			this.state = 1363;
			this.match(BosParser.WS);
			this.state = 1364;
			this.valueStmt(0);
			this.state = 1373;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 1365;
						this.match(BosParser.WS);
						}
					}

					this.state = 1368;
					this.match(BosParser.COMMA);
					this.state = 1370;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
					case 1:
						{
						this.state = 1369;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 1372;
					this.valueStmt(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public killStmt(): KillStmtContext {
		let _localctx: KillStmtContext = new KillStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, BosParser.RULE_killStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1377;
			this.match(BosParser.KILL);
			this.state = 1378;
			this.match(BosParser.WS);
			this.state = 1379;
			this.valueStmt(0);
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
	public letStmt(): LetStmtContext {
		let _localctx: LetStmtContext = new LetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, BosParser.RULE_letStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				{
				this.state = 1381;
				this.match(BosParser.LET);
				this.state = 1382;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1385;
			this.implicitCallStmt_InStmt();
			this.state = 1387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1386;
				this.match(BosParser.WS);
				}
			}

			this.state = 1389;
			_la = this._input.LA(1);
			if (!(((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (BosParser.EQ - 188)) | (1 << (BosParser.MINUS_EQ - 188)) | (1 << (BosParser.PLUS_EQ - 188)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1391;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1390;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1393;
			this.valueStmt(0);
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
	public lineInputStmt(): LineInputStmtContext {
		let _localctx: LineInputStmtContext = new LineInputStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, BosParser.RULE_lineInputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1395;
			this.match(BosParser.LINE_INPUT);
			this.state = 1396;
			this.match(BosParser.WS);
			this.state = 1397;
			this.valueStmt(0);
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1398;
				this.match(BosParser.WS);
				}
			}

			this.state = 1401;
			this.match(BosParser.COMMA);
			this.state = 1403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				this.state = 1402;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1405;
			this.valueStmt(0);
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
	public loadStmt(): LoadStmtContext {
		let _localctx: LoadStmtContext = new LoadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, BosParser.RULE_loadStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1407;
			this.match(BosParser.LOAD);
			this.state = 1408;
			this.match(BosParser.WS);
			this.state = 1409;
			this.valueStmt(0);
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
	public lockStmt(): LockStmtContext {
		let _localctx: LockStmtContext = new LockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, BosParser.RULE_lockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1411;
			this.match(BosParser.LOCK);
			this.state = 1412;
			this.match(BosParser.WS);
			this.state = 1413;
			this.valueStmt(0);
			this.state = 1428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				{
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 1414;
					this.match(BosParser.WS);
					}
				}

				this.state = 1417;
				this.match(BosParser.COMMA);
				this.state = 1419;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1418;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 1421;
				this.valueStmt(0);
				this.state = 1426;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
				case 1:
					{
					this.state = 1422;
					this.match(BosParser.WS);
					this.state = 1423;
					this.match(BosParser.TO);
					this.state = 1424;
					this.match(BosParser.WS);
					this.state = 1425;
					this.valueStmt(0);
					}
					break;
				}
				}
				break;
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
	public lsetStmt(): LsetStmtContext {
		let _localctx: LsetStmtContext = new LsetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, BosParser.RULE_lsetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
			this.match(BosParser.LSET);
			this.state = 1431;
			this.match(BosParser.WS);
			this.state = 1432;
			this.implicitCallStmt_InStmt();
			this.state = 1434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1433;
				this.match(BosParser.WS);
				}
			}

			this.state = 1436;
			this.match(BosParser.EQ);
			this.state = 1438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				this.state = 1437;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1440;
			this.valueStmt(0);
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
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext {
		let _localctx: MacroIfThenElseStmtContext = new MacroIfThenElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, BosParser.RULE_macroIfThenElseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1442;
			this.macroIfBlockStmt();
			this.state = 1446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BosParser.MACRO_ELSEIF) {
				{
				{
				this.state = 1443;
				this.macroElseIfBlockStmt();
				}
				}
				this.state = 1448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.MACRO_ELSE) {
				{
				this.state = 1449;
				this.macroElseBlockStmt();
				}
			}

			this.state = 1452;
			this.match(BosParser.MACRO_END_IF);
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
	public macroIfBlockStmt(): MacroIfBlockStmtContext {
		let _localctx: MacroIfBlockStmtContext = new MacroIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, BosParser.RULE_macroIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1454;
			this.match(BosParser.MACRO_IF);
			this.state = 1455;
			this.match(BosParser.WS);
			this.state = 1456;
			this.ifConditionStmt();
			this.state = 1457;
			this.match(BosParser.WS);
			this.state = 1458;
			this.match(BosParser.THEN);
			this.state = 1460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1459;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OPTION_BASE - 97)) | (1 << (BosParser.OPTION_EXPLICIT - 97)) | (1 << (BosParser.OPTION_COMPARE - 97)) | (1 << (BosParser.OPTION_PRIVATE_MODULE - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)) | (1 << (BosParser.PROPERTY_GET - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (BosParser.PROPERTY_LET - 129)) | (1 << (BosParser.PROPERTY_SET - 129)) | (1 << (BosParser.PUBLIC - 129)) | (1 << (BosParser.PUT - 129)) | (1 << (BosParser.RANDOM - 129)) | (1 << (BosParser.RANDOMIZE - 129)) | (1 << (BosParser.RAISEEVENT - 129)) | (1 << (BosParser.READ - 129)) | (1 << (BosParser.REDIM - 129)) | (1 << (BosParser.REM - 129)) | (1 << (BosParser.RESET - 129)) | (1 << (BosParser.RESUME - 129)) | (1 << (BosParser.RETURN - 129)) | (1 << (BosParser.RMDIR - 129)) | (1 << (BosParser.RSET - 129)) | (1 << (BosParser.SAVEPICTURE - 129)) | (1 << (BosParser.SAVESETTING - 129)) | (1 << (BosParser.SEEK - 129)) | (1 << (BosParser.SELECT - 129)) | (1 << (BosParser.SENDKEYS - 129)) | (1 << (BosParser.SET - 129)) | (1 << (BosParser.SETATTR - 129)) | (1 << (BosParser.SHARED - 129)) | (1 << (BosParser.SINGLE - 129)) | (1 << (BosParser.SPC - 129)) | (1 << (BosParser.STATIC - 129)) | (1 << (BosParser.STEP - 129)) | (1 << (BosParser.STOP - 129)) | (1 << (BosParser.STRING - 129)) | (1 << (BosParser.SUB - 129)) | (1 << (BosParser.TAB - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (BosParser.TEXT - 161)) | (1 << (BosParser.THEN - 161)) | (1 << (BosParser.TIME - 161)) | (1 << (BosParser.TO - 161)) | (1 << (BosParser.TRUE - 161)) | (1 << (BosParser.TYPE - 161)) | (1 << (BosParser.TYPEOF - 161)) | (1 << (BosParser.UNLOAD - 161)) | (1 << (BosParser.UNLOCK - 161)) | (1 << (BosParser.UNTIL - 161)) | (1 << (BosParser.VARIANT - 161)) | (1 << (BosParser.VERSION - 161)) | (1 << (BosParser.WEND - 161)) | (1 << (BosParser.WHILE - 161)) | (1 << (BosParser.WIDTH - 161)) | (1 << (BosParser.WITH - 161)) | (1 << (BosParser.WITHEVENTS - 161)) | (1 << (BosParser.WRITE - 161)) | (1 << (BosParser.XOR - 161)) | (1 << (BosParser.DOT - 161)) | (1 << (BosParser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 1464;
				this.moduleBody();
				this.state = 1466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1465;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1468;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
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
	public macroElseIfBlockStmt(): MacroElseIfBlockStmtContext {
		let _localctx: MacroElseIfBlockStmtContext = new MacroElseIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, BosParser.RULE_macroElseIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1472;
			this.match(BosParser.MACRO_ELSEIF);
			this.state = 1473;
			this.match(BosParser.WS);
			this.state = 1474;
			this.ifConditionStmt();
			this.state = 1475;
			this.match(BosParser.WS);
			this.state = 1476;
			this.match(BosParser.THEN);
			this.state = 1478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1477;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OPTION_BASE - 97)) | (1 << (BosParser.OPTION_EXPLICIT - 97)) | (1 << (BosParser.OPTION_COMPARE - 97)) | (1 << (BosParser.OPTION_PRIVATE_MODULE - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)) | (1 << (BosParser.PROPERTY_GET - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (BosParser.PROPERTY_LET - 129)) | (1 << (BosParser.PROPERTY_SET - 129)) | (1 << (BosParser.PUBLIC - 129)) | (1 << (BosParser.PUT - 129)) | (1 << (BosParser.RANDOM - 129)) | (1 << (BosParser.RANDOMIZE - 129)) | (1 << (BosParser.RAISEEVENT - 129)) | (1 << (BosParser.READ - 129)) | (1 << (BosParser.REDIM - 129)) | (1 << (BosParser.REM - 129)) | (1 << (BosParser.RESET - 129)) | (1 << (BosParser.RESUME - 129)) | (1 << (BosParser.RETURN - 129)) | (1 << (BosParser.RMDIR - 129)) | (1 << (BosParser.RSET - 129)) | (1 << (BosParser.SAVEPICTURE - 129)) | (1 << (BosParser.SAVESETTING - 129)) | (1 << (BosParser.SEEK - 129)) | (1 << (BosParser.SELECT - 129)) | (1 << (BosParser.SENDKEYS - 129)) | (1 << (BosParser.SET - 129)) | (1 << (BosParser.SETATTR - 129)) | (1 << (BosParser.SHARED - 129)) | (1 << (BosParser.SINGLE - 129)) | (1 << (BosParser.SPC - 129)) | (1 << (BosParser.STATIC - 129)) | (1 << (BosParser.STEP - 129)) | (1 << (BosParser.STOP - 129)) | (1 << (BosParser.STRING - 129)) | (1 << (BosParser.SUB - 129)) | (1 << (BosParser.TAB - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (BosParser.TEXT - 161)) | (1 << (BosParser.THEN - 161)) | (1 << (BosParser.TIME - 161)) | (1 << (BosParser.TO - 161)) | (1 << (BosParser.TRUE - 161)) | (1 << (BosParser.TYPE - 161)) | (1 << (BosParser.TYPEOF - 161)) | (1 << (BosParser.UNLOAD - 161)) | (1 << (BosParser.UNLOCK - 161)) | (1 << (BosParser.UNTIL - 161)) | (1 << (BosParser.VARIANT - 161)) | (1 << (BosParser.VERSION - 161)) | (1 << (BosParser.WEND - 161)) | (1 << (BosParser.WHILE - 161)) | (1 << (BosParser.WIDTH - 161)) | (1 << (BosParser.WITH - 161)) | (1 << (BosParser.WITHEVENTS - 161)) | (1 << (BosParser.WRITE - 161)) | (1 << (BosParser.XOR - 161)) | (1 << (BosParser.DOT - 161)) | (1 << (BosParser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 1482;
				this.moduleBody();
				this.state = 1484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1483;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1486;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
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
	public macroElseBlockStmt(): MacroElseBlockStmtContext {
		let _localctx: MacroElseBlockStmtContext = new MacroElseBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, BosParser.RULE_macroElseBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1490;
			this.match(BosParser.MACRO_ELSE);
			this.state = 1492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1491;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OPTION_BASE - 97)) | (1 << (BosParser.OPTION_EXPLICIT - 97)) | (1 << (BosParser.OPTION_COMPARE - 97)) | (1 << (BosParser.OPTION_PRIVATE_MODULE - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)) | (1 << (BosParser.PROPERTY_GET - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (BosParser.PROPERTY_LET - 129)) | (1 << (BosParser.PROPERTY_SET - 129)) | (1 << (BosParser.PUBLIC - 129)) | (1 << (BosParser.PUT - 129)) | (1 << (BosParser.RANDOM - 129)) | (1 << (BosParser.RANDOMIZE - 129)) | (1 << (BosParser.RAISEEVENT - 129)) | (1 << (BosParser.READ - 129)) | (1 << (BosParser.REDIM - 129)) | (1 << (BosParser.REM - 129)) | (1 << (BosParser.RESET - 129)) | (1 << (BosParser.RESUME - 129)) | (1 << (BosParser.RETURN - 129)) | (1 << (BosParser.RMDIR - 129)) | (1 << (BosParser.RSET - 129)) | (1 << (BosParser.SAVEPICTURE - 129)) | (1 << (BosParser.SAVESETTING - 129)) | (1 << (BosParser.SEEK - 129)) | (1 << (BosParser.SELECT - 129)) | (1 << (BosParser.SENDKEYS - 129)) | (1 << (BosParser.SET - 129)) | (1 << (BosParser.SETATTR - 129)) | (1 << (BosParser.SHARED - 129)) | (1 << (BosParser.SINGLE - 129)) | (1 << (BosParser.SPC - 129)) | (1 << (BosParser.STATIC - 129)) | (1 << (BosParser.STEP - 129)) | (1 << (BosParser.STOP - 129)) | (1 << (BosParser.STRING - 129)) | (1 << (BosParser.SUB - 129)) | (1 << (BosParser.TAB - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (BosParser.TEXT - 161)) | (1 << (BosParser.THEN - 161)) | (1 << (BosParser.TIME - 161)) | (1 << (BosParser.TO - 161)) | (1 << (BosParser.TRUE - 161)) | (1 << (BosParser.TYPE - 161)) | (1 << (BosParser.TYPEOF - 161)) | (1 << (BosParser.UNLOAD - 161)) | (1 << (BosParser.UNLOCK - 161)) | (1 << (BosParser.UNTIL - 161)) | (1 << (BosParser.VARIANT - 161)) | (1 << (BosParser.VERSION - 161)) | (1 << (BosParser.WEND - 161)) | (1 << (BosParser.WHILE - 161)) | (1 << (BosParser.WIDTH - 161)) | (1 << (BosParser.WITH - 161)) | (1 << (BosParser.WITHEVENTS - 161)) | (1 << (BosParser.WRITE - 161)) | (1 << (BosParser.XOR - 161)) | (1 << (BosParser.DOT - 161)) | (1 << (BosParser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 1496;
				this.moduleBody();
				this.state = 1498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1497;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1500;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
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
	public midStmt(): MidStmtContext {
		let _localctx: MidStmtContext = new MidStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, BosParser.RULE_midStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1504;
			this.match(BosParser.MID);
			this.state = 1506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1505;
				this.match(BosParser.WS);
				}
			}

			this.state = 1508;
			this.match(BosParser.LPAREN);
			this.state = 1510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				{
				this.state = 1509;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1512;
			this.argsCall();
			this.state = 1514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1513;
				this.match(BosParser.WS);
				}
			}

			this.state = 1516;
			this.match(BosParser.RPAREN);
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
	public mkdirStmt(): MkdirStmtContext {
		let _localctx: MkdirStmtContext = new MkdirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, BosParser.RULE_mkdirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1518;
			this.match(BosParser.MKDIR);
			this.state = 1519;
			this.match(BosParser.WS);
			this.state = 1520;
			this.valueStmt(0);
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
	public nameStmt(): NameStmtContext {
		let _localctx: NameStmtContext = new NameStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, BosParser.RULE_nameStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1522;
			this.match(BosParser.NAME);
			this.state = 1523;
			this.match(BosParser.WS);
			this.state = 1524;
			this.valueStmt(0);
			this.state = 1525;
			this.match(BosParser.WS);
			this.state = 1526;
			this.match(BosParser.AS);
			this.state = 1527;
			this.match(BosParser.WS);
			this.state = 1528;
			this.valueStmt(0);
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
	public onErrorStmt(): OnErrorStmtContext {
		let _localctx: OnErrorStmtContext = new OnErrorStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, BosParser.RULE_onErrorStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			_la = this._input.LA(1);
			if (!(_la === BosParser.ON_ERROR || _la === BosParser.ON_LOCAL_ERROR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1531;
			this.match(BosParser.WS);
			this.state = 1541;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BosParser.GOTO:
				{
				this.state = 1532;
				this.match(BosParser.GOTO);
				this.state = 1533;
				this.match(BosParser.WS);
				this.state = 1534;
				this.valueStmt(0);
				this.state = 1536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.COLON) {
					{
					this.state = 1535;
					this.match(BosParser.COLON);
					}
				}

				}
				break;
			case BosParser.RESUME:
				{
				this.state = 1538;
				this.match(BosParser.RESUME);
				this.state = 1539;
				this.match(BosParser.WS);
				this.state = 1540;
				this.match(BosParser.NEXT);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public onGoToStmt(): OnGoToStmtContext {
		let _localctx: OnGoToStmtContext = new OnGoToStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, BosParser.RULE_onGoToStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1543;
			this.match(BosParser.ON);
			this.state = 1544;
			this.match(BosParser.WS);
			this.state = 1545;
			this.valueStmt(0);
			this.state = 1546;
			this.match(BosParser.WS);
			this.state = 1547;
			this.match(BosParser.GOTO);
			this.state = 1548;
			this.match(BosParser.WS);
			this.state = 1549;
			this.valueStmt(0);
			this.state = 1560;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1551;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 1550;
						this.match(BosParser.WS);
						}
					}

					this.state = 1553;
					this.match(BosParser.COMMA);
					this.state = 1555;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
					case 1:
						{
						this.state = 1554;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 1557;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1562;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
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
	public onGoSubStmt(): OnGoSubStmtContext {
		let _localctx: OnGoSubStmtContext = new OnGoSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, BosParser.RULE_onGoSubStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1563;
			this.match(BosParser.ON);
			this.state = 1564;
			this.match(BosParser.WS);
			this.state = 1565;
			this.valueStmt(0);
			this.state = 1566;
			this.match(BosParser.WS);
			this.state = 1567;
			this.match(BosParser.GOSUB);
			this.state = 1568;
			this.match(BosParser.WS);
			this.state = 1569;
			this.valueStmt(0);
			this.state = 1580;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 1570;
						this.match(BosParser.WS);
						}
					}

					this.state = 1573;
					this.match(BosParser.COMMA);
					this.state = 1575;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
					case 1:
						{
						this.state = 1574;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 1577;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1582;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
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
	public openStmt(): OpenStmtContext {
		let _localctx: OpenStmtContext = new OpenStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, BosParser.RULE_openStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1583;
			this.match(BosParser.OPEN);
			this.state = 1584;
			this.match(BosParser.WS);
			this.state = 1585;
			this.valueStmt(0);
			this.state = 1586;
			this.match(BosParser.WS);
			this.state = 1587;
			this.match(BosParser.FOR);
			this.state = 1588;
			this.match(BosParser.WS);
			this.state = 1589;
			_la = this._input.LA(1);
			if (!(_la === BosParser.APPEND || _la === BosParser.BINARY || _la === BosParser.INPUT || _la === BosParser.OUTPUT || _la === BosParser.RANDOM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1594;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 1590;
				this.match(BosParser.WS);
				this.state = 1591;
				this.match(BosParser.ACCESS);
				this.state = 1592;
				this.match(BosParser.WS);
				this.state = 1593;
				_la = this._input.LA(1);
				if (!(_la === BosParser.READ || _la === BosParser.READ_WRITE || _la === BosParser.WRITE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				{
				this.state = 1596;
				this.match(BosParser.WS);
				this.state = 1597;
				_la = this._input.LA(1);
				if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (BosParser.LOCK_READ - 94)) | (1 << (BosParser.LOCK_WRITE - 94)) | (1 << (BosParser.LOCK_READ_WRITE - 94)))) !== 0) || _la === BosParser.SHARED)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1600;
			this.match(BosParser.WS);
			this.state = 1601;
			this.match(BosParser.AS);
			this.state = 1602;
			this.match(BosParser.WS);
			this.state = 1603;
			this.valueStmt(0);
			this.state = 1614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 1604;
				this.match(BosParser.WS);
				this.state = 1605;
				this.match(BosParser.LEN);
				this.state = 1607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 1606;
					this.match(BosParser.WS);
					}
				}

				this.state = 1609;
				this.match(BosParser.EQ);
				this.state = 1611;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
				case 1:
					{
					this.state = 1610;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 1613;
				this.valueStmt(0);
				}
				break;
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
	public outputList(): OutputListContext {
		let _localctx: OutputListContext = new OutputListContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, BosParser.RULE_outputList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1616;
				this.outputList_Expression();
				this.state = 1629;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1618;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 1617;
							this.match(BosParser.WS);
							}
						}

						this.state = 1620;
						_la = this._input.LA(1);
						if (!(_la === BosParser.COMMA || _la === BosParser.SEMICOLON)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1622;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
						case 1:
							{
							this.state = 1621;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 1625;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
						case 1:
							{
							this.state = 1624;
							this.outputList_Expression();
							}
							break;
						}
						}
						}
					}
					this.state = 1631;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1633;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
				case 1:
					{
					this.state = 1632;
					this.outputList_Expression();
					}
					break;
				}
				this.state = 1645;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1636;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 1635;
							this.match(BosParser.WS);
							}
						}

						this.state = 1638;
						_la = this._input.LA(1);
						if (!(_la === BosParser.COMMA || _la === BosParser.SEMICOLON)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1640;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
						case 1:
							{
							this.state = 1639;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 1643;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
						case 1:
							{
							this.state = 1642;
							this.outputList_Expression();
							}
							break;
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1647;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	// @RuleVersion(0)
	public outputList_Expression(): OutputList_ExpressionContext {
		let _localctx: OutputList_ExpressionContext = new OutputList_ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, BosParser.RULE_outputList_Expression);
		let _la: number;
		try {
			this.state = 1668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1651;
				_la = this._input.LA(1);
				if (!(_la === BosParser.SPC || _la === BosParser.TAB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1665;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 1653;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 1652;
						this.match(BosParser.WS);
						}
					}

					this.state = 1655;
					this.match(BosParser.LPAREN);
					this.state = 1657;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
					case 1:
						{
						this.state = 1656;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 1659;
					this.argsCall();
					this.state = 1661;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 1660;
						this.match(BosParser.WS);
						}
					}

					this.state = 1663;
					this.match(BosParser.RPAREN);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1667;
				this.valueStmt(0);
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
	// @RuleVersion(0)
	public printStmt(): PrintStmtContext {
		let _localctx: PrintStmtContext = new PrintStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, BosParser.RULE_printStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1670;
			this.match(BosParser.PRINT);
			this.state = 1671;
			this.match(BosParser.WS);
			this.state = 1672;
			this.valueStmt(0);
			this.state = 1674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1673;
				this.match(BosParser.WS);
				}
			}

			this.state = 1676;
			this.match(BosParser.COMMA);
			this.state = 1681;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 1678;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
				case 1:
					{
					this.state = 1677;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 1680;
				this.outputList();
				}
				break;
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
	public propertyGetStmt(): PropertyGetStmtContext {
		let _localctx: PropertyGetStmtContext = new PropertyGetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, BosParser.RULE_propertyGetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 1683;
				this.visibility();
				this.state = 1684;
				this.match(BosParser.WS);
				}
			}

			this.state = 1690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.STATIC) {
				{
				this.state = 1688;
				this.match(BosParser.STATIC);
				this.state = 1689;
				this.match(BosParser.WS);
				}
			}

			this.state = 1692;
			this.match(BosParser.PROPERTY_GET);
			this.state = 1693;
			this.match(BosParser.WS);
			this.state = 1694;
			this.ambiguousIdentifier();
			this.state = 1696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
				{
				this.state = 1695;
				this.typeHint();
				}
			}

			this.state = 1702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 1699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 1698;
					this.match(BosParser.WS);
					}
				}

				this.state = 1701;
				this.argList();
				}
				break;
			}
			this.state = 1706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1704;
				this.match(BosParser.WS);
				this.state = 1705;
				this.asTypeClause();
				}
			}

			this.state = 1709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1708;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (BosParser.PUBLIC - 131)) | (1 << (BosParser.PUT - 131)) | (1 << (BosParser.RANDOM - 131)) | (1 << (BosParser.RANDOMIZE - 131)) | (1 << (BosParser.RAISEEVENT - 131)) | (1 << (BosParser.READ - 131)) | (1 << (BosParser.REDIM - 131)) | (1 << (BosParser.REM - 131)) | (1 << (BosParser.RESET - 131)) | (1 << (BosParser.RESUME - 131)) | (1 << (BosParser.RETURN - 131)) | (1 << (BosParser.RMDIR - 131)) | (1 << (BosParser.RSET - 131)) | (1 << (BosParser.SAVEPICTURE - 131)) | (1 << (BosParser.SAVESETTING - 131)) | (1 << (BosParser.SEEK - 131)) | (1 << (BosParser.SELECT - 131)) | (1 << (BosParser.SENDKEYS - 131)) | (1 << (BosParser.SET - 131)) | (1 << (BosParser.SETATTR - 131)) | (1 << (BosParser.SHARED - 131)) | (1 << (BosParser.SINGLE - 131)) | (1 << (BosParser.SPC - 131)) | (1 << (BosParser.STATIC - 131)) | (1 << (BosParser.STEP - 131)) | (1 << (BosParser.STOP - 131)) | (1 << (BosParser.STRING - 131)) | (1 << (BosParser.SUB - 131)) | (1 << (BosParser.TAB - 131)) | (1 << (BosParser.TEXT - 131)) | (1 << (BosParser.THEN - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (BosParser.TIME - 163)) | (1 << (BosParser.TO - 163)) | (1 << (BosParser.TRUE - 163)) | (1 << (BosParser.TYPE - 163)) | (1 << (BosParser.TYPEOF - 163)) | (1 << (BosParser.UNLOAD - 163)) | (1 << (BosParser.UNLOCK - 163)) | (1 << (BosParser.UNTIL - 163)) | (1 << (BosParser.VARIANT - 163)) | (1 << (BosParser.VERSION - 163)) | (1 << (BosParser.WEND - 163)) | (1 << (BosParser.WHILE - 163)) | (1 << (BosParser.WIDTH - 163)) | (1 << (BosParser.WITH - 163)) | (1 << (BosParser.WITHEVENTS - 163)) | (1 << (BosParser.WRITE - 163)) | (1 << (BosParser.XOR - 163)) | (1 << (BosParser.DOT - 163)) | (1 << (BosParser.EXCLAMATIONMARK - 163)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 1713;
				this.block();
				this.state = 1715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1714;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1717;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
			}

			this.state = 1721;
			this.match(BosParser.END_PROPERTY);
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
	public propertySetStmt(): PropertySetStmtContext {
		let _localctx: PropertySetStmtContext = new PropertySetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, BosParser.RULE_propertySetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 1723;
				this.visibility();
				this.state = 1724;
				this.match(BosParser.WS);
				}
			}

			this.state = 1730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.STATIC) {
				{
				this.state = 1728;
				this.match(BosParser.STATIC);
				this.state = 1729;
				this.match(BosParser.WS);
				}
			}

			this.state = 1732;
			this.match(BosParser.PROPERTY_SET);
			this.state = 1733;
			this.match(BosParser.WS);
			this.state = 1734;
			this.ambiguousIdentifier();
			this.state = 1739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.LPAREN || _la === BosParser.WS) {
				{
				this.state = 1736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 1735;
					this.match(BosParser.WS);
					}
				}

				this.state = 1738;
				this.argList();
				}
			}

			this.state = 1742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1741;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (BosParser.PUBLIC - 131)) | (1 << (BosParser.PUT - 131)) | (1 << (BosParser.RANDOM - 131)) | (1 << (BosParser.RANDOMIZE - 131)) | (1 << (BosParser.RAISEEVENT - 131)) | (1 << (BosParser.READ - 131)) | (1 << (BosParser.REDIM - 131)) | (1 << (BosParser.REM - 131)) | (1 << (BosParser.RESET - 131)) | (1 << (BosParser.RESUME - 131)) | (1 << (BosParser.RETURN - 131)) | (1 << (BosParser.RMDIR - 131)) | (1 << (BosParser.RSET - 131)) | (1 << (BosParser.SAVEPICTURE - 131)) | (1 << (BosParser.SAVESETTING - 131)) | (1 << (BosParser.SEEK - 131)) | (1 << (BosParser.SELECT - 131)) | (1 << (BosParser.SENDKEYS - 131)) | (1 << (BosParser.SET - 131)) | (1 << (BosParser.SETATTR - 131)) | (1 << (BosParser.SHARED - 131)) | (1 << (BosParser.SINGLE - 131)) | (1 << (BosParser.SPC - 131)) | (1 << (BosParser.STATIC - 131)) | (1 << (BosParser.STEP - 131)) | (1 << (BosParser.STOP - 131)) | (1 << (BosParser.STRING - 131)) | (1 << (BosParser.SUB - 131)) | (1 << (BosParser.TAB - 131)) | (1 << (BosParser.TEXT - 131)) | (1 << (BosParser.THEN - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (BosParser.TIME - 163)) | (1 << (BosParser.TO - 163)) | (1 << (BosParser.TRUE - 163)) | (1 << (BosParser.TYPE - 163)) | (1 << (BosParser.TYPEOF - 163)) | (1 << (BosParser.UNLOAD - 163)) | (1 << (BosParser.UNLOCK - 163)) | (1 << (BosParser.UNTIL - 163)) | (1 << (BosParser.VARIANT - 163)) | (1 << (BosParser.VERSION - 163)) | (1 << (BosParser.WEND - 163)) | (1 << (BosParser.WHILE - 163)) | (1 << (BosParser.WIDTH - 163)) | (1 << (BosParser.WITH - 163)) | (1 << (BosParser.WITHEVENTS - 163)) | (1 << (BosParser.WRITE - 163)) | (1 << (BosParser.XOR - 163)) | (1 << (BosParser.DOT - 163)) | (1 << (BosParser.EXCLAMATIONMARK - 163)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 1746;
				this.block();
				this.state = 1748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1747;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1750;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
			}

			this.state = 1754;
			this.match(BosParser.END_PROPERTY);
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
	public propertyLetStmt(): PropertyLetStmtContext {
		let _localctx: PropertyLetStmtContext = new PropertyLetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, BosParser.RULE_propertyLetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1759;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 1756;
				this.visibility();
				this.state = 1757;
				this.match(BosParser.WS);
				}
			}

			this.state = 1763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.STATIC) {
				{
				this.state = 1761;
				this.match(BosParser.STATIC);
				this.state = 1762;
				this.match(BosParser.WS);
				}
			}

			this.state = 1765;
			this.match(BosParser.PROPERTY_LET);
			this.state = 1766;
			this.match(BosParser.WS);
			this.state = 1767;
			this.ambiguousIdentifier();
			this.state = 1772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.LPAREN || _la === BosParser.WS) {
				{
				this.state = 1769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 1768;
					this.match(BosParser.WS);
					}
				}

				this.state = 1771;
				this.argList();
				}
			}

			this.state = 1775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1774;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (BosParser.PUBLIC - 131)) | (1 << (BosParser.PUT - 131)) | (1 << (BosParser.RANDOM - 131)) | (1 << (BosParser.RANDOMIZE - 131)) | (1 << (BosParser.RAISEEVENT - 131)) | (1 << (BosParser.READ - 131)) | (1 << (BosParser.REDIM - 131)) | (1 << (BosParser.REM - 131)) | (1 << (BosParser.RESET - 131)) | (1 << (BosParser.RESUME - 131)) | (1 << (BosParser.RETURN - 131)) | (1 << (BosParser.RMDIR - 131)) | (1 << (BosParser.RSET - 131)) | (1 << (BosParser.SAVEPICTURE - 131)) | (1 << (BosParser.SAVESETTING - 131)) | (1 << (BosParser.SEEK - 131)) | (1 << (BosParser.SELECT - 131)) | (1 << (BosParser.SENDKEYS - 131)) | (1 << (BosParser.SET - 131)) | (1 << (BosParser.SETATTR - 131)) | (1 << (BosParser.SHARED - 131)) | (1 << (BosParser.SINGLE - 131)) | (1 << (BosParser.SPC - 131)) | (1 << (BosParser.STATIC - 131)) | (1 << (BosParser.STEP - 131)) | (1 << (BosParser.STOP - 131)) | (1 << (BosParser.STRING - 131)) | (1 << (BosParser.SUB - 131)) | (1 << (BosParser.TAB - 131)) | (1 << (BosParser.TEXT - 131)) | (1 << (BosParser.THEN - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (BosParser.TIME - 163)) | (1 << (BosParser.TO - 163)) | (1 << (BosParser.TRUE - 163)) | (1 << (BosParser.TYPE - 163)) | (1 << (BosParser.TYPEOF - 163)) | (1 << (BosParser.UNLOAD - 163)) | (1 << (BosParser.UNLOCK - 163)) | (1 << (BosParser.UNTIL - 163)) | (1 << (BosParser.VARIANT - 163)) | (1 << (BosParser.VERSION - 163)) | (1 << (BosParser.WEND - 163)) | (1 << (BosParser.WHILE - 163)) | (1 << (BosParser.WIDTH - 163)) | (1 << (BosParser.WITH - 163)) | (1 << (BosParser.WITHEVENTS - 163)) | (1 << (BosParser.WRITE - 163)) | (1 << (BosParser.XOR - 163)) | (1 << (BosParser.DOT - 163)) | (1 << (BosParser.EXCLAMATIONMARK - 163)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 1779;
				this.block();
				this.state = 1781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1780;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1783;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
			}

			this.state = 1787;
			this.match(BosParser.END_PROPERTY);
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
	public putStmt(): PutStmtContext {
		let _localctx: PutStmtContext = new PutStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, BosParser.RULE_putStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1789;
			this.match(BosParser.PUT);
			this.state = 1790;
			this.match(BosParser.WS);
			this.state = 1791;
			this.valueStmt(0);
			this.state = 1793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1792;
				this.match(BosParser.WS);
				}
			}

			this.state = 1795;
			this.match(BosParser.COMMA);
			this.state = 1797;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				{
				this.state = 1796;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1800;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				{
				this.state = 1799;
				this.valueStmt(0);
				}
				break;
			}
			this.state = 1803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1802;
				this.match(BosParser.WS);
				}
			}

			this.state = 1805;
			this.match(BosParser.COMMA);
			this.state = 1807;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 265, this._ctx) ) {
			case 1:
				{
				this.state = 1806;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1809;
			this.valueStmt(0);
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
	public raiseEventStmt(): RaiseEventStmtContext {
		let _localctx: RaiseEventStmtContext = new RaiseEventStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, BosParser.RULE_raiseEventStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1811;
			this.match(BosParser.RAISEEVENT);
			this.state = 1812;
			this.match(BosParser.WS);
			this.state = 1813;
			this.ambiguousIdentifier();
			this.state = 1828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				{
				this.state = 1815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 1814;
					this.match(BosParser.WS);
					}
				}

				this.state = 1817;
				this.match(BosParser.LPAREN);
				this.state = 1819;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
				case 1:
					{
					this.state = 1818;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 1825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)) | (1 << (BosParser.COMMA - 166)) | (1 << (BosParser.DOT - 166)) | (1 << (BosParser.EXCLAMATIONMARK - 166)) | (1 << (BosParser.LPAREN - 166)) | (1 << (BosParser.MINUS - 166)))) !== 0) || ((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & ((1 << (BosParser.PLUS - 202)) | (1 << (BosParser.SEMICOLON - 202)) | (1 << (BosParser.L_SQUARE_BRACKET - 202)) | (1 << (BosParser.STRINGLITERAL - 202)) | (1 << (BosParser.DATELITERAL - 202)) | (1 << (BosParser.COLORLITERAL - 202)) | (1 << (BosParser.INTEGERLITERAL - 202)) | (1 << (BosParser.DOUBLELITERAL - 202)) | (1 << (BosParser.FILENUMBER - 202)) | (1 << (BosParser.OCTALLITERAL - 202)) | (1 << (BosParser.IDENTIFIER - 202)) | (1 << (BosParser.WS - 202)))) !== 0)) {
					{
					this.state = 1821;
					this.argsCall();
					this.state = 1823;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 1822;
						this.match(BosParser.WS);
						}
					}

					}
				}

				this.state = 1827;
				this.match(BosParser.RPAREN);
				}
				break;
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
	public randomizeStmt(): RandomizeStmtContext {
		let _localctx: RandomizeStmtContext = new RandomizeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, BosParser.RULE_randomizeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1830;
			this.match(BosParser.RANDOMIZE);
			this.state = 1833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				{
				this.state = 1831;
				this.match(BosParser.WS);
				this.state = 1832;
				this.valueStmt(0);
				}
				break;
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
	public redimStmt(): RedimStmtContext {
		let _localctx: RedimStmtContext = new RedimStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, BosParser.RULE_redimStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1835;
			this.match(BosParser.REDIM);
			this.state = 1836;
			this.match(BosParser.WS);
			this.state = 1839;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				{
				this.state = 1837;
				this.match(BosParser.PRESERVE);
				this.state = 1838;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1841;
			this.redimSubStmt();
			this.state = 1852;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1843;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 1842;
						this.match(BosParser.WS);
						}
					}

					this.state = 1845;
					this.match(BosParser.COMMA);
					this.state = 1847;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
					case 1:
						{
						this.state = 1846;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 1849;
					this.redimSubStmt();
					}
					}
				}
				this.state = 1854;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
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
	public redimSubStmt(): RedimSubStmtContext {
		let _localctx: RedimSubStmtContext = new RedimSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, BosParser.RULE_redimSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1855;
			this.implicitCallStmt_InStmt();
			this.state = 1857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1856;
				this.match(BosParser.WS);
				}
			}

			this.state = 1859;
			this.match(BosParser.LPAREN);
			this.state = 1861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
			case 1:
				{
				this.state = 1860;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1863;
			this.subscripts();
			this.state = 1865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1864;
				this.match(BosParser.WS);
				}
			}

			this.state = 1867;
			this.match(BosParser.RPAREN);
			this.state = 1870;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 279, this._ctx) ) {
			case 1:
				{
				this.state = 1868;
				this.match(BosParser.WS);
				this.state = 1869;
				this.asTypeClause();
				}
				break;
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
	public resetStmt(): ResetStmtContext {
		let _localctx: ResetStmtContext = new ResetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, BosParser.RULE_resetStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1872;
			this.match(BosParser.RESET);
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
	public resumeStmt(): ResumeStmtContext {
		let _localctx: ResumeStmtContext = new ResumeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, BosParser.RULE_resumeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1874;
			this.match(BosParser.RESUME);
			this.state = 1880;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				{
				this.state = 1875;
				this.match(BosParser.WS);
				this.state = 1878;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
				case 1:
					{
					this.state = 1876;
					this.match(BosParser.NEXT);
					}
					break;

				case 2:
					{
					this.state = 1877;
					this.ambiguousIdentifier();
					}
					break;
				}
				}
				break;
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
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, BosParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1882;
			this.match(BosParser.RETURN);
			this.state = 1885;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				{
				this.state = 1883;
				this.match(BosParser.WS);
				this.state = 1884;
				this.valueStmt(0);
				}
				break;
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
	public rmdirStmt(): RmdirStmtContext {
		let _localctx: RmdirStmtContext = new RmdirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, BosParser.RULE_rmdirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1887;
			this.match(BosParser.RMDIR);
			this.state = 1888;
			this.match(BosParser.WS);
			this.state = 1889;
			this.valueStmt(0);
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
	public rsetStmt(): RsetStmtContext {
		let _localctx: RsetStmtContext = new RsetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, BosParser.RULE_rsetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1891;
			this.match(BosParser.RSET);
			this.state = 1892;
			this.match(BosParser.WS);
			this.state = 1893;
			this.implicitCallStmt_InStmt();
			this.state = 1895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1894;
				this.match(BosParser.WS);
				}
			}

			this.state = 1897;
			this.match(BosParser.EQ);
			this.state = 1899;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				{
				this.state = 1898;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1901;
			this.valueStmt(0);
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
	public savepictureStmt(): SavepictureStmtContext {
		let _localctx: SavepictureStmtContext = new SavepictureStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, BosParser.RULE_savepictureStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1903;
			this.match(BosParser.SAVEPICTURE);
			this.state = 1904;
			this.match(BosParser.WS);
			this.state = 1905;
			this.valueStmt(0);
			this.state = 1907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1906;
				this.match(BosParser.WS);
				}
			}

			this.state = 1909;
			this.match(BosParser.COMMA);
			this.state = 1911;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				{
				this.state = 1910;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1913;
			this.valueStmt(0);
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
	public saveSettingStmt(): SaveSettingStmtContext {
		let _localctx: SaveSettingStmtContext = new SaveSettingStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, BosParser.RULE_saveSettingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1915;
			this.match(BosParser.SAVESETTING);
			this.state = 1916;
			this.match(BosParser.WS);
			this.state = 1917;
			this.valueStmt(0);
			this.state = 1919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1918;
				this.match(BosParser.WS);
				}
			}

			this.state = 1921;
			this.match(BosParser.COMMA);
			this.state = 1923;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 288, this._ctx) ) {
			case 1:
				{
				this.state = 1922;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1925;
			this.valueStmt(0);
			this.state = 1927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1926;
				this.match(BosParser.WS);
				}
			}

			this.state = 1929;
			this.match(BosParser.COMMA);
			this.state = 1931;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				{
				this.state = 1930;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1933;
			this.valueStmt(0);
			this.state = 1935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1934;
				this.match(BosParser.WS);
				}
			}

			this.state = 1937;
			this.match(BosParser.COMMA);
			this.state = 1939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				{
				this.state = 1938;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1941;
			this.valueStmt(0);
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
	public seekStmt(): SeekStmtContext {
		let _localctx: SeekStmtContext = new SeekStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, BosParser.RULE_seekStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1943;
			this.match(BosParser.SEEK);
			this.state = 1944;
			this.match(BosParser.WS);
			this.state = 1945;
			this.valueStmt(0);
			this.state = 1947;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1946;
				this.match(BosParser.WS);
				}
			}

			this.state = 1949;
			this.match(BosParser.COMMA);
			this.state = 1951;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				{
				this.state = 1950;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1953;
			this.valueStmt(0);
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
	public selectCaseStmt(): SelectCaseStmtContext {
		let _localctx: SelectCaseStmtContext = new SelectCaseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, BosParser.RULE_selectCaseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1955;
			this.match(BosParser.SELECT);
			this.state = 1956;
			this.match(BosParser.WS);
			this.state = 1957;
			this.match(BosParser.CASE);
			this.state = 1958;
			this.match(BosParser.WS);
			this.state = 1959;
			this.valueStmt(0);
			this.state = 1961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1960;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 1963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 1968;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BosParser.CASE) {
				{
				{
				this.state = 1965;
				this.sC_Case();
				}
				}
				this.state = 1970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1972;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 1971;
				this.match(BosParser.WS);
				}
			}

			this.state = 1974;
			this.match(BosParser.END_SELECT);
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
	public sC_Case(): SC_CaseContext {
		let _localctx: SC_CaseContext = new SC_CaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, BosParser.RULE_sC_Case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1976;
			this.match(BosParser.CASE);
			this.state = 1977;
			this.match(BosParser.WS);
			this.state = 1978;
			this.sC_Cond();
			this.state = 1980;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				{
				this.state = 1979;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 1996;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
			case 1:
				{
				this.state = 1983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.COLON) {
					{
					this.state = 1982;
					this.match(BosParser.COLON);
					}
				}

				this.state = 1988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BosParser.NEWLINE) {
					{
					{
					this.state = 1985;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1990;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 1992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1991;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 1994;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
				break;
			}
			this.state = 2004;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 304, this._ctx) ) {
			case 1:
				{
				this.state = 1998;
				this.block();
				this.state = 2000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1999;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 2002;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
				break;
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
	public sC_Cond(): SC_CondContext {
		let _localctx: SC_CondContext = new SC_CondContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, BosParser.RULE_sC_Cond);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 308, this._ctx) ) {
			case 1:
				_localctx = new CaseCondElseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2006;
				this.match(BosParser.ELSE);
				}
				break;

			case 2:
				_localctx = new CaseCondExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2007;
				this.sC_CondExpr();
				this.state = 2018;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 307, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2009;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2008;
							this.match(BosParser.WS);
							}
						}

						this.state = 2011;
						this.match(BosParser.COMMA);
						this.state = 2013;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 306, this._ctx) ) {
						case 1:
							{
							this.state = 2012;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2015;
						this.sC_CondExpr();
						}
						}
					}
					this.state = 2020;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 307, this._ctx);
				}
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
	// @RuleVersion(0)
	public sC_CondExpr(): SC_CondExprContext {
		let _localctx: SC_CondExprContext = new SC_CondExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, BosParser.RULE_sC_CondExpr);
		let _la: number;
		try {
			this.state = 2040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
			case 1:
				_localctx = new CaseCondExprIsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2023;
				this.match(BosParser.IS);
				this.state = 2025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2024;
					this.match(BosParser.WS);
					}
				}

				this.state = 2027;
				this.comparisonOperator();
				this.state = 2029;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 310, this._ctx) ) {
				case 1:
					{
					this.state = 2028;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2031;
				this.valueStmt(0);
				}
				break;

			case 2:
				_localctx = new CaseCondExprValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2033;
				this.valueStmt(0);
				}
				break;

			case 3:
				_localctx = new CaseCondExprToContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2034;
				this.valueStmt(0);
				this.state = 2035;
				this.match(BosParser.WS);
				this.state = 2036;
				this.match(BosParser.TO);
				this.state = 2037;
				this.match(BosParser.WS);
				this.state = 2038;
				this.valueStmt(0);
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
	// @RuleVersion(0)
	public sendkeysStmt(): SendkeysStmtContext {
		let _localctx: SendkeysStmtContext = new SendkeysStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, BosParser.RULE_sendkeysStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2042;
			this.match(BosParser.SENDKEYS);
			this.state = 2043;
			this.match(BosParser.WS);
			this.state = 2044;
			this.valueStmt(0);
			this.state = 2053;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 314, this._ctx) ) {
			case 1:
				{
				this.state = 2046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2045;
					this.match(BosParser.WS);
					}
				}

				this.state = 2048;
				this.match(BosParser.COMMA);
				this.state = 2050;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
				case 1:
					{
					this.state = 2049;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2052;
				this.valueStmt(0);
				}
				break;
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
	public setattrStmt(): SetattrStmtContext {
		let _localctx: SetattrStmtContext = new SetattrStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, BosParser.RULE_setattrStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2055;
			this.match(BosParser.SETATTR);
			this.state = 2056;
			this.match(BosParser.WS);
			this.state = 2057;
			this.valueStmt(0);
			this.state = 2059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2058;
				this.match(BosParser.WS);
				}
			}

			this.state = 2061;
			this.match(BosParser.COMMA);
			this.state = 2063;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 316, this._ctx) ) {
			case 1:
				{
				this.state = 2062;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2065;
			this.valueStmt(0);
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
	public setStmt(): SetStmtContext {
		let _localctx: SetStmtContext = new SetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, BosParser.RULE_setStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2067;
			this.match(BosParser.SET);
			this.state = 2068;
			this.match(BosParser.WS);
			this.state = 2069;
			this.implicitCallStmt_InStmt();
			this.state = 2071;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2070;
				this.match(BosParser.WS);
				}
			}

			this.state = 2073;
			this.match(BosParser.EQ);
			this.state = 2075;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 318, this._ctx) ) {
			case 1:
				{
				this.state = 2074;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2077;
			this.valueStmt(0);
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
	public stopStmt(): StopStmtContext {
		let _localctx: StopStmtContext = new StopStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, BosParser.RULE_stopStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2079;
			this.match(BosParser.STOP);
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
	public subStmt(): SubStmtContext {
		let _localctx: SubStmtContext = new SubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, BosParser.RULE_subStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2084;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 2081;
				this.visibility();
				this.state = 2082;
				this.match(BosParser.WS);
				}
			}

			this.state = 2088;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.STATIC) {
				{
				this.state = 2086;
				this.match(BosParser.STATIC);
				this.state = 2087;
				this.match(BosParser.WS);
				}
			}

			this.state = 2090;
			this.match(BosParser.SUB);
			this.state = 2091;
			this.match(BosParser.WS);
			this.state = 2092;
			this.ambiguousIdentifier();
			this.state = 2097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.LPAREN || _la === BosParser.WS) {
				{
				this.state = 2094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2093;
					this.match(BosParser.WS);
					}
				}

				this.state = 2096;
				this.argList();
				}
			}

			this.state = 2100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2099;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 2102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 2110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (BosParser.PUBLIC - 131)) | (1 << (BosParser.PUT - 131)) | (1 << (BosParser.RANDOM - 131)) | (1 << (BosParser.RANDOMIZE - 131)) | (1 << (BosParser.RAISEEVENT - 131)) | (1 << (BosParser.READ - 131)) | (1 << (BosParser.REDIM - 131)) | (1 << (BosParser.REM - 131)) | (1 << (BosParser.RESET - 131)) | (1 << (BosParser.RESUME - 131)) | (1 << (BosParser.RETURN - 131)) | (1 << (BosParser.RMDIR - 131)) | (1 << (BosParser.RSET - 131)) | (1 << (BosParser.SAVEPICTURE - 131)) | (1 << (BosParser.SAVESETTING - 131)) | (1 << (BosParser.SEEK - 131)) | (1 << (BosParser.SELECT - 131)) | (1 << (BosParser.SENDKEYS - 131)) | (1 << (BosParser.SET - 131)) | (1 << (BosParser.SETATTR - 131)) | (1 << (BosParser.SHARED - 131)) | (1 << (BosParser.SINGLE - 131)) | (1 << (BosParser.SPC - 131)) | (1 << (BosParser.STATIC - 131)) | (1 << (BosParser.STEP - 131)) | (1 << (BosParser.STOP - 131)) | (1 << (BosParser.STRING - 131)) | (1 << (BosParser.SUB - 131)) | (1 << (BosParser.TAB - 131)) | (1 << (BosParser.TEXT - 131)) | (1 << (BosParser.THEN - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (BosParser.TIME - 163)) | (1 << (BosParser.TO - 163)) | (1 << (BosParser.TRUE - 163)) | (1 << (BosParser.TYPE - 163)) | (1 << (BosParser.TYPEOF - 163)) | (1 << (BosParser.UNLOAD - 163)) | (1 << (BosParser.UNLOCK - 163)) | (1 << (BosParser.UNTIL - 163)) | (1 << (BosParser.VARIANT - 163)) | (1 << (BosParser.VERSION - 163)) | (1 << (BosParser.WEND - 163)) | (1 << (BosParser.WHILE - 163)) | (1 << (BosParser.WIDTH - 163)) | (1 << (BosParser.WITH - 163)) | (1 << (BosParser.WITHEVENTS - 163)) | (1 << (BosParser.WRITE - 163)) | (1 << (BosParser.XOR - 163)) | (1 << (BosParser.DOT - 163)) | (1 << (BosParser.EXCLAMATIONMARK - 163)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 2104;
				this.block();
				this.state = 2106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2105;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 2108;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
			}

			this.state = 2112;
			this.match(BosParser.END_SUB);
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
	public timeStmt(): TimeStmtContext {
		let _localctx: TimeStmtContext = new TimeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, BosParser.RULE_timeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2114;
			this.match(BosParser.TIME);
			this.state = 2116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2115;
				this.match(BosParser.WS);
				}
			}

			this.state = 2118;
			this.match(BosParser.EQ);
			this.state = 2120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 327, this._ctx) ) {
			case 1:
				{
				this.state = 2119;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2122;
			this.valueStmt(0);
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
	public typeStmt(): TypeStmtContext {
		let _localctx: TypeStmtContext = new TypeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, BosParser.RULE_typeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC) {
				{
				this.state = 2124;
				this.visibility();
				this.state = 2125;
				this.match(BosParser.WS);
				}
			}

			this.state = 2129;
			this.match(BosParser.TYPE);
			this.state = 2130;
			this.match(BosParser.WS);
			this.state = 2131;
			this.ambiguousIdentifier();
			this.state = 2133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2132;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 2135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 2140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)))) !== 0) || _la === BosParser.L_SQUARE_BRACKET || _la === BosParser.IDENTIFIER) {
				{
				{
				this.state = 2137;
				this.typeStmt_Element();
				}
				}
				this.state = 2142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2143;
			this.match(BosParser.END_TYPE);
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
	public typeStmt_Element(): TypeStmt_ElementContext {
		let _localctx: TypeStmt_ElementContext = new TypeStmt_ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, BosParser.RULE_typeStmt_Element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2145;
			this.ambiguousIdentifier();
			this.state = 2160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 335, this._ctx) ) {
			case 1:
				{
				this.state = 2147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2146;
					this.match(BosParser.WS);
					}
				}

				this.state = 2149;
				this.match(BosParser.LPAREN);
				this.state = 2154;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 333, this._ctx) ) {
				case 1:
					{
					this.state = 2151;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 332, this._ctx) ) {
					case 1:
						{
						this.state = 2150;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 2153;
					this.subscripts();
					}
					break;
				}
				this.state = 2157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2156;
					this.match(BosParser.WS);
					}
				}

				this.state = 2159;
				this.match(BosParser.RPAREN);
				}
				break;
			}
			this.state = 2164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2162;
				this.match(BosParser.WS);
				this.state = 2163;
				this.asTypeClause();
				}
			}

			this.state = 2167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2166;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 2169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
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
	public typeOfStmt(): TypeOfStmtContext {
		let _localctx: TypeOfStmtContext = new TypeOfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, BosParser.RULE_typeOfStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2171;
			this.match(BosParser.TYPEOF);
			this.state = 2172;
			this.match(BosParser.WS);
			this.state = 2173;
			this.valueStmt(0);
			this.state = 2178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 338, this._ctx) ) {
			case 1:
				{
				this.state = 2174;
				this.match(BosParser.WS);
				this.state = 2175;
				this.match(BosParser.IS);
				this.state = 2176;
				this.match(BosParser.WS);
				this.state = 2177;
				this.type();
				}
				break;
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
	public unloadStmt(): UnloadStmtContext {
		let _localctx: UnloadStmtContext = new UnloadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, BosParser.RULE_unloadStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
			this.match(BosParser.UNLOAD);
			this.state = 2181;
			this.match(BosParser.WS);
			this.state = 2182;
			this.valueStmt(0);
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
	public unlockStmt(): UnlockStmtContext {
		let _localctx: UnlockStmtContext = new UnlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, BosParser.RULE_unlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2184;
			this.match(BosParser.UNLOCK);
			this.state = 2185;
			this.match(BosParser.WS);
			this.state = 2186;
			this.valueStmt(0);
			this.state = 2201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 342, this._ctx) ) {
			case 1:
				{
				this.state = 2188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2187;
					this.match(BosParser.WS);
					}
				}

				this.state = 2190;
				this.match(BosParser.COMMA);
				this.state = 2192;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 340, this._ctx) ) {
				case 1:
					{
					this.state = 2191;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2194;
				this.valueStmt(0);
				this.state = 2199;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 341, this._ctx) ) {
				case 1:
					{
					this.state = 2195;
					this.match(BosParser.WS);
					this.state = 2196;
					this.match(BosParser.TO);
					this.state = 2197;
					this.match(BosParser.WS);
					this.state = 2198;
					this.valueStmt(0);
					}
					break;
				}
				}
				break;
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

	public valueStmt(): ValueStmtContext;
	public valueStmt(_p: number): ValueStmtContext;
	// @RuleVersion(0)
	public valueStmt(_p?: number): ValueStmtContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueStmtContext = new ValueStmtContext(this._ctx, _parentState);
		let _prevctx: ValueStmtContext = _localctx;
		let _startState: number = 230;
		this.enterRecursionRule(_localctx, 230, BosParser.RULE_valueStmt, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 355, this._ctx) ) {
			case 1:
				{
				_localctx = new VsLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2204;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new VsStructContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2205;
				this.match(BosParser.LPAREN);
				this.state = 2207;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 343, this._ctx) ) {
				case 1:
					{
					this.state = 2206;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2209;
				this.valueStmt(0);
				this.state = 2220;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2211;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2210;
							this.match(BosParser.WS);
							}
						}

						this.state = 2213;
						this.match(BosParser.COMMA);
						this.state = 2215;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 345, this._ctx) ) {
						case 1:
							{
							this.state = 2214;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2217;
						this.valueStmt(0);
						}
						}
					}
					this.state = 2222;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
				}
				this.state = 2224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2223;
					this.match(BosParser.WS);
					}
				}

				this.state = 2226;
				this.match(BosParser.RPAREN);
				}
				break;

			case 3:
				{
				_localctx = new VsNewContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2228;
				this.match(BosParser.NEW);
				this.state = 2229;
				this.match(BosParser.WS);
				this.state = 2230;
				this.valueStmt(29);
				}
				break;

			case 4:
				{
				_localctx = new VsTypeOfContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2231;
				this.typeOfStmt();
				}
				break;

			case 5:
				{
				_localctx = new VsAddressOfContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2232;
				this.match(BosParser.ADDRESSOF);
				this.state = 2233;
				this.match(BosParser.WS);
				this.state = 2234;
				this.valueStmt(27);
				}
				break;

			case 6:
				{
				_localctx = new VsAssignContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2235;
				this.implicitCallStmt_InStmt();
				this.state = 2237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2236;
					this.match(BosParser.WS);
					}
				}

				this.state = 2239;
				this.match(BosParser.ASSIGN);
				this.state = 2241;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 349, this._ctx) ) {
				case 1:
					{
					this.state = 2240;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2243;
				this.valueStmt(26);
				}
				break;

			case 7:
				{
				_localctx = new VsNegationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2245;
				this.match(BosParser.MINUS);
				this.state = 2247;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 350, this._ctx) ) {
				case 1:
					{
					this.state = 2246;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2249;
				this.valueStmt(24);
				}
				break;

			case 8:
				{
				_localctx = new VsPlusContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2250;
				this.match(BosParser.PLUS);
				this.state = 2252;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 351, this._ctx) ) {
				case 1:
					{
					this.state = 2251;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2254;
				this.valueStmt(23);
				}
				break;

			case 9:
				{
				_localctx = new VsNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2255;
				this.match(BosParser.NOT);
				this.state = 2268;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case BosParser.WS:
					{
					this.state = 2256;
					this.match(BosParser.WS);
					this.state = 2257;
					this.valueStmt(0);
					}
					break;
				case BosParser.LPAREN:
					{
					this.state = 2258;
					this.match(BosParser.LPAREN);
					this.state = 2260;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 352, this._ctx) ) {
					case 1:
						{
						this.state = 2259;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 2262;
					this.valueStmt(0);
					this.state = 2264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 2263;
						this.match(BosParser.WS);
						}
					}

					this.state = 2266;
					this.match(BosParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 10:
				{
				_localctx = new VsICSContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2270;
				this.implicitCallStmt_InStmt();
				}
				break;

			case 11:
				{
				_localctx = new VsMidContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2271;
				this.midStmt();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2448;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 393, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2446;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 392, this._ctx) ) {
					case 1:
						{
						_localctx = new VsPowContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2274;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 2276;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2275;
							this.match(BosParser.WS);
							}
						}

						this.state = 2278;
						this.match(BosParser.POW);
						this.state = 2280;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 357, this._ctx) ) {
						case 1:
							{
							this.state = 2279;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2282;
						this.valueStmt(26);
						}
						break;

					case 2:
						{
						_localctx = new VsDivContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2283;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 2285;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2284;
							this.match(BosParser.WS);
							}
						}

						this.state = 2287;
						this.match(BosParser.DIV);
						this.state = 2289;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 359, this._ctx) ) {
						case 1:
							{
							this.state = 2288;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2291;
						this.valueStmt(23);
						}
						break;

					case 3:
						{
						_localctx = new VsMultContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2292;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 2294;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2293;
							this.match(BosParser.WS);
							}
						}

						this.state = 2296;
						this.match(BosParser.MULT);
						this.state = 2298;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 361, this._ctx) ) {
						case 1:
							{
							this.state = 2297;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2300;
						this.valueStmt(22);
						}
						break;

					case 4:
						{
						_localctx = new VsModContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2301;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 2303;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2302;
							this.match(BosParser.WS);
							}
						}

						this.state = 2305;
						this.match(BosParser.MOD);
						this.state = 2307;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 363, this._ctx) ) {
						case 1:
							{
							this.state = 2306;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2309;
						this.valueStmt(21);
						}
						break;

					case 5:
						{
						_localctx = new VsAddContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2310;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 2312;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2311;
							this.match(BosParser.WS);
							}
						}

						this.state = 2314;
						this.match(BosParser.PLUS);
						this.state = 2316;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 365, this._ctx) ) {
						case 1:
							{
							this.state = 2315;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2318;
						this.valueStmt(20);
						}
						break;

					case 6:
						{
						_localctx = new VsMinusContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2319;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 2321;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2320;
							this.match(BosParser.WS);
							}
						}

						this.state = 2323;
						this.match(BosParser.MINUS);
						this.state = 2325;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 367, this._ctx) ) {
						case 1:
							{
							this.state = 2324;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2327;
						this.valueStmt(19);
						}
						break;

					case 7:
						{
						_localctx = new VsAmpContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2328;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 2330;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2329;
							this.match(BosParser.WS);
							}
						}

						this.state = 2332;
						this.match(BosParser.AMPERSAND);
						this.state = 2334;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 369, this._ctx) ) {
						case 1:
							{
							this.state = 2333;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2336;
						this.valueStmt(18);
						}
						break;

					case 8:
						{
						_localctx = new VsEqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2337;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 2339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2338;
							this.match(BosParser.WS);
							}
						}

						this.state = 2341;
						this.match(BosParser.EQ);
						this.state = 2343;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 371, this._ctx) ) {
						case 1:
							{
							this.state = 2342;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2345;
						this.valueStmt(17);
						}
						break;

					case 9:
						{
						_localctx = new VsNeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2346;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 2348;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2347;
							this.match(BosParser.WS);
							}
						}

						this.state = 2350;
						this.match(BosParser.NEQ);
						this.state = 2352;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 373, this._ctx) ) {
						case 1:
							{
							this.state = 2351;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2354;
						this.valueStmt(16);
						}
						break;

					case 10:
						{
						_localctx = new VsLtContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2355;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 2357;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2356;
							this.match(BosParser.WS);
							}
						}

						this.state = 2359;
						this.match(BosParser.LT);
						this.state = 2361;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 375, this._ctx) ) {
						case 1:
							{
							this.state = 2360;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2363;
						this.valueStmt(15);
						}
						break;

					case 11:
						{
						_localctx = new VsGtContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2364;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 2366;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2365;
							this.match(BosParser.WS);
							}
						}

						this.state = 2368;
						this.match(BosParser.GT);
						this.state = 2370;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 377, this._ctx) ) {
						case 1:
							{
							this.state = 2369;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2372;
						this.valueStmt(14);
						}
						break;

					case 12:
						{
						_localctx = new VsLeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2373;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 2375;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2374;
							this.match(BosParser.WS);
							}
						}

						this.state = 2377;
						this.match(BosParser.LEQ);
						this.state = 2379;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 379, this._ctx) ) {
						case 1:
							{
							this.state = 2378;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2381;
						this.valueStmt(13);
						}
						break;

					case 13:
						{
						_localctx = new VsGeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2382;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 2384;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2383;
							this.match(BosParser.WS);
							}
						}

						this.state = 2386;
						this.match(BosParser.GEQ);
						this.state = 2388;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 381, this._ctx) ) {
						case 1:
							{
							this.state = 2387;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2390;
						this.valueStmt(12);
						}
						break;

					case 14:
						{
						_localctx = new VsLikeContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2391;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 2392;
						this.match(BosParser.WS);
						this.state = 2393;
						this.match(BosParser.LIKE);
						this.state = 2394;
						this.match(BosParser.WS);
						this.state = 2395;
						this.valueStmt(11);
						}
						break;

					case 15:
						{
						_localctx = new VsIsContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2396;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 2397;
						this.match(BosParser.WS);
						this.state = 2398;
						this.match(BosParser.IS);
						this.state = 2399;
						this.match(BosParser.WS);
						this.state = 2400;
						this.valueStmt(10);
						}
						break;

					case 16:
						{
						_localctx = new VsAndContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2401;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 2403;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2402;
							this.match(BosParser.WS);
							}
						}

						this.state = 2405;
						this.match(BosParser.AND);
						this.state = 2407;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 383, this._ctx) ) {
						case 1:
							{
							this.state = 2406;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2409;
						this.valueStmt(8);
						}
						break;

					case 17:
						{
						_localctx = new VsOrContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2410;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 2412;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2411;
							this.match(BosParser.WS);
							}
						}

						this.state = 2414;
						this.match(BosParser.OR);
						this.state = 2416;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 385, this._ctx) ) {
						case 1:
							{
							this.state = 2415;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2418;
						this.valueStmt(7);
						}
						break;

					case 18:
						{
						_localctx = new VsXorContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2419;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 2421;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2420;
							this.match(BosParser.WS);
							}
						}

						this.state = 2423;
						this.match(BosParser.XOR);
						this.state = 2425;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 387, this._ctx) ) {
						case 1:
							{
							this.state = 2424;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2427;
						this.valueStmt(6);
						}
						break;

					case 19:
						{
						_localctx = new VsEqvContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2428;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2430;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2429;
							this.match(BosParser.WS);
							}
						}

						this.state = 2432;
						this.match(BosParser.EQV);
						this.state = 2434;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 389, this._ctx) ) {
						case 1:
							{
							this.state = 2433;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2436;
						this.valueStmt(5);
						}
						break;

					case 20:
						{
						_localctx = new VsImpContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, BosParser.RULE_valueStmt);
						this.state = 2437;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2439;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2438;
							this.match(BosParser.WS);
							}
						}

						this.state = 2441;
						this.match(BosParser.IMP);
						this.state = 2443;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 391, this._ctx) ) {
						case 1:
							{
							this.state = 2442;
							this.match(BosParser.WS);
							}
							break;
						}
						this.state = 2445;
						this.valueStmt(4);
						}
						break;
					}
					}
				}
				this.state = 2450;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 393, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStmt(): VariableStmtContext {
		let _localctx: VariableStmtContext = new VariableStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, BosParser.RULE_variableStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BosParser.DIM:
				{
				this.state = 2451;
				this.match(BosParser.DIM);
				}
				break;
			case BosParser.STATIC:
				{
				this.state = 2452;
				this.match(BosParser.STATIC);
				}
				break;
			case BosParser.FRIEND:
			case BosParser.GLOBAL:
			case BosParser.PRIVATE:
			case BosParser.PUBLIC:
				{
				this.state = 2453;
				this.visibility();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2456;
			this.match(BosParser.WS);
			this.state = 2459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 395, this._ctx) ) {
			case 1:
				{
				this.state = 2457;
				this.match(BosParser.WITHEVENTS);
				this.state = 2458;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2461;
			this.variableListStmt();
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
	public variableListStmt(): VariableListStmtContext {
		let _localctx: VariableListStmtContext = new VariableListStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, BosParser.RULE_variableListStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2463;
			this.variableSubStmt();
			this.state = 2474;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 398, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2465;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 2464;
						this.match(BosParser.WS);
						}
					}

					this.state = 2467;
					this.match(BosParser.COMMA);
					this.state = 2469;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 2468;
						this.match(BosParser.WS);
						}
					}

					this.state = 2471;
					this.variableSubStmt();
					}
					}
				}
				this.state = 2476;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 398, this._ctx);
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
	public variableSubStmt(): VariableSubStmtContext {
		let _localctx: VariableSubStmtContext = new VariableSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, BosParser.RULE_variableSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2477;
			this.ambiguousIdentifier();
			this.state = 2479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 399, this._ctx) ) {
			case 1:
				{
				this.state = 2478;
				this.typeHint();
				}
				break;
			}
			this.state = 2498;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 405, this._ctx) ) {
			case 1:
				{
				this.state = 2482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2481;
					this.match(BosParser.WS);
					}
				}

				this.state = 2484;
				this.match(BosParser.LPAREN);
				this.state = 2486;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 401, this._ctx) ) {
				case 1:
					{
					this.state = 2485;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)) | (1 << (BosParser.DOT - 166)) | (1 << (BosParser.EXCLAMATIONMARK - 166)) | (1 << (BosParser.LPAREN - 166)) | (1 << (BosParser.MINUS - 166)))) !== 0) || ((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & ((1 << (BosParser.PLUS - 202)) | (1 << (BosParser.L_SQUARE_BRACKET - 202)) | (1 << (BosParser.STRINGLITERAL - 202)) | (1 << (BosParser.DATELITERAL - 202)) | (1 << (BosParser.COLORLITERAL - 202)) | (1 << (BosParser.INTEGERLITERAL - 202)) | (1 << (BosParser.DOUBLELITERAL - 202)) | (1 << (BosParser.FILENUMBER - 202)) | (1 << (BosParser.OCTALLITERAL - 202)) | (1 << (BosParser.IDENTIFIER - 202)) | (1 << (BosParser.WS - 202)))) !== 0)) {
					{
					this.state = 2488;
					this.subscripts();
					this.state = 2490;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 2489;
						this.match(BosParser.WS);
						}
					}

					}
				}

				this.state = 2494;
				this.match(BosParser.RPAREN);
				this.state = 2496;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 404, this._ctx) ) {
				case 1:
					{
					this.state = 2495;
					this.match(BosParser.WS);
					}
					break;
				}
				}
				break;
			}
			this.state = 2502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 406, this._ctx) ) {
			case 1:
				{
				this.state = 2500;
				this.match(BosParser.WS);
				this.state = 2501;
				this.asTypeClause();
				}
				break;
			}
			this.state = 2512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 409, this._ctx) ) {
			case 1:
				{
				this.state = 2505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2504;
					this.match(BosParser.WS);
					}
				}

				this.state = 2507;
				this.match(BosParser.EQ);
				this.state = 2509;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 408, this._ctx) ) {
				case 1:
					{
					this.state = 2508;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2511;
				this.valueStmt(0);
				}
				break;
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
	public whileWendStmt(): WhileWendStmtContext {
		let _localctx: WhileWendStmtContext = new WhileWendStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, BosParser.RULE_whileWendStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2514;
			this.match(BosParser.WHILE);
			this.state = 2515;
			this.match(BosParser.WS);
			this.state = 2516;
			this.valueStmt(0);
			this.state = 2518;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2517;
					this.match(BosParser.NEWLINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2520;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 410, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2525;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 411, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2522;
					this.block();
					}
					}
				}
				this.state = 2527;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 411, this._ctx);
			}
			this.state = 2531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BosParser.NEWLINE) {
				{
				{
				this.state = 2528;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 2533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2534;
			this.match(BosParser.WEND);
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
	public widthStmt(): WidthStmtContext {
		let _localctx: WidthStmtContext = new WidthStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, BosParser.RULE_widthStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2536;
			this.match(BosParser.WIDTH);
			this.state = 2537;
			this.match(BosParser.WS);
			this.state = 2538;
			this.valueStmt(0);
			this.state = 2540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2539;
				this.match(BosParser.WS);
				}
			}

			this.state = 2542;
			this.match(BosParser.COMMA);
			this.state = 2544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 414, this._ctx) ) {
			case 1:
				{
				this.state = 2543;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2546;
			this.valueStmt(0);
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
	public withStmt(): WithStmtContext {
		let _localctx: WithStmtContext = new WithStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, BosParser.RULE_withStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2548;
			this.match(BosParser.WITH);
			this.state = 2549;
			this.match(BosParser.WS);
			this.state = 2552;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 415, this._ctx) ) {
			case 1:
				{
				this.state = 2550;
				this.match(BosParser.NEW);
				this.state = 2551;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2554;
			this.implicitCallStmt_InStmt();
			this.state = 2556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2555;
				this.match(BosParser.NEWLINE);
				}
				}
				this.state = 2558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BosParser.NEWLINE);
			this.state = 2566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)) | (1 << (BosParser.EXIT_DO - 32)) | (1 << (BosParser.EXIT_FOR - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (BosParser.EXIT_FUNCTION - 64)) | (1 << (BosParser.EXIT_PROPERTY - 64)) | (1 << (BosParser.EXIT_SUB - 64)) | (1 << (BosParser.FALSE - 64)) | (1 << (BosParser.FILECOPY - 64)) | (1 << (BosParser.FRIEND - 64)) | (1 << (BosParser.FOR - 64)) | (1 << (BosParser.FUNCTION - 64)) | (1 << (BosParser.GET - 64)) | (1 << (BosParser.GLOBAL - 64)) | (1 << (BosParser.GOSUB - 64)) | (1 << (BosParser.GOTO - 64)) | (1 << (BosParser.IF - 64)) | (1 << (BosParser.IMP - 64)) | (1 << (BosParser.IMPLEMENTS - 64)) | (1 << (BosParser.IN - 64)) | (1 << (BosParser.INPUT - 64)) | (1 << (BosParser.IS - 64)) | (1 << (BosParser.INTEGER - 64)) | (1 << (BosParser.KILL - 64)) | (1 << (BosParser.LOAD - 64)) | (1 << (BosParser.LOCK - 64)) | (1 << (BosParser.LONG - 64)) | (1 << (BosParser.LOOP - 64)) | (1 << (BosParser.LEN - 64)) | (1 << (BosParser.LET - 64)) | (1 << (BosParser.LIB - 64)) | (1 << (BosParser.LIKE - 64)) | (1 << (BosParser.LINE_INPUT - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (BosParser.LSET - 97)) | (1 << (BosParser.MACRO_IF - 97)) | (1 << (BosParser.ME - 97)) | (1 << (BosParser.MID - 97)) | (1 << (BosParser.MKDIR - 97)) | (1 << (BosParser.MOD - 97)) | (1 << (BosParser.NAME - 97)) | (1 << (BosParser.NEXT - 97)) | (1 << (BosParser.NEW - 97)) | (1 << (BosParser.NOT - 97)) | (1 << (BosParser.NOTHING - 97)) | (1 << (BosParser.NULL - 97)) | (1 << (BosParser.OBJECT - 97)) | (1 << (BosParser.ON - 97)) | (1 << (BosParser.ON_ERROR - 97)) | (1 << (BosParser.ON_LOCAL_ERROR - 97)) | (1 << (BosParser.OPEN - 97)) | (1 << (BosParser.OPTIONAL - 97)) | (1 << (BosParser.OR - 97)) | (1 << (BosParser.OUTPUT - 97)) | (1 << (BosParser.PARAMARRAY - 97)) | (1 << (BosParser.PRESERVE - 97)) | (1 << (BosParser.PRINT - 97)) | (1 << (BosParser.PRIVATE - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (BosParser.PUBLIC - 131)) | (1 << (BosParser.PUT - 131)) | (1 << (BosParser.RANDOM - 131)) | (1 << (BosParser.RANDOMIZE - 131)) | (1 << (BosParser.RAISEEVENT - 131)) | (1 << (BosParser.READ - 131)) | (1 << (BosParser.REDIM - 131)) | (1 << (BosParser.REM - 131)) | (1 << (BosParser.RESET - 131)) | (1 << (BosParser.RESUME - 131)) | (1 << (BosParser.RETURN - 131)) | (1 << (BosParser.RMDIR - 131)) | (1 << (BosParser.RSET - 131)) | (1 << (BosParser.SAVEPICTURE - 131)) | (1 << (BosParser.SAVESETTING - 131)) | (1 << (BosParser.SEEK - 131)) | (1 << (BosParser.SELECT - 131)) | (1 << (BosParser.SENDKEYS - 131)) | (1 << (BosParser.SET - 131)) | (1 << (BosParser.SETATTR - 131)) | (1 << (BosParser.SHARED - 131)) | (1 << (BosParser.SINGLE - 131)) | (1 << (BosParser.SPC - 131)) | (1 << (BosParser.STATIC - 131)) | (1 << (BosParser.STEP - 131)) | (1 << (BosParser.STOP - 131)) | (1 << (BosParser.STRING - 131)) | (1 << (BosParser.SUB - 131)) | (1 << (BosParser.TAB - 131)) | (1 << (BosParser.TEXT - 131)) | (1 << (BosParser.THEN - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (BosParser.TIME - 163)) | (1 << (BosParser.TO - 163)) | (1 << (BosParser.TRUE - 163)) | (1 << (BosParser.TYPE - 163)) | (1 << (BosParser.TYPEOF - 163)) | (1 << (BosParser.UNLOAD - 163)) | (1 << (BosParser.UNLOCK - 163)) | (1 << (BosParser.UNTIL - 163)) | (1 << (BosParser.VARIANT - 163)) | (1 << (BosParser.VERSION - 163)) | (1 << (BosParser.WEND - 163)) | (1 << (BosParser.WHILE - 163)) | (1 << (BosParser.WIDTH - 163)) | (1 << (BosParser.WITH - 163)) | (1 << (BosParser.WITHEVENTS - 163)) | (1 << (BosParser.WRITE - 163)) | (1 << (BosParser.XOR - 163)) | (1 << (BosParser.DOT - 163)) | (1 << (BosParser.EXCLAMATIONMARK - 163)))) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (BosParser.L_SQUARE_BRACKET - 208)) | (1 << (BosParser.IDENTIFIER - 208)) | (1 << (BosParser.WS - 208)))) !== 0)) {
				{
				this.state = 2560;
				this.block();
				this.state = 2562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2561;
					this.match(BosParser.NEWLINE);
					}
					}
					this.state = 2564;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === BosParser.NEWLINE);
				}
			}

			this.state = 2568;
			this.match(BosParser.END_WITH);
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
	public writeStmt(): WriteStmtContext {
		let _localctx: WriteStmtContext = new WriteStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, BosParser.RULE_writeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2570;
			this.match(BosParser.WRITE);
			this.state = 2571;
			this.match(BosParser.WS);
			this.state = 2572;
			this.valueStmt(0);
			this.state = 2574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2573;
				this.match(BosParser.WS);
				}
			}

			this.state = 2576;
			this.match(BosParser.COMMA);
			this.state = 2581;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 421, this._ctx) ) {
			case 1:
				{
				this.state = 2578;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 420, this._ctx) ) {
				case 1:
					{
					this.state = 2577;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2580;
				this.outputList();
				}
				break;
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
	public explicitCallStmt(): ExplicitCallStmtContext {
		let _localctx: ExplicitCallStmtContext = new ExplicitCallStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, BosParser.RULE_explicitCallStmt);
		try {
			this.state = 2585;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 422, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2583;
				this.eCS_ProcedureCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2584;
				this.eCS_MemberProcedureCall();
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
	// @RuleVersion(0)
	public eCS_ProcedureCall(): ECS_ProcedureCallContext {
		let _localctx: ECS_ProcedureCallContext = new ECS_ProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, BosParser.RULE_eCS_ProcedureCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2587;
			this.match(BosParser.CALL);
			this.state = 2588;
			this.match(BosParser.WS);
			this.state = 2589;
			this.ambiguousIdentifier();
			this.state = 2591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 423, this._ctx) ) {
			case 1:
				{
				this.state = 2590;
				this.typeHint();
				}
				break;
			}
			this.state = 2606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 427, this._ctx) ) {
			case 1:
				{
				this.state = 2594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2593;
					this.match(BosParser.WS);
					}
				}

				this.state = 2596;
				this.match(BosParser.LPAREN);
				this.state = 2598;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 425, this._ctx) ) {
				case 1:
					{
					this.state = 2597;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2600;
				this.argsCall();
				this.state = 2602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2601;
					this.match(BosParser.WS);
					}
				}

				this.state = 2604;
				this.match(BosParser.RPAREN);
				}
				break;
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
	public eCS_MemberProcedureCall(): ECS_MemberProcedureCallContext {
		let _localctx: ECS_MemberProcedureCallContext = new ECS_MemberProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, BosParser.RULE_eCS_MemberProcedureCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2608;
			this.match(BosParser.CALL);
			this.state = 2609;
			this.match(BosParser.WS);
			this.state = 2611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 428, this._ctx) ) {
			case 1:
				{
				this.state = 2610;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
			this.state = 2613;
			this.match(BosParser.DOT);
			this.state = 2615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2614;
				this.match(BosParser.WS);
				}
			}

			this.state = 2617;
			this.ambiguousIdentifier();
			this.state = 2619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 430, this._ctx) ) {
			case 1:
				{
				this.state = 2618;
				this.typeHint();
				}
				break;
			}
			this.state = 2634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 434, this._ctx) ) {
			case 1:
				{
				this.state = 2622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2621;
					this.match(BosParser.WS);
					}
				}

				this.state = 2624;
				this.match(BosParser.LPAREN);
				this.state = 2626;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 432, this._ctx) ) {
				case 1:
					{
					this.state = 2625;
					this.match(BosParser.WS);
					}
					break;
				}
				this.state = 2628;
				this.argsCall();
				this.state = 2630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2629;
					this.match(BosParser.WS);
					}
				}

				this.state = 2632;
				this.match(BosParser.RPAREN);
				}
				break;
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
	public implicitCallStmt_InBlock(): ImplicitCallStmt_InBlockContext {
		let _localctx: ImplicitCallStmt_InBlockContext = new ImplicitCallStmt_InBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, BosParser.RULE_implicitCallStmt_InBlock);
		try {
			this.state = 2638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 435, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2636;
				this.iCS_B_ProcedureCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2637;
				this.iCS_B_MemberProcedureCall();
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
	// @RuleVersion(0)
	public iCS_B_ProcedureCall(): ICS_B_ProcedureCallContext {
		let _localctx: ICS_B_ProcedureCallContext = new ICS_B_ProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, BosParser.RULE_iCS_B_ProcedureCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2640;
			this.certainIdentifier();
			this.state = 2643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 436, this._ctx) ) {
			case 1:
				{
				this.state = 2641;
				this.match(BosParser.WS);
				this.state = 2642;
				this.argsCall();
				}
				break;
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
	public iCS_B_MemberProcedureCall(): ICS_B_MemberProcedureCallContext {
		let _localctx: ICS_B_MemberProcedureCallContext = new ICS_B_MemberProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, BosParser.RULE_iCS_B_MemberProcedureCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2646;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 437, this._ctx) ) {
			case 1:
				{
				this.state = 2645;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
			this.state = 2648;
			this.match(BosParser.DOT);
			this.state = 2649;
			this.ambiguousIdentifier();
			this.state = 2651;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 438, this._ctx) ) {
			case 1:
				{
				this.state = 2650;
				this.typeHint();
				}
				break;
			}
			this.state = 2655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 439, this._ctx) ) {
			case 1:
				{
				this.state = 2653;
				this.match(BosParser.WS);
				this.state = 2654;
				this.argsCall();
				}
				break;
			}
			this.state = 2658;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 440, this._ctx) ) {
			case 1:
				{
				this.state = 2657;
				this.dictionaryCallStmt();
				}
				break;
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
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		let _localctx: ImplicitCallStmt_InStmtContext = new ImplicitCallStmt_InStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, BosParser.RULE_implicitCallStmt_InStmt);
		try {
			this.state = 2664;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 441, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2660;
				this.iCS_S_MembersCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2661;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2662;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2663;
				this.iCS_S_DictionaryCall();
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
	// @RuleVersion(0)
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		let _localctx: ICS_S_VariableOrProcedureCallContext = new ICS_S_VariableOrProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, BosParser.RULE_iCS_S_VariableOrProcedureCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2666;
			this.ambiguousIdentifier();
			this.state = 2668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 442, this._ctx) ) {
			case 1:
				{
				this.state = 2667;
				this.typeHint();
				}
				break;
			}
			this.state = 2671;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 443, this._ctx) ) {
			case 1:
				{
				this.state = 2670;
				this.dictionaryCallStmt();
				}
				break;
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
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext {
		let _localctx: ICS_S_ProcedureOrArrayCallContext = new ICS_S_ProcedureOrArrayCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, BosParser.RULE_iCS_S_ProcedureOrArrayCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 444, this._ctx) ) {
			case 1:
				{
				this.state = 2673;
				this.ambiguousIdentifier();
				}
				break;

			case 2:
				{
				this.state = 2674;
				this.baseType();
				}
				break;

			case 3:
				{
				this.state = 2675;
				this.iCS_S_NestedProcedureCall();
				}
				break;
			}
			this.state = 2679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
				{
				this.state = 2678;
				this.typeHint();
				}
			}

			this.state = 2682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2681;
				this.match(BosParser.WS);
				}
			}

			this.state = 2695;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2684;
					this.match(BosParser.LPAREN);
					this.state = 2686;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 447, this._ctx) ) {
					case 1:
						{
						this.state = 2685;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 2692;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)) | (1 << (BosParser.COMMA - 166)) | (1 << (BosParser.DOT - 166)) | (1 << (BosParser.EXCLAMATIONMARK - 166)) | (1 << (BosParser.LPAREN - 166)) | (1 << (BosParser.MINUS - 166)))) !== 0) || ((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & ((1 << (BosParser.PLUS - 202)) | (1 << (BosParser.SEMICOLON - 202)) | (1 << (BosParser.L_SQUARE_BRACKET - 202)) | (1 << (BosParser.STRINGLITERAL - 202)) | (1 << (BosParser.DATELITERAL - 202)) | (1 << (BosParser.COLORLITERAL - 202)) | (1 << (BosParser.INTEGERLITERAL - 202)) | (1 << (BosParser.DOUBLELITERAL - 202)) | (1 << (BosParser.FILENUMBER - 202)) | (1 << (BosParser.OCTALLITERAL - 202)) | (1 << (BosParser.IDENTIFIER - 202)) | (1 << (BosParser.WS - 202)))) !== 0)) {
						{
						this.state = 2688;
						this.argsCall();
						this.state = 2690;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2689;
							this.match(BosParser.WS);
							}
						}

						}
					}

					this.state = 2694;
					this.match(BosParser.RPAREN);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2697;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 450, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 451, this._ctx) ) {
			case 1:
				{
				this.state = 2699;
				this.dictionaryCallStmt();
				}
				break;
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
	public iCS_S_NestedProcedureCall(): ICS_S_NestedProcedureCallContext {
		let _localctx: ICS_S_NestedProcedureCallContext = new ICS_S_NestedProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, BosParser.RULE_iCS_S_NestedProcedureCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2702;
			this.ambiguousIdentifier();
			this.state = 2704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
				{
				this.state = 2703;
				this.typeHint();
				}
			}

			this.state = 2707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2706;
				this.match(BosParser.WS);
				}
			}

			this.state = 2709;
			this.match(BosParser.LPAREN);
			this.state = 2711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 454, this._ctx) ) {
			case 1:
				{
				this.state = 2710;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)) | (1 << (BosParser.COMMA - 166)) | (1 << (BosParser.DOT - 166)) | (1 << (BosParser.EXCLAMATIONMARK - 166)) | (1 << (BosParser.LPAREN - 166)) | (1 << (BosParser.MINUS - 166)))) !== 0) || ((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & ((1 << (BosParser.PLUS - 202)) | (1 << (BosParser.SEMICOLON - 202)) | (1 << (BosParser.L_SQUARE_BRACKET - 202)) | (1 << (BosParser.STRINGLITERAL - 202)) | (1 << (BosParser.DATELITERAL - 202)) | (1 << (BosParser.COLORLITERAL - 202)) | (1 << (BosParser.INTEGERLITERAL - 202)) | (1 << (BosParser.DOUBLELITERAL - 202)) | (1 << (BosParser.FILENUMBER - 202)) | (1 << (BosParser.OCTALLITERAL - 202)) | (1 << (BosParser.IDENTIFIER - 202)) | (1 << (BosParser.WS - 202)))) !== 0)) {
				{
				this.state = 2713;
				this.argsCall();
				this.state = 2715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2714;
					this.match(BosParser.WS);
					}
				}

				}
			}

			this.state = 2719;
			this.match(BosParser.RPAREN);
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
	public iCS_S_MembersCall(): ICS_S_MembersCallContext {
		let _localctx: ICS_S_MembersCallContext = new ICS_S_MembersCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, BosParser.RULE_iCS_S_MembersCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 457, this._ctx) ) {
			case 1:
				{
				this.state = 2721;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 2:
				{
				this.state = 2722;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;
			}
			this.state = 2726;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2725;
					this.iCS_S_MemberCall();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2728;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 458, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2731;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 459, this._ctx) ) {
			case 1:
				{
				this.state = 2730;
				this.dictionaryCallStmt();
				}
				break;
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
	public iCS_S_MemberCall(): ICS_S_MemberCallContext {
		let _localctx: ICS_S_MemberCallContext = new ICS_S_MemberCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, BosParser.RULE_iCS_S_MemberCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2733;
				this.match(BosParser.WS);
				}
			}

			this.state = 2736;
			this.match(BosParser.DOT);
			this.state = 2739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 461, this._ctx) ) {
			case 1:
				{
				this.state = 2737;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 2:
				{
				this.state = 2738;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;
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
	public iCS_S_DictionaryCall(): ICS_S_DictionaryCallContext {
		let _localctx: ICS_S_DictionaryCallContext = new ICS_S_DictionaryCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, BosParser.RULE_iCS_S_DictionaryCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2741;
			this.dictionaryCallStmt();
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
	public argsCall(): ArgsCallContext {
		let _localctx: ArgsCallContext = new ArgsCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, BosParser.RULE_argsCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2755;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 465, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2744;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 462, this._ctx) ) {
					case 1:
						{
						this.state = 2743;
						this.argCall();
						}
						break;
					}
					this.state = 2747;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 2746;
						this.match(BosParser.WS);
						}
					}

					this.state = 2749;
					_la = this._input.LA(1);
					if (!(_la === BosParser.COMMA || _la === BosParser.SEMICOLON)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2751;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 464, this._ctx) ) {
					case 1:
						{
						this.state = 2750;
						this.match(BosParser.WS);
						}
						break;
					}
					}
					}
				}
				this.state = 2757;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 465, this._ctx);
			}
			this.state = 2758;
			this.argCall();
			this.state = 2771;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 469, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2760;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 2759;
						this.match(BosParser.WS);
						}
					}

					this.state = 2762;
					_la = this._input.LA(1);
					if (!(_la === BosParser.COMMA || _la === BosParser.SEMICOLON)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2764;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 467, this._ctx) ) {
					case 1:
						{
						this.state = 2763;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 2767;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 468, this._ctx) ) {
					case 1:
						{
						this.state = 2766;
						this.argCall();
						}
						break;
					}
					}
					}
				}
				this.state = 2773;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 469, this._ctx);
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
	public argCall(): ArgCallContext {
		let _localctx: ArgCallContext = new ArgCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, BosParser.RULE_argCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 470, this._ctx) ) {
			case 1:
				{
				this.state = 2774;
				_la = this._input.LA(1);
				if (!(_la === BosParser.BYVAL || _la === BosParser.BYREF || _la === BosParser.PARAMARRAY)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2775;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2778;
			this.valueStmt(0);
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
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		let _localctx: DictionaryCallStmtContext = new DictionaryCallStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, BosParser.RULE_dictionaryCallStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2780;
			this.match(BosParser.EXCLAMATIONMARK);
			this.state = 2781;
			this.ambiguousIdentifier();
			this.state = 2783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 471, this._ctx) ) {
			case 1:
				{
				this.state = 2782;
				this.typeHint();
				}
				break;
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
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, BosParser.RULE_argList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2785;
			this.match(BosParser.LPAREN);
			this.state = 2803;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 476, this._ctx) ) {
			case 1:
				{
				this.state = 2787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2786;
					this.match(BosParser.WS);
					}
				}

				this.state = 2789;
				this.arg();
				this.state = 2800;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 475, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2791;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2790;
							this.match(BosParser.WS);
							}
						}

						this.state = 2793;
						this.match(BosParser.COMMA);
						this.state = 2795;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === BosParser.WS) {
							{
							this.state = 2794;
							this.match(BosParser.WS);
							}
						}

						this.state = 2797;
						this.arg();
						}
						}
					}
					this.state = 2802;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 475, this._ctx);
				}
				}
				break;
			}
			this.state = 2806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2805;
				this.match(BosParser.WS);
				}
			}

			this.state = 2808;
			this.match(BosParser.RPAREN);
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
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, BosParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2812;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 478, this._ctx) ) {
			case 1:
				{
				this.state = 2810;
				this.match(BosParser.OPTIONAL);
				this.state = 2811;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 479, this._ctx) ) {
			case 1:
				{
				this.state = 2814;
				_la = this._input.LA(1);
				if (!(_la === BosParser.BYVAL || _la === BosParser.BYREF)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2815;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 480, this._ctx) ) {
			case 1:
				{
				this.state = 2818;
				this.match(BosParser.PARAMARRAY);
				this.state = 2819;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2822;
			this.ambiguousIdentifier();
			this.state = 2824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0)) {
				{
				this.state = 2823;
				this.typeHint();
				}
			}

			this.state = 2834;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 484, this._ctx) ) {
			case 1:
				{
				this.state = 2827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2826;
					this.match(BosParser.WS);
					}
				}

				this.state = 2829;
				this.match(BosParser.LPAREN);
				this.state = 2831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2830;
					this.match(BosParser.WS);
					}
				}

				this.state = 2833;
				this.match(BosParser.RPAREN);
				}
				break;
			}
			this.state = 2838;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 485, this._ctx) ) {
			case 1:
				{
				this.state = 2836;
				this.match(BosParser.WS);
				this.state = 2837;
				this.asTypeClause();
				}
				break;
			}
			this.state = 2844;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 487, this._ctx) ) {
			case 1:
				{
				this.state = 2841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2840;
					this.match(BosParser.WS);
					}
				}

				this.state = 2843;
				this.argDefaultValue();
				}
				break;
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
	public argDefaultValue(): ArgDefaultValueContext {
		let _localctx: ArgDefaultValueContext = new ArgDefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, BosParser.RULE_argDefaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2846;
			this.match(BosParser.EQ);
			this.state = 2848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 488, this._ctx) ) {
			case 1:
				{
				this.state = 2847;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2850;
			this.valueStmt(0);
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
	public subscripts(): SubscriptsContext {
		let _localctx: SubscriptsContext = new SubscriptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, BosParser.RULE_subscripts);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2852;
			this.subscript();
			this.state = 2863;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 491, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2854;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === BosParser.WS) {
						{
						this.state = 2853;
						this.match(BosParser.WS);
						}
					}

					this.state = 2856;
					this.match(BosParser.COMMA);
					this.state = 2858;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 490, this._ctx) ) {
					case 1:
						{
						this.state = 2857;
						this.match(BosParser.WS);
						}
						break;
					}
					this.state = 2860;
					this.subscript();
					}
					}
				}
				this.state = 2865;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 491, this._ctx);
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
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, BosParser.RULE_subscript);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2871;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 492, this._ctx) ) {
			case 1:
				{
				this.state = 2866;
				this.valueStmt(0);
				this.state = 2867;
				this.match(BosParser.WS);
				this.state = 2868;
				this.match(BosParser.TO);
				this.state = 2869;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2873;
			this.valueStmt(0);
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
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		let _localctx: AmbiguousIdentifierContext = new AmbiguousIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, BosParser.RULE_ambiguousIdentifier);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2889;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BosParser.ACCESS:
			case BosParser.ADDRESSOF:
			case BosParser.ALIAS:
			case BosParser.AND:
			case BosParser.ATTRIBUTE:
			case BosParser.APPACTIVATE:
			case BosParser.APPEND:
			case BosParser.AS:
			case BosParser.BEEP:
			case BosParser.BEGIN:
			case BosParser.BINARY:
			case BosParser.BOOLEAN:
			case BosParser.BYVAL:
			case BosParser.BYREF:
			case BosParser.BYTE:
			case BosParser.CALL:
			case BosParser.CASE:
			case BosParser.CHDIR:
			case BosParser.CHDRIVE:
			case BosParser.CLASS:
			case BosParser.CLOSE:
			case BosParser.COLLECTION:
			case BosParser.CONST:
			case BosParser.DATE:
			case BosParser.DECLARE:
			case BosParser.DEFBOOL:
			case BosParser.DEFBYTE:
			case BosParser.DEFDATE:
			case BosParser.DEFDBL:
			case BosParser.DEFDEC:
			case BosParser.DEFCUR:
			case BosParser.DEFINT:
			case BosParser.DEFLNG:
			case BosParser.DEFOBJ:
			case BosParser.DEFSNG:
			case BosParser.DEFSTR:
			case BosParser.DEFVAR:
			case BosParser.DELETESETTING:
			case BosParser.DIM:
			case BosParser.DO:
			case BosParser.DOUBLE:
			case BosParser.EACH:
			case BosParser.ELSE:
			case BosParser.ELSEIF:
			case BosParser.END:
			case BosParser.ENUM:
			case BosParser.EQV:
			case BosParser.ERASE:
			case BosParser.ERROR:
			case BosParser.EVENT:
			case BosParser.FALSE:
			case BosParser.FILECOPY:
			case BosParser.FRIEND:
			case BosParser.FOR:
			case BosParser.FUNCTION:
			case BosParser.GET:
			case BosParser.GLOBAL:
			case BosParser.GOSUB:
			case BosParser.GOTO:
			case BosParser.IF:
			case BosParser.IMP:
			case BosParser.IMPLEMENTS:
			case BosParser.IN:
			case BosParser.INPUT:
			case BosParser.IS:
			case BosParser.INTEGER:
			case BosParser.KILL:
			case BosParser.LOAD:
			case BosParser.LOCK:
			case BosParser.LONG:
			case BosParser.LOOP:
			case BosParser.LEN:
			case BosParser.LET:
			case BosParser.LIB:
			case BosParser.LIKE:
			case BosParser.LSET:
			case BosParser.ME:
			case BosParser.MID:
			case BosParser.MKDIR:
			case BosParser.MOD:
			case BosParser.NAME:
			case BosParser.NEXT:
			case BosParser.NEW:
			case BosParser.NOT:
			case BosParser.NOTHING:
			case BosParser.NULL:
			case BosParser.OBJECT:
			case BosParser.ON:
			case BosParser.OPEN:
			case BosParser.OPTIONAL:
			case BosParser.OR:
			case BosParser.OUTPUT:
			case BosParser.PARAMARRAY:
			case BosParser.PRESERVE:
			case BosParser.PRINT:
			case BosParser.PRIVATE:
			case BosParser.PUBLIC:
			case BosParser.PUT:
			case BosParser.RANDOM:
			case BosParser.RANDOMIZE:
			case BosParser.RAISEEVENT:
			case BosParser.READ:
			case BosParser.REDIM:
			case BosParser.REM:
			case BosParser.RESET:
			case BosParser.RESUME:
			case BosParser.RETURN:
			case BosParser.RMDIR:
			case BosParser.RSET:
			case BosParser.SAVEPICTURE:
			case BosParser.SAVESETTING:
			case BosParser.SEEK:
			case BosParser.SELECT:
			case BosParser.SENDKEYS:
			case BosParser.SET:
			case BosParser.SETATTR:
			case BosParser.SHARED:
			case BosParser.SINGLE:
			case BosParser.SPC:
			case BosParser.STATIC:
			case BosParser.STEP:
			case BosParser.STOP:
			case BosParser.STRING:
			case BosParser.SUB:
			case BosParser.TAB:
			case BosParser.TEXT:
			case BosParser.THEN:
			case BosParser.TIME:
			case BosParser.TO:
			case BosParser.TRUE:
			case BosParser.TYPE:
			case BosParser.TYPEOF:
			case BosParser.UNLOAD:
			case BosParser.UNLOCK:
			case BosParser.UNTIL:
			case BosParser.VARIANT:
			case BosParser.VERSION:
			case BosParser.WEND:
			case BosParser.WHILE:
			case BosParser.WIDTH:
			case BosParser.WITH:
			case BosParser.WITHEVENTS:
			case BosParser.WRITE:
			case BosParser.XOR:
			case BosParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2877;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 2877;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case BosParser.IDENTIFIER:
							{
							this.state = 2875;
							this.match(BosParser.IDENTIFIER);
							}
							break;
						case BosParser.ACCESS:
						case BosParser.ADDRESSOF:
						case BosParser.ALIAS:
						case BosParser.AND:
						case BosParser.ATTRIBUTE:
						case BosParser.APPACTIVATE:
						case BosParser.APPEND:
						case BosParser.AS:
						case BosParser.BEEP:
						case BosParser.BEGIN:
						case BosParser.BINARY:
						case BosParser.BOOLEAN:
						case BosParser.BYVAL:
						case BosParser.BYREF:
						case BosParser.BYTE:
						case BosParser.CALL:
						case BosParser.CASE:
						case BosParser.CHDIR:
						case BosParser.CHDRIVE:
						case BosParser.CLASS:
						case BosParser.CLOSE:
						case BosParser.COLLECTION:
						case BosParser.CONST:
						case BosParser.DATE:
						case BosParser.DECLARE:
						case BosParser.DEFBOOL:
						case BosParser.DEFBYTE:
						case BosParser.DEFDATE:
						case BosParser.DEFDBL:
						case BosParser.DEFDEC:
						case BosParser.DEFCUR:
						case BosParser.DEFINT:
						case BosParser.DEFLNG:
						case BosParser.DEFOBJ:
						case BosParser.DEFSNG:
						case BosParser.DEFSTR:
						case BosParser.DEFVAR:
						case BosParser.DELETESETTING:
						case BosParser.DIM:
						case BosParser.DO:
						case BosParser.DOUBLE:
						case BosParser.EACH:
						case BosParser.ELSE:
						case BosParser.ELSEIF:
						case BosParser.END:
						case BosParser.ENUM:
						case BosParser.EQV:
						case BosParser.ERASE:
						case BosParser.ERROR:
						case BosParser.EVENT:
						case BosParser.FALSE:
						case BosParser.FILECOPY:
						case BosParser.FRIEND:
						case BosParser.FOR:
						case BosParser.FUNCTION:
						case BosParser.GET:
						case BosParser.GLOBAL:
						case BosParser.GOSUB:
						case BosParser.GOTO:
						case BosParser.IF:
						case BosParser.IMP:
						case BosParser.IMPLEMENTS:
						case BosParser.IN:
						case BosParser.INPUT:
						case BosParser.IS:
						case BosParser.INTEGER:
						case BosParser.KILL:
						case BosParser.LOAD:
						case BosParser.LOCK:
						case BosParser.LONG:
						case BosParser.LOOP:
						case BosParser.LEN:
						case BosParser.LET:
						case BosParser.LIB:
						case BosParser.LIKE:
						case BosParser.LSET:
						case BosParser.ME:
						case BosParser.MID:
						case BosParser.MKDIR:
						case BosParser.MOD:
						case BosParser.NAME:
						case BosParser.NEXT:
						case BosParser.NEW:
						case BosParser.NOT:
						case BosParser.NOTHING:
						case BosParser.NULL:
						case BosParser.OBJECT:
						case BosParser.ON:
						case BosParser.OPEN:
						case BosParser.OPTIONAL:
						case BosParser.OR:
						case BosParser.OUTPUT:
						case BosParser.PARAMARRAY:
						case BosParser.PRESERVE:
						case BosParser.PRINT:
						case BosParser.PRIVATE:
						case BosParser.PUBLIC:
						case BosParser.PUT:
						case BosParser.RANDOM:
						case BosParser.RANDOMIZE:
						case BosParser.RAISEEVENT:
						case BosParser.READ:
						case BosParser.REDIM:
						case BosParser.REM:
						case BosParser.RESET:
						case BosParser.RESUME:
						case BosParser.RETURN:
						case BosParser.RMDIR:
						case BosParser.RSET:
						case BosParser.SAVEPICTURE:
						case BosParser.SAVESETTING:
						case BosParser.SEEK:
						case BosParser.SELECT:
						case BosParser.SENDKEYS:
						case BosParser.SET:
						case BosParser.SETATTR:
						case BosParser.SHARED:
						case BosParser.SINGLE:
						case BosParser.SPC:
						case BosParser.STATIC:
						case BosParser.STEP:
						case BosParser.STOP:
						case BosParser.STRING:
						case BosParser.SUB:
						case BosParser.TAB:
						case BosParser.TEXT:
						case BosParser.THEN:
						case BosParser.TIME:
						case BosParser.TO:
						case BosParser.TRUE:
						case BosParser.TYPE:
						case BosParser.TYPEOF:
						case BosParser.UNLOAD:
						case BosParser.UNLOCK:
						case BosParser.UNTIL:
						case BosParser.VARIANT:
						case BosParser.VERSION:
						case BosParser.WEND:
						case BosParser.WHILE:
						case BosParser.WIDTH:
						case BosParser.WITH:
						case BosParser.WITHEVENTS:
						case BosParser.WRITE:
						case BosParser.XOR:
							{
							this.state = 2876;
							this.ambiguousKeyword();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2879;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 494, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case BosParser.L_SQUARE_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2881;
				this.match(BosParser.L_SQUARE_BRACKET);
				this.state = 2884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 2884;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case BosParser.IDENTIFIER:
						{
						this.state = 2882;
						this.match(BosParser.IDENTIFIER);
						}
						break;
					case BosParser.ACCESS:
					case BosParser.ADDRESSOF:
					case BosParser.ALIAS:
					case BosParser.AND:
					case BosParser.ATTRIBUTE:
					case BosParser.APPACTIVATE:
					case BosParser.APPEND:
					case BosParser.AS:
					case BosParser.BEEP:
					case BosParser.BEGIN:
					case BosParser.BINARY:
					case BosParser.BOOLEAN:
					case BosParser.BYVAL:
					case BosParser.BYREF:
					case BosParser.BYTE:
					case BosParser.CALL:
					case BosParser.CASE:
					case BosParser.CHDIR:
					case BosParser.CHDRIVE:
					case BosParser.CLASS:
					case BosParser.CLOSE:
					case BosParser.COLLECTION:
					case BosParser.CONST:
					case BosParser.DATE:
					case BosParser.DECLARE:
					case BosParser.DEFBOOL:
					case BosParser.DEFBYTE:
					case BosParser.DEFDATE:
					case BosParser.DEFDBL:
					case BosParser.DEFDEC:
					case BosParser.DEFCUR:
					case BosParser.DEFINT:
					case BosParser.DEFLNG:
					case BosParser.DEFOBJ:
					case BosParser.DEFSNG:
					case BosParser.DEFSTR:
					case BosParser.DEFVAR:
					case BosParser.DELETESETTING:
					case BosParser.DIM:
					case BosParser.DO:
					case BosParser.DOUBLE:
					case BosParser.EACH:
					case BosParser.ELSE:
					case BosParser.ELSEIF:
					case BosParser.END:
					case BosParser.ENUM:
					case BosParser.EQV:
					case BosParser.ERASE:
					case BosParser.ERROR:
					case BosParser.EVENT:
					case BosParser.FALSE:
					case BosParser.FILECOPY:
					case BosParser.FRIEND:
					case BosParser.FOR:
					case BosParser.FUNCTION:
					case BosParser.GET:
					case BosParser.GLOBAL:
					case BosParser.GOSUB:
					case BosParser.GOTO:
					case BosParser.IF:
					case BosParser.IMP:
					case BosParser.IMPLEMENTS:
					case BosParser.IN:
					case BosParser.INPUT:
					case BosParser.IS:
					case BosParser.INTEGER:
					case BosParser.KILL:
					case BosParser.LOAD:
					case BosParser.LOCK:
					case BosParser.LONG:
					case BosParser.LOOP:
					case BosParser.LEN:
					case BosParser.LET:
					case BosParser.LIB:
					case BosParser.LIKE:
					case BosParser.LSET:
					case BosParser.ME:
					case BosParser.MID:
					case BosParser.MKDIR:
					case BosParser.MOD:
					case BosParser.NAME:
					case BosParser.NEXT:
					case BosParser.NEW:
					case BosParser.NOT:
					case BosParser.NOTHING:
					case BosParser.NULL:
					case BosParser.OBJECT:
					case BosParser.ON:
					case BosParser.OPEN:
					case BosParser.OPTIONAL:
					case BosParser.OR:
					case BosParser.OUTPUT:
					case BosParser.PARAMARRAY:
					case BosParser.PRESERVE:
					case BosParser.PRINT:
					case BosParser.PRIVATE:
					case BosParser.PUBLIC:
					case BosParser.PUT:
					case BosParser.RANDOM:
					case BosParser.RANDOMIZE:
					case BosParser.RAISEEVENT:
					case BosParser.READ:
					case BosParser.REDIM:
					case BosParser.REM:
					case BosParser.RESET:
					case BosParser.RESUME:
					case BosParser.RETURN:
					case BosParser.RMDIR:
					case BosParser.RSET:
					case BosParser.SAVEPICTURE:
					case BosParser.SAVESETTING:
					case BosParser.SEEK:
					case BosParser.SELECT:
					case BosParser.SENDKEYS:
					case BosParser.SET:
					case BosParser.SETATTR:
					case BosParser.SHARED:
					case BosParser.SINGLE:
					case BosParser.SPC:
					case BosParser.STATIC:
					case BosParser.STEP:
					case BosParser.STOP:
					case BosParser.STRING:
					case BosParser.SUB:
					case BosParser.TAB:
					case BosParser.TEXT:
					case BosParser.THEN:
					case BosParser.TIME:
					case BosParser.TO:
					case BosParser.TRUE:
					case BosParser.TYPE:
					case BosParser.TYPEOF:
					case BosParser.UNLOAD:
					case BosParser.UNLOCK:
					case BosParser.UNTIL:
					case BosParser.VARIANT:
					case BosParser.VERSION:
					case BosParser.WEND:
					case BosParser.WHILE:
					case BosParser.WIDTH:
					case BosParser.WITH:
					case BosParser.WITHEVENTS:
					case BosParser.WRITE:
					case BosParser.XOR:
						{
						this.state = 2883;
						this.ambiguousKeyword();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2886;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)))) !== 0) || _la === BosParser.IDENTIFIER);
				this.state = 2888;
				this.match(BosParser.R_SQUARE_BRACKET);
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
	public asTypeClause(): AsTypeClauseContext {
		let _localctx: AsTypeClauseContext = new AsTypeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, BosParser.RULE_asTypeClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2891;
			this.match(BosParser.AS);
			this.state = 2892;
			this.match(BosParser.WS);
			this.state = 2895;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 498, this._ctx) ) {
			case 1:
				{
				this.state = 2893;
				this.match(BosParser.NEW);
				this.state = 2894;
				this.match(BosParser.WS);
				}
				break;
			}
			this.state = 2897;
			this.type();
			this.state = 2900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 499, this._ctx) ) {
			case 1:
				{
				this.state = 2898;
				this.match(BosParser.WS);
				this.state = 2899;
				this.fieldLength();
				}
				break;
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
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, BosParser.RULE_baseType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2902;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (BosParser.BOOLEAN - 13)) | (1 << (BosParser.BYTE - 13)) | (1 << (BosParser.COLLECTION - 13)) | (1 << (BosParser.DATE - 13)) | (1 << (BosParser.DOUBLE - 13)))) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (BosParser.INTEGER - 83)) | (1 << (BosParser.LONG - 83)) | (1 << (BosParser.OBJECT - 83)))) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & ((1 << (BosParser.SINGLE - 153)) | (1 << (BosParser.STRING - 153)) | (1 << (BosParser.VARIANT - 153)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public certainIdentifier(): CertainIdentifierContext {
		let _localctx: CertainIdentifierContext = new CertainIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, BosParser.RULE_certainIdentifier);
		try {
			let _alt: number;
			this.state = 2919;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BosParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2904;
				this.match(BosParser.IDENTIFIER);
				this.state = 2909;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 501, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 2907;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case BosParser.ACCESS:
						case BosParser.ADDRESSOF:
						case BosParser.ALIAS:
						case BosParser.AND:
						case BosParser.ATTRIBUTE:
						case BosParser.APPACTIVATE:
						case BosParser.APPEND:
						case BosParser.AS:
						case BosParser.BEEP:
						case BosParser.BEGIN:
						case BosParser.BINARY:
						case BosParser.BOOLEAN:
						case BosParser.BYVAL:
						case BosParser.BYREF:
						case BosParser.BYTE:
						case BosParser.CALL:
						case BosParser.CASE:
						case BosParser.CHDIR:
						case BosParser.CHDRIVE:
						case BosParser.CLASS:
						case BosParser.CLOSE:
						case BosParser.COLLECTION:
						case BosParser.CONST:
						case BosParser.DATE:
						case BosParser.DECLARE:
						case BosParser.DEFBOOL:
						case BosParser.DEFBYTE:
						case BosParser.DEFDATE:
						case BosParser.DEFDBL:
						case BosParser.DEFDEC:
						case BosParser.DEFCUR:
						case BosParser.DEFINT:
						case BosParser.DEFLNG:
						case BosParser.DEFOBJ:
						case BosParser.DEFSNG:
						case BosParser.DEFSTR:
						case BosParser.DEFVAR:
						case BosParser.DELETESETTING:
						case BosParser.DIM:
						case BosParser.DO:
						case BosParser.DOUBLE:
						case BosParser.EACH:
						case BosParser.ELSE:
						case BosParser.ELSEIF:
						case BosParser.END:
						case BosParser.ENUM:
						case BosParser.EQV:
						case BosParser.ERASE:
						case BosParser.ERROR:
						case BosParser.EVENT:
						case BosParser.FALSE:
						case BosParser.FILECOPY:
						case BosParser.FRIEND:
						case BosParser.FOR:
						case BosParser.FUNCTION:
						case BosParser.GET:
						case BosParser.GLOBAL:
						case BosParser.GOSUB:
						case BosParser.GOTO:
						case BosParser.IF:
						case BosParser.IMP:
						case BosParser.IMPLEMENTS:
						case BosParser.IN:
						case BosParser.INPUT:
						case BosParser.IS:
						case BosParser.INTEGER:
						case BosParser.KILL:
						case BosParser.LOAD:
						case BosParser.LOCK:
						case BosParser.LONG:
						case BosParser.LOOP:
						case BosParser.LEN:
						case BosParser.LET:
						case BosParser.LIB:
						case BosParser.LIKE:
						case BosParser.LSET:
						case BosParser.ME:
						case BosParser.MID:
						case BosParser.MKDIR:
						case BosParser.MOD:
						case BosParser.NAME:
						case BosParser.NEXT:
						case BosParser.NEW:
						case BosParser.NOT:
						case BosParser.NOTHING:
						case BosParser.NULL:
						case BosParser.OBJECT:
						case BosParser.ON:
						case BosParser.OPEN:
						case BosParser.OPTIONAL:
						case BosParser.OR:
						case BosParser.OUTPUT:
						case BosParser.PARAMARRAY:
						case BosParser.PRESERVE:
						case BosParser.PRINT:
						case BosParser.PRIVATE:
						case BosParser.PUBLIC:
						case BosParser.PUT:
						case BosParser.RANDOM:
						case BosParser.RANDOMIZE:
						case BosParser.RAISEEVENT:
						case BosParser.READ:
						case BosParser.REDIM:
						case BosParser.REM:
						case BosParser.RESET:
						case BosParser.RESUME:
						case BosParser.RETURN:
						case BosParser.RMDIR:
						case BosParser.RSET:
						case BosParser.SAVEPICTURE:
						case BosParser.SAVESETTING:
						case BosParser.SEEK:
						case BosParser.SELECT:
						case BosParser.SENDKEYS:
						case BosParser.SET:
						case BosParser.SETATTR:
						case BosParser.SHARED:
						case BosParser.SINGLE:
						case BosParser.SPC:
						case BosParser.STATIC:
						case BosParser.STEP:
						case BosParser.STOP:
						case BosParser.STRING:
						case BosParser.SUB:
						case BosParser.TAB:
						case BosParser.TEXT:
						case BosParser.THEN:
						case BosParser.TIME:
						case BosParser.TO:
						case BosParser.TRUE:
						case BosParser.TYPE:
						case BosParser.TYPEOF:
						case BosParser.UNLOAD:
						case BosParser.UNLOCK:
						case BosParser.UNTIL:
						case BosParser.VARIANT:
						case BosParser.VERSION:
						case BosParser.WEND:
						case BosParser.WHILE:
						case BosParser.WIDTH:
						case BosParser.WITH:
						case BosParser.WITHEVENTS:
						case BosParser.WRITE:
						case BosParser.XOR:
							{
							this.state = 2905;
							this.ambiguousKeyword();
							}
							break;
						case BosParser.IDENTIFIER:
							{
							this.state = 2906;
							this.match(BosParser.IDENTIFIER);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 2911;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 501, this._ctx);
				}
				}
				break;
			case BosParser.ACCESS:
			case BosParser.ADDRESSOF:
			case BosParser.ALIAS:
			case BosParser.AND:
			case BosParser.ATTRIBUTE:
			case BosParser.APPACTIVATE:
			case BosParser.APPEND:
			case BosParser.AS:
			case BosParser.BEEP:
			case BosParser.BEGIN:
			case BosParser.BINARY:
			case BosParser.BOOLEAN:
			case BosParser.BYVAL:
			case BosParser.BYREF:
			case BosParser.BYTE:
			case BosParser.CALL:
			case BosParser.CASE:
			case BosParser.CHDIR:
			case BosParser.CHDRIVE:
			case BosParser.CLASS:
			case BosParser.CLOSE:
			case BosParser.COLLECTION:
			case BosParser.CONST:
			case BosParser.DATE:
			case BosParser.DECLARE:
			case BosParser.DEFBOOL:
			case BosParser.DEFBYTE:
			case BosParser.DEFDATE:
			case BosParser.DEFDBL:
			case BosParser.DEFDEC:
			case BosParser.DEFCUR:
			case BosParser.DEFINT:
			case BosParser.DEFLNG:
			case BosParser.DEFOBJ:
			case BosParser.DEFSNG:
			case BosParser.DEFSTR:
			case BosParser.DEFVAR:
			case BosParser.DELETESETTING:
			case BosParser.DIM:
			case BosParser.DO:
			case BosParser.DOUBLE:
			case BosParser.EACH:
			case BosParser.ELSE:
			case BosParser.ELSEIF:
			case BosParser.END:
			case BosParser.ENUM:
			case BosParser.EQV:
			case BosParser.ERASE:
			case BosParser.ERROR:
			case BosParser.EVENT:
			case BosParser.FALSE:
			case BosParser.FILECOPY:
			case BosParser.FRIEND:
			case BosParser.FOR:
			case BosParser.FUNCTION:
			case BosParser.GET:
			case BosParser.GLOBAL:
			case BosParser.GOSUB:
			case BosParser.GOTO:
			case BosParser.IF:
			case BosParser.IMP:
			case BosParser.IMPLEMENTS:
			case BosParser.IN:
			case BosParser.INPUT:
			case BosParser.IS:
			case BosParser.INTEGER:
			case BosParser.KILL:
			case BosParser.LOAD:
			case BosParser.LOCK:
			case BosParser.LONG:
			case BosParser.LOOP:
			case BosParser.LEN:
			case BosParser.LET:
			case BosParser.LIB:
			case BosParser.LIKE:
			case BosParser.LSET:
			case BosParser.ME:
			case BosParser.MID:
			case BosParser.MKDIR:
			case BosParser.MOD:
			case BosParser.NAME:
			case BosParser.NEXT:
			case BosParser.NEW:
			case BosParser.NOT:
			case BosParser.NOTHING:
			case BosParser.NULL:
			case BosParser.OBJECT:
			case BosParser.ON:
			case BosParser.OPEN:
			case BosParser.OPTIONAL:
			case BosParser.OR:
			case BosParser.OUTPUT:
			case BosParser.PARAMARRAY:
			case BosParser.PRESERVE:
			case BosParser.PRINT:
			case BosParser.PRIVATE:
			case BosParser.PUBLIC:
			case BosParser.PUT:
			case BosParser.RANDOM:
			case BosParser.RANDOMIZE:
			case BosParser.RAISEEVENT:
			case BosParser.READ:
			case BosParser.REDIM:
			case BosParser.REM:
			case BosParser.RESET:
			case BosParser.RESUME:
			case BosParser.RETURN:
			case BosParser.RMDIR:
			case BosParser.RSET:
			case BosParser.SAVEPICTURE:
			case BosParser.SAVESETTING:
			case BosParser.SEEK:
			case BosParser.SELECT:
			case BosParser.SENDKEYS:
			case BosParser.SET:
			case BosParser.SETATTR:
			case BosParser.SHARED:
			case BosParser.SINGLE:
			case BosParser.SPC:
			case BosParser.STATIC:
			case BosParser.STEP:
			case BosParser.STOP:
			case BosParser.STRING:
			case BosParser.SUB:
			case BosParser.TAB:
			case BosParser.TEXT:
			case BosParser.THEN:
			case BosParser.TIME:
			case BosParser.TO:
			case BosParser.TRUE:
			case BosParser.TYPE:
			case BosParser.TYPEOF:
			case BosParser.UNLOAD:
			case BosParser.UNLOCK:
			case BosParser.UNTIL:
			case BosParser.VARIANT:
			case BosParser.VERSION:
			case BosParser.WEND:
			case BosParser.WHILE:
			case BosParser.WIDTH:
			case BosParser.WITH:
			case BosParser.WITHEVENTS:
			case BosParser.WRITE:
			case BosParser.XOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2912;
				this.ambiguousKeyword();
				this.state = 2915;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 2915;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case BosParser.ACCESS:
						case BosParser.ADDRESSOF:
						case BosParser.ALIAS:
						case BosParser.AND:
						case BosParser.ATTRIBUTE:
						case BosParser.APPACTIVATE:
						case BosParser.APPEND:
						case BosParser.AS:
						case BosParser.BEEP:
						case BosParser.BEGIN:
						case BosParser.BINARY:
						case BosParser.BOOLEAN:
						case BosParser.BYVAL:
						case BosParser.BYREF:
						case BosParser.BYTE:
						case BosParser.CALL:
						case BosParser.CASE:
						case BosParser.CHDIR:
						case BosParser.CHDRIVE:
						case BosParser.CLASS:
						case BosParser.CLOSE:
						case BosParser.COLLECTION:
						case BosParser.CONST:
						case BosParser.DATE:
						case BosParser.DECLARE:
						case BosParser.DEFBOOL:
						case BosParser.DEFBYTE:
						case BosParser.DEFDATE:
						case BosParser.DEFDBL:
						case BosParser.DEFDEC:
						case BosParser.DEFCUR:
						case BosParser.DEFINT:
						case BosParser.DEFLNG:
						case BosParser.DEFOBJ:
						case BosParser.DEFSNG:
						case BosParser.DEFSTR:
						case BosParser.DEFVAR:
						case BosParser.DELETESETTING:
						case BosParser.DIM:
						case BosParser.DO:
						case BosParser.DOUBLE:
						case BosParser.EACH:
						case BosParser.ELSE:
						case BosParser.ELSEIF:
						case BosParser.END:
						case BosParser.ENUM:
						case BosParser.EQV:
						case BosParser.ERASE:
						case BosParser.ERROR:
						case BosParser.EVENT:
						case BosParser.FALSE:
						case BosParser.FILECOPY:
						case BosParser.FRIEND:
						case BosParser.FOR:
						case BosParser.FUNCTION:
						case BosParser.GET:
						case BosParser.GLOBAL:
						case BosParser.GOSUB:
						case BosParser.GOTO:
						case BosParser.IF:
						case BosParser.IMP:
						case BosParser.IMPLEMENTS:
						case BosParser.IN:
						case BosParser.INPUT:
						case BosParser.IS:
						case BosParser.INTEGER:
						case BosParser.KILL:
						case BosParser.LOAD:
						case BosParser.LOCK:
						case BosParser.LONG:
						case BosParser.LOOP:
						case BosParser.LEN:
						case BosParser.LET:
						case BosParser.LIB:
						case BosParser.LIKE:
						case BosParser.LSET:
						case BosParser.ME:
						case BosParser.MID:
						case BosParser.MKDIR:
						case BosParser.MOD:
						case BosParser.NAME:
						case BosParser.NEXT:
						case BosParser.NEW:
						case BosParser.NOT:
						case BosParser.NOTHING:
						case BosParser.NULL:
						case BosParser.OBJECT:
						case BosParser.ON:
						case BosParser.OPEN:
						case BosParser.OPTIONAL:
						case BosParser.OR:
						case BosParser.OUTPUT:
						case BosParser.PARAMARRAY:
						case BosParser.PRESERVE:
						case BosParser.PRINT:
						case BosParser.PRIVATE:
						case BosParser.PUBLIC:
						case BosParser.PUT:
						case BosParser.RANDOM:
						case BosParser.RANDOMIZE:
						case BosParser.RAISEEVENT:
						case BosParser.READ:
						case BosParser.REDIM:
						case BosParser.REM:
						case BosParser.RESET:
						case BosParser.RESUME:
						case BosParser.RETURN:
						case BosParser.RMDIR:
						case BosParser.RSET:
						case BosParser.SAVEPICTURE:
						case BosParser.SAVESETTING:
						case BosParser.SEEK:
						case BosParser.SELECT:
						case BosParser.SENDKEYS:
						case BosParser.SET:
						case BosParser.SETATTR:
						case BosParser.SHARED:
						case BosParser.SINGLE:
						case BosParser.SPC:
						case BosParser.STATIC:
						case BosParser.STEP:
						case BosParser.STOP:
						case BosParser.STRING:
						case BosParser.SUB:
						case BosParser.TAB:
						case BosParser.TEXT:
						case BosParser.THEN:
						case BosParser.TIME:
						case BosParser.TO:
						case BosParser.TRUE:
						case BosParser.TYPE:
						case BosParser.TYPEOF:
						case BosParser.UNLOAD:
						case BosParser.UNLOCK:
						case BosParser.UNTIL:
						case BosParser.VARIANT:
						case BosParser.VERSION:
						case BosParser.WEND:
						case BosParser.WHILE:
						case BosParser.WIDTH:
						case BosParser.WITH:
						case BosParser.WITHEVENTS:
						case BosParser.WRITE:
						case BosParser.XOR:
							{
							this.state = 2913;
							this.ambiguousKeyword();
							}
							break;
						case BosParser.IDENTIFIER:
							{
							this.state = 2914;
							this.match(BosParser.IDENTIFIER);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2917;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 503, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, BosParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2921;
			_la = this._input.LA(1);
			if (!(_la === BosParser.IS || _la === BosParser.LIKE || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & ((1 << (BosParser.EQ - 188)) | (1 << (BosParser.GEQ - 188)) | (1 << (BosParser.GT - 188)) | (1 << (BosParser.LEQ - 188)) | (1 << (BosParser.LT - 188)) | (1 << (BosParser.NEQ - 188)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public complexType(): ComplexTypeContext {
		let _localctx: ComplexTypeContext = new ComplexTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, BosParser.RULE_complexType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2923;
			this.ambiguousIdentifier();
			this.state = 2928;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 505, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2924;
					this.match(BosParser.DOT);
					this.state = 2925;
					this.ambiguousIdentifier();
					}
					}
				}
				this.state = 2930;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 505, this._ctx);
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
	public fieldLength(): FieldLengthContext {
		let _localctx: FieldLengthContext = new FieldLengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, BosParser.RULE_fieldLength);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2931;
			this.match(BosParser.MULT);
			this.state = 2933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BosParser.WS) {
				{
				this.state = 2932;
				this.match(BosParser.WS);
				}
			}

			this.state = 2937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BosParser.INTEGERLITERAL:
				{
				this.state = 2935;
				this.match(BosParser.INTEGERLITERAL);
				}
				break;
			case BosParser.ACCESS:
			case BosParser.ADDRESSOF:
			case BosParser.ALIAS:
			case BosParser.AND:
			case BosParser.ATTRIBUTE:
			case BosParser.APPACTIVATE:
			case BosParser.APPEND:
			case BosParser.AS:
			case BosParser.BEEP:
			case BosParser.BEGIN:
			case BosParser.BINARY:
			case BosParser.BOOLEAN:
			case BosParser.BYVAL:
			case BosParser.BYREF:
			case BosParser.BYTE:
			case BosParser.CALL:
			case BosParser.CASE:
			case BosParser.CHDIR:
			case BosParser.CHDRIVE:
			case BosParser.CLASS:
			case BosParser.CLOSE:
			case BosParser.COLLECTION:
			case BosParser.CONST:
			case BosParser.DATE:
			case BosParser.DECLARE:
			case BosParser.DEFBOOL:
			case BosParser.DEFBYTE:
			case BosParser.DEFDATE:
			case BosParser.DEFDBL:
			case BosParser.DEFDEC:
			case BosParser.DEFCUR:
			case BosParser.DEFINT:
			case BosParser.DEFLNG:
			case BosParser.DEFOBJ:
			case BosParser.DEFSNG:
			case BosParser.DEFSTR:
			case BosParser.DEFVAR:
			case BosParser.DELETESETTING:
			case BosParser.DIM:
			case BosParser.DO:
			case BosParser.DOUBLE:
			case BosParser.EACH:
			case BosParser.ELSE:
			case BosParser.ELSEIF:
			case BosParser.END:
			case BosParser.ENUM:
			case BosParser.EQV:
			case BosParser.ERASE:
			case BosParser.ERROR:
			case BosParser.EVENT:
			case BosParser.FALSE:
			case BosParser.FILECOPY:
			case BosParser.FRIEND:
			case BosParser.FOR:
			case BosParser.FUNCTION:
			case BosParser.GET:
			case BosParser.GLOBAL:
			case BosParser.GOSUB:
			case BosParser.GOTO:
			case BosParser.IF:
			case BosParser.IMP:
			case BosParser.IMPLEMENTS:
			case BosParser.IN:
			case BosParser.INPUT:
			case BosParser.IS:
			case BosParser.INTEGER:
			case BosParser.KILL:
			case BosParser.LOAD:
			case BosParser.LOCK:
			case BosParser.LONG:
			case BosParser.LOOP:
			case BosParser.LEN:
			case BosParser.LET:
			case BosParser.LIB:
			case BosParser.LIKE:
			case BosParser.LSET:
			case BosParser.ME:
			case BosParser.MID:
			case BosParser.MKDIR:
			case BosParser.MOD:
			case BosParser.NAME:
			case BosParser.NEXT:
			case BosParser.NEW:
			case BosParser.NOT:
			case BosParser.NOTHING:
			case BosParser.NULL:
			case BosParser.OBJECT:
			case BosParser.ON:
			case BosParser.OPEN:
			case BosParser.OPTIONAL:
			case BosParser.OR:
			case BosParser.OUTPUT:
			case BosParser.PARAMARRAY:
			case BosParser.PRESERVE:
			case BosParser.PRINT:
			case BosParser.PRIVATE:
			case BosParser.PUBLIC:
			case BosParser.PUT:
			case BosParser.RANDOM:
			case BosParser.RANDOMIZE:
			case BosParser.RAISEEVENT:
			case BosParser.READ:
			case BosParser.REDIM:
			case BosParser.REM:
			case BosParser.RESET:
			case BosParser.RESUME:
			case BosParser.RETURN:
			case BosParser.RMDIR:
			case BosParser.RSET:
			case BosParser.SAVEPICTURE:
			case BosParser.SAVESETTING:
			case BosParser.SEEK:
			case BosParser.SELECT:
			case BosParser.SENDKEYS:
			case BosParser.SET:
			case BosParser.SETATTR:
			case BosParser.SHARED:
			case BosParser.SINGLE:
			case BosParser.SPC:
			case BosParser.STATIC:
			case BosParser.STEP:
			case BosParser.STOP:
			case BosParser.STRING:
			case BosParser.SUB:
			case BosParser.TAB:
			case BosParser.TEXT:
			case BosParser.THEN:
			case BosParser.TIME:
			case BosParser.TO:
			case BosParser.TRUE:
			case BosParser.TYPE:
			case BosParser.TYPEOF:
			case BosParser.UNLOAD:
			case BosParser.UNLOCK:
			case BosParser.UNTIL:
			case BosParser.VARIANT:
			case BosParser.VERSION:
			case BosParser.WEND:
			case BosParser.WHILE:
			case BosParser.WIDTH:
			case BosParser.WITH:
			case BosParser.WITHEVENTS:
			case BosParser.WRITE:
			case BosParser.XOR:
			case BosParser.L_SQUARE_BRACKET:
			case BosParser.IDENTIFIER:
				{
				this.state = 2936;
				this.ambiguousIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public letterrange(): LetterrangeContext {
		let _localctx: LetterrangeContext = new LetterrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, BosParser.RULE_letterrange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2939;
			this.certainIdentifier();
			this.state = 2948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 510, this._ctx) ) {
			case 1:
				{
				this.state = 2941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2940;
					this.match(BosParser.WS);
					}
				}

				this.state = 2943;
				this.match(BosParser.MINUS);
				this.state = 2945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2944;
					this.match(BosParser.WS);
					}
				}

				this.state = 2947;
				this.certainIdentifier();
				}
				break;
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
	public lineLabel(): LineLabelContext {
		let _localctx: LineLabelContext = new LineLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, BosParser.RULE_lineLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2950;
			this.ambiguousIdentifier();
			this.state = 2951;
			this.match(BosParser.COLON);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, BosParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2953;
			_la = this._input.LA(1);
			if (!(_la === BosParser.FALSE || _la === BosParser.NOTHING || _la === BosParser.NULL || _la === BosParser.TRUE || ((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & ((1 << (BosParser.STRINGLITERAL - 210)) | (1 << (BosParser.DATELITERAL - 210)) | (1 << (BosParser.COLORLITERAL - 210)) | (1 << (BosParser.INTEGERLITERAL - 210)) | (1 << (BosParser.DOUBLELITERAL - 210)) | (1 << (BosParser.FILENUMBER - 210)) | (1 << (BosParser.OCTALLITERAL - 210)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public publicPrivateVisibility(): PublicPrivateVisibilityContext {
		let _localctx: PublicPrivateVisibilityContext = new PublicPrivateVisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, BosParser.RULE_publicPrivateVisibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2955;
			_la = this._input.LA(1);
			if (!(_la === BosParser.PRIVATE || _la === BosParser.PUBLIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public publicPrivateGlobalVisibility(): PublicPrivateGlobalVisibilityContext {
		let _localctx: PublicPrivateGlobalVisibilityContext = new PublicPrivateGlobalVisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, BosParser.RULE_publicPrivateGlobalVisibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2957;
			_la = this._input.LA(1);
			if (!(_la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, BosParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2961;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 511, this._ctx) ) {
			case 1:
				{
				this.state = 2959;
				this.baseType();
				}
				break;

			case 2:
				{
				this.state = 2960;
				this.complexType();
				}
				break;
			}
			this.state = 2971;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 514, this._ctx) ) {
			case 1:
				{
				this.state = 2964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2963;
					this.match(BosParser.WS);
					}
				}

				this.state = 2966;
				this.match(BosParser.LPAREN);
				this.state = 2968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BosParser.WS) {
					{
					this.state = 2967;
					this.match(BosParser.WS);
					}
				}

				this.state = 2970;
				this.match(BosParser.RPAREN);
				}
				break;
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
	public typeHint(): TypeHintContext {
		let _localctx: TypeHintContext = new TypeHintContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, BosParser.RULE_typeHint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2973;
			_la = this._input.LA(1);
			if (!(((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (BosParser.AMPERSAND - 180)) | (1 << (BosParser.AT - 180)) | (1 << (BosParser.DOLLAR - 180)) | (1 << (BosParser.EXCLAMATIONMARK - 180)) | (1 << (BosParser.HASH - 180)) | (1 << (BosParser.PERCENT - 180)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public visibility(): VisibilityContext {
		let _localctx: VisibilityContext = new VisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, BosParser.RULE_visibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2975;
			_la = this._input.LA(1);
			if (!(_la === BosParser.FRIEND || _la === BosParser.GLOBAL || _la === BosParser.PRIVATE || _la === BosParser.PUBLIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public ambiguousKeyword(): AmbiguousKeywordContext {
		let _localctx: AmbiguousKeywordContext = new AmbiguousKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, BosParser.RULE_ambiguousKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2977;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BosParser.ACCESS) | (1 << BosParser.ADDRESSOF) | (1 << BosParser.ALIAS) | (1 << BosParser.AND) | (1 << BosParser.ATTRIBUTE) | (1 << BosParser.APPACTIVATE) | (1 << BosParser.APPEND) | (1 << BosParser.AS) | (1 << BosParser.BEEP) | (1 << BosParser.BEGIN) | (1 << BosParser.BINARY) | (1 << BosParser.BOOLEAN) | (1 << BosParser.BYVAL) | (1 << BosParser.BYREF) | (1 << BosParser.BYTE) | (1 << BosParser.CALL) | (1 << BosParser.CASE) | (1 << BosParser.CHDIR) | (1 << BosParser.CHDRIVE) | (1 << BosParser.CLASS) | (1 << BosParser.CLOSE) | (1 << BosParser.COLLECTION) | (1 << BosParser.CONST) | (1 << BosParser.DATE) | (1 << BosParser.DECLARE) | (1 << BosParser.DEFBOOL) | (1 << BosParser.DEFBYTE) | (1 << BosParser.DEFDATE) | (1 << BosParser.DEFDBL) | (1 << BosParser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (BosParser.DEFCUR - 32)) | (1 << (BosParser.DEFINT - 32)) | (1 << (BosParser.DEFLNG - 32)) | (1 << (BosParser.DEFOBJ - 32)) | (1 << (BosParser.DEFSNG - 32)) | (1 << (BosParser.DEFSTR - 32)) | (1 << (BosParser.DEFVAR - 32)) | (1 << (BosParser.DELETESETTING - 32)) | (1 << (BosParser.DIM - 32)) | (1 << (BosParser.DO - 32)) | (1 << (BosParser.DOUBLE - 32)) | (1 << (BosParser.EACH - 32)) | (1 << (BosParser.ELSE - 32)) | (1 << (BosParser.ELSEIF - 32)) | (1 << (BosParser.END - 32)) | (1 << (BosParser.ENUM - 32)) | (1 << (BosParser.EQV - 32)) | (1 << (BosParser.ERASE - 32)) | (1 << (BosParser.ERROR - 32)) | (1 << (BosParser.EVENT - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (BosParser.FALSE - 67)) | (1 << (BosParser.FILECOPY - 67)) | (1 << (BosParser.FRIEND - 67)) | (1 << (BosParser.FOR - 67)) | (1 << (BosParser.FUNCTION - 67)) | (1 << (BosParser.GET - 67)) | (1 << (BosParser.GLOBAL - 67)) | (1 << (BosParser.GOSUB - 67)) | (1 << (BosParser.GOTO - 67)) | (1 << (BosParser.IF - 67)) | (1 << (BosParser.IMP - 67)) | (1 << (BosParser.IMPLEMENTS - 67)) | (1 << (BosParser.IN - 67)) | (1 << (BosParser.INPUT - 67)) | (1 << (BosParser.IS - 67)) | (1 << (BosParser.INTEGER - 67)) | (1 << (BosParser.KILL - 67)) | (1 << (BosParser.LOAD - 67)) | (1 << (BosParser.LOCK - 67)) | (1 << (BosParser.LONG - 67)) | (1 << (BosParser.LOOP - 67)) | (1 << (BosParser.LEN - 67)) | (1 << (BosParser.LET - 67)) | (1 << (BosParser.LIB - 67)) | (1 << (BosParser.LIKE - 67)) | (1 << (BosParser.LSET - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (BosParser.ME - 102)) | (1 << (BosParser.MID - 102)) | (1 << (BosParser.MKDIR - 102)) | (1 << (BosParser.MOD - 102)) | (1 << (BosParser.NAME - 102)) | (1 << (BosParser.NEXT - 102)) | (1 << (BosParser.NEW - 102)) | (1 << (BosParser.NOT - 102)) | (1 << (BosParser.NOTHING - 102)) | (1 << (BosParser.NULL - 102)) | (1 << (BosParser.OBJECT - 102)) | (1 << (BosParser.ON - 102)) | (1 << (BosParser.OPEN - 102)) | (1 << (BosParser.OPTIONAL - 102)) | (1 << (BosParser.OR - 102)) | (1 << (BosParser.OUTPUT - 102)) | (1 << (BosParser.PARAMARRAY - 102)) | (1 << (BosParser.PRESERVE - 102)) | (1 << (BosParser.PRINT - 102)) | (1 << (BosParser.PRIVATE - 102)) | (1 << (BosParser.PUBLIC - 102)) | (1 << (BosParser.PUT - 102)) | (1 << (BosParser.RANDOM - 102)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (BosParser.RANDOMIZE - 134)) | (1 << (BosParser.RAISEEVENT - 134)) | (1 << (BosParser.READ - 134)) | (1 << (BosParser.REDIM - 134)) | (1 << (BosParser.REM - 134)) | (1 << (BosParser.RESET - 134)) | (1 << (BosParser.RESUME - 134)) | (1 << (BosParser.RETURN - 134)) | (1 << (BosParser.RMDIR - 134)) | (1 << (BosParser.RSET - 134)) | (1 << (BosParser.SAVEPICTURE - 134)) | (1 << (BosParser.SAVESETTING - 134)) | (1 << (BosParser.SEEK - 134)) | (1 << (BosParser.SELECT - 134)) | (1 << (BosParser.SENDKEYS - 134)) | (1 << (BosParser.SET - 134)) | (1 << (BosParser.SETATTR - 134)) | (1 << (BosParser.SHARED - 134)) | (1 << (BosParser.SINGLE - 134)) | (1 << (BosParser.SPC - 134)) | (1 << (BosParser.STATIC - 134)) | (1 << (BosParser.STEP - 134)) | (1 << (BosParser.STOP - 134)) | (1 << (BosParser.STRING - 134)) | (1 << (BosParser.SUB - 134)) | (1 << (BosParser.TAB - 134)) | (1 << (BosParser.TEXT - 134)) | (1 << (BosParser.THEN - 134)) | (1 << (BosParser.TIME - 134)) | (1 << (BosParser.TO - 134)) | (1 << (BosParser.TRUE - 134)))) !== 0) || ((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (BosParser.TYPE - 166)) | (1 << (BosParser.TYPEOF - 166)) | (1 << (BosParser.UNLOAD - 166)) | (1 << (BosParser.UNLOCK - 166)) | (1 << (BosParser.UNTIL - 166)) | (1 << (BosParser.VARIANT - 166)) | (1 << (BosParser.VERSION - 166)) | (1 << (BosParser.WEND - 166)) | (1 << (BosParser.WHILE - 166)) | (1 << (BosParser.WIDTH - 166)) | (1 << (BosParser.WITH - 166)) | (1 << (BosParser.WITHEVENTS - 166)) | (1 << (BosParser.WRITE - 166)) | (1 << (BosParser.XOR - 166)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 115:
			return this.valueStmt_sempred(_localctx as ValueStmtContext, predIndex);
		}
		return true;
	}
	private valueStmt_sempred(_localctx: ValueStmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 25);

		case 1:
			return this.precpred(this._ctx, 22);

		case 2:
			return this.precpred(this._ctx, 21);

		case 3:
			return this.precpred(this._ctx, 20);

		case 4:
			return this.precpred(this._ctx, 19);

		case 5:
			return this.precpred(this._ctx, 18);

		case 6:
			return this.precpred(this._ctx, 17);

		case 7:
			return this.precpred(this._ctx, 16);

		case 8:
			return this.precpred(this._ctx, 15);

		case 9:
			return this.precpred(this._ctx, 14);

		case 10:
			return this.precpred(this._ctx, 13);

		case 11:
			return this.precpred(this._ctx, 12);

		case 12:
			return this.precpred(this._ctx, 11);

		case 13:
			return this.precpred(this._ctx, 10);

		case 14:
			return this.precpred(this._ctx, 9);

		case 15:
			return this.precpred(this._ctx, 7);

		case 16:
			return this.precpred(this._ctx, 6);

		case 17:
			return this.precpred(this._ctx, 5);

		case 18:
			return this.precpred(this._ctx, 4);

		case 19:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xE2\u0BA6\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x03\x02\x03\x02\x03\x02\x03\x03\x05\x03\u0147" +
		"\n\x03\x03\x03\x07\x03\u014A\n\x03\f\x03\x0E\x03\u014D\v\x03\x03\x03\x03" +
		"\x03\x06\x03\u0151\n\x03\r\x03\x0E\x03\u0152\x05\x03\u0155\n\x03\x03\x03" +
		"\x05\x03\u0158\n\x03\x03\x03\x07\x03\u015B\n\x03\f\x03\x0E\x03\u015E\v" +
		"\x03\x03\x03\x05\x03\u0161\n\x03\x03\x03\x07\x03\u0164\n\x03\f\x03\x0E" +
		"\x03\u0167\v\x03\x03\x03\x05\x03\u016A\n\x03\x03\x03\x07\x03\u016D\n\x03" +
		"\f\x03\x0E\x03\u0170\v\x03\x03\x03\x05\x03\u0173\n\x03\x03\x03\x07\x03" +
		"\u0176\n\x03\f\x03\x0E\x03\u0179\v\x03\x03\x03\x05\x03\u017C\n\x03\x03" +
		"\x03\x07\x03\u017F\n\x03\f\x03\x0E\x03\u0182\v\x03\x03\x03\x05\x03\u0185" +
		"\n\x03\x03\x03\x07\x03\u0188\n\x03\f\x03\x0E\x03\u018B\v\x03\x03\x03\x05" +
		"\x03\u018E\n\x03\x03\x03\x07\x03\u0191\n\x03\f\x03\x0E\x03\u0194\v\x03" +
		"\x03\x03\x05\x03\u0197\n\x03\x03\x04\x06\x04\u019A\n\x04\r\x04\x0E\x04" +
		"\u019B\x03\x05\x03\x05\x06\x05\u01A0\n\x05\r\x05\x0E\x05\u01A1\x06\x05" +
		"\u01A4\n\x05\r\x05\x0E\x05\u01A5\x03\x06\x03\x06\x05\x06\u01AA\n\x06\x03" +
		"\x06\x03\x06\x05\x06\u01AE\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01B3" +
		"\n\x06\x03\x06\x05\x06\u01B6\n\x06\x03\x06\x07\x06\u01B9\n\x06\f\x06\x0E" +
		"\x06\u01BC\v\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\u01C7\n\t\x03\n\x03\n\x06\n\u01CB\n\n\r\n\x0E\n\u01CC\x03\n\x06" +
		"\n\u01D0\n\n\r\n\x0E\n\u01D1\x03\n\x03\n\x06\n\u01D6\n\n\r\n\x0E\n\u01D7" +
		"\x03\v\x03\v\x05\v\u01DC\n\v\x03\v\x03\v\x05\v\u01E0\n\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x06\f\u01E7\n\f\r\f\x0E\f\u01E8\x06\f\u01EB\n\f\r\f\x0E" +
		"\f\u01EC\x03\r\x03\r\x06\r\u01F1\n\r\r\r\x0E\r\u01F2\x06\r\u01F5\n\r\r" +
		"\r\x0E\r\u01F6\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u0201\n\x0E\x03\x0F\x03\x0F\x06\x0F\u0205\n\x0F\r\x0F" +
		"\x0E\x0F\u0206\x03\x0F\x07\x0F\u020A\n\x0F\f\x0F\x0E\x0F\u020D\v\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\u021C\n\x10\x03\x11\x03\x11\x06\x11" +
		"\u0220\n\x11\r\x11\x0E\x11\u0221\x03\x11\x07\x11\u0225\n\x11\f\x11\x0E" +
		"\x11\u0228\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u0232\n\x12\x03\x13\x05\x13\u0235\n\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u023D\n\x13\x03\x13\x06\x13\u0240" +
		"\n\x13\r\x13\x0E\x13\u0241\x03\x13\x06\x13\u0245\n\x13\r\x13\x0E\x13\u0246" +
		"\x03\x13\x03\x13\x07\x13\u024B\n\x13\f\x13\x0E\x13\u024E\v\x13\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u0253\n\x14\x03\x15\x05\x15\u0256\n\x15\x03\x15" +
		"\x03\x15\x05\x15\u025A\n\x15\x03\x15\x03\x15\x05\x15\u025E\n\x15\x03\x15" +
		"\x05\x15\u0261\n\x15\x03\x15\x03\x15\x05\x15\u0265\n\x15\x03\x15\x06\x15" +
		"\u0268\n\x15\r\x15\x0E\x15\u0269\x03\x16\x03\x16\x05\x16\u026E\n\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0275\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u027D\n\x16\x07\x16\u027F\n\x16" +
		"\f\x16\x0E\x16\u0282\v\x16\x03\x17\x05\x17\u0285\n\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u028E\n\x17\x03\x18\x05" +
		"\x18\u0291\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u0299\n\x18\x03\x18\x03\x18\x05\x18\u029D\n\x18\x03\x18\x06\x18\u02A0" +
		"\n\x18\r\x18\x0E\x18\u02A1\x03\x18\x06\x18\u02A5\n\x18\r\x18\x0E\x18\u02A6" +
		"\x05\x18\u02A9\n\x18\x03\x18\x03\x18\x06\x18\u02AD\n\x18\r\x18\x0E\x18" +
		"\u02AE\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02BF\n\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u02C3\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02C7\n\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u02CB\n\x1D\x03\x1D\x07\x1D\u02CE\n\x1D\f\x1D\x0E" +
		"\x1D\u02D1\v\x1D\x03\x1E\x03\x1E\x06\x1E\u02D5\n\x1E\r\x1E\x0E\x1E\u02D6" +
		"\x03\x1E\x05\x1E\u02DA\n\x1E\x03\x1E\x07\x1E\u02DD\n\x1E\f\x1E\x0E\x1E" +
		"\u02E0\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0325\n\x1F\x03 " +
		"\x03 \x03 \x03 \x05 \u032B\n \x03 \x03 \x05 \u032F\n \x03 \x05 \u0332" +
		"\n \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03" +
		"$\x05$\u0341\n$\x03$\x03$\x03$\x03$\x06$\u0347\n$\r$\x0E$\u0348\x03$\x03" +
		"$\x06$\u034D\n$\r$\x0E$\u034E\x05$\u0351\n$\x03$\x03$\x03%\x03%\x03%\x03" +
		"%\x05%\u0359\n%\x03%\x03%\x05%\u035D\n%\x03%\x07%\u0360\n%\f%\x0E%\u0363" +
		"\v%\x05%\u0365\n%\x03&\x03&\x03&\x05&\u036A\n&\x03&\x03&\x03&\x03&\x05" +
		"&\u0370\n&\x03&\x03&\x05&\u0374\n&\x03&\x07&\u0377\n&\f&\x0E&\u037A\v" +
		"&\x03\'\x03\'\x05\'\u037E\n\'\x03\'\x03\'\x05\'\u0382\n\'\x03\'\x05\'" +
		"\u0385\n\'\x03\'\x03\'\x05\'\u0389\n\'\x03\'\x03\'\x03(\x03(\x05(\u038F" +
		"\n(\x03(\x03(\x05(\u0393\n(\x03(\x03(\x03)\x03)\x03)\x05)\u039A\n)\x03" +
		")\x03)\x03)\x03)\x05)\u03A0\n)\x03)\x05)\u03A3\n)\x03)\x03)\x03)\x05)" +
		"\u03A8\n)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u03B2\n)\x03)\x05" +
		")\u03B5\n)\x03)\x05)\u03B8\n)\x03)\x03)\x05)\u03BC\n)\x03*\x03*\x03*\x03" +
		"*\x05*\u03C2\n*\x03*\x03*\x05*\u03C6\n*\x03*\x07*\u03C9\n*\f*\x0E*\u03CC" +
		"\v*\x03+\x03+\x03+\x03+\x05+\u03D2\n+\x03+\x03+\x05+\u03D6\n+\x03+\x03" +
		"+\x05+\u03DA\n+\x03+\x03+\x05+\u03DE\n+\x03+\x05+\u03E1\n+\x03,\x03,\x06" +
		",\u03E5\n,\r,\x0E,\u03E6\x03,\x03,\x06,\u03EB\n,\r,\x0E,\u03EC\x05,\u03EF" +
		"\n,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x06,\u03F8\n,\r,\x0E,\u03F9\x03" +
		",\x03,\x06,\u03FE\n,\r,\x0E,\u03FF\x05,\u0402\n,\x03,\x03,\x03,\x03,\x06" +
		",\u0408\n,\r,\x0E,\u0409\x03,\x03,\x06,\u040E\n,\r,\x0E,\u040F\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x05,\u0418\n,\x03-\x03-\x03.\x03.\x03.\x05.\u041F" +
		"\n.\x03.\x03.\x03.\x03.\x06.\u0425\n.\r.\x0E.\u0426\x03.\x07.\u042A\n" +
		".\f.\x0E.\u042D\v.\x03.\x03.\x03/\x03/\x05/\u0433\n/\x03/\x03/\x05/\u0437" +
		"\n/\x03/\x05/\u043A\n/\x03/\x06/\u043D\n/\r/\x0E/\u043E\x030\x030\x03" +
		"0\x030\x050\u0445\n0\x030\x030\x050\u0449\n0\x030\x070\u044C\n0\f0\x0E" +
		"0\u044F\v0\x031\x031\x031\x031\x032\x032\x032\x052\u0458\n2\x032\x032" +
		"\x032\x032\x052\u045E\n2\x032\x032\x033\x033\x034\x034\x034\x034\x054" +
		"\u0468\n4\x034\x034\x054\u046C\n4\x034\x034\x035\x035\x035\x035\x035\x03" +
		"5\x055\u0476\n5\x035\x035\x035\x035\x035\x065\u047D\n5\r5\x0E5\u047E\x03" +
		"5\x035\x065\u0483\n5\r5\x0E5\u0484\x055\u0487\n5\x035\x035\x035\x055\u048C" +
		"\n5\x036\x036\x036\x036\x056\u0492\n6\x036\x036\x056\u0496\n6\x036\x05" +
		"6\u0499\n6\x036\x036\x056\u049D\n6\x036\x036\x036\x036\x036\x036\x036" +
		"\x036\x036\x056\u04A8\n6\x036\x066\u04AB\n6\r6\x0E6\u04AC\x036\x036\x06" +
		"6\u04B1\n6\r6\x0E6\u04B2\x056\u04B5\n6\x036\x036\x036\x036\x056\u04BB" +
		"\n6\x056\u04BD\n6\x037\x037\x037\x057\u04C2\n7\x037\x037\x057\u04C6\n" +
		"7\x037\x037\x037\x037\x057\u04CC\n7\x037\x057\u04CF\n7\x037\x037\x057" +
		"\u04D3\n7\x037\x067\u04D6\n7\r7\x0E7\u04D7\x037\x037\x067\u04DC\n7\r7" +
		"\x0E7\u04DD\x057\u04E0\n7\x037\x037\x038\x038\x038\x038\x058\u04E8\n8" +
		"\x038\x038\x058\u04EC\n8\x038\x058\u04EF\n8\x038\x058\u04F2\n8\x038\x03" +
		"8\x058\u04F6\n8\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u050D\n;\x03" +
		";\x03;\x07;\u0511\n;\f;\x0E;\u0514\v;\x03;\x05;\u0517\n;\x03;\x03;\x05" +
		";\u051B\n;\x03<\x03<\x03<\x03<\x03<\x03<\x06<\u0523\n<\r<\x0E<\u0524\x03" +
		"<\x03<\x06<\u0529\n<\r<\x0E<\u052A\x05<\u052D\n<\x03=\x03=\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x06>\u0537\n>\r>\x0E>\u0538\x03>\x03>\x06>\u053D\n>\r" +
		">\x0E>\u053E\x05>\u0541\n>\x03?\x03?\x06?\u0545\n?\r?\x0E?\u0546\x03?" +
		"\x03?\x06?\u054B\n?\r?\x0E?\u054C\x05?\u054F\n?\x03@\x03@\x03@\x03@\x03" +
		"A\x03A\x03A\x03A\x05A\u0559\nA\x03A\x03A\x05A\u055D\nA\x03A\x06A\u0560" +
		"\nA\rA\x0EA\u0561\x03B\x03B\x03B\x03B\x03C\x03C\x05C\u056A\nC\x03C\x03" +
		"C\x05C\u056E\nC\x03C\x03C\x05C\u0572\nC\x03C\x03C\x03D\x03D\x03D\x03D" +
		"\x05D\u057A\nD\x03D\x03D\x05D\u057E\nD\x03D\x03D\x03E\x03E\x03E\x03E\x03" +
		"F\x03F\x03F\x03F\x05F\u058A\nF\x03F\x03F\x05F\u058E\nF\x03F\x03F\x03F" +
		"\x03F\x03F\x05F\u0595\nF\x05F\u0597\nF\x03G\x03G\x03G\x03G\x05G\u059D" +
		"\nG\x03G\x03G\x05G\u05A1\nG\x03G\x03G\x03H\x03H\x07H\u05A7\nH\fH\x0EH" +
		"\u05AA\vH\x03H\x05H\u05AD\nH\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x06" +
		"I\u05B7\nI\rI\x0EI\u05B8\x03I\x03I\x06I\u05BD\nI\rI\x0EI\u05BE\x05I\u05C1" +
		"\nI\x03J\x03J\x03J\x03J\x03J\x03J\x06J\u05C9\nJ\rJ\x0EJ\u05CA\x03J\x03" +
		"J\x06J\u05CF\nJ\rJ\x0EJ\u05D0\x05J\u05D3\nJ\x03K\x03K\x06K\u05D7\nK\r" +
		"K\x0EK\u05D8\x03K\x03K\x06K\u05DD\nK\rK\x0EK\u05DE\x05K\u05E1\nK\x03L" +
		"\x03L\x05L\u05E5\nL\x03L\x03L\x05L\u05E9\nL\x03L\x03L\x05L\u05ED\nL\x03" +
		"L\x03L\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x05O\u0603\nO\x03O\x03O\x03O\x05O\u0608\nO" +
		"\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0612\nP\x03P\x03P\x05P" +
		"\u0616\nP\x03P\x07P\u0619\nP\fP\x0EP\u061C\vP\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x05Q\u0626\nQ\x03Q\x03Q\x05Q\u062A\nQ\x03Q\x07Q\u062D" +
		"\nQ\fQ\x0EQ\u0630\vQ\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x05R\u063D\nR\x03R\x03R\x05R\u0641\nR\x03R\x03R\x03R\x03R\x03R" +
		"\x03R\x03R\x05R\u064A\nR\x03R\x03R\x05R\u064E\nR\x03R\x05R\u0651\nR\x03" +
		"S\x03S\x05S\u0655\nS\x03S\x03S\x05S\u0659\nS\x03S\x05S\u065C\nS\x07S\u065E" +
		"\nS\fS\x0ES\u0661\vS\x03S\x05S\u0664\nS\x03S\x05S\u0667\nS\x03S\x03S\x05" +
		"S\u066B\nS\x03S\x05S\u066E\nS\x06S\u0670\nS\rS\x0ES\u0671\x05S\u0674\n" +
		"S\x03T\x03T\x05T\u0678\nT\x03T\x03T\x05T\u067C\nT\x03T\x03T\x05T\u0680" +
		"\nT\x03T\x03T\x05T\u0684\nT\x03T\x05T\u0687\nT\x03U\x03U\x03U\x03U\x05" +
		"U\u068D\nU\x03U\x03U\x05U\u0691\nU\x03U\x05U\u0694\nU\x03V\x03V\x03V\x05" +
		"V\u0699\nV\x03V\x03V\x05V\u069D\nV\x03V\x03V\x03V\x03V\x05V\u06A3\nV\x03" +
		"V\x05V\u06A6\nV\x03V\x05V\u06A9\nV\x03V\x03V\x05V\u06AD\nV\x03V\x06V\u06B0" +
		"\nV\rV\x0EV\u06B1\x03V\x03V\x06V\u06B6\nV\rV\x0EV\u06B7\x05V\u06BA\nV" +
		"\x03V\x03V\x03W\x03W\x03W\x05W\u06C1\nW\x03W\x03W\x05W\u06C5\nW\x03W\x03" +
		"W\x03W\x03W\x05W\u06CB\nW\x03W\x05W\u06CE\nW\x03W\x06W\u06D1\nW\rW\x0E" +
		"W\u06D2\x03W\x03W\x06W\u06D7\nW\rW\x0EW\u06D8\x05W\u06DB\nW\x03W\x03W" +
		"\x03X\x03X\x03X\x05X\u06E2\nX\x03X\x03X\x05X\u06E6\nX\x03X\x03X\x03X\x03" +
		"X\x05X\u06EC\nX\x03X\x05X\u06EF\nX\x03X\x06X\u06F2\nX\rX\x0EX\u06F3\x03" +
		"X\x03X\x06X\u06F8\nX\rX\x0EX\u06F9\x05X\u06FC\nX\x03X\x03X\x03Y\x03Y\x03" +
		"Y\x03Y\x05Y\u0704\nY\x03Y\x03Y\x05Y\u0708\nY\x03Y\x05Y\u070B\nY\x03Y\x05" +
		"Y\u070E\nY\x03Y\x03Y\x05Y\u0712\nY\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x05Z" +
		"\u071A\nZ\x03Z\x03Z\x05Z\u071E\nZ\x03Z\x03Z\x05Z\u0722\nZ\x05Z\u0724\n" +
		"Z\x03Z\x05Z\u0727\nZ\x03[\x03[\x03[\x05[\u072C\n[\x03\\\x03\\\x03\\\x03" +
		"\\\x05\\\u0732\n\\\x03\\\x03\\\x05\\\u0736\n\\\x03\\\x03\\\x05\\\u073A" +
		"\n\\\x03\\\x07\\\u073D\n\\\f\\\x0E\\\u0740\v\\\x03]\x03]\x05]\u0744\n" +
		"]\x03]\x03]\x05]\u0748\n]\x03]\x03]\x05]\u074C\n]\x03]\x03]\x03]\x05]" +
		"\u0751\n]\x03^\x03^\x03_\x03_\x03_\x03_\x05_\u0759\n_\x05_\u075B\n_\x03" +
		"`\x03`\x03`\x05`\u0760\n`\x03a\x03a\x03a\x03a\x03b\x03b\x03b\x03b\x05" +
		"b\u076A\nb\x03b\x03b\x05b\u076E\nb\x03b\x03b\x03c\x03c\x03c\x03c\x05c" +
		"\u0776\nc\x03c\x03c\x05c\u077A\nc\x03c\x03c\x03d\x03d\x03d\x03d\x05d\u0782" +
		"\nd\x03d\x03d\x05d\u0786\nd\x03d\x03d\x05d\u078A\nd\x03d\x03d\x05d\u078E" +
		"\nd\x03d\x03d\x05d\u0792\nd\x03d\x03d\x05d\u0796\nd\x03d\x03d\x03e\x03" +
		"e\x03e\x03e\x05e\u079E\ne\x03e\x03e\x05e\u07A2\ne\x03e\x03e\x03f\x03f" +
		"\x03f\x03f\x03f\x03f\x06f\u07AC\nf\rf\x0Ef\u07AD\x03f\x07f\u07B1\nf\f" +
		"f\x0Ef\u07B4\vf\x03f\x05f\u07B7\nf\x03f\x03f\x03g\x03g\x03g\x03g\x05g" +
		"\u07BF\ng\x03g\x05g\u07C2\ng\x03g\x07g\u07C5\ng\fg\x0Eg\u07C8\vg\x03g" +
		"\x06g\u07CB\ng\rg\x0Eg\u07CC\x05g\u07CF\ng\x03g\x03g\x06g\u07D3\ng\rg" +
		"\x0Eg\u07D4\x05g\u07D7\ng\x03h\x03h\x03h\x05h\u07DC\nh\x03h\x03h\x05h" +
		"\u07E0\nh\x03h\x07h\u07E3\nh\fh\x0Eh\u07E6\vh\x05h\u07E8\nh\x03i\x03i" +
		"\x05i\u07EC\ni\x03i\x03i\x05i\u07F0\ni\x03i\x03i\x03i\x03i\x03i\x03i\x03" +
		"i\x03i\x03i\x05i\u07FB\ni\x03j\x03j\x03j\x03j\x05j\u0801\nj\x03j\x03j" +
		"\x05j\u0805\nj\x03j\x05j\u0808\nj\x03k\x03k\x03k\x03k\x05k\u080E\nk\x03" +
		"k\x03k\x05k\u0812\nk\x03k\x03k\x03l\x03l\x03l\x03l\x05l\u081A\nl\x03l" +
		"\x03l\x05l\u081E\nl\x03l\x03l\x03m\x03m\x03n\x03n\x03n\x05n\u0827\nn\x03" +
		"n\x03n\x05n\u082B\nn\x03n\x03n\x03n\x03n\x05n\u0831\nn\x03n\x05n\u0834" +
		"\nn\x03n\x06n\u0837\nn\rn\x0En\u0838\x03n\x03n\x06n\u083D\nn\rn\x0En\u083E" +
		"\x05n\u0841\nn\x03n\x03n\x03o\x03o\x05o\u0847\no\x03o\x03o\x05o\u084B" +
		"\no\x03o\x03o\x03p\x03p\x03p\x05p\u0852\np\x03p\x03p\x03p\x03p\x06p\u0858" +
		"\np\rp\x0Ep\u0859\x03p\x07p\u085D\np\fp\x0Ep\u0860\vp\x03p\x03p\x03q\x03" +
		"q\x05q\u0866\nq\x03q\x03q\x05q\u086A\nq\x03q\x05q\u086D\nq\x03q\x05q\u0870" +
		"\nq\x03q\x05q\u0873\nq\x03q\x03q\x05q\u0877\nq\x03q\x06q\u087A\nq\rq\x0E" +
		"q\u087B\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x05r\u0885\nr\x03s\x03s\x03" +
		"s\x03s\x03t\x03t\x03t\x03t\x05t\u088F\nt\x03t\x03t\x05t\u0893\nt\x03t" +
		"\x03t\x03t\x03t\x03t\x05t\u089A\nt\x05t\u089C\nt\x03u\x03u\x03u\x03u\x05" +
		"u\u08A2\nu\x03u\x03u\x05u\u08A6\nu\x03u\x03u\x05u\u08AA\nu\x03u\x07u\u08AD" +
		"\nu\fu\x0Eu\u08B0\vu\x03u\x05u\u08B3\nu\x03u\x03u\x03u\x03u\x03u\x03u" +
		"\x03u\x03u\x03u\x03u\x03u\x05u\u08C0\nu\x03u\x03u\x05u\u08C4\nu\x03u\x03" +
		"u\x03u\x03u\x05u\u08CA\nu\x03u\x03u\x03u\x05u\u08CF\nu\x03u\x03u\x03u" +
		"\x03u\x03u\x03u\x05u\u08D7\nu\x03u\x03u\x05u\u08DB\nu\x03u\x03u\x05u\u08DF" +
		"\n";
	private static readonly _serializedATNSegment1: string =
		"u\x03u\x03u\x05u\u08E3\nu\x03u\x03u\x05u\u08E7\nu\x03u\x03u\x05u\u08EB" +
		"\nu\x03u\x03u\x03u\x05u\u08F0\nu\x03u\x03u\x05u\u08F4\nu\x03u\x03u\x03" +
		"u\x05u\u08F9\nu\x03u\x03u\x05u\u08FD\nu\x03u\x03u\x03u\x05u\u0902\nu\x03" +
		"u\x03u\x05u\u0906\nu\x03u\x03u\x03u\x05u\u090B\nu\x03u\x03u\x05u\u090F" +
		"\nu\x03u\x03u\x03u\x05u\u0914\nu\x03u\x03u\x05u\u0918\nu\x03u\x03u\x03" +
		"u\x05u\u091D\nu\x03u\x03u\x05u\u0921\nu\x03u\x03u\x03u\x05u\u0926\nu\x03" +
		"u\x03u\x05u\u092A\nu\x03u\x03u\x03u\x05u\u092F\nu\x03u\x03u\x05u\u0933" +
		"\nu\x03u\x03u\x03u\x05u\u0938\nu\x03u\x03u\x05u\u093C\nu\x03u\x03u\x03" +
		"u\x05u\u0941\nu\x03u\x03u\x05u\u0945\nu\x03u\x03u\x03u\x05u\u094A\nu\x03" +
		"u\x03u\x05u\u094E\nu\x03u\x03u\x03u\x05u\u0953\nu\x03u\x03u\x05u\u0957" +
		"\nu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x05" +
		"u\u0966\nu\x03u\x03u\x05u\u096A\nu\x03u\x03u\x03u\x05u\u096F\nu\x03u\x03" +
		"u\x05u\u0973\nu\x03u\x03u\x03u\x05u\u0978\nu\x03u\x03u\x05u\u097C\nu\x03" +
		"u\x03u\x03u\x05u\u0981\nu\x03u\x03u\x05u\u0985\nu\x03u\x03u\x03u\x05u" +
		"\u098A\nu\x03u\x03u\x05u\u098E\nu\x03u\x07u\u0991\nu\fu\x0Eu\u0994\vu" +
		"\x03v\x03v\x03v\x05v\u0999\nv\x03v\x03v\x03v\x05v\u099E\nv\x03v\x03v\x03" +
		"w\x03w\x05w\u09A4\nw\x03w\x03w\x05w\u09A8\nw\x03w\x07w\u09AB\nw\fw\x0E" +
		"w\u09AE\vw\x03x\x03x\x05x\u09B2\nx\x03x\x05x\u09B5\nx\x03x\x03x\x05x\u09B9" +
		"\nx\x03x\x03x\x05x\u09BD\nx\x05x\u09BF\nx\x03x\x03x\x05x\u09C3\nx\x05" +
		"x\u09C5\nx\x03x\x03x\x05x\u09C9\nx\x03x\x05x\u09CC\nx\x03x\x03x\x05x\u09D0" +
		"\nx\x03x\x05x\u09D3\nx\x03y\x03y\x03y\x03y\x06y\u09D9\ny\ry\x0Ey\u09DA" +
		"\x03y\x07y\u09DE\ny\fy\x0Ey\u09E1\vy\x03y\x07y\u09E4\ny\fy\x0Ey\u09E7" +
		"\vy\x03y\x03y\x03z\x03z\x03z\x03z\x05z\u09EF\nz\x03z\x03z\x05z\u09F3\n" +
		"z\x03z\x03z\x03{\x03{\x03{\x03{\x05{\u09FB\n{\x03{\x03{\x06{\u09FF\n{" +
		"\r{\x0E{\u0A00\x03{\x03{\x06{\u0A05\n{\r{\x0E{\u0A06\x05{\u0A09\n{\x03" +
		"{\x03{\x03|\x03|\x03|\x03|\x05|\u0A11\n|\x03|\x03|\x05|\u0A15\n|\x03|" +
		"\x05|\u0A18\n|\x03}\x03}\x05}\u0A1C\n}\x03~\x03~\x03~\x03~\x05~\u0A22" +
		"\n~\x03~\x05~\u0A25\n~\x03~\x03~\x05~\u0A29\n~\x03~\x03~\x05~\u0A2D\n" +
		"~\x03~\x03~\x05~\u0A31\n~\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u0A36\n\x7F" +
		"\x03\x7F\x03\x7F\x05\x7F\u0A3A\n\x7F\x03\x7F\x03\x7F\x05\x7F\u0A3E\n\x7F" +
		"\x03\x7F\x05\x7F\u0A41\n\x7F\x03\x7F\x03\x7F\x05\x7F\u0A45\n\x7F\x03\x7F" +
		"\x03\x7F\x05\x7F\u0A49\n\x7F\x03\x7F\x03\x7F\x05\x7F\u0A4D\n\x7F\x03\x80" +
		"\x03\x80\x05\x80\u0A51\n\x80\x03\x81\x03\x81\x03\x81\x05\x81\u0A56\n\x81" +
		"\x03\x82\x05\x82\u0A59\n\x82\x03\x82\x03\x82\x03\x82\x05\x82\u0A5E\n\x82" +
		"\x03\x82\x03\x82\x05\x82\u0A62\n\x82\x03\x82\x05\x82\u0A65\n\x82\x03\x83" +
		"\x03\x83\x03\x83\x03\x83\x05\x83\u0A6B\n\x83\x03\x84\x03\x84\x05\x84\u0A6F" +
		"\n\x84\x03\x84\x05\x84\u0A72\n\x84\x03\x85\x03\x85\x03\x85\x05\x85\u0A77" +
		"\n\x85\x03\x85\x05\x85\u0A7A\n\x85\x03\x85\x05\x85\u0A7D\n\x85\x03\x85" +
		"\x03\x85\x05\x85\u0A81\n\x85\x03\x85\x03\x85\x05\x85\u0A85\n\x85\x05\x85" +
		"\u0A87\n\x85\x03\x85\x06\x85\u0A8A\n\x85\r\x85\x0E\x85\u0A8B\x03\x85\x05" +
		"\x85\u0A8F\n\x85\x03\x86\x03\x86\x05\x86\u0A93\n\x86\x03\x86\x05\x86\u0A96" +
		"\n\x86\x03\x86\x03\x86\x05\x86\u0A9A\n\x86\x03\x86\x03\x86\x05\x86\u0A9E" +
		"\n\x86\x05\x86\u0AA0\n\x86\x03\x86\x03\x86\x03\x87\x03\x87\x05\x87\u0AA6" +
		"\n\x87\x03\x87\x06\x87\u0AA9\n\x87\r\x87\x0E\x87\u0AAA\x03\x87\x05\x87" +
		"\u0AAE\n\x87\x03\x88\x05\x88\u0AB1\n\x88\x03\x88\x03\x88\x03\x88\x05\x88" +
		"\u0AB6\n\x88\x03\x89\x03\x89\x03\x8A\x05\x8A\u0ABB\n\x8A\x03\x8A\x05\x8A" +
		"\u0ABE\n\x8A\x03\x8A\x03\x8A\x05\x8A\u0AC2\n\x8A\x07\x8A\u0AC4\n\x8A\f" +
		"\x8A\x0E\x8A\u0AC7\v\x8A\x03\x8A\x03\x8A\x05\x8A\u0ACB\n\x8A\x03\x8A\x03" +
		"\x8A\x05\x8A\u0ACF\n\x8A\x03\x8A\x05\x8A\u0AD2\n\x8A\x07\x8A\u0AD4\n\x8A" +
		"\f\x8A\x0E\x8A\u0AD7\v\x8A\x03\x8B\x03\x8B\x05\x8B\u0ADB\n\x8B\x03\x8B" +
		"\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0AE2\n\x8C\x03\x8D\x03\x8D\x05" +
		"\x8D\u0AE6\n\x8D\x03\x8D\x03\x8D\x05\x8D\u0AEA\n\x8D\x03\x8D\x03\x8D\x05" +
		"\x8D\u0AEE\n\x8D\x03\x8D\x07\x8D\u0AF1\n\x8D\f\x8D\x0E\x8D\u0AF4\v\x8D" +
		"\x05\x8D\u0AF6\n\x8D\x03\x8D\x05\x8D\u0AF9\n\x8D\x03\x8D\x03\x8D\x03\x8E" +
		"\x03\x8E\x05\x8E\u0AFF\n\x8E\x03\x8E\x03\x8E\x05\x8E\u0B03\n\x8E\x03\x8E" +
		"\x03\x8E\x05\x8E\u0B07\n\x8E\x03\x8E\x03\x8E\x05\x8E\u0B0B\n\x8E\x03\x8E" +
		"\x05\x8E\u0B0E\n\x8E\x03\x8E\x03\x8E\x05\x8E\u0B12\n\x8E\x03\x8E\x05\x8E" +
		"\u0B15\n\x8E\x03\x8E\x03\x8E\x05\x8E\u0B19\n\x8E\x03\x8E\x05\x8E\u0B1C" +
		"\n\x8E\x03\x8E\x05\x8E\u0B1F\n\x8E\x03\x8F\x03\x8F\x05\x8F\u0B23\n\x8F" +
		"\x03\x8F\x03\x8F\x03\x90\x03\x90\x05\x90\u0B29\n\x90\x03\x90\x03\x90\x05" +
		"\x90\u0B2D\n\x90\x03\x90\x07\x90\u0B30\n\x90\f\x90\x0E\x90\u0B33\v\x90" +
		"\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x05\x91\u0B3A\n\x91\x03\x91\x03" +
		"\x91\x03\x92\x03\x92\x06\x92\u0B40\n\x92\r\x92\x0E\x92\u0B41\x03\x92\x03" +
		"\x92\x03\x92\x06\x92\u0B47\n\x92\r\x92\x0E\x92\u0B48\x03\x92\x05\x92\u0B4C" +
		"\n\x92\x03\x93\x03\x93\x03\x93\x03\x93\x05\x93\u0B52\n\x93\x03\x93\x03" +
		"\x93\x03\x93\x05\x93\u0B57\n\x93\x03\x94\x03\x94\x03\x95\x03\x95\x03\x95" +
		"\x07\x95\u0B5E\n\x95\f\x95\x0E\x95\u0B61\v\x95\x03\x95\x03\x95\x03\x95" +
		"\x06\x95\u0B66\n\x95\r\x95\x0E\x95\u0B67\x05\x95\u0B6A\n\x95\x03\x96\x03" +
		"\x96\x03\x97\x03\x97\x03\x97\x07\x97\u0B71\n\x97\f\x97\x0E\x97\u0B74\v" +
		"\x97\x03\x98\x03\x98\x05\x98\u0B78\n\x98\x03\x98\x03\x98\x05\x98\u0B7C" +
		"\n\x98\x03\x99\x03\x99\x05\x99\u0B80\n\x99\x03\x99\x03\x99\x05\x99\u0B84" +
		"\n\x99\x03\x99\x05\x99\u0B87\n\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9B\x03" +
		"\x9B\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x05\x9E\u0B94\n\x9E" +
		"\x03\x9E\x05\x9E\u0B97\n\x9E\x03\x9E\x03\x9E\x05\x9E\u0B9B\n\x9E\x03\x9E" +
		"\x05\x9E\u0B9E\n\x9E\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03" +
		"\xA1\x02\x02\x03\xE8\xA2\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02" +
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02" +
		"\u013E\x02\u0140\x02\x02\x17\x04\x02\x0E\x0E\xA3\xA3\x03\x02\x1D(\x04" +
		"\x02\xAC\xAC\xB0\xB0\x03\x02@D\x05\x02\xBE\xBE\xC8\xC8\xCD\xCD\x03\x02" +
		"tu\x07\x02\t\t\x0E\x0ESS}}\x87\x87\x04\x02\x8A\x8B\xB4\xB4\x04\x02`b\x9A" +
		"\x9A\x04\x02\xBA\xBA\xD1\xD1\x04\x02\x9C\x9C\xA2\xA2\x04\x02\x10\x11~" +
		"~\x03\x02\x10\x11\r\x02\x0F\x0F\x12\x12\x19\x19\x1B\x1B,,UUYYrr\x9B\x9B" +
		"\xA0\xA0\xAD\xAD\t\x02TT^^\xBE\xBE\xC0\xC1\xC3\xC3\xC6\xC6\xCA\xCA\x06" +
		"\x02EEpq\xA7\xA7\xD4\xDA\x04\x02\x81\x81\x85\x85\x05\x02KK\x81\x81\x85" +
		"\x85\b\x02\xB6\xB6\xB8\xB8\xBC\xBC\xBF\xBF\xC2\xC2\xCB\xCB\x06\x02GGK" +
		"K\x81\x81\x85\x85\x0E\x02\x03\f\x0E/99;?EOQ^cchsvw|\x81\x85\x8A\x8C\xB5" +
		"\x02\u0D80\x02\u0142\x03\x02\x02\x02\x04\u0146\x03\x02\x02\x02\x06\u0199" +
		"\x03\x02\x02\x02\b\u01A3\x03\x02\x02\x02\n\u01A7\x03\x02\x02\x02\f\u01BD" +
		"\x03\x02\x02\x02\x0E\u01BF\x03\x02\x02\x02\x10\u01C1\x03\x02\x02\x02\x12" +
		"\u01C8\x03\x02\x02\x02\x14\u01D9\x03\x02\x02\x02\x16\u01EA\x03\x02\x02" +
		"\x02\x18\u01F4\x03\x02\x02\x02\x1A\u0200\x03\x02\x02\x02\x1C\u0202\x03" +
		"\x02\x02\x02\x1E\u021B\x03\x02\x02\x02 \u021D\x03\x02\x02\x02\"\u0231" +
		"\x03\x02\x02\x02$\u0234\x03\x02\x02\x02&\u0252\x03\x02\x02\x02(\u0255" +
		"\x03\x02\x02\x02*\u026D\x03\x02\x02\x02,\u0284\x03\x02\x02\x02.\u0290" +
		"\x03\x02\x02\x020\u02B0\x03\x02\x02\x022\u02B2\x03\x02\x02\x024\u02B4" +
		"\x03\x02\x02\x026\u02B6\x03\x02\x02\x028\u02BA\x03\x02\x02\x02:\u02D2" +
		"\x03\x02\x02\x02<\u0324\x03\x02\x02\x02>\u0326\x03\x02\x02\x02@\u0333" +
		"\x03\x02\x02\x02B\u0335\x03\x02\x02\x02D\u0339\x03\x02\x02\x02F\u0340" +
		"\x03\x02\x02\x02H\u0354\x03\x02\x02\x02J\u0369\x03\x02\x02\x02L\u037B" +
		"\x03\x02\x02\x02N\u038C\x03\x02\x02\x02P\u0399\x03\x02\x02\x02R\u03BD" +
		"\x03\x02\x02\x02T\u03CD\x03\x02\x02\x02V\u0417\x03\x02\x02\x02X\u0419" +
		"\x03\x02\x02\x02Z\u041E\x03\x02\x02\x02\\\u0430\x03\x02\x02\x02^\u0440" +
		"\x03\x02\x02\x02`\u0450\x03\x02\x02\x02b\u0457\x03\x02\x02\x02d\u0461" +
		"\x03\x02\x02\x02f\u0463\x03\x02\x02\x02h\u046F\x03\x02\x02\x02j\u048D" +
		"\x03\x02\x02\x02l\u04C1\x03\x02\x02\x02n\u04E3\x03\x02\x02\x02p\u04F9" +
		"\x03\x02\x02\x02r\u04FD\x03\x02\x02\x02t\u051A\x03\x02\x02\x02v\u051C" +
		"\x03\x02\x02\x02x\u052E\x03\x02\x02\x02z\u0530\x03\x02\x02\x02|\u0542" +
		"\x03\x02\x02\x02~\u0550\x03\x02\x02\x02\x80\u0554\x03\x02\x02\x02\x82" +
		"\u0563\x03\x02\x02\x02\x84\u0569\x03\x02\x02\x02\x86\u0575\x03\x02\x02" +
		"\x02\x88\u0581\x03\x02\x02\x02\x8A\u0585\x03\x02\x02\x02\x8C\u0598\x03" +
		"\x02\x02\x02\x8E\u05A4\x03\x02\x02\x02\x90\u05B0\x03\x02\x02\x02\x92\u05C2" +
		"\x03\x02\x02\x02\x94\u05D4\x03\x02\x02\x02\x96\u05E2\x03\x02\x02\x02\x98" +
		"\u05F0\x03\x02\x02\x02\x9A\u05F4\x03\x02\x02\x02\x9C\u05FC\x03\x02\x02" +
		"\x02\x9E\u0609\x03\x02\x02\x02\xA0\u061D\x03\x02\x02\x02\xA2\u0631\x03" +
		"\x02\x02\x02\xA4\u0673\x03\x02\x02\x02\xA6\u0686\x03\x02\x02\x02\xA8\u0688" +
		"\x03\x02\x02\x02\xAA\u0698\x03\x02\x02\x02\xAC\u06C0\x03\x02\x02\x02\xAE" +
		"\u06E1\x03\x02\x02\x02\xB0\u06FF\x03\x02\x02\x02\xB2\u0715\x03\x02\x02" +
		"\x02\xB4\u0728\x03\x02\x02\x02\xB6\u072D\x03\x02\x02\x02\xB8\u0741\x03" +
		"\x02\x02\x02\xBA\u0752\x03\x02\x02\x02\xBC\u0754\x03\x02\x02\x02\xBE\u075C" +
		"\x03\x02\x02\x02\xC0\u0761\x03\x02\x02\x02\xC2\u0765\x03\x02\x02\x02\xC4" +
		"\u0771\x03\x02\x02\x02\xC6\u077D\x03\x02\x02\x02\xC8\u0799\x03\x02\x02" +
		"\x02\xCA\u07A5\x03\x02\x02\x02\xCC\u07BA\x03\x02\x02\x02\xCE\u07E7\x03" +
		"\x02\x02\x02\xD0\u07FA\x03\x02\x02\x02\xD2\u07FC\x03\x02\x02\x02\xD4\u0809" +
		"\x03\x02\x02\x02\xD6\u0815\x03\x02\x02\x02\xD8\u0821\x03\x02\x02\x02\xDA" +
		"\u0826\x03\x02\x02\x02\xDC\u0844\x03\x02\x02\x02\xDE\u0851\x03\x02\x02" +
		"\x02\xE0\u0863\x03\x02\x02\x02\xE2\u087D\x03\x02\x02\x02\xE4\u0886\x03" +
		"\x02\x02\x02\xE6\u088A\x03\x02\x02\x02\xE8\u08E2\x03\x02\x02\x02\xEA\u0998" +
		"\x03\x02\x02\x02\xEC\u09A1\x03\x02\x02\x02\xEE\u09AF\x03\x02\x02\x02\xF0" +
		"\u09D4\x03\x02\x02\x02\xF2\u09EA\x03\x02\x02\x02\xF4\u09F6\x03\x02\x02" +
		"\x02\xF6\u0A0C\x03\x02\x02\x02\xF8\u0A1B\x03\x02\x02\x02\xFA\u0A1D\x03" +
		"\x02\x02\x02\xFC\u0A32\x03\x02\x02\x02\xFE\u0A50\x03\x02\x02\x02\u0100" +
		"\u0A52\x03\x02\x02\x02\u0102\u0A58\x03\x02\x02\x02\u0104\u0A6A\x03\x02" +
		"\x02\x02\u0106\u0A6C\x03\x02\x02\x02\u0108\u0A76\x03\x02\x02\x02\u010A" +
		"\u0A90\x03\x02\x02\x02\u010C\u0AA5\x03\x02\x02\x02\u010E\u0AB0\x03\x02" +
		"\x02\x02\u0110\u0AB7\x03\x02\x02\x02\u0112\u0AC5\x03\x02\x02\x02\u0114" +
		"\u0ADA\x03\x02\x02\x02\u0116\u0ADE\x03\x02\x02\x02\u0118\u0AE3\x03\x02" +
		"\x02\x02\u011A\u0AFE\x03\x02\x02\x02\u011C\u0B20\x03\x02\x02\x02\u011E" +
		"\u0B26\x03\x02\x02\x02\u0120\u0B39\x03\x02\x02\x02\u0122\u0B4B\x03\x02" +
		"\x02\x02\u0124\u0B4D\x03\x02\x02\x02\u0126\u0B58\x03\x02\x02\x02\u0128" +
		"\u0B69\x03\x02\x02\x02\u012A\u0B6B\x03\x02\x02\x02\u012C\u0B6D\x03\x02" +
		"\x02\x02\u012E\u0B75\x03\x02\x02\x02\u0130\u0B7D\x03\x02\x02\x02\u0132" +
		"\u0B88\x03\x02\x02\x02\u0134\u0B8B\x03\x02\x02\x02\u0136\u0B8D\x03\x02" +
		"\x02\x02\u0138\u0B8F\x03\x02\x02\x02\u013A\u0B93\x03\x02\x02\x02\u013C" +
		"\u0B9F\x03\x02\x02\x02\u013E\u0BA1\x03\x02\x02\x02\u0140\u0BA3\x03\x02" +
		"\x02\x02\u0142\u0143\x05\x04\x03\x02\u0143\u0144\x07\x02\x02\x03\u0144" +
		"\x03\x03\x02\x02\x02\u0145\u0147\x07\xE2\x02\x02\u0146\u0145\x03\x02\x02" +
		"\x02\u0146\u0147\x03\x02\x02\x02\u0147\u014B\x03\x02\x02\x02\u0148\u014A" +
		"\x07\xE0\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02" +
		"\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u0154\x03" +
		"\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u0150\x05\x10\t\x02\u014F" +
		"\u0151\x07\xE0\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02" +
		"\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"\u0155\x03\x02\x02\x02\u0154\u014E\x03\x02\x02\x02\u0154\u0155\x03\x02" +
		"\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0158\x05\x06\x04\x02\u0157" +
		"\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015C\x03\x02" +
		"\x02\x02\u0159\u015B\x07\xE0\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B" +
		"\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02" +
		"\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F" +
		"\u0161\x05\b\x05\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02" +
		"\x02\u0161\u0165\x03\x02\x02\x02\u0162\u0164\x07\xE0\x02\x02\u0163\u0162" +
		"\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02" +
		"\u0165\u0166\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03" +
		"\x02\x02\x02\u0168\u016A\x05$\x13\x02\u0169\u0168\x03\x02\x02\x02\u0169" +
		"\u016A\x03\x02\x02\x02\u016A\u016E\x03\x02\x02\x02\u016B\u016D\x07\xE0" +
		"\x02\x02\u016C\u016B\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02\u016E" +
		"\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03\x02" +
		"\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0173\x05\x12\n\x02\u0172\u0171" +
		"\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0177\x03\x02\x02\x02" +
		"\u0174\u0176\x07\xE0\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176\u0179\x03" +
		"\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
		"\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017C\x05\x16" +
		"\f\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u0180" +
		"\x03\x02\x02\x02\u017D\u017F\x07\xE0\x02\x02\u017E\u017D\x03\x02\x02\x02" +
		"\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03" +
		"\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183" +
		"\u0185\x05\x18\r\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02" +
		"\x02\u0185\u0189\x03\x02\x02\x02\u0186\u0188\x07\xE0\x02\x02\u0187\u0186" +
		"\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02" +
		"\u0189\u018A\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03" +
		"\x02\x02\x02\u018C\u018E\x05\x1C\x0F\x02\u018D\u018C\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E\u0192\x03\x02\x02\x02\u018F\u0191\x07\xE0" +
		"\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192" +
		"\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0196\x03\x02" +
		"\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0197\x07\xE2\x02\x02\u0196" +
		"\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\x05\x03\x02\x02" +
		"\x02\u0198\u019A\x05\n\x06\x02\u0199\u0198\x03\x02\x02\x02\u019A\u019B" +
		"\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02" +
		"\u019C\x07\x03\x02\x02\x02\u019D\u019F\x056\x1C\x02\u019E\u01A0\x07\xE0" +
		"\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1" +
		"\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4\x03\x02" +
		"\x02\x02\u01A3\u019D\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		"\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\t\x03\x02\x02" +
		"\x02\u01A7\u01A9\x07r\x02\x02\u01A8\u01AA\x07\xE2\x02\x02\u01A9\u01A8" +
		"\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
		"\u01AB\u01AD\x07\xBE\x02\x02\u01AC\u01AE\x07\xE2\x02\x02\u01AD\u01AC\x03" +
		"\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF" +
		"\u01B5\x05\f\x07\x02\u01B0\u01B2\x07\xD1\x02\x02\u01B1\u01B3\x07\xE2\x02" +
		"\x02\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4" +
		"\x03\x02\x02\x02\u01B4\u01B6\x05\x0E\b\x02\u01B5\u01B0\x03\x02\x02\x02" +
		"\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01BA\x03\x02\x02\x02\u01B7\u01B9\x07" +
		"\xE0\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA" +
		"\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\v\x03\x02\x02" +
		"\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BE\x07\xD4\x02\x02\u01BE\r\x03" +
		"\x02\x02\x02\u01BF\u01C0\x07\xD4\x02\x02\u01C0\x0F\x03\x02\x02\x02\u01C1" +
		"\u01C2\x07\xAE\x02\x02\u01C2\u01C3\x07\xE2\x02\x02\u01C3\u01C6\x07\xD8" +
		"\x02\x02\u01C4\u01C5\x07\xE2\x02\x02\u01C5\u01C7\x07\x17\x02\x02\u01C6" +
		"\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\x11\x03\x02\x02" +
		"\x02\u01C8\u01CA\x07\f\x02\x02\u01C9\u01CB\x07\xE0\x02\x02\u01CA\u01C9" +
		"\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02" +
		"\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CF\x03\x02\x02\x02\u01CE\u01D0\x05" +
		"\x14\v\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1" +
		"\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02" +
		"\x02\x02\u01D3\u01D5\x079\x02\x02\u01D4\u01D6\x07\xE0\x02\x02\u01D5\u01D4" +
		"\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02" +
		"\u01D7\u01D8\x03\x02\x02\x02\u01D8\x13\x03\x02\x02\x02\u01D9\u01DB\x05" +
		"\u0122\x92\x02\u01DA\u01DC\x07\xE2\x02\x02\u01DB\u01DA\x03\x02\x02\x02" +
		"\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DF\x07" +
		"\xBE\x02\x02\u01DE\u01E0\x07\xE2\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF" +
		"\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x05\u0134" +
		"\x9B\x02\u01E2\u01E3\x07\xE0\x02\x02\u01E3\x15\x03\x02\x02\x02\u01E4\u01E6" +
		"\x058\x1D\x02\u01E5\u01E7\x07\xE0\x02\x02\u01E6\u01E5\x03\x02\x02\x02" +
		"\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03" +
		"\x02\x02\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E4\x03\x02\x02\x02\u01EB" +
		"\u01EC\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02" +
		"\x02\x02\u01ED\x17\x03\x02\x02\x02\u01EE\u01F0\x05\x1A\x0E\x02\u01EF\u01F1" +
		"\x07\xE0\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02" +
		"\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03" +
		"\x02\x02\x02\u01F4\u01EE\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6" +
		"\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\x19\x03\x02\x02" +
		"\x02\u01F8\u01F9\x07x\x02\x02\u01F9\u01FA\x07\xE2\x02\x02\u01FA\u0201" +
		"\x07\xD7\x02\x02\u01FB\u01FC\x07z\x02\x02\u01FC\u01FD\x07\xE2\x02\x02" +
		"\u01FD\u0201\t\x02\x02\x02\u01FE\u0201\x07y\x02\x02\u01FF\u0201\x07{\x02" +
		"\x02\u0200\u01F8\x03\x02\x02\x02\u0200\u01FB\x03\x02\x02\x02\u0200\u01FE" +
		"\x03\x02\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201\x1B\x03\x02\x02\x02" +
		"\u0202\u020B\x05\x1E\x10\x02\u0203\u0205\x07\xE0\x02\x02\u0204\u0203\x03" +
		"\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0206" +
		"\u0207\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x05\x1E" +
		"\x10\x02\u0209\u0204\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B" +
		"\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\x1D\x03\x02\x02" +
		"\x02\u020D\u020B\x03\x02\x02\x02\u020E\u021C\x05F$\x02\u020F\u021C\x05" +
		"4\x1B\x02\u0210\u021C\x05\x1A\x0E\x02\u0211\u021C\x05P)\x02\u0212\u021C" +
		"\x05Z.\x02\u0213\u021C\x05b2\x02\u0214\u021C\x05l7\x02\u0215\u021C\x05" +
		"\x8EH\x02\u0216\u021C\x05\xAAV\x02\u0217\u021C\x05\xACW\x02\u0218\u021C" +
		"\x05\xAEX\x02\u0219\u021C\x05\xDAn\x02\u021A\u021C\x05\xDEp\x02\u021B" +
		"\u020E\x03\x02\x02\x02\u021B\u020F\x03\x02\x02\x02\u021B\u0210\x03\x02" +
		"\x02\x02\u021B\u0211\x03\x02\x02\x02\u021B\u0212\x03\x02\x02\x02\u021B" +
		"\u0213\x03\x02\x02\x02\u021B\u0214\x03\x02\x02\x02\u021B\u0215\x03\x02" +
		"\x02\x02\u021B\u0216\x03\x02\x02\x02\u021B\u0217\x03\x02\x02\x02\u021B" +
		"\u0218\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021B\u021A\x03\x02" +
		"\x02\x02\u021C\x1F\x03\x02\x02\x02\u021D\u0226\x05\"\x12\x02\u021E\u0220" +
		"\x07\xE0\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02" +
		"\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x03" +
		"\x02\x02\x02\u0223\u0225\x05\"\x12\x02\u0224\u021F\x03\x02\x02\x02\u0225" +
		"\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0227\x03\x02" +
		"\x02\x02\u0227!\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0229\u0232" +
		"\x05:\x1E\x02\u022A\u0232\x05P)\x02\u022B\u0232\x05Z.\x02\u022C\u0232" +
		"\x05b2\x02\u022D\u0232\x05l7\x02\u022E\u0232\x05\xAAV\x02\u022F\u0232" +
		"\x05\xACW\x02\u0230\u0232\x05\xDAn\x02\u0231\u0229\x03\x02\x02\x02\u0231" +
		"\u022A\x03\x02\x02\x02\u0231\u022B\x03\x02\x02\x02\u0231\u022C\x03\x02" +
		"\x02\x02\u0231\u022D\x03\x02\x02\x02\u0231\u022E\x03\x02\x02\x02\u0231" +
		"\u022F\x03\x02\x02\x02\u0231\u0230\x03\x02\x02\x02\u0232#\x03\x02\x02" +
		"\x02\u0233\u0235\x07\xE2\x02\x02\u0234\u0233\x03\x02\x02\x02\u0234\u0235" +
		"\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x07\f\x02\x02" +
		"\u0237\u0238\x07\xE2\x02\x02\u0238\u0239\x050\x19\x02\u0239\u023A\x07" +
		"\xE2\x02\x02\u023A\u023C\x052\x1A\x02\u023B\u023D\x07\xE2\x02\x02\u023C" +
		"\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023F\x03\x02" +
		"\x02\x02\u023E\u0240\x07\xE0\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240" +
		"\u0241\x03\x02\x02\x02\u0241\u023F\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0244\x03\x02\x02\x02\u0243\u0245" +
		"\x05&\x14\x02\u0244\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02" +
		"\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0248\x03" +
		"\x02\x02\x02\u0248\u024C\x079\x02\x02\u0249\u024B\x07\xE0\x02\x02\u024A" +
		"\u0249\x03\x02\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02" +
		"\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D%\x03\x02\x02\x02\u024E\u024C" +
		"\x03\x02\x02\x02\u024F\u0253\x05(\x15\x02\u0250\u0253\x05.\x18\x02\u0251" +
		"\u0253\x05$\x13\x02\u0252\u024F\x03\x02\x02\x02\u0252\u0250\x03\x02\x02" +
		"\x02\u0252\u0251\x03\x02\x02\x02\u0253\'\x03\x02\x02\x02\u0254\u0256\x07" +
		"\xE2\x02\x02\u0255\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256" +
		"\u0257\x03\x02\x02\x02\u0257\u0259\x05\u0104\x83\x02\u0258\u025A\x07\xE2" +
		"\x02\x02\u0259\u0258\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A" +
		"\u025B\x03\x02\x02\x02\u025B\u025D\x07\xBE\x02\x02\u025C\u025E\x07\xE2" +
		"\x02\x02\u025D\u025C\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E" +
		"\u0260\x03\x02\x02\x02\u025F\u0261\x07\xBC\x02\x02\u0260\u025F\x03\x02" +
		"\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262" +
		"\u0264\x05,\x17\x02\u0263\u0265\x07\xDB\x02\x02\u0264\u0263\x03\x02\x02" +
		"\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266\u0268" +
		"\x07\xE0\x02\x02\u0267\u0266\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02" +
		"\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A)\x03\x02" +
		"\x02\x02\u026B\u026C\x07r\x02\x02\u026C\u026E\x07\xBD\x02\x02\u026D\u026B" +
		"\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02" +
		"\u026F\u0274\x05\u0122\x92\x02\u0270\u0271\x07\xC5\x02\x02\u0271\u0272" +
		"\x05\u0134\x9B\x02\u0272\u0273\x07\xD0\x02\x02\u0273\u0275\x03\x02\x02" +
		"\x02\u0274\u0270\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0280" +
		"\x03\x02\x02\x02\u0276\u0277\x07\xBD\x02\x02\u0277\u027C\x05\u0122\x92" +
		"\x02\u0278\u0279\x07\xC5\x02\x02\u0279\u027A\x05\u0134\x9B\x02\u027A\u027B" +
		"\x07\xD0\x02\x02\u027B\u027D\x03\x02\x02\x02\u027C\u0278\x03\x02\x02\x02" +
		"\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u0276\x03" +
		"\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280" +
		"\u0281\x03\x02\x02\x02\u0281+\x03\x02\x02\x02\u0282\u0280\x03\x02\x02" +
		"\x02\u0283\u0285\x07\xBC\x02\x02\u0284\u0283\x03\x02\x02\x02\u0284\u0285" +
		"\x03\x02\x02\x02\u0285\u028D\x03\x02\x02\x02\u0286\u028E\x05\u0134\x9B" +
		"\x02\u0287\u0288\x07\xC4\x02\x02\u0288\u0289\x05\u0122\x92\x02\u0289\u028A" +
		"\x07\xCF\x02\x02\u028A\u028E\x03\x02\x02\x02\u028B\u028C\x07\xCE\x02\x02" +
		"\u028C\u028E\x05\u0122\x92\x02\u028D\u0286\x03\x02\x02\x02\u028D\u0287" +
		"\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E-\x03\x02\x02\x02\u028F" +
		"\u0291\x07\xE2\x02\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02" +
		"\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293\x07\r\x02\x02\u0293\u0294" +
		"\x07\xE2\x02\x02\u0294\u0298\x05\u0122\x92\x02\u0295\u0296\x07\xC5\x02" +
		"\x02\u0296\u0297\x07\xD7\x02\x02\u0297\u0299\x07\xD0\x02\x02\u0298\u0295" +
		"\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02" +
		"\u029A\u029B\x07\xE2\x02\x02\u029B\u029D\x07\xDC\x02\x02\u029C\u029A\x03" +
		"\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029F\x03\x02\x02\x02\u029E" +
		"\u02A0\x07\xE0\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02" +
		"\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
		"\u02A8\x03\x02\x02\x02\u02A3\u02A5\x05&\x14\x02\u02A4\u02A3\x03\x02\x02" +
		"\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A6\u02A7" +
		"\x03\x02\x02\x02\u02A7\u02A9\x03\x02\x02\x02\u02A8\u02A4\x03\x02\x02\x02" +
		"\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AC\x07" +
		":\x02\x02\u02AB\u02AD\x07\xE0\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD" +
		"\u02AE\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02" +
		"\x02\x02\u02AF/\x03\x02\x02\x02\u02B0\u02B1\x05\u012C\x97\x02\u02B11\x03" +
		"\x02\x02\x02\u02B2\u02B3\x05\u0122\x92\x02\u02B33\x03\x02\x02\x02\u02B4" +
		"\u02B5\x05:\x1E\x02\u02B55\x03\x02\x02\x02\u02B6\u02B7\x07P\x02\x02\u02B7" +
		"\u02B8\x07\xE2\x02\x02\u02B8\u02B9\x05\u013A\x9E\x02\u02B97\x03\x02\x02" +
		"\x02\u02BA\u02BB\x07\x07\x02\x02\u02BB\u02BC\x07\xE2\x02\x02\u02BC\u02BE" +
		"\x05\u0104\x83\x02\u02BD\u02BF\x07\xE2\x02\x02\u02BE\u02BD\x03\x02\x02" +
		"\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2" +
		"\x07\xBE\x02\x02\u02C1\u02C3\x07\xE2\x02\x02\u02C2\u02C1\x03\x02\x02\x02" +
		"\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02CF\x05" +
		"\u0134\x9B\x02\u02C5\u02C7\x07\xE2\x02\x02\u02C6\u02C5\x03\x02\x02\x02" +
		"\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CA\x07" +
		"\xBA\x02\x02\u02C9\u02CB\x07\xE2\x02\x02\u02CA\u02C9\x03\x02\x02\x02\u02CA" +
		"\u02CB\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CE\x05\u0134" +
		"\x9B\x02\u02CD\u02C6\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF" +
		"\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D09\x03\x02\x02" +
		"\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02DE\x05<\x1F\x02\u02D3\u02D5" +
		"\x07\xE0\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02" +
		"\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D9\x03" +
		"\x02\x02\x02\u02D8\u02DA\x07\xE2\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9" +
		"\u02DA\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DD\x05<\x1F" +
		"\x02\u02DC\u02D4\x03\x02\x02\x02\u02DD\u02E0\x03\x02\x02\x02\u02DE\u02DC" +
		"\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF;\x03\x02\x02\x02\u02E0" +
		"\u02DE\x03\x02\x02\x02\u02E1\u0325\x05> \x02\u02E2\u0325\x058\x1D\x02" +
		"\u02E3\u0325\x05B\"\x02\u02E4\u0325\x05D#\x02\u02E5\u0325\x05H%\x02\u02E6" +
		"\u0325\x05J&\x02\u02E7\u0325\x05N(\x02\u02E8\u0325\x05T+\x02\u02E9\u0325" +
		"\x05R*\x02\u02EA\u0325\x05V,\x02\u02EB\u0325\x05X-\x02\u02EC\u0325\x05" +
		"^0\x02\u02ED\u0325\x05`1\x02\u02EE\u0325\x05d3\x02\u02EF\u0325\x05\xF8" +
		"}\x02\u02F0\u0325\x05f4\x02\u02F1\u0325\x05h5\x02\u02F2\u0325\x05j6\x02" +
		"\u02F3\u0325\x05n8\x02\u02F4\u0325\x05p9\x02\u02F5\u0325\x05r:\x02\u02F6" +
		"\u0325\x05t;\x02\u02F7\u0325\x05~@\x02\u02F8\u0325\x05\x80A\x02\u02F9" +
		"\u0325\x05\x82B\x02\u02FA\u0325\x05\x84C\x02\u02FB\u0325\x05\x86D\x02" +
		"\u02FC\u0325\x05\u0132\x9A\x02\u02FD\u0325\x05\x88E\x02\u02FE\u0325\x05" +
		"\x8AF\x02\u02FF\u0325\x05\x8CG\x02\u0300\u0325\x05\x8EH\x02\u0301\u0325" +
		"\x05\x96L\x02\u0302\u0325\x05\x98M\x02\u0303\u0325\x05\x9AN\x02\u0304" +
		"\u0325\x05\x9CO\x02\u0305\u0325\x05\x9EP\x02\u0306\u0325\x05\xA0Q\x02" +
		"\u0307\u0325\x05\xA2R\x02\u0308\u0325\x05\xA8U\x02\u0309\u0325\x05\xB0" +
		"Y\x02\u030A\u0325\x05\xB2Z\x02\u030B\u0325\x05\xB4[\x02\u030C\u0325\x05" +
		"\xB6\\\x02\u030D\u0325\x05\xBA^\x02\u030E\u0325\x05\xBC_\x02\u030F\u0325" +
		"\x05\xBE`\x02\u0310\u0325\x05\xC0a\x02\u0311\u0325\x05\xC2b\x02\u0312" +
		"\u0325\x05\xC4c\x02\u0313\u0325\x05\xC6d\x02\u0314\u0325\x05\xC8e\x02" +
		"\u0315\u0325\x05\xCAf\x02\u0316\u0325\x05\xD2j\x02\u0317\u0325\x05\xD4" +
		"k\x02\u0318\u0325\x05\xD6l\x02\u0319\u0325\x05\xD8m\x02\u031A\u0325\x05" +
		"\xDCo\x02\u031B\u0325\x05\xE4s\x02\u031C\u0325\x05\xE6t\x02\u031D\u0325" +
		"\x05\xEAv\x02\u031E\u0325\x05\xF0y\x02\u031F\u0325\x05\xF2z\x02\u0320" +
		"\u0325\x05\xF4{\x02\u0321\u0325\x05\xF6|\x02\u0322\u0325\x05\xFE\x80\x02" +
		"\u0323\u0325\x05\u0104\x83\x02\u0324\u02E1\x03\x02\x02\x02\u0324\u02E2" +
		"\x03\x02\x02\x02\u0324\u02E3\x03\x02\x02\x02\u0324\u02E4\x03\x02\x02\x02" +
		"\u0324\u02E5\x03\x02\x02\x02\u0324\u02E6\x03\x02\x02\x02\u0324\u02E7\x03" +
		"\x02\x02\x02\u0324\u02E8\x03\x02\x02\x02\u0324\u02E9\x03\x02\x02\x02\u0324" +
		"\u02EA\x03\x02\x02\x02\u0324\u02EB\x03\x02\x02\x02\u0324\u02EC\x03\x02" +
		"\x02\x02\u0324\u02ED\x03\x02\x02\x02\u0324\u02EE\x03\x02\x02\x02\u0324" +
		"\u02EF\x03\x02\x02\x02\u0324\u02F0\x03\x02\x02\x02\u0324\u02F1\x03\x02" +
		"\x02\x02\u0324\u02F2\x03\x02\x02\x02\u0324\u02F3\x03\x02\x02\x02\u0324" +
		"\u02F4\x03\x02\x02\x02\u0324\u02F5\x03\x02\x02\x02\u0324\u02F6\x03\x02" +
		"\x02\x02\u0324\u02F7\x03\x02\x02\x02\u0324\u02F8\x03\x02\x02\x02\u0324" +
		"\u02F9\x03\x02\x02\x02\u0324\u02FA\x03\x02\x02\x02\u0324\u02FB\x03\x02" +
		"\x02\x02\u0324\u02FC\x03\x02\x02\x02\u0324\u02FD\x03\x02\x02\x02\u0324" +
		"\u02FE\x03\x02\x02\x02\u0324\u02FF\x03\x02\x02\x02\u0324\u0300\x03\x02" +
		"\x02\x02\u0324\u0301\x03\x02\x02\x02\u0324\u0302\x03\x02\x02\x02\u0324" +
		"\u0303\x03\x02\x02\x02\u0324\u0304\x03\x02\x02\x02\u0324\u0305\x03\x02" +
		"\x02\x02\u0324\u0306\x03\x02\x02\x02\u0324\u0307\x03\x02\x02\x02\u0324" +
		"\u0308\x03\x02\x02\x02\u0324\u0309\x03\x02\x02\x02\u0324\u030A\x03\x02" +
		"\x02\x02\u0324\u030B\x03\x02\x02\x02\u0324\u030C\x03\x02\x02\x02\u0324" +
		"\u030D\x03\x02\x02\x02\u0324\u030E\x03\x02\x02\x02\u0324\u030F\x03\x02" +
		"\x02\x02\u0324\u0310\x03\x02\x02\x02\u0324\u0311\x03\x02\x02\x02\u0324" +
		"\u0312\x03\x02\x02\x02\u0324\u0313\x03\x02\x02\x02\u0324\u0314\x03\x02" +
		"\x02\x02\u0324\u0315\x03\x02\x02\x02\u0324\u0316\x03\x02\x02\x02\u0324" +
		"\u0317\x03\x02\x02\x02\u0324\u0318\x03\x02\x02\x02\u0324\u0319\x03\x02" +
		"\x02\x02\u0324\u031A\x03\x02\x02\x02\u0324\u031B\x03\x02\x02\x02\u0324" +
		"\u031C\x03\x02\x02\x02\u0324\u031D\x03\x02\x02\x02\u0324\u031E\x03\x02" +
		"\x02\x02\u0324\u031F\x03\x02\x02\x02\u0324\u0320\x03\x02\x02\x02\u0324" +
		"\u0321\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0324\u0323\x03\x02" +
		"\x02\x02\u0325=\x03\x02\x02\x02\u0326\u0327\x07\b\x02\x02\u0327\u0328" +
		"\x07\xE2\x02\x02\u0328\u0331\x05\xE8u\x02\u0329\u032B\x07\xE2\x02\x02" +
		"\u032A\u0329\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C\x03" +
		"\x02\x02\x02\u032C\u032E\x07\xBA\x02\x02\u032D\u032F\x07\xE2\x02\x02\u032E" +
		"\u032D\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330\x03\x02" +
		"\x02\x02\u0330\u0332\x05\xE8u\x02\u0331\u032A\x03\x02\x02\x02\u0331\u0332" +
		"\x03\x02\x02\x02\u0332?\x03\x02\x02\x02\u0333\u0334\x07\v\x02\x02\u0334" +
		"A\x03\x02\x02\x02\u0335\u0336\x07\x15\x02\x02\u0336\u0337\x07\xE2\x02" +
		"\x02\u0337\u0338\x05\xE8u\x02\u0338C\x03\x02\x02\x02\u0339\u033A\x07\x16" +
		"\x02\x02\u033A\u033B\x07\xE2\x02\x02\u033B\u033C\x05\xE8u\x02\u033CE\x03" +
		"\x02\x02\x02\u033D\u033E\x05\u013E\xA0\x02\u033E\u033F\x07\xE2\x02\x02" +
		"\u033F\u0341\x03\x02\x02\x02\u0340\u033D\x03\x02\x02\x02\u0340\u0341\x03" +
		"\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x07\x17\x02\x02\u0343" +
		"\u0344\x07\xE2\x02\x02\u0344\u0346\x05\u0122\x92\x02\u0345\u0347\x07\xE0" +
		"\x02\x02\u0346\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348" +
		"\u0346\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u0350\x03\x02" +
		"\x02\x02\u034A\u034C\x05 \x11\x02\u034B\u034D\x07\xE0\x02\x02\u034C\u034B" +
		"\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02" +
		"\u034E\u034F\x03\x02\x02\x02\u034F\u0351\x03\x02\x02\x02\u0350\u034A\x03" +
		"\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352" +
		"\u0353\x070\x02\x02\u0353G\x03\x02\x02\x02\u0354\u0364\x07\x18\x02\x02" +
		"\u0355\u0356\x07\xE2\x02\x02\u0356\u0361\x05\xE8u\x02\u0357\u0359\x07" +
		"\xE2\x02\x02\u0358\u0357\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359" +
		"\u035A\x03\x02\x02\x02\u035A\u035C\x07\xBA\x02\x02\u035B\u035D\x07\xE2" +
		"\x02\x02\u035C\u035B\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D" +
		"\u035E\x03\x02\x02\x02\u035E\u0360\x05\xE8u\x02\u035F\u0358\x03\x02\x02" +
		"\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0362" +
		"\x03\x02\x02\x02\u0362\u0365\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02" +
		"\u0364\u0355\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365I\x03\x02" +
		"\x02\x02\u0366\u0367\x05\u0138\x9D\x02\u0367\u0368\x07\xE2\x02\x02\u0368" +
		"\u036A\x03\x02\x02\x02\u0369\u0366\x03\x02\x02\x02\u0369\u036A\x03\x02" +
		"\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u036C\x07\x1A\x02\x02\u036C" +
		"\u036D\x07\xE2\x02\x02\u036D\u0378\x05L\'\x02\u036E\u0370\x07\xE2\x02" +
		"\x02\u036F\u036E\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0371" +
		"\x03\x02\x02\x02\u0371\u0373\x07\xBA\x02\x02\u0372\u0374\x07\xE2\x02\x02" +
		"\u0373\u0372\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0375\x03" +
		"\x02\x02\x02\u0375\u0377\x05L\'\x02\u0376\u036F\x03\x02\x02\x02\u0377" +
		"\u037A\x03\x02\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02" +
		"\x02\x02\u0379K\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037B\u037D" +
		"\x05\u0122\x92\x02\u037C\u037E\x05\u013C\x9F\x02\u037D\u037C\x03\x02\x02" +
		"\x02\u037D\u037E\x03\x02\x02\x02\u037E\u0381\x03\x02\x02\x02\u037F\u0380" +
		"\x07\xE2\x02\x02\u0380\u0382\x05\u0124\x93\x02\u0381\u037F\x03\x02\x02" +
		"\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0384\x03\x02\x02\x02\u0383\u0385" +
		"\x07\xE2\x02\x02\u0384\u0383\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02" +
		"\u0385\u0386\x03\x02\x02\x02\u0386\u0388\x07\xBE\x02\x02\u0387\u0389\x07" +
		"\xE2\x02\x02\u0388\u0387\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389" +
		"\u038A\x03\x02\x02\x02\u038A\u038B\x05\xE8u\x02\u038BM\x03\x02\x02\x02" +
		"\u038C\u038E\x07\x1B\x02\x02\u038D\u038F\x07\xE2\x02\x02\u038E\u038D\x03" +
		"\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390" +
		"\u0392\x07\xBE\x02\x02\u0391\u0393\x07\xE2\x02\x02\u0392\u0391\x03\x02" +
		"\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394" +
		"\u0395\x05\xE8u\x02\u0395O\x03\x02\x02\x02\u0396\u0397\x05\u013E\xA0\x02" +
		"\u0397\u0398\x07\xE2\x02\x02\u0398\u039A\x03\x02\x02\x02\u0399\u0396\x03" +
		"\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B" +
		"\u039C\x07\x1C\x02\x02\u039C\u03A2\x07\xE2\x02\x02\u039D\u039F\x07I\x02" +
		"\x02\u039E\u03A0\x05\u013C\x9F\x02\u039F\u039E\x03\x02\x02\x02\u039F\u03A0" +
		"\x03\x02\x02\x02\u03A0\u03A3\x03\x02\x02\x02\u03A1\u03A3\x07\xA1\x02\x02" +
		"\u03A2\u039D\x03\x02\x02\x02\u03A2\u03A1\x03\x02\x02\x02\u03A3\u03A4\x03" +
		"\x02\x02\x02\u03A4\u03A5\x07\xE2\x02\x02\u03A5\u03A7\x05\u0122\x92\x02" +
		"\u03A6\u03A8\x05\u013C\x9F\x02\u03A7\u03A6\x03\x02\x02\x02\u03A7\u03A8" +
		"\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x07\xE2\x02\x02" +
		"\u03AA\u03AB\x07]\x02\x02\u03AB\u03AC\x07\xE2\x02\x02\u03AC\u03B1\x07" +
		"\xD4\x02\x02\u03AD\u03AE\x07\xE2\x02\x02\u03AE\u03AF\x07\x05\x02\x02\u03AF" +
		"\u03B0\x07\xE2\x02\x02\u03B0\u03B2\x07\xD4\x02\x02\u03B1\u03AD\x03\x02" +
		"\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B7\x03\x02\x02\x02\u03B3" +
		"\u03B5\x07\xE2\x02\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02" +
		"\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B8\x05\u0118\x8D\x02\u03B7" +
		"\u03B4\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03BB\x03\x02" +
		"\x02\x02\u03B9\u03BA\x07\xE2\x02\x02\u03BA\u03BC\x05\u0124\x93\x02\u03BB" +
		"\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BCQ\x03\x02\x02" +
		"\x02\u03BD\u03BE\t\x03\x02\x02\u03BE\u03BF\x07\xE2\x02\x02\u03BF\u03CA" +
		"\x05\u0130\x99\x02\u03C0\u03C2\x07\xE2\x02\x02\u03C1\u03C0\x03\x02\x02" +
		"\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C5" +
		"\x07\xBA\x02\x02\u03C4\u03C6\x07\xE2\x02\x02\u03C5\u03C4\x03\x02\x02\x02" +
		"\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C9\x05" +
		"\u0130\x99\x02\u03C8\u03C1\x03\x02\x02\x02\u03C9\u03CC\x03\x02\x02\x02" +
		"\u03CA\u03C8\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CBS\x03\x02" +
		"\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03CE\x07)\x02\x02\u03CE\u03CF" +
		"\x07\xE2\x02\x02\u03CF\u03D1\x05\xE8u\x02\u03D0\u03D2\x07\xE2\x02\x02" +
		"\u03D1\u03D0\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D3\x03" +
		"\x02\x02\x02\u03D3\u03D5\x07\xBA\x02\x02\u03D4\u03D6\x07\xE2\x02\x02\u03D5" +
		"\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03D7\x03\x02" +
		"\x02\x02\u03D7\u03E0\x05\xE8u\x02\u03D8\u03DA\x07\xE2\x02\x02\u03D9\u03D8" +
		"\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02" +
		"\u03DB\u03DD\x07\xBA\x02\x02\u03DC\u03DE\x07\xE2\x02\x02\u03DD\u03DC\x03" +
		"\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF" +
		"\u03E1\x05\xE8u\x02\u03E0\u03D9\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02" +
		"\x02\u03E1U\x03\x02\x02\x02\u03E2\u03E4\x07+\x02\x02\u03E3\u03E5\x07\xE0" +
		"\x02\x02\u03E4\u03E3\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6" +
		"\u03E4\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03EE\x03\x02" +
		"\x02\x02\u03E8\u03EA\x05:\x1E\x02\u03E9\u03EB\x07\xE0\x02\x02\u03EA\u03E9" +
		"\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03EA\x03\x02\x02\x02" +
		"\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EF\x03\x02\x02\x02\u03EE\u03E8\x03" +
		"\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0" +
		"\u0418\x07Z\x02\x02\u03F1\u03F2\x07+\x02\x02\u03F2\u03F3\x07\xE2\x02\x02" +
		"\u03F3\u03F4\t\x04\x02\x02\u03F4\u03F5\x07\xE2\x02\x02\u03F5\u03F7\x05" +
		"\xE8u\x02\u03F6\u03F8\x07\xE0\x02\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8" +
		"\u03F9\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02" +
		"\x02\x02\u03FA\u0401\x03\x02\x02\x02\u03FB\u03FD\x05:\x1E\x02\u03FC\u03FE" +
		"\x07\xE0\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02" +
		"\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0402\x03" +
		"\x02\x02\x02\u0401\u03FB\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402" +
		"\u0403\x03\x02\x02\x02\u0403\u0404\x07Z\x02\x02\u0404\u0418\x03\x02\x02" +
		"\x02\u0405\u0407\x07+\x02\x02\u0406\u0408\x07\xE0\x02\x02\u0407\u0406" +
		"\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02" +
		"\u0409\u040A\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B\u040D\x05" +
		":\x1E\x02\u040C\u040E\x07\xE0\x02\x02\u040D\u040C\x03\x02\x02\x02\u040E" +
		"\u040F\x03\x02\x02\x02\u040F\u040D\x03\x02\x02\x02\u040F\u0410\x03\x02" +
		"\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0412\x07Z\x02\x02\u0412\u0413" +
		"\x07\xE2\x02\x02\u0413\u0414\t\x04\x02\x02\u0414\u0415\x07\xE2\x02\x02" +
		"\u0415\u0416\x05\xE8u\x02\u0416\u0418\x03\x02\x02\x02\u0417\u03E2\x03" +
		"\x02\x02\x02\u0417\u03F1\x03\x02\x02\x02\u0417\u0405\x03\x02\x02\x02\u0418" +
		"W\x03\x02\x02\x02\u0419\u041A\x079\x02\x02\u041AY\x03\x02\x02\x02\u041B" +
		"\u041C\x05\u0136\x9C\x02\u041C\u041D\x07\xE2\x02\x02\u041D\u041F\x03\x02" +
		"\x02\x02\u041E\u041B\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F" +
		"\u0420\x03\x02\x02\x02\u0420\u0421\x07;\x02\x02\u0421\u0422\x07\xE2\x02" +
		"\x02\u0422\u0424\x05\u0122\x92\x02\u0423\u0425\x07\xE0\x02\x02\u0424\u0423" +
		"\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02" +
		"\u0426\u0427\x03\x02\x02\x02\u0427\u042B\x03\x02\x02\x02\u0428\u042A\x05" +
		"\\/\x02\u0429\u0428\x03\x02\x02\x02\u042A\u042D\x03\x02\x02\x02\u042B" +
		"\u0429\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042E\x03\x02" +
		"\x02\x02\u042D\u042B\x03\x02\x02\x02\u042E\u042F\x071\x02\x02\u042F[\x03" +
		"\x02\x02\x02\u0430\u0439\x05\u0122\x92\x02\u0431\u0433\x07\xE2\x02\x02" +
		"\u0432\u0431\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433\u0434\x03" +
		"\x02\x02\x02\u0434\u0436\x07\xBE\x02\x02\u0435\u0437\x07\xE2\x02\x02\u0436" +
		"\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u0438\x03\x02" +
		"\x02\x02\u0438\u043A\x05\xE8u\x02\u0439\u0432\x03\x02\x02\x02\u0439\u043A" +
		"\x03\x02\x02\x02\u043A\u043C\x03\x02\x02\x02\u043B\u043D\x07\xE0\x02\x02" +
		"\u043C\u043B\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E\u043C\x03" +
		"\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F]\x03\x02\x02\x02\u0440" +
		"\u0441\x07=\x02\x02\u0441\u0442\x07\xE2\x02\x02\u0442\u044D\x05\xE8u\x02" +
		"\u0443\u0445\x07\xE2\x02\x02\u0444\u0443\x03\x02\x02\x02\u0444\u0445\x03" +
		"\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0448\x07\xBA\x02\x02\u0447" +
		"\u0449\x07\xE2\x02\x02\u0448\u0447\x03\x02\x02\x02\u0448\u0449\x03\x02" +
		"\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044C\x05\xE8u\x02\u044B\u0444" +
		"\x03\x02\x02\x02\u044C\u044F\x03\x02\x02\x02\u044D\u044B\x03\x02\x02\x02" +
		"\u044D\u044E\x03\x02\x02\x02\u044E_\x03\x02\x02\x02\u044F\u044D\x03\x02" +
		"\x02\x02\u0450\u0451\x07>\x02\x02\u0451\u0452\x07\xE2\x02\x02\u0452\u0453" +
		"\x05\xE8u\x02\u0453a\x03\x02\x02\x02\u0454\u0455\x05\u013E\xA0\x02\u0455" +
		"\u0456\x07\xE2\x02\x02\u0456\u0458\x03\x02\x02\x02\u0457\u0454\x03\x02" +
		"\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459" +
		"\u045A\x07?\x02\x02\u045A\u045B\x07\xE2\x02\x02\u045B\u045D\x05\u0122" +
		"\x92\x02\u045C\u045E\x07\xE2\x02\x02\u045D\u045C\x03\x02\x02\x02\u045D" +
		"\u045E\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0460\x05\u0118" +
		"\x8D\x02\u0460c\x03\x02\x02\x02\u0461\u0462\t\x05\x02\x02\u0462e\x03\x02" +
		"\x02\x02\u0463\u0464\x07F\x02\x02\u0464\u0465\x07\xE2\x02\x02\u0465\u0467" +
		"\x05\xE8u\x02\u0466\u0468\x07\xE2\x02\x02\u0467\u0466\x03\x02\x02\x02" +
		"\u0467\u0468\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u046B\x07" +
		"\xBA\x02\x02\u046A\u046C\x07\xE2\x02\x02\u046B\u046A\x03\x02\x02\x02\u046B" +
		"\u046C\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x05\xE8" +
		"u\x02\u046Eg\x03\x02\x02\x02\u046F\u0470\x07H\x02\x02\u0470\u0471\x07" +
		"\xE2\x02\x02\u0471\u0472\x07-\x02\x02\u0472\u0473\x07\xE2\x02\x02\u0473" +
		"\u0475\x05\u0122\x92\x02\u0474\u0476\x05\u013C\x9F\x02\u0475\u0474\x03" +
		"\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477" +
		"\u0478\x07\xE2\x02\x02\u0478\u0479\x07R\x02\x02\u0479\u047A\x07\xE2\x02" +
		"\x02\u047A\u047C\x05\xE8u\x02\u047B\u047D\x07\xE0\x02\x02\u047C\u047B" +
		"\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E\u047C\x03\x02\x02\x02" +
		"\u047E\u047F\x03\x02\x02\x02\u047F\u0486\x03\x02\x02\x02\u0480\u0482\x05" +
		":\x1E\x02\u0481\u0483\x07\xE0\x02\x02\u0482\u0481\x03\x02\x02\x02\u0483" +
		"\u0484\x03\x02\x02\x02\u0484\u0482\x03\x02\x02\x02\u0484\u0485\x03\x02" +
		"\x02\x02\u0485\u0487\x03\x02\x02\x02\u0486\u0480\x03\x02\x02\x02\u0486" +
		"\u0487\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u048B\x07m\x02" +
		"\x02\u0489\u048A\x07\xE2\x02\x02\u048A\u048C\x05\u0122\x92\x02\u048B\u0489" +
		"\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048Ci\x03\x02\x02\x02\u048D" +
		"\u048E\x07H\x02\x02\u048E\u048F\x07\xE2\x02\x02\u048F\u0491\x05\u0106" +
		"\x84\x02\u0490\u0492\x05\u013C\x9F\x02\u0491\u0490\x03\x02\x02\x02\u0491" +
		"\u0492\x03\x02\x02\x02\u0492\u0495\x03\x02\x02\x02\u0493\u0494\x07\xE2" +
		"\x02\x02\u0494\u0496\x05\u0124\x93\x02\u0495\u0493\x03\x02\x02\x02\u0495" +
		"\u0496\x03\x02\x02\x02\u0496\u0498\x03\x02\x02\x02\u0497\u0499\x07\xE2" +
		"\x02\x02\u0498\u0497\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499" +
		"\u049A\x03\x02\x02\x02\u049A\u049C\x07\xBE\x02\x02\u049B\u049D\x07\xE2" +
		"\x02\x02\u049C\u049B\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D" +
		"\u049E\x03\x02\x02\x02\u049E\u049F\x05\xE8u\x02\u049F\u04A0\x07\xE2\x02" +
		"\x02\u04A0\u04A1\x07\xA6\x02\x02\u04A1\u04A2\x07\xE2\x02\x02\u04A2\u04A7" +
		"\x05\xE8u\x02\u04A3\u04A4\x07\xE2\x02\x02\u04A4\u04A5\x07\x9E\x02\x02" +
		"\u04A5\u04A6\x07\xE2\x02\x02\u04A6\u04A8\x05\xE8u\x02\u04A7\u04A3\x03" +
		"\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9" +
		"\u04AB\x07\xE0\x02\x02\u04AA\u04A9\x03\x02\x02\x02\u04AB\u04AC\x03\x02" +
		"\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD" +
		"\u04B4\x03\x02\x02\x02\u04AE\u04B0\x05:\x1E\x02\u04AF\u04B1\x07\xE0\x02" +
		"\x02\u04B0\u04AF\x03\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B0" +
		"\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B5\x03\x02\x02\x02" +
		"\u04B4\u04AE\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B6\x03" +
		"\x02\x02\x02\u04B6\u04BC\x07m\x02\x02\u04B7\u04B8\x07\xE2\x02\x02\u04B8" +
		"\u04BA\x05\u0122\x92\x02\u04B9\u04BB\x05\u013C\x9F\x02\u04BA\u04B9\x03" +
		"\x02\x02\x02\u04BA\u04BB\x03\x02\x02\x02\u04BB\u04BD\x03\x02\x02\x02\u04BC" +
		"\u04B7\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BDk\x03\x02\x02" +
		"\x02\u04BE\u04BF\x05\u013E\xA0\x02\u04BF\u04C0\x07\xE2\x02\x02\u04C0\u04C2" +
		"\x03\x02\x02\x02\u04C1\u04BE\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02" +
		"\u04C2\u04C5\x03\x02\x02\x02\u04C3\u04C4\x07\x9D\x02\x02\u04C4\u04C6\x07" +
		"\xE2\x02\x02\u04C5\u04C3\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6" +
		"\u04C7\x03\x02\x02\x02\u04C7\u04C8\x07I\x02\x02\u04C8\u04C9\x07\xE2\x02" +
		"\x02\u04C9\u04CE\x05\u0122\x92\x02\u04CA\u04CC\x07\xE2\x02\x02\u04CB\u04CA" +
		"\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02" +
		"\u04CD\u04CF\x05\u0118\x8D\x02\u04CE\u04CB\x03\x02\x02\x02\u04CE\u04CF" +
		"\x03\x02\x02\x02\u04CF\u04D2\x03\x02\x02\x02\u04D0";
	private static readonly _serializedATNSegment3: string =
		"\u04D1\x07\xE2\x02\x02\u04D1\u04D3\x05\u0124\x93\x02\u04D2\u04D0\x03\x02" +
		"\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D5\x03\x02\x02\x02\u04D4" +
		"\u04D6\x07\xE0\x02\x02\u04D5\u04D4\x03\x02\x02\x02\u04D6\u04D7\x03\x02" +
		"\x02\x02\u04D7\u04D5\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8" +
		"\u04DF\x03\x02\x02\x02\u04D9\u04DB\x05:\x1E\x02\u04DA\u04DC\x07\xE0\x02" +
		"\x02\u04DB\u04DA\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DB" +
		"\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04E0\x03\x02\x02\x02" +
		"\u04DF\u04D9\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u04E1\x03" +
		"\x02\x02\x02\u04E1\u04E2\x072\x02\x02\u04E2m\x03\x02\x02\x02\u04E3\u04E4" +
		"\x07J\x02\x02\u04E4\u04E5\x07\xE2\x02\x02\u04E5\u04E7\x05\xE8u\x02\u04E6" +
		"\u04E8\x07\xE2\x02\x02\u04E7\u04E6\x03\x02\x02\x02\u04E7\u04E8\x03\x02" +
		"\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EB\x07\xBA\x02\x02\u04EA" +
		"\u04EC\x07\xE2\x02\x02\u04EB\u04EA\x03\x02\x02\x02\u04EB\u04EC\x03\x02" +
		"\x02\x02\u04EC\u04EE\x03\x02\x02\x02\u04ED\u04EF\x05\xE8u\x02\u04EE\u04ED" +
		"\x03\x02\x02\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF\u04F1\x03\x02\x02\x02" +
		"\u04F0\u04F2\x07\xE2\x02\x02\u04F1\u04F0\x03\x02\x02\x02\u04F1\u04F2\x03" +
		"\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F5\x07\xBA\x02\x02\u04F4" +
		"\u04F6\x07\xE2\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F5\u04F6\x03\x02" +
		"\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04F8\x05\xE8u\x02\u04F8o\x03" +
		"\x02\x02\x02\u04F9\u04FA\x07L\x02\x02\u04FA\u04FB\x07\xE2\x02\x02\u04FB" +
		"\u04FC\x05\xE8u\x02\u04FCq\x03\x02\x02\x02\u04FD\u04FE\x07M\x02\x02\u04FE" +
		"\u04FF\x07\xE2\x02\x02\u04FF\u0500\x05\xE8u\x02\u0500s\x03\x02\x02\x02" +
		"\u0501\u0502\x07N\x02\x02\u0502\u0503\x07\xE2\x02\x02\u0503\u0504\x05" +
		"x=\x02\u0504\u0505\x07\xE2\x02\x02\u0505\u0506\x07\xA4\x02\x02\u0506\u0507" +
		"\x07\xE2\x02\x02\u0507\u050C\x05<\x1F\x02\u0508\u0509\x07\xE2\x02\x02" +
		"\u0509\u050A\x07.\x02\x02\u050A\u050B\x07\xE2\x02\x02\u050B\u050D\x05" +
		"<\x1F\x02\u050C\u0508\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D" +
		"\u051B\x03\x02\x02\x02\u050E\u0512\x05v<\x02\u050F\u0511\x05z>\x02\u0510" +
		"\u050F\x03\x02\x02\x02\u0511\u0514\x03\x02\x02\x02\u0512\u0510\x03\x02" +
		"\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0516\x03\x02\x02\x02\u0514" +
		"\u0512\x03\x02\x02\x02\u0515\u0517\x05|?\x02\u0516\u0515\x03\x02\x02\x02" +
		"\u0516\u0517\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518\u0519\x07" +
		"3\x02\x02\u0519\u051B\x03\x02\x02\x02\u051A\u0501\x03\x02\x02\x02\u051A" +
		"\u050E\x03\x02\x02\x02\u051Bu\x03\x02\x02\x02\u051C\u051D\x07N\x02\x02" +
		"\u051D\u051E\x07\xE2\x02\x02\u051E\u051F\x05x=\x02\u051F\u0520\x07\xE2" +
		"\x02\x02\u0520\u0522\x07\xA4\x02\x02\u0521\u0523\x07\xE0\x02\x02\u0522" +
		"\u0521\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\u0522\x03\x02" +
		"\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u052C\x03\x02\x02\x02\u0526" +
		"\u0528\x05:\x1E\x02\u0527\u0529\x07\xE0\x02\x02\u0528\u0527\x03\x02\x02" +
		"\x02\u0529\u052A\x03\x02\x02\x02\u052A\u0528\x03\x02\x02\x02\u052A\u052B" +
		"\x03\x02\x02\x02\u052B\u052D\x03\x02\x02\x02\u052C\u0526\x03\x02\x02\x02" +
		"\u052C\u052D\x03\x02\x02\x02\u052Dw\x03\x02\x02\x02\u052E\u052F\x05\xE8" +
		"u\x02\u052Fy\x03\x02\x02\x02\u0530\u0531\x07/\x02\x02\u0531\u0532\x07" +
		"\xE2\x02\x02\u0532\u0533\x05x=\x02\u0533\u0534\x07\xE2\x02\x02\u0534\u0536" +
		"\x07\xA4\x02\x02\u0535\u0537\x07\xE0\x02\x02\u0536\u0535\x03\x02\x02\x02" +
		"\u0537\u0538\x03\x02\x02\x02\u0538\u0536\x03\x02\x02\x02\u0538\u0539\x03" +
		"\x02\x02\x02\u0539\u0540\x03\x02\x02\x02\u053A\u053C\x05:\x1E\x02\u053B" +
		"\u053D\x07\xE0\x02\x02\u053C\u053B\x03\x02\x02\x02\u053D\u053E\x03\x02" +
		"\x02\x02\u053E\u053C\x03\x02\x02\x02\u053E\u053F\x03\x02\x02\x02\u053F" +
		"\u0541\x03\x02\x02\x02\u0540\u053A\x03\x02\x02\x02\u0540\u0541\x03\x02" +
		"\x02\x02\u0541{\x03\x02\x02\x02\u0542\u0544\x07.\x02\x02\u0543\u0545\x07" +
		"\xE0\x02\x02\u0544\u0543\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546" +
		"\u0544\x03\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547\u054E\x03\x02" +
		"\x02\x02\u0548\u054A\x05:\x1E\x02\u0549\u054B\x07\xE0\x02\x02\u054A\u0549" +
		"\x03\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u054A\x03\x02\x02\x02" +
		"\u054C\u054D\x03\x02\x02\x02\u054D\u054F\x03\x02\x02\x02\u054E\u0548\x03" +
		"\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F}\x03\x02\x02\x02\u0550" +
		"\u0551\x07Q\x02\x02\u0551\u0552\x07\xE2\x02\x02\u0552\u0553\x05\u0122" +
		"\x92\x02\u0553\x7F\x03\x02\x02\x02\u0554\u0555\x07S\x02\x02\u0555\u0556" +
		"\x07\xE2\x02\x02\u0556\u055F\x05\xE8u\x02\u0557\u0559\x07\xE2\x02\x02" +
		"\u0558\u0557\x03\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\u055A\x03" +
		"\x02\x02\x02\u055A\u055C\x07\xBA\x02\x02\u055B\u055D\x07\xE2\x02\x02\u055C" +
		"\u055B\x03\x02\x02\x02\u055C\u055D\x03\x02\x02\x02\u055D\u055E\x03\x02" +
		"\x02\x02\u055E\u0560\x05\xE8u\x02\u055F\u0558\x03\x02\x02\x02\u0560\u0561" +
		"\x03\x02\x02\x02\u0561\u055F\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02" +
		"\u0562\x81\x03\x02\x02\x02\u0563\u0564\x07V\x02\x02\u0564\u0565\x07\xE2" +
		"\x02\x02\u0565\u0566\x05\xE8u\x02\u0566\x83\x03\x02\x02\x02\u0567\u0568" +
		"\x07\\\x02\x02\u0568\u056A\x07\xE2\x02\x02\u0569\u0567\x03\x02\x02\x02" +
		"\u0569\u056A\x03\x02\x02\x02\u056A\u056B\x03\x02\x02\x02\u056B\u056D\x05" +
		"\u0104\x83\x02\u056C\u056E\x07\xE2\x02\x02\u056D\u056C\x03\x02\x02\x02" +
		"\u056D\u056E\x03\x02\x02\x02\u056E\u056F\x03\x02\x02\x02\u056F\u0571\t" +
		"\x06\x02\x02\u0570\u0572\x07\xE2\x02\x02\u0571\u0570\x03\x02\x02\x02\u0571" +
		"\u0572\x03\x02\x02\x02\u0572\u0573\x03\x02\x02\x02\u0573\u0574\x05\xE8" +
		"u\x02\u0574\x85\x03\x02\x02\x02\u0575\u0576\x07_\x02\x02\u0576\u0577\x07" +
		"\xE2\x02\x02\u0577\u0579\x05\xE8u\x02\u0578\u057A\x07\xE2\x02\x02\u0579" +
		"\u0578\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057B\x03\x02" +
		"\x02\x02\u057B\u057D\x07\xBA\x02\x02\u057C\u057E\x07\xE2\x02\x02\u057D" +
		"\u057C\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\u057F\x03\x02" +
		"\x02\x02\u057F\u0580\x05\xE8u\x02\u0580\x87\x03\x02\x02\x02\u0581\u0582" +
		"\x07W\x02\x02\u0582\u0583\x07\xE2\x02\x02\u0583\u0584\x05\xE8u\x02\u0584" +
		"\x89\x03\x02\x02\x02\u0585\u0586\x07X\x02\x02\u0586\u0587\x07\xE2\x02" +
		"\x02\u0587\u0596\x05\xE8u\x02\u0588\u058A\x07\xE2\x02\x02\u0589\u0588" +
		"\x03\x02\x02\x02\u0589\u058A\x03\x02\x02\x02\u058A\u058B\x03\x02\x02\x02" +
		"\u058B\u058D\x07\xBA\x02\x02\u058C\u058E\x07\xE2\x02\x02\u058D\u058C\x03" +
		"\x02\x02\x02\u058D\u058E\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F" +
		"\u0594\x05\xE8u\x02\u0590\u0591\x07\xE2\x02\x02\u0591\u0592\x07\xA6\x02" +
		"\x02\u0592\u0593\x07\xE2\x02\x02\u0593\u0595\x05\xE8u\x02\u0594\u0590" +
		"\x03\x02\x02\x02\u0594\u0595\x03\x02\x02\x02\u0595\u0597\x03\x02\x02\x02" +
		"\u0596\u0589\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\x8B\x03" +
		"\x02\x02\x02\u0598\u0599\x07c\x02\x02\u0599\u059A\x07\xE2\x02\x02\u059A" +
		"\u059C\x05\u0104\x83\x02\u059B\u059D\x07\xE2\x02\x02\u059C\u059B\x03\x02" +
		"\x02\x02\u059C\u059D\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E" +
		"\u05A0\x07\xBE\x02\x02\u059F\u05A1\x07\xE2\x02\x02\u05A0\u059F\x03\x02" +
		"\x02\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2" +
		"\u05A3\x05\xE8u\x02\u05A3\x8D\x03\x02\x02\x02\u05A4\u05A8\x05\x90I\x02" +
		"\u05A5\u05A7\x05\x92J\x02\u05A6\u05A5\x03\x02\x02\x02\u05A7\u05AA\x03" +
		"\x02\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9" +
		"\u05AC\x03\x02\x02\x02\u05AA\u05A8\x03\x02\x02\x02\u05AB\u05AD\x05\x94" +
		"K\x02\u05AC\u05AB\x03\x02\x02\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE" +
		"\x03\x02\x02\x02\u05AE\u05AF\x07g\x02\x02\u05AF\x8F\x03\x02\x02\x02\u05B0" +
		"\u05B1\x07d\x02\x02\u05B1\u05B2\x07\xE2\x02\x02\u05B2\u05B3\x05x=\x02" +
		"\u05B3\u05B4\x07\xE2\x02\x02\u05B4\u05B6\x07\xA4\x02\x02\u05B5\u05B7\x07" +
		"\xE0\x02\x02\u05B6\u05B5\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8" +
		"\u05B6\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9\u05C0\x03\x02" +
		"\x02\x02\u05BA\u05BC\x05\x1C\x0F\x02\u05BB\u05BD\x07\xE0\x02\x02\u05BC" +
		"\u05BB\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u05BC\x03\x02" +
		"\x02\x02\u05BE\u05BF\x03\x02\x02\x02\u05BF\u05C1\x03\x02\x02\x02\u05C0" +
		"\u05BA\x03\x02\x02\x02\u05C0\u05C1\x03\x02\x02\x02\u05C1\x91\x03\x02\x02" +
		"\x02\u05C2\u05C3\x07e\x02\x02\u05C3\u05C4\x07\xE2\x02\x02\u05C4\u05C5" +
		"\x05x=\x02\u05C5\u05C6\x07\xE2\x02\x02\u05C6\u05C8\x07\xA4\x02\x02\u05C7" +
		"\u05C9\x07\xE0\x02\x02\u05C8\u05C7\x03\x02\x02\x02\u05C9\u05CA\x03\x02" +
		"\x02\x02\u05CA\u05C8\x03\x02\x02\x02\u05CA\u05CB\x03\x02\x02\x02\u05CB" +
		"\u05D2\x03\x02\x02\x02\u05CC\u05CE\x05\x1C\x0F\x02\u05CD\u05CF\x07\xE0" +
		"\x02\x02\u05CE\u05CD\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02\x02\u05D0" +
		"\u05CE\x03\x02\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1\u05D3\x03\x02" +
		"\x02\x02\u05D2\u05CC\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3" +
		"\x93\x03\x02\x02\x02\u05D4\u05D6\x07f\x02\x02\u05D5\u05D7\x07\xE0\x02" +
		"\x02\u05D6\u05D5\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05D6" +
		"\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05E0\x03\x02\x02\x02" +
		"\u05DA\u05DC\x05\x1C\x0F\x02\u05DB\u05DD\x07\xE0\x02\x02\u05DC\u05DB\x03" +
		"\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE\u05DC\x03\x02\x02\x02\u05DE" +
		"\u05DF\x03\x02\x02\x02\u05DF\u05E1\x03\x02\x02\x02\u05E0\u05DA\x03\x02" +
		"\x02\x02\u05E0\u05E1\x03\x02\x02\x02\u05E1\x95\x03\x02\x02\x02\u05E2\u05E4" +
		"\x07i\x02\x02\u05E3\u05E5\x07\xE2\x02\x02\u05E4\u05E3\x03\x02\x02\x02" +
		"\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6\u05E8\x07" +
		"\xC5\x02\x02\u05E7\u05E9\x07\xE2\x02\x02\u05E8\u05E7\x03\x02\x02\x02\u05E8" +
		"\u05E9\x03\x02\x02\x02\u05E9\u05EA\x03\x02\x02\x02\u05EA\u05EC\x05\u0112" +
		"\x8A\x02\u05EB\u05ED\x07\xE2\x02\x02\u05EC\u05EB\x03\x02\x02\x02\u05EC" +
		"\u05ED\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05EF\x07\xD0" +
		"\x02\x02\u05EF\x97\x03\x02\x02\x02\u05F0\u05F1\x07j\x02\x02\u05F1\u05F2" +
		"\x07\xE2\x02\x02\u05F2\u05F3\x05\xE8u\x02\u05F3\x99\x03\x02\x02\x02\u05F4" +
		"\u05F5\x07l\x02\x02\u05F5\u05F6\x07\xE2\x02\x02\u05F6\u05F7\x05\xE8u\x02" +
		"\u05F7\u05F8\x07\xE2\x02\x02\u05F8\u05F9\x07\n\x02\x02\u05F9\u05FA\x07" +
		"\xE2\x02\x02\u05FA\u05FB\x05\xE8u\x02\u05FB\x9B\x03\x02\x02\x02\u05FC" +
		"\u05FD\t\x07\x02\x02\u05FD\u0607\x07\xE2\x02\x02\u05FE\u05FF\x07M\x02" +
		"\x02\u05FF\u0600\x07\xE2\x02\x02\u0600\u0602\x05\xE8u\x02\u0601\u0603" +
		"\x07\xB9\x02\x02\u0602\u0601\x03\x02\x02\x02\u0602\u0603\x03\x02\x02\x02" +
		"\u0603\u0608\x03\x02\x02\x02\u0604\u0605\x07\x8F\x02\x02\u0605\u0606\x07" +
		"\xE2\x02\x02\u0606\u0608\x07m\x02\x02\u0607\u05FE\x03\x02\x02\x02\u0607" +
		"\u0604\x03\x02\x02\x02\u0608\x9D\x03\x02\x02\x02\u0609\u060A\x07s\x02" +
		"\x02\u060A\u060B\x07\xE2\x02\x02\u060B\u060C\x05\xE8u\x02\u060C\u060D" +
		"\x07\xE2\x02\x02\u060D\u060E\x07M\x02\x02\u060E\u060F\x07\xE2\x02\x02" +
		"\u060F\u061A\x05\xE8u\x02\u0610\u0612\x07\xE2\x02\x02\u0611\u0610\x03" +
		"\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0613\x03\x02\x02\x02\u0613" +
		"\u0615\x07\xBA\x02\x02\u0614\u0616\x07\xE2\x02\x02\u0615\u0614\x03\x02" +
		"\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616\u0617\x03\x02\x02\x02\u0617" +
		"\u0619\x05\xE8u\x02\u0618\u0611\x03\x02\x02\x02\u0619\u061C\x03\x02\x02" +
		"\x02\u061A\u0618\x03\x02\x02\x02\u061A\u061B\x03\x02\x02\x02\u061B\x9F" +
		"\x03\x02\x02\x02\u061C\u061A\x03\x02\x02\x02\u061D\u061E\x07s\x02\x02" +
		"\u061E\u061F\x07\xE2\x02\x02\u061F\u0620\x05\xE8u\x02\u0620\u0621\x07" +
		"\xE2\x02\x02\u0621\u0622\x07L\x02\x02\u0622\u0623\x07\xE2\x02\x02\u0623" +
		"\u062E\x05\xE8u\x02\u0624\u0626\x07\xE2\x02\x02\u0625\u0624\x03\x02\x02" +
		"\x02\u0625\u0626\x03\x02\x02\x02\u0626\u0627\x03\x02\x02\x02\u0627\u0629" +
		"\x07\xBA\x02\x02\u0628\u062A\x07\xE2\x02\x02\u0629\u0628\x03\x02\x02\x02" +
		"\u0629\u062A\x03\x02\x02\x02\u062A\u062B\x03\x02\x02\x02\u062B\u062D\x05" +
		"\xE8u\x02\u062C\u0625\x03\x02\x02\x02\u062D\u0630\x03\x02\x02\x02\u062E" +
		"\u062C\x03\x02\x02\x02\u062E\u062F\x03\x02\x02\x02\u062F\xA1\x03\x02\x02" +
		"\x02\u0630\u062E\x03\x02\x02\x02\u0631\u0632\x07v\x02\x02\u0632\u0633" +
		"\x07\xE2\x02\x02\u0633\u0634\x05\xE8u\x02\u0634\u0635\x07\xE2\x02\x02" +
		"\u0635\u0636\x07H\x02\x02\u0636\u0637\x07\xE2\x02\x02\u0637\u063C\t\b" +
		"\x02\x02\u0638\u0639\x07\xE2\x02\x02\u0639\u063A\x07\x03\x02\x02\u063A" +
		"\u063B\x07\xE2\x02\x02\u063B\u063D\t\t\x02\x02\u063C\u0638\x03\x02\x02" +
		"\x02\u063C\u063D\x03\x02\x02\x02\u063D\u0640\x03\x02\x02\x02\u063E\u063F" +
		"\x07\xE2\x02\x02\u063F\u0641\t\n\x02\x02\u0640\u063E\x03\x02\x02\x02\u0640" +
		"\u0641\x03\x02\x02\x02\u0641\u0642\x03\x02\x02\x02\u0642\u0643\x07\xE2" +
		"\x02\x02\u0643\u0644\x07\n\x02\x02\u0644\u0645\x07\xE2\x02\x02\u0645\u0650" +
		"\x05\xE8u\x02\u0646\u0647\x07\xE2\x02\x02\u0647\u0649\x07[\x02\x02\u0648" +
		"\u064A\x07\xE2\x02\x02\u0649\u0648\x03\x02\x02\x02\u0649\u064A\x03\x02" +
		"\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B\u064D\x07\xBE\x02\x02\u064C" +
		"\u064E\x07\xE2\x02\x02\u064D\u064C\x03\x02\x02\x02\u064D\u064E\x03\x02" +
		"\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F\u0651\x05\xE8u\x02\u0650\u0646" +
		"\x03\x02\x02\x02\u0650\u0651\x03\x02\x02\x02\u0651\xA3\x03\x02\x02\x02" +
		"\u0652\u065F\x05\xA6T\x02\u0653\u0655\x07\xE2\x02\x02\u0654\u0653\x03" +
		"\x02\x02\x02\u0654\u0655\x03\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656" +
		"\u0658\t\v\x02\x02\u0657\u0659\x07\xE2\x02\x02\u0658\u0657\x03\x02\x02" +
		"\x02\u0658\u0659\x03\x02\x02\x02\u0659\u065B\x03\x02\x02\x02\u065A\u065C" +
		"\x05\xA6T\x02\u065B\u065A\x03\x02\x02\x02\u065B\u065C\x03\x02\x02\x02" +
		"\u065C\u065E\x03\x02\x02\x02\u065D\u0654\x03\x02\x02\x02\u065E\u0661\x03" +
		"\x02\x02\x02\u065F\u065D\x03\x02\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660" +
		"\u0674\x03\x02\x02\x02\u0661\u065F\x03\x02\x02\x02\u0662\u0664\x05\xA6" +
		"T\x02\u0663\u0662\x03\x02\x02\x02\u0663\u0664\x03\x02\x02\x02\u0664\u066F" +
		"\x03\x02\x02\x02\u0665\u0667\x07\xE2\x02\x02\u0666\u0665\x03\x02\x02\x02" +
		"\u0666\u0667\x03\x02\x02\x02\u0667\u0668\x03\x02\x02\x02\u0668\u066A\t" +
		"\v\x02\x02\u0669\u066B\x07\xE2\x02\x02\u066A\u0669\x03\x02\x02\x02\u066A" +
		"\u066B\x03\x02\x02\x02\u066B\u066D\x03\x02\x02\x02\u066C\u066E\x05\xA6" +
		"T\x02\u066D\u066C\x03\x02\x02\x02\u066D\u066E\x03\x02\x02\x02\u066E\u0670" +
		"\x03\x02\x02\x02\u066F\u0666\x03\x02\x02\x02\u0670\u0671\x03\x02\x02\x02" +
		"\u0671\u066F\x03\x02\x02\x02\u0671\u0672\x03\x02\x02\x02\u0672\u0674\x03" +
		"\x02\x02\x02\u0673\u0652\x03\x02\x02\x02\u0673\u0663\x03\x02\x02\x02\u0674" +
		"\xA5\x03\x02\x02\x02\u0675\u0683\t\f\x02\x02\u0676\u0678\x07\xE2\x02\x02" +
		"\u0677\u0676\x03\x02\x02\x02\u0677\u0678\x03\x02\x02\x02\u0678\u0679\x03" +
		"\x02\x02\x02\u0679\u067B\x07\xC5\x02\x02\u067A\u067C\x07\xE2\x02\x02\u067B" +
		"\u067A\x03\x02\x02\x02\u067B\u067C\x03\x02\x02\x02\u067C\u067D\x03\x02" +
		"\x02\x02\u067D\u067F\x05\u0112\x8A\x02\u067E\u0680\x07\xE2\x02\x02\u067F" +
		"\u067E\x03\x02\x02\x02\u067F\u0680\x03\x02\x02\x02\u0680\u0681\x03\x02" +
		"\x02\x02\u0681\u0682\x07\xD0\x02\x02\u0682\u0684\x03\x02\x02\x02\u0683" +
		"\u0677\x03\x02\x02\x02\u0683\u0684\x03\x02\x02\x02\u0684\u0687\x03\x02" +
		"\x02\x02\u0685\u0687\x05\xE8u\x02\u0686\u0675\x03\x02\x02\x02\u0686\u0685" +
		"\x03\x02\x02\x02\u0687\xA7\x03\x02\x02\x02\u0688\u0689\x07\x80\x02\x02" +
		"\u0689\u068A\x07\xE2\x02\x02\u068A\u068C\x05\xE8u\x02\u068B\u068D\x07" +
		"\xE2\x02\x02\u068C\u068B\x03\x02\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D" +
		"\u068E\x03\x02\x02\x02\u068E\u0693\x07\xBA\x02\x02\u068F\u0691\x07\xE2" +
		"\x02\x02\u0690\u068F\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691" +
		"\u0692\x03\x02\x02\x02\u0692\u0694\x05\xA4S\x02\u0693\u0690\x03\x02\x02" +
		"\x02\u0693\u0694\x03\x02\x02\x02\u0694\xA9\x03\x02\x02\x02\u0695\u0696" +
		"\x05\u013E\xA0\x02\u0696\u0697\x07\xE2\x02\x02\u0697\u0699\x03\x02\x02" +
		"\x02\u0698\u0695\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02\u0699\u069C" +
		"\x03\x02\x02\x02\u069A\u069B\x07\x9D\x02\x02\u069B\u069D\x07\xE2\x02\x02" +
		"\u069C\u069A\x03\x02\x02\x02\u069C\u069D\x03\x02\x02\x02\u069D\u069E\x03" +
		"\x02\x02\x02\u069E\u069F\x07\x82\x02\x02\u069F\u06A0\x07\xE2\x02\x02\u06A0" +
		"\u06A2\x05\u0122\x92\x02\u06A1\u06A3\x05\u013C\x9F\x02\u06A2\u06A1\x03" +
		"\x02\x02\x02\u06A2\u06A3\x03\x02\x02\x02\u06A3\u06A8\x03\x02\x02\x02\u06A4" +
		"\u06A6\x07\xE2\x02\x02\u06A5\u06A4\x03\x02\x02\x02\u06A5\u06A6\x03\x02" +
		"\x02\x02\u06A6\u06A7\x03\x02\x02\x02\u06A7\u06A9\x05\u0118\x8D\x02\u06A8" +
		"\u06A5\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02\u06A9\u06AC\x03\x02" +
		"\x02\x02\u06AA\u06AB\x07\xE2\x02\x02\u06AB\u06AD\x05\u0124\x93\x02\u06AC" +
		"\u06AA\x03\x02\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD\u06AF\x03\x02" +
		"\x02\x02\u06AE\u06B0\x07\xE0\x02\x02\u06AF\u06AE\x03\x02\x02\x02\u06B0" +
		"\u06B1\x03\x02\x02\x02\u06B1\u06AF\x03\x02\x02\x02\u06B1\u06B2\x03\x02" +
		"\x02\x02\u06B2\u06B9\x03\x02\x02\x02\u06B3\u06B5\x05:\x1E\x02\u06B4\u06B6" +
		"\x07\xE0\x02\x02\u06B5\u06B4\x03\x02\x02\x02\u06B6\u06B7\x03\x02\x02\x02" +
		"\u06B7\u06B5\x03\x02\x02\x02\u06B7\u06B8\x03\x02\x02\x02\u06B8\u06BA\x03" +
		"\x02\x02\x02\u06B9\u06B3\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA" +
		"\u06BB\x03\x02\x02\x02\u06BB\u06BC\x074\x02\x02\u06BC\xAB\x03\x02\x02" +
		"\x02\u06BD\u06BE\x05\u013E\xA0\x02\u06BE\u06BF\x07\xE2\x02\x02\u06BF\u06C1" +
		"\x03\x02\x02\x02\u06C0\u06BD\x03\x02\x02\x02\u06C0\u06C1\x03\x02\x02\x02" +
		"\u06C1\u06C4\x03\x02\x02\x02\u06C2\u06C3\x07\x9D\x02\x02\u06C3\u06C5\x07" +
		"\xE2\x02\x02\u06C4\u06C2\x03\x02\x02\x02\u06C4\u06C5\x03\x02\x02\x02\u06C5" +
		"\u06C6\x03\x02\x02\x02\u06C6\u06C7\x07\x84\x02\x02\u06C7\u06C8\x07\xE2" +
		"\x02\x02\u06C8\u06CD\x05\u0122\x92\x02\u06C9\u06CB\x07\xE2\x02\x02\u06CA" +
		"\u06C9\x03\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB\u06CC\x03\x02" +
		"\x02\x02\u06CC\u06CE\x05\u0118\x8D\x02\u06CD\u06CA\x03\x02\x02\x02\u06CD" +
		"\u06CE\x03\x02\x02\x02\u06CE\u06D0\x03\x02\x02\x02\u06CF\u06D1\x07\xE0" +
		"\x02\x02\u06D0\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2" +
		"\u06D0\x03\x02\x02\x02\u06D2\u06D3\x03\x02\x02\x02\u06D3\u06DA\x03\x02" +
		"\x02\x02\u06D4\u06D6\x05:\x1E\x02\u06D5\u06D7\x07\xE0\x02\x02\u06D6\u06D5" +
		"\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06D6\x03\x02\x02\x02" +
		"\u06D8\u06D9\x03\x02\x02\x02\u06D9\u06DB\x03\x02\x02\x02\u06DA\u06D4\x03" +
		"\x02\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DC\x03\x02\x02\x02\u06DC" +
		"\u06DD\x074\x02\x02\u06DD\xAD\x03\x02\x02\x02\u06DE\u06DF\x05\u013E\xA0" +
		"\x02\u06DF\u06E0\x07\xE2\x02\x02\u06E0\u06E2\x03\x02\x02\x02\u06E1\u06DE" +
		"\x03\x02\x02\x02\u06E1\u06E2\x03\x02\x02\x02\u06E2\u06E5\x03\x02\x02\x02" +
		"\u06E3\u06E4\x07\x9D\x02\x02\u06E4\u06E6\x07\xE2\x02\x02\u06E5\u06E3\x03" +
		"\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E7\x03\x02\x02\x02\u06E7" +
		"\u06E8\x07\x83\x02\x02\u06E8\u06E9\x07\xE2\x02\x02\u06E9\u06EE\x05\u0122" +
		"\x92\x02\u06EA\u06EC\x07\xE2\x02\x02\u06EB\u06EA\x03\x02\x02\x02\u06EB" +
		"\u06EC\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06EF\x05\u0118" +
		"\x8D\x02\u06EE\u06EB\x03\x02\x02\x02\u06EE\u06EF\x03\x02\x02\x02\u06EF" +
		"\u06F1\x03\x02\x02\x02\u06F0\u06F2\x07\xE0\x02\x02\u06F1\u06F0\x03\x02" +
		"\x02\x02\u06F2\u06F3\x03\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F3" +
		"\u06F4\x03\x02\x02\x02\u06F4\u06FB\x03\x02\x02\x02\u06F5\u06F7\x05:\x1E" +
		"\x02\u06F6\u06F8\x07\xE0\x02\x02\u06F7\u06F6\x03\x02\x02\x02\u06F8\u06F9" +
		"\x03\x02\x02\x02\u06F9\u06F7\x03\x02\x02\x02\u06F9\u06FA\x03\x02\x02\x02" +
		"\u06FA\u06FC\x03\x02\x02\x02\u06FB\u06F5\x03\x02\x02\x02\u06FB\u06FC\x03" +
		"\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD\u06FE\x074\x02\x02\u06FE" +
		"\xAF\x03\x02\x02\x02\u06FF\u0700\x07\x86\x02\x02\u0700\u0701\x07\xE2\x02" +
		"\x02\u0701\u0703\x05\xE8u\x02\u0702\u0704\x07\xE2\x02\x02\u0703\u0702" +
		"\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704\u0705\x03\x02\x02\x02" +
		"\u0705\u0707\x07\xBA\x02\x02\u0706\u0708\x07\xE2\x02\x02\u0707\u0706\x03" +
		"\x02\x02\x02\u0707\u0708\x03\x02\x02\x02\u0708\u070A\x03\x02\x02\x02\u0709" +
		"\u070B\x05\xE8u\x02\u070A\u0709\x03\x02\x02\x02\u070A\u070B\x03\x02\x02" +
		"\x02\u070B\u070D\x03\x02\x02\x02\u070C\u070E\x07\xE2\x02\x02\u070D\u070C" +
		"\x03\x02\x02\x02\u070D\u070E\x03\x02\x02\x02\u070E\u070F\x03\x02\x02\x02" +
		"\u070F\u0711\x07\xBA\x02\x02\u0710\u0712\x07\xE2\x02\x02\u0711\u0710\x03" +
		"\x02\x02\x02\u0711\u0712\x03\x02\x02\x02\u0712\u0713\x03\x02\x02\x02\u0713" +
		"\u0714\x05\xE8u\x02\u0714\xB1\x03\x02\x02\x02\u0715\u0716\x07\x89\x02" +
		"\x02\u0716\u0717\x07\xE2\x02\x02\u0717\u0726\x05\u0122\x92\x02\u0718\u071A" +
		"\x07\xE2\x02\x02\u0719\u0718\x03\x02\x02\x02\u0719\u071A\x03\x02\x02\x02" +
		"\u071A\u071B\x03\x02\x02\x02\u071B\u071D\x07\xC5\x02\x02\u071C\u071E\x07" +
		"\xE2\x02\x02\u071D\u071C\x03\x02\x02\x02\u071D\u071E\x03\x02\x02\x02\u071E" +
		"\u0723\x03\x02\x02\x02\u071F\u0721\x05\u0112\x8A\x02\u0720\u0722\x07\xE2" +
		"\x02\x02\u0721\u0720\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722" +
		"\u0724\x03\x02\x02\x02\u0723\u071F\x03\x02\x02\x02\u0723\u0724\x03\x02" +
		"\x02\x02\u0724\u0725\x03\x02\x02\x02\u0725\u0727\x07\xD0\x02\x02\u0726" +
		"\u0719\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727\xB3\x03\x02\x02" +
		"\x02\u0728\u072B\x07\x88\x02\x02\u0729\u072A\x07\xE2\x02\x02\u072A\u072C" +
		"\x05\xE8u\x02\u072B\u0729\x03\x02\x02\x02\u072B\u072C\x03\x02\x02\x02" +
		"\u072C\xB5\x03\x02\x02\x02\u072D\u072E\x07\x8C\x02\x02\u072E\u0731\x07" +
		"\xE2\x02\x02\u072F\u0730\x07\x7F\x02\x02\u0730\u0732\x07\xE2\x02\x02\u0731" +
		"\u072F\x03\x02\x02\x02\u0731\u0732\x03\x02\x02\x02\u0732\u0733\x03\x02" +
		"\x02\x02\u0733\u073E\x05\xB8]\x02\u0734\u0736\x07\xE2\x02\x02\u0735\u0734" +
		"\x03\x02\x02\x02\u0735\u0736\x03\x02\x02\x02\u0736\u0737\x03\x02\x02\x02" +
		"\u0737\u0739\x07\xBA\x02\x02\u0738\u073A\x07\xE2\x02\x02\u0739\u0738\x03" +
		"\x02\x02\x02\u0739\u073A\x03\x02\x02\x02\u073A\u073B\x03\x02\x02\x02\u073B" +
		"\u073D\x05\xB8]\x02\u073C\u0735\x03\x02\x02\x02\u073D\u0740\x03\x02\x02" +
		"\x02\u073E\u073C\x03\x02\x02\x02\u073E\u073F\x03\x02\x02\x02\u073F\xB7" +
		"\x03\x02\x02\x02\u0740\u073E\x03\x02\x02\x02\u0741\u0743\x05\u0104\x83" +
		"\x02\u0742\u0744\x07\xE2\x02\x02\u0743\u0742\x03\x02\x02\x02\u0743\u0744" +
		"\x03\x02\x02\x02\u0744\u0745\x03\x02\x02\x02\u0745\u0747\x07\xC5\x02\x02" +
		"\u0746\u0748\x07\xE2\x02\x02\u0747\u0746\x03\x02\x02\x02\u0747\u0748\x03" +
		"\x02\x02\x02\u0748\u0749\x03\x02\x02\x02\u0749\u074B\x05\u011E\x90\x02" +
		"\u074A\u074C\x07\xE2\x02\x02\u074B\u074A\x03\x02\x02\x02\u074B\u074C\x03" +
		"\x02\x02\x02\u074C\u074D\x03\x02\x02\x02\u074D\u0750\x07\xD0\x02\x02\u074E" +
		"\u074F\x07\xE2\x02\x02\u074F\u0751\x05\u0124\x93\x02\u0750\u074E\x03\x02" +
		"\x02\x02\u0750\u0751\x03\x02\x02\x02\u0751\xB9\x03\x02\x02\x02\u0752\u0753" +
		"\x07\x8E\x02\x02\u0753\xBB\x03\x02\x02\x02\u0754\u075A\x07\x8F\x02\x02" +
		"\u0755\u0758\x07\xE2\x02\x02\u0756\u0759\x07m\x02\x02\u0757\u0759\x05" +
		"\u0122\x92\x02\u0758\u0756\x03\x02\x02\x02\u0758\u0757\x03\x02\x02\x02" +
		"\u0759\u075B\x03\x02\x02\x02\u075A\u0755\x03\x02\x02\x02\u075A\u075B\x03" +
		"\x02\x02\x02\u075B\xBD\x03\x02\x02\x02\u075C\u075F\x07\x90\x02\x02\u075D" +
		"\u075E\x07\xE2\x02\x02\u075E\u0760\x05\xE8u\x02\u075F\u075D\x03\x02\x02" +
		"\x02\u075F\u0760\x03\x02\x02\x02\u0760\xBF\x03\x02\x02\x02\u0761\u0762" +
		"\x07\x91\x02\x02\u0762\u0763\x07\xE2\x02\x02\u0763\u0764\x05\xE8u\x02" +
		"\u0764\xC1\x03\x02\x02\x02\u0765\u0766\x07\x92\x02\x02\u0766\u0767\x07" +
		"\xE2\x02\x02\u0767\u0769\x05\u0104\x83\x02\u0768\u076A\x07\xE2\x02\x02" +
		"\u0769\u0768\x03\x02\x02\x02\u0769\u076A\x03\x02\x02\x02\u076A\u076B\x03" +
		"\x02\x02\x02\u076B\u076D\x07\xBE\x02\x02\u076C\u076E\x07\xE2\x02\x02\u076D" +
		"\u076C\x03\x02\x02\x02\u076D\u076E\x03\x02\x02\x02\u076E\u076F\x03\x02" +
		"\x02\x02\u076F\u0770\x05\xE8u\x02\u0770\xC3\x03\x02\x02\x02\u0771\u0772" +
		"\x07\x93\x02\x02\u0772\u0773\x07\xE2\x02\x02\u0773\u0775\x05\xE8u\x02" +
		"\u0774\u0776\x07\xE2\x02\x02\u0775\u0774\x03\x02\x02\x02\u0775\u0776\x03" +
		"\x02\x02\x02\u0776\u0777\x03\x02\x02\x02\u0777\u0779\x07\xBA\x02\x02\u0778" +
		"\u077A\x07\xE2\x02\x02\u0779\u0778\x03\x02\x02\x02\u0779\u077A\x03\x02" +
		"\x02\x02\u077A\u077B\x03\x02\x02\x02\u077B\u077C\x05\xE8u\x02\u077C\xC5" +
		"\x03\x02\x02\x02\u077D\u077E\x07\x94\x02\x02\u077E\u077F\x07\xE2\x02\x02" +
		"\u077F\u0781\x05\xE8u\x02\u0780\u0782\x07\xE2\x02\x02\u0781\u0780\x03" +
		"\x02\x02\x02\u0781\u0782\x03\x02\x02\x02\u0782\u0783\x03\x02\x02\x02\u0783" +
		"\u0785\x07\xBA\x02\x02\u0784\u0786\x07\xE2\x02\x02\u0785\u0784\x03\x02" +
		"\x02\x02\u0785\u0786\x03\x02\x02\x02\u0786\u0787\x03\x02\x02\x02\u0787" +
		"\u0789\x05\xE8u\x02\u0788\u078A\x07\xE2\x02\x02\u0789\u0788\x03\x02\x02" +
		"\x02\u0789\u078A\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02\u078B\u078D" +
		"\x07\xBA\x02\x02\u078C\u078E\x07";
	private static readonly _serializedATNSegment4: string =
		"\xE2\x02\x02\u078D\u078C\x03\x02\x02\x02\u078D\u078E\x03\x02\x02\x02\u078E" +
		"\u078F\x03\x02\x02\x02\u078F\u0791\x05\xE8u\x02\u0790\u0792\x07\xE2\x02" +
		"\x02\u0791\u0790\x03\x02\x02\x02\u0791\u0792\x03\x02\x02\x02\u0792\u0793" +
		"\x03\x02\x02\x02\u0793\u0795\x07\xBA\x02\x02\u0794\u0796\x07\xE2\x02\x02" +
		"\u0795\u0794\x03\x02\x02\x02\u0795\u0796\x03\x02\x02\x02\u0796\u0797\x03" +
		"\x02\x02\x02\u0797\u0798\x05\xE8u\x02\u0798\xC7\x03\x02\x02\x02\u0799" +
		"\u079A\x07\x95\x02\x02\u079A\u079B\x07\xE2\x02\x02\u079B\u079D\x05\xE8" +
		"u\x02\u079C\u079E\x07\xE2\x02\x02\u079D\u079C\x03\x02\x02\x02\u079D\u079E" +
		"\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02\u079F\u07A1\x07\xBA\x02\x02" +
		"\u07A0\u07A2\x07\xE2\x02\x02\u07A1\u07A0\x03\x02\x02\x02\u07A1\u07A2\x03" +
		"\x02\x02\x02\u07A2\u07A3\x03\x02\x02\x02\u07A3\u07A4\x05\xE8u\x02\u07A4" +
		"\xC9\x03\x02\x02\x02\u07A5\u07A6\x07\x96\x02\x02\u07A6\u07A7\x07\xE2\x02" +
		"\x02\u07A7\u07A8\x07\x14\x02\x02\u07A8\u07A9\x07\xE2\x02\x02\u07A9\u07AB" +
		"\x05\xE8u\x02\u07AA\u07AC\x07\xE0\x02\x02\u07AB\u07AA\x03\x02\x02\x02" +
		"\u07AC\u07AD\x03\x02\x02\x02\u07AD\u07AB\x03\x02\x02\x02\u07AD\u07AE\x03" +
		"\x02\x02\x02\u07AE\u07B2\x03\x02\x02\x02\u07AF\u07B1\x05\xCCg\x02\u07B0" +
		"\u07AF\x03\x02\x02\x02\u07B1\u07B4\x03\x02\x02\x02\u07B2\u07B0\x03\x02" +
		"\x02\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3\u07B6\x03\x02\x02\x02\u07B4" +
		"\u07B2\x03\x02\x02\x02\u07B5\u07B7\x07\xE2\x02\x02\u07B6\u07B5\x03\x02" +
		"\x02\x02\u07B6\u07B7\x03\x02\x02\x02\u07B7\u07B8\x03\x02\x02\x02\u07B8" +
		"\u07B9\x075\x02\x02\u07B9\xCB\x03\x02\x02\x02\u07BA\u07BB\x07\x14\x02" +
		"\x02\u07BB\u07BC\x07\xE2\x02\x02\u07BC\u07BE\x05\xCEh\x02\u07BD\u07BF" +
		"\x07\xE2\x02\x02\u07BE\u07BD\x03\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02" +
		"\u07BF\u07CE\x03\x02\x02\x02\u07C0\u07C2\x07\xB9\x02\x02\u07C1\u07C0\x03" +
		"\x02\x02\x02\u07C1\u07C2\x03\x02\x02\x02\u07C2\u07C6\x03\x02\x02\x02\u07C3" +
		"\u07C5\x07\xE0\x02\x02\u07C4\u07C3\x03\x02\x02\x02\u07C5\u07C8\x03\x02" +
		"\x02\x02\u07C6\u07C4\x03\x02\x02\x02\u07C6\u07C7\x03\x02\x02\x02\u07C7" +
		"\u07CF\x03\x02\x02\x02\u07C8\u07C6\x03\x02\x02\x02\u07C9\u07CB\x07\xE0" +
		"\x02\x02\u07CA\u07C9\x03\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC" +
		"\u07CA\x03\x02\x02\x02\u07CC\u07CD\x03\x02\x02\x02\u07CD\u07CF\x03\x02" +
		"\x02\x02\u07CE\u07C1\x03\x02\x02\x02\u07CE\u07CA\x03\x02\x02\x02\u07CF" +
		"\u07D6\x03\x02\x02\x02\u07D0\u07D2\x05:\x1E\x02\u07D1\u07D3\x07\xE0\x02" +
		"\x02\u07D2\u07D1\x03\x02\x02\x02\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D2" +
		"\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07D7\x03\x02\x02\x02" +
		"\u07D6\u07D0\x03\x02\x02\x02\u07D6\u07D7\x03\x02\x02\x02\u07D7\xCD\x03" +
		"\x02\x02\x02\u07D8\u07E8\x07.\x02\x02\u07D9\u07E4\x05\xD0i\x02\u07DA\u07DC" +
		"\x07\xE2\x02\x02\u07DB\u07DA\x03\x02\x02\x02\u07DB\u07DC\x03\x02\x02\x02" +
		"\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DF\x07\xBA\x02\x02\u07DE\u07E0\x07" +
		"\xE2\x02\x02\u07DF\u07DE\x03\x02\x02\x02\u07DF\u07E0\x03\x02\x02\x02\u07E0" +
		"\u07E1\x03\x02\x02\x02\u07E1\u07E3\x05\xD0i\x02\u07E2\u07DB\x03\x02\x02" +
		"\x02\u07E3\u07E6\x03\x02\x02\x02\u07E4\u07E2\x03\x02\x02\x02\u07E4\u07E5" +
		"\x03\x02\x02\x02\u07E5\u07E8\x03\x02\x02\x02\u07E6\u07E4\x03\x02\x02\x02" +
		"\u07E7\u07D8\x03\x02\x02\x02\u07E7\u07D9\x03\x02\x02\x02\u07E8\xCF\x03" +
		"\x02\x02\x02\u07E9\u07EB\x07T\x02\x02\u07EA\u07EC\x07\xE2\x02\x02\u07EB" +
		"\u07EA\x03\x02\x02\x02\u07EB\u07EC\x03\x02\x02\x02\u07EC\u07ED\x03\x02" +
		"\x02\x02\u07ED\u07EF\x05\u012A\x96\x02\u07EE\u07F0\x07\xE2\x02\x02\u07EF" +
		"\u07EE\x03\x02\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07F1\x03\x02" +
		"\x02\x02\u07F1\u07F2\x05\xE8u\x02\u07F2\u07FB\x03\x02\x02\x02\u07F3\u07FB" +
		"\x05\xE8u\x02\u07F4\u07F5\x05\xE8u\x02\u07F5\u07F6\x07\xE2\x02\x02\u07F6" +
		"\u07F7\x07\xA6\x02\x02\u07F7\u07F8\x07\xE2\x02\x02\u07F8\u07F9\x05\xE8" +
		"u\x02\u07F9\u07FB\x03\x02\x02\x02\u07FA\u07E9\x03\x02\x02\x02\u07FA\u07F3" +
		"\x03\x02\x02\x02\u07FA\u07F4\x03\x02\x02\x02\u07FB\xD1\x03\x02\x02\x02" +
		"\u07FC\u07FD\x07\x97\x02\x02\u07FD\u07FE\x07\xE2\x02\x02\u07FE\u0807\x05" +
		"\xE8u\x02\u07FF\u0801\x07\xE2\x02\x02\u0800\u07FF\x03\x02\x02\x02\u0800" +
		"\u0801\x03\x02\x02\x02\u0801\u0802\x03\x02\x02\x02\u0802\u0804\x07\xBA" +
		"\x02\x02\u0803\u0805\x07\xE2\x02\x02\u0804\u0803\x03\x02\x02\x02\u0804" +
		"\u0805\x03\x02\x02\x02\u0805\u0806\x03\x02\x02\x02\u0806\u0808\x05\xE8" +
		"u\x02\u0807\u0800\x03\x02\x02\x02\u0807\u0808\x03\x02\x02\x02\u0808\xD3" +
		"\x03\x02\x02\x02\u0809\u080A\x07\x99\x02\x02\u080A\u080B\x07\xE2\x02\x02" +
		"\u080B\u080D\x05\xE8u\x02\u080C\u080E\x07\xE2\x02\x02\u080D\u080C\x03" +
		"\x02\x02\x02\u080D\u080E\x03\x02\x02\x02\u080E\u080F\x03\x02\x02\x02\u080F" +
		"\u0811\x07\xBA\x02\x02\u0810\u0812\x07\xE2\x02\x02\u0811\u0810\x03\x02" +
		"\x02\x02\u0811\u0812\x03\x02\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813" +
		"\u0814\x05\xE8u\x02\u0814\xD5\x03\x02\x02\x02\u0815\u0816\x07\x98\x02" +
		"\x02\u0816\u0817\x07\xE2\x02\x02\u0817\u0819\x05\u0104\x83\x02\u0818\u081A" +
		"\x07\xE2\x02\x02\u0819\u0818\x03\x02\x02\x02\u0819\u081A\x03\x02\x02\x02" +
		"\u081A\u081B\x03\x02\x02\x02\u081B\u081D\x07\xBE\x02\x02\u081C\u081E\x07" +
		"\xE2\x02\x02\u081D\u081C\x03\x02\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E" +
		"\u081F\x03\x02\x02\x02\u081F\u0820\x05\xE8u\x02\u0820\xD7\x03\x02\x02" +
		"\x02\u0821\u0822\x07\x9F\x02\x02\u0822\xD9\x03\x02\x02\x02\u0823\u0824" +
		"\x05\u013E\xA0\x02\u0824\u0825\x07\xE2\x02\x02\u0825\u0827\x03\x02\x02" +
		"\x02\u0826\u0823\x03\x02\x02\x02\u0826\u0827\x03\x02\x02\x02\u0827\u082A" +
		"\x03\x02\x02\x02\u0828\u0829\x07\x9D\x02\x02\u0829\u082B\x07\xE2\x02\x02" +
		"\u082A\u0828\x03\x02\x02\x02\u082A\u082B\x03\x02\x02\x02\u082B\u082C\x03" +
		"\x02\x02\x02\u082C\u082D\x07\xA1\x02\x02\u082D\u082E\x07\xE2\x02\x02\u082E" +
		"\u0833\x05\u0122\x92\x02\u082F\u0831\x07\xE2\x02\x02\u0830\u082F\x03\x02" +
		"\x02\x02\u0830\u0831\x03\x02\x02\x02\u0831\u0832\x03\x02\x02\x02\u0832" +
		"\u0834\x05\u0118\x8D\x02\u0833\u0830\x03\x02\x02\x02\u0833\u0834\x03\x02" +
		"\x02\x02\u0834\u0836\x03\x02\x02\x02\u0835\u0837\x07\xE0\x02\x02\u0836" +
		"\u0835\x03\x02\x02\x02\u0837\u0838\x03\x02\x02\x02\u0838\u0836\x03\x02" +
		"\x02\x02\u0838\u0839\x03\x02\x02\x02\u0839\u0840\x03\x02\x02\x02\u083A" +
		"\u083C\x05:\x1E\x02\u083B\u083D\x07\xE0\x02\x02\u083C\u083B\x03\x02\x02" +
		"\x02\u083D\u083E\x03\x02\x02\x02\u083E\u083C\x03\x02\x02\x02\u083E\u083F" +
		"\x03\x02\x02\x02\u083F\u0841\x03\x02\x02\x02\u0840\u083A\x03\x02\x02\x02" +
		"\u0840\u0841\x03\x02\x02\x02\u0841\u0842\x03\x02\x02\x02\u0842\u0843\x07" +
		"6\x02\x02\u0843\xDB\x03\x02\x02\x02\u0844\u0846\x07\xA5\x02\x02\u0845" +
		"\u0847\x07\xE2\x02\x02\u0846\u0845\x03\x02\x02\x02\u0846\u0847\x03\x02" +
		"\x02\x02\u0847\u0848\x03\x02\x02\x02\u0848\u084A\x07\xBE\x02\x02\u0849" +
		"\u084B\x07\xE2\x02\x02\u084A\u0849\x03\x02\x02\x02\u084A\u084B\x03\x02" +
		"\x02\x02\u084B\u084C\x03\x02\x02\x02\u084C\u084D\x05\xE8u\x02\u084D\xDD" +
		"\x03\x02\x02\x02\u084E\u084F\x05\u013E\xA0\x02\u084F\u0850\x07\xE2\x02" +
		"\x02\u0850\u0852\x03\x02\x02\x02\u0851\u084E\x03\x02\x02\x02\u0851\u0852" +
		"\x03\x02\x02\x02\u0852\u0853\x03\x02\x02\x02\u0853\u0854\x07\xA8\x02\x02" +
		"\u0854\u0855\x07\xE2\x02\x02\u0855\u0857\x05\u0122\x92\x02\u0856\u0858" +
		"\x07\xE0\x02\x02\u0857\u0856\x03\x02\x02\x02\u0858\u0859\x03\x02\x02\x02" +
		"\u0859\u0857\x03\x02\x02\x02\u0859\u085A\x03\x02\x02\x02\u085A\u085E\x03" +
		"\x02\x02\x02\u085B\u085D\x05\xE0q\x02\u085C\u085B\x03\x02\x02\x02\u085D" +
		"\u0860\x03\x02\x02\x02\u085E\u085C\x03\x02\x02\x02\u085E\u085F\x03\x02" +
		"\x02\x02\u085F\u0861\x03\x02\x02\x02\u0860\u085E\x03\x02\x02\x02\u0861" +
		"\u0862\x077\x02\x02\u0862\xDF\x03\x02\x02\x02\u0863\u0872\x05\u0122\x92" +
		"\x02\u0864\u0866\x07\xE2\x02\x02\u0865\u0864\x03\x02\x02\x02\u0865\u0866" +
		"\x03\x02\x02\x02\u0866\u0867\x03\x02\x02\x02\u0867\u086C\x07\xC5\x02\x02" +
		"\u0868\u086A\x07\xE2\x02\x02\u0869\u0868\x03\x02\x02\x02\u0869\u086A\x03" +
		"\x02\x02\x02\u086A\u086B\x03\x02\x02\x02\u086B\u086D\x05\u011E\x90\x02" +
		"\u086C\u0869\x03\x02\x02\x02\u086C\u086D\x03\x02\x02\x02\u086D\u086F\x03" +
		"\x02\x02\x02\u086E\u0870\x07\xE2\x02\x02\u086F\u086E\x03\x02\x02\x02\u086F" +
		"\u0870\x03\x02\x02\x02\u0870\u0871\x03\x02\x02\x02\u0871\u0873\x07\xD0" +
		"\x02\x02\u0872\u0865\x03\x02\x02\x02\u0872\u0873\x03\x02\x02\x02\u0873" +
		"\u0876\x03\x02\x02\x02\u0874\u0875\x07\xE2\x02\x02\u0875\u0877\x05\u0124" +
		"\x93\x02\u0876\u0874\x03\x02\x02\x02\u0876\u0877\x03\x02\x02\x02\u0877" +
		"\u0879\x03\x02\x02\x02\u0878\u087A\x07\xE0\x02\x02\u0879\u0878\x03\x02" +
		"\x02\x02\u087A\u087B\x03\x02\x02\x02\u087B\u0879\x03\x02\x02\x02\u087B" +
		"\u087C\x03\x02\x02\x02\u087C\xE1\x03\x02\x02\x02\u087D\u087E\x07\xA9\x02" +
		"\x02\u087E\u087F\x07\xE2\x02\x02\u087F\u0884\x05\xE8u\x02\u0880\u0881" +
		"\x07\xE2\x02\x02\u0881\u0882\x07T\x02\x02\u0882\u0883\x07\xE2\x02\x02" +
		"\u0883\u0885\x05\u013A\x9E\x02\u0884\u0880\x03\x02\x02\x02\u0884\u0885" +
		"\x03\x02\x02\x02\u0885\xE3\x03\x02\x02\x02\u0886\u0887\x07\xAA\x02\x02" +
		"\u0887\u0888\x07\xE2\x02\x02\u0888\u0889\x05\xE8u\x02\u0889\xE5\x03\x02" +
		"\x02\x02\u088A\u088B\x07\xAB\x02\x02\u088B\u088C\x07\xE2\x02\x02\u088C" +
		"\u089B\x05\xE8u\x02\u088D\u088F\x07\xE2\x02\x02\u088E\u088D\x03\x02\x02" +
		"\x02\u088E\u088F\x03\x02\x02\x02\u088F\u0890\x03\x02\x02\x02\u0890\u0892" +
		"\x07\xBA\x02\x02\u0891\u0893\x07\xE2\x02\x02\u0892\u0891\x03\x02\x02\x02" +
		"\u0892\u0893\x03\x02\x02\x02\u0893\u0894\x03\x02\x02\x02\u0894\u0899\x05" +
		"\xE8u\x02\u0895\u0896\x07\xE2\x02\x02\u0896\u0897\x07\xA6\x02\x02\u0897" +
		"\u0898\x07\xE2\x02\x02\u0898\u089A\x05\xE8u\x02\u0899\u0895\x03\x02\x02" +
		"\x02\u0899\u089A\x03\x02\x02\x02\u089A\u089C\x03\x02\x02\x02\u089B\u088E" +
		"\x03\x02\x02\x02\u089B\u089C\x03\x02\x02\x02\u089C\xE7\x03\x02\x02\x02" +
		"\u089D\u089E\bu\x01\x02\u089E\u08E3\x05\u0134\x9B\x02\u089F\u08A1\x07" +
		"\xC5\x02\x02\u08A0\u08A2\x07\xE2\x02\x02\u08A1\u08A0\x03\x02\x02\x02\u08A1" +
		"\u08A2\x03\x02\x02\x02\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08AE\x05\xE8" +
		"u\x02\u08A4\u08A6\x07\xE2\x02\x02\u08A5\u08A4\x03\x02\x02\x02\u08A5\u08A6" +
		"\x03\x02\x02\x02\u08A6\u08A7\x03\x02\x02\x02\u08A7\u08A9\x07\xBA\x02\x02" +
		"\u08A8\u08AA\x07\xE2\x02\x02\u08A9\u08A8\x03\x02\x02\x02\u08A9\u08AA\x03" +
		"\x02\x02\x02\u08AA\u08AB\x03\x02\x02\x02\u08AB\u08AD\x05\xE8u\x02\u08AC" +
		"\u08A5\x03\x02\x02\x02\u08AD\u08B0\x03\x02\x02\x02\u08AE\u08AC\x03\x02" +
		"\x02\x02\u08AE\u08AF\x03\x02\x02\x02\u08AF\u08B2\x03\x02\x02\x02\u08B0" +
		"\u08AE\x03\x02\x02\x02\u08B1\u08B3\x07\xE2\x02\x02\u08B2\u08B1\x03\x02" +
		"\x02\x02\u08B2\u08B3\x03\x02\x02\x02\u08B3\u08B4\x03\x02\x02\x02\u08B4" +
		"\u08B5\x07\xD0\x02\x02\u08B5\u08E3\x03\x02\x02\x02\u08B6\u08B7\x07n\x02" +
		"\x02\u08B7\u08B8\x07\xE2\x02\x02\u08B8\u08E3\x05\xE8u\x1F\u08B9\u08E3" +
		"\x05\xE2r\x02\u08BA\u08BB\x07\x04\x02\x02\u08BB\u08BC\x07\xE2\x02\x02" +
		"\u08BC\u08E3\x05\xE8u\x1D\u08BD\u08BF\x05\u0104\x83\x02\u08BE\u08C0\x07" +
		"\xE2\x02\x02\u08BF\u08BE\x03\x02\x02\x02\u08BF\u08C0\x03\x02\x02\x02\u08C0" +
		"\u08C1\x03\x02\x02\x02\u08C1\u08C3\x07\xB7\x02\x02\u08C2\u08C4\x07\xE2" +
		"\x02\x02\u08C3\u08C2\x03\x02\x02\x02\u08C3\u08C4\x03\x02\x02\x02\u08C4" +
		"\u08C5\x03\x02\x02\x02\u08C5\u08C6\x05\xE8u\x1C\u08C6\u08E3\x03\x02\x02" +
		"\x02\u08C7\u08C9\x07\xC7\x02\x02\u08C8\u08CA\x07\xE2\x02\x02\u08C9\u08C8" +
		"\x03\x02\x02\x02\u08C9\u08CA\x03\x02\x02\x02\u08CA\u08CB\x03\x02\x02\x02" +
		"\u08CB\u08E3\x05\xE8u\x1A\u08CC\u08CE\x07\xCC\x02\x02\u08CD\u08CF\x07" +
		"\xE2\x02\x02\u08CE\u08CD\x03\x02\x02\x02\u08CE\u08CF\x03\x02\x02\x02\u08CF" +
		"\u08D0\x03\x02\x02\x02\u08D0\u08E3\x05\xE8u\x19\u08D1\u08DE\x07o\x02\x02" +
		"\u08D2\u08D3\x07\xE2\x02\x02\u08D3\u08DF\x05\xE8u\x02\u08D4\u08D6\x07" +
		"\xC5\x02\x02\u08D5\u08D7\x07\xE2\x02\x02\u08D6\u08D5\x03\x02\x02\x02\u08D6" +
		"\u08D7\x03\x02\x02\x02\u08D7\u08D8\x03\x02\x02\x02\u08D8\u08DA\x05\xE8" +
		"u\x02\u08D9\u08DB\x07\xE2\x02\x02\u08DA\u08D9\x03\x02\x02\x02\u08DA\u08DB" +
		"\x03\x02\x02\x02\u08DB\u08DC\x03\x02\x02\x02\u08DC\u08DD\x07\xD0\x02\x02" +
		"\u08DD\u08DF\x03\x02\x02\x02\u08DE\u08D2\x03\x02\x02\x02\u08DE\u08D4\x03" +
		"\x02\x02\x02\u08DF\u08E3\x03\x02\x02\x02\u08E0\u08E3\x05\u0104\x83\x02" +
		"\u08E1\u08E3\x05\x96L\x02\u08E2\u089D\x03\x02\x02\x02\u08E2\u089F\x03" +
		"\x02\x02\x02\u08E2\u08B6\x03\x02\x02\x02\u08E2\u08B9\x03\x02\x02\x02\u08E2" +
		"\u08BA\x03\x02\x02\x02\u08E2\u08BD\x03\x02\x02\x02\u08E2\u08C7\x03\x02" +
		"\x02\x02\u08E2\u08CC\x03\x02\x02\x02\u08E2\u08D1\x03\x02\x02\x02\u08E2" +
		"\u08E0\x03\x02\x02\x02\u08E2\u08E1\x03\x02\x02\x02\u08E3\u0992\x03\x02" +
		"\x02\x02\u08E4\u08E6\f\x1B\x02\x02\u08E5\u08E7\x07\xE2\x02\x02\u08E6\u08E5" +
		"\x03\x02\x02\x02\u08E6\u08E7\x03\x02\x02\x02\u08E7\u08E8\x03\x02\x02\x02" +
		"\u08E8\u08EA\x07\xCE\x02\x02\u08E9\u08EB\x07\xE2\x02\x02\u08EA\u08E9\x03" +
		"\x02\x02\x02\u08EA\u08EB\x03\x02\x02\x02\u08EB\u08EC\x03\x02\x02\x02\u08EC" +
		"\u0991\x05\xE8u\x1C\u08ED\u08EF\f\x18\x02\x02\u08EE\u08F0\x07\xE2\x02" +
		"\x02\u08EF\u08EE\x03\x02\x02\x02\u08EF\u08F0\x03\x02\x02\x02\u08F0\u08F1" +
		"\x03\x02\x02\x02\u08F1\u08F3\x07\xBB\x02\x02\u08F2\u08F4\x07\xE2\x02\x02" +
		"\u08F3\u08F2\x03\x02\x02\x02\u08F3\u08F4\x03\x02\x02\x02\u08F4\u08F5\x03" +
		"\x02\x02\x02\u08F5\u0991\x05\xE8u\x19\u08F6\u08F8\f\x17\x02\x02\u08F7" +
		"\u08F9\x07\xE2\x02\x02\u08F8\u08F7\x03\x02\x02\x02\u08F8\u08F9\x03\x02" +
		"\x02\x02\u08F9\u08FA\x03\x02\x02\x02\u08FA\u08FC\x07\xC9\x02\x02\u08FB" +
		"\u08FD\x07\xE2\x02\x02\u08FC\u08FB\x03\x02\x02\x02\u08FC\u08FD\x03\x02" +
		"\x02\x02\u08FD\u08FE\x03\x02\x02\x02\u08FE\u0991\x05\xE8u\x18\u08FF\u0901" +
		"\f\x16\x02\x02\u0900\u0902\x07\xE2\x02\x02\u0901\u0900\x03\x02\x02\x02" +
		"\u0901\u0902\x03\x02\x02\x02\u0902\u0903\x03\x02\x02\x02\u0903\u0905\x07" +
		"k\x02\x02\u0904\u0906\x07\xE2\x02\x02\u0905\u0904\x03\x02\x02\x02\u0905" +
		"\u0906\x03\x02\x02\x02\u0906\u0907\x03\x02\x02\x02\u0907\u0991\x05\xE8" +
		"u\x17\u0908\u090A\f\x15\x02\x02\u0909\u090B\x07\xE2\x02\x02\u090A\u0909" +
		"\x03\x02\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u090C\x03\x02\x02\x02" +
		"\u090C\u090E\x07\xCC\x02\x02\u090D\u090F\x07\xE2\x02\x02\u090E\u090D\x03" +
		"\x02\x02\x02\u090E\u090F\x03\x02\x02\x02\u090F\u0910\x03\x02\x02\x02\u0910" +
		"\u0991\x05\xE8u\x16\u0911\u0913\f\x14\x02\x02\u0912\u0914\x07\xE2\x02" +
		"\x02\u0913\u0912\x03\x02\x02\x02\u0913\u0914\x03\x02\x02\x02\u0914\u0915" +
		"\x03\x02\x02\x02\u0915\u0917\x07\xC7\x02\x02\u0916\u0918\x07\xE2\x02\x02" +
		"\u0917\u0916\x03\x02\x02\x02\u0917\u0918\x03\x02\x02\x02\u0918\u0919\x03" +
		"\x02\x02\x02\u0919\u0991\x05\xE8u\x15\u091A\u091C\f\x13\x02\x02\u091B" +
		"\u091D\x07\xE2\x02\x02\u091C\u091B\x03\x02\x02\x02\u091C\u091D\x03\x02" +
		"\x02\x02\u091D\u091E\x03\x02\x02\x02\u091E\u0920\x07\xB6\x02\x02\u091F" +
		"\u0921\x07\xE2\x02\x02\u0920\u091F\x03\x02\x02\x02\u0920\u0921\x03\x02" +
		"\x02\x02\u0921\u0922\x03\x02\x02\x02\u0922\u0991\x05\xE8u\x14\u0923\u0925" +
		"\f\x12\x02\x02\u0924\u0926\x07\xE2\x02\x02\u0925\u0924\x03\x02\x02\x02" +
		"\u0925\u0926\x03\x02\x02\x02\u0926\u0927\x03\x02\x02\x02\u0927\u0929\x07" +
		"\xBE\x02\x02\u0928\u092A\x07\xE2\x02\x02\u0929\u0928\x03\x02\x02\x02\u0929" +
		"\u092A\x03\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u0991\x05\xE8" +
		"u\x13\u092C\u092E\f\x11\x02\x02\u092D\u092F\x07\xE2\x02\x02\u092E\u092D" +
		"\x03\x02\x02\x02\u092E\u092F\x03\x02\x02\x02\u092F\u0930\x03\x02\x02\x02" +
		"\u0930\u0932\x07\xCA\x02\x02\u0931\u0933\x07\xE2\x02\x02\u0932\u0931\x03" +
		"\x02\x02\x02\u0932\u0933\x03\x02\x02\x02\u0933\u0934\x03\x02\x02\x02\u0934" +
		"\u0991\x05\xE8u\x12\u0935\u0937\f\x10\x02\x02\u0936\u0938\x07\xE2\x02" +
		"\x02\u0937\u0936\x03\x02\x02\x02\u0937\u0938\x03\x02\x02\x02\u0938\u0939" +
		"\x03\x02\x02\x02\u0939\u093B\x07\xC6\x02\x02\u093A\u093C\x07\xE2\x02\x02" +
		"\u093B\u093A\x03\x02\x02\x02\u093B\u093C\x03\x02\x02\x02\u093C\u093D\x03" +
		"\x02\x02\x02\u093D\u0991\x05\xE8u\x11\u093E\u0940\f\x0F\x02\x02\u093F" +
		"\u0941\x07\xE2\x02\x02\u0940\u093F\x03\x02\x02\x02\u0940\u0941\x03\x02" +
		"\x02\x02\u0941\u0942\x03\x02\x02\x02\u0942\u0944\x07\xC1\x02\x02\u0943" +
		"\u0945\x07\xE2\x02\x02\u0944\u0943\x03\x02\x02\x02\u0944\u0945\x03\x02" +
		"\x02\x02\u0945\u0946\x03\x02\x02\x02\u0946\u0991\x05\xE8u\x10\u0947\u0949" +
		"\f\x0E\x02\x02\u0948\u094A\x07\xE2\x02\x02\u0949\u0948\x03\x02\x02\x02" +
		"\u0949\u094A\x03\x02\x02\x02\u094A\u094B\x03\x02\x02\x02\u094B\u094D\x07" +
		"\xC3\x02\x02\u094C\u094E\x07\xE2\x02\x02\u094D\u094C\x03\x02\x02\x02\u094D" +
		"\u094E\x03\x02\x02\x02\u094E\u094F\x03\x02\x02\x02\u094F\u0991\x05\xE8" +
		"u\x0F\u0950\u0952\f\r\x02\x02\u0951\u0953\x07\xE2\x02\x02\u0952\u0951" +
		"\x03\x02\x02\x02\u0952\u0953\x03\x02\x02\x02\u0953\u0954\x03\x02\x02\x02" +
		"\u0954\u0956\x07\xC0\x02\x02\u0955\u0957\x07\xE2\x02\x02\u0956\u0955\x03" +
		"\x02\x02\x02\u0956\u0957\x03\x02\x02\x02\u0957\u0958\x03\x02\x02\x02\u0958" +
		"\u0991\x05\xE8u\x0E\u0959\u095A\f\f\x02\x02\u095A\u095B\x07\xE2\x02\x02" +
		"\u095B\u095C\x07^\x02\x02\u095C\u095D\x07\xE2\x02\x02\u095D\u0991\x05" +
		"\xE8u\r\u095E\u095F\f\v\x02\x02\u095F\u0960\x07\xE2\x02\x02\u0960\u0961" +
		"\x07T\x02\x02\u0961\u0962\x07\xE2\x02\x02\u0962\u0991\x05\xE8u\f\u0963" +
		"\u0965\f\t\x02\x02\u0964\u0966\x07\xE2\x02\x02\u0965\u0964\x03\x02\x02" +
		"\x02\u0965\u0966\x03\x02\x02\x02\u0966\u0967\x03\x02\x02\x02\u0967\u0969" +
		"\x07\x06\x02\x02\u0968\u096A\x07\xE2\x02\x02\u0969\u0968\x03\x02\x02\x02" +
		"\u0969\u096A\x03\x02\x02\x02\u096A\u096B\x03\x02\x02\x02\u096B\u0991\x05" +
		"\xE8u\n\u096C\u096E\f\b\x02\x02\u096D\u096F\x07\xE2\x02\x02\u096E\u096D" +
		"\x03\x02\x02\x02\u096E\u096F\x03\x02\x02\x02\u096F\u0970\x03\x02\x02\x02" +
		"\u0970\u0972\x07|\x02\x02\u0971\u0973\x07\xE2\x02\x02\u0972\u0971\x03" +
		"\x02\x02\x02\u0972\u0973\x03\x02\x02\x02\u0973\u0974\x03\x02\x02\x02\u0974" +
		"\u0991\x05\xE8u\t\u0975\u0977\f\x07\x02\x02\u0976\u0978\x07\xE2\x02\x02" +
		"\u0977\u0976\x03\x02\x02\x02\u0977\u0978\x03\x02\x02\x02\u0978\u0979\x03" +
		"\x02\x02\x02\u0979\u097B\x07\xB5\x02\x02\u097A\u097C\x07\xE2\x02\x02\u097B" +
		"\u097A\x03\x02\x02\x02\u097B\u097C\x03\x02\x02\x02\u097C\u097D\x03\x02" +
		"\x02\x02\u097D\u0991\x05\xE8u\b\u097E\u0980\f\x06\x02\x02\u097F\u0981" +
		"\x07\xE2\x02\x02\u0980\u097F\x03\x02\x02\x02\u0980\u0981\x03\x02\x02\x02" +
		"\u0981\u0982\x03\x02\x02\x02\u0982\u0984\x07<\x02\x02\u0983\u0985\x07" +
		"\xE2\x02\x02\u0984\u0983\x03\x02\x02\x02\u0984\u0985\x03\x02\x02\x02\u0985" +
		"\u0986\x03\x02\x02\x02\u0986\u0991\x05\xE8u\x07\u0987\u0989\f\x05\x02" +
		"\x02\u0988\u098A\x07\xE2\x02\x02\u0989\u0988\x03\x02\x02\x02\u0989\u098A" +
		"\x03\x02\x02\x02\u098A\u098B\x03\x02\x02\x02\u098B\u098D\x07O\x02\x02" +
		"\u098C\u098E\x07\xE2\x02\x02\u098D\u098C\x03\x02\x02\x02\u098D\u098E\x03" +
		"\x02\x02\x02\u098E\u098F\x03\x02\x02\x02\u098F\u0991\x05\xE8u\x06\u0990" +
		"\u08E4\x03\x02\x02\x02\u0990\u08ED\x03\x02\x02\x02\u0990\u08F6\x03\x02" +
		"\x02\x02\u0990\u08FF\x03\x02\x02\x02\u0990\u0908\x03\x02\x02\x02\u0990" +
		"\u0911\x03\x02\x02\x02\u0990\u091A\x03\x02\x02\x02\u0990\u0923\x03\x02" +
		"\x02\x02\u0990\u092C\x03\x02\x02\x02\u0990\u0935\x03\x02\x02\x02\u0990" +
		"\u093E\x03\x02\x02\x02\u0990\u0947\x03\x02\x02\x02\u0990\u0950\x03\x02" +
		"\x02\x02\u0990\u0959\x03\x02\x02\x02\u0990\u095E\x03\x02\x02\x02\u0990" +
		"\u0963\x03\x02\x02\x02\u0990\u096C\x03\x02\x02\x02\u0990\u0975\x03\x02" +
		"\x02\x02\u0990\u097E\x03\x02\x02\x02\u0990\u0987\x03\x02\x02\x02\u0991" +
		"\u0994\x03\x02\x02\x02\u0992\u0990\x03\x02\x02\x02\u0992\u0993\x03\x02" +
		"\x02\x02\u0993\xE9\x03\x02\x02\x02\u0994\u0992\x03\x02\x02\x02\u0995\u0999" +
		"\x07*\x02\x02\u0996\u0999\x07\x9D\x02\x02\u0997\u0999\x05\u013E\xA0\x02" +
		"\u0998\u0995\x03\x02\x02\x02\u0998\u0996\x03\x02\x02\x02\u0998\u0997\x03" +
		"\x02\x02\x02\u0999\u099A\x03\x02\x02\x02\u099A\u099D\x07\xE2\x02\x02\u099B" +
		"\u099C\x07\xB3\x02\x02\u099C\u099E\x07\xE2\x02\x02\u099D\u099B\x03\x02" +
		"\x02\x02\u099D\u099E\x03\x02\x02\x02\u099E\u099F\x03\x02\x02\x02\u099F" +
		"\u09A0\x05\xECw\x02\u09A0\xEB\x03\x02\x02\x02\u09A1\u09AC\x05\xEEx\x02" +
		"\u09A2\u09A4\x07\xE2\x02\x02\u09A3\u09A2\x03\x02\x02\x02\u09A3\u09A4\x03" +
		"\x02\x02\x02\u09A4\u09A5\x03\x02\x02\x02\u09A5\u09A7\x07\xBA\x02\x02\u09A6" +
		"\u09A8\x07\xE2\x02\x02\u09A7\u09A6\x03\x02\x02\x02\u09A7\u09A8\x03\x02" +
		"\x02\x02\u09A8\u09A9\x03\x02\x02\x02\u09A9\u09AB\x05\xEEx\x02\u09AA\u09A3" +
		"\x03\x02\x02\x02\u09AB\u09AE\x03\x02\x02\x02\u09AC\u09AA\x03\x02\x02\x02" +
		"\u09AC\u09AD\x03\x02\x02\x02\u09AD\xED\x03\x02\x02\x02\u09AE\u09AC\x03" +
		"\x02\x02\x02\u09AF\u09B1\x05\u0122\x92\x02\u09B0\u09B2\x05\u013C\x9F\x02" +
		"\u09B1\u09B0\x03\x02\x02\x02\u09B1\u09B2\x03\x02\x02\x02\u09B2\u09C4\x03" +
		"\x02\x02\x02\u09B3\u09B5\x07\xE2\x02\x02\u09B4\u09B3\x03\x02\x02\x02\u09B4" +
		"\u09B5\x03\x02\x02\x02\u09B5\u09B6\x03\x02\x02\x02\u09B6\u09B8\x07\xC5" +
		"\x02\x02\u09B7\u09B9\x07\xE2\x02\x02\u09B8\u09B7\x03\x02\x02\x02\u09B8" +
		"\u09B9\x03\x02\x02\x02\u09B9\u09BE\x03\x02\x02\x02\u09BA\u09BC\x05\u011E" +
		"\x90\x02\u09BB\u09BD\x07\xE2\x02\x02\u09BC\u09BB\x03\x02\x02\x02\u09BC" +
		"\u09BD\x03\x02\x02\x02\u09BD\u09BF\x03\x02\x02\x02\u09BE\u09BA\x03\x02" +
		"\x02\x02\u09BE\u09BF\x03\x02\x02\x02\u09BF\u09C0\x03\x02\x02\x02\u09C0" +
		"\u09C2\x07\xD0\x02\x02\u09C1\u09C3\x07\xE2\x02\x02\u09C2\u09C1\x03\x02" +
		"\x02\x02\u09C2\u09C3\x03\x02\x02\x02\u09C3\u09C5\x03\x02\x02\x02\u09C4" +
		"\u09B4\x03\x02\x02\x02\u09C4\u09C5\x03\x02\x02\x02\u09C5\u09C8\x03\x02" +
		"\x02\x02\u09C6\u09C7\x07\xE2\x02\x02\u09C7\u09C9\x05\u0124\x93\x02\u09C8" +
		"\u09C6\x03\x02\x02\x02\u09C8\u09C9\x03\x02\x02\x02\u09C9\u09D2\x03\x02" +
		"\x02\x02\u09CA\u09CC\x07\xE2\x02\x02\u09CB\u09CA\x03\x02\x02\x02\u09CB" +
		"\u09CC\x03\x02\x02\x02\u09CC\u09CD\x03\x02\x02\x02\u09CD\u09CF\x07\xBE" +
		"\x02\x02\u09CE\u09D0\x07\xE2\x02\x02\u09CF\u09CE\x03\x02\x02\x02\u09CF" +
		"\u09D0\x03\x02\x02\x02\u09D0\u09D1\x03\x02\x02\x02\u09D1\u09D3\x05\xE8" +
		"u\x02\u09D2\u09CB\x03\x02\x02\x02\u09D2\u09D3\x03\x02\x02\x02\u09D3\xEF" +
		"\x03\x02\x02\x02\u09D4\u09D5\x07\xB0\x02\x02\u09D5\u09D6\x07\xE2\x02\x02" +
		"\u09D6\u09D8\x05\xE8u\x02\u09D7\u09D9\x07\xE0\x02\x02\u09D8\u09D7\x03" +
		"\x02\x02\x02\u09D9\u09DA\x03\x02\x02\x02\u09DA\u09D8\x03\x02\x02\x02\u09DA" +
		"\u09DB\x03\x02\x02\x02\u09DB\u09DF\x03\x02\x02\x02\u09DC\u09DE\x05:\x1E" +
		"\x02\u09DD\u09DC\x03\x02\x02\x02\u09DE\u09E1\x03\x02\x02\x02\u09DF\u09DD" +
		"\x03\x02\x02\x02\u09DF\u09E0\x03\x02\x02\x02\u09E0\u09E5\x03\x02\x02\x02" +
		"\u09E1\u09DF\x03\x02\x02\x02\u09E2\u09E4\x07\xE0\x02\x02\u09E3\u09E2\x03" +
		"\x02\x02\x02\u09E4\u09E7\x03\x02\x02\x02\u09E5\u09E3\x03\x02\x02\x02\u09E5" +
		"\u09E6\x03\x02\x02\x02\u09E6\u09E8\x03\x02\x02\x02\u09E7\u09E5\x03\x02" +
		"\x02\x02\u09E8\u09E9\x07\xAF\x02\x02\u09E9\xF1\x03\x02\x02\x02\u09EA\u09EB" +
		"\x07\xB1\x02\x02\u09EB\u09EC\x07\xE2\x02\x02\u09EC\u09EE\x05\xE8u\x02" +
		"\u09ED\u09EF\x07\xE2\x02\x02\u09EE\u09ED\x03\x02\x02\x02\u09EE\u09EF\x03" +
		"\x02\x02\x02\u09EF\u09F0\x03\x02\x02\x02\u09F0\u09F2\x07\xBA\x02\x02\u09F1" +
		"\u09F3\x07\xE2\x02\x02\u09F2\u09F1\x03\x02\x02\x02\u09F2\u09F3\x03\x02" +
		"\x02\x02\u09F3\u09F4\x03\x02\x02\x02\u09F4\u09F5\x05\xE8u\x02\u09F5\xF3" +
		"\x03\x02\x02\x02\u09F6\u09F7\x07\xB2\x02\x02\u09F7\u09FA\x07\xE2\x02\x02" +
		"\u09F8\u09F9\x07n\x02\x02\u09F9\u09FB\x07\xE2\x02\x02\u09FA\u09F8\x03" +
		"\x02\x02\x02\u09FA\u09FB\x03\x02\x02\x02\u09FB\u09FC\x03\x02\x02\x02\u09FC" +
		"\u09FE\x05\u0104\x83\x02\u09FD\u09FF\x07\xE0\x02\x02\u09FE\u09FD\x03\x02" +
		"\x02\x02\u09FF\u0A00\x03\x02\x02\x02\u0A00\u09FE\x03\x02\x02\x02\u0A00" +
		"\u0A01\x03\x02\x02\x02\u0A01\u0A08\x03\x02\x02\x02\u0A02\u0A04\x05:\x1E" +
		"\x02\u0A03\u0A05\x07\xE0\x02\x02\u0A04\u0A03\x03\x02\x02\x02\u0A05\u0A06" +
		"\x03\x02\x02\x02\u0A06\u0A04\x03\x02\x02\x02\u0A06\u0A07\x03\x02\x02\x02" +
		"\u0A07\u0A09\x03\x02\x02\x02\u0A08\u0A02\x03\x02\x02\x02\u0A08\u0A09\x03" +
		"\x02\x02\x02\u0A09\u0A0A\x03\x02\x02\x02\u0A0A\u0A0B\x078\x02\x02\u0A0B" +
		"\xF5\x03\x02\x02\x02\u0A0C\u0A0D\x07\xB4\x02\x02\u0A0D\u0A0E\x07\xE2\x02" +
		"\x02\u0A0E\u0A10\x05\xE8u\x02\u0A0F\u0A11\x07\xE2\x02\x02\u0A10\u0A0F" +
		"\x03\x02\x02\x02\u0A10\u0A11\x03\x02\x02\x02\u0A11\u0A12\x03\x02\x02\x02" +
		"\u0A12\u0A17\x07\xBA\x02\x02\u0A13\u0A15\x07\xE2\x02\x02\u0A14\u0A13\x03" +
		"\x02\x02\x02\u0A14\u0A15\x03\x02\x02\x02\u0A15\u0A16\x03\x02\x02\x02\u0A16" +
		"\u0A18\x05\xA4S\x02\u0A17\u0A14\x03\x02\x02\x02\u0A17\u0A18\x03\x02\x02" +
		"\x02\u0A18\xF7\x03\x02\x02\x02\u0A19\u0A1C\x05\xFA~\x02\u0A1A\u0A1C\x05" +
		"\xFC\x7F\x02\u0A1B\u0A19\x03\x02\x02\x02\u0A1B\u0A1A\x03\x02\x02\x02\u0A1C" +
		"\xF9\x03\x02\x02\x02\u0A1D\u0A1E\x07\x13\x02\x02\u0A1E\u0A1F\x07\xE2\x02" +
		"\x02\u0A1F\u0A21\x05\u0122\x92\x02\u0A20\u0A22\x05\u013C\x9F\x02\u0A21" +
		"\u0A20\x03\x02\x02\x02\u0A21\u0A22\x03\x02\x02\x02\u0A22\u0A30\x03\x02" +
		"\x02\x02\u0A23\u0A25\x07\xE2\x02\x02\u0A24\u0A23\x03\x02\x02\x02\u0A24" +
		"\u0A25\x03\x02\x02\x02\u0A25\u0A26\x03\x02\x02\x02\u0A26\u0A28\x07\xC5" +
		"\x02\x02\u0A27\u0A29\x07\xE2\x02\x02\u0A28\u0A27\x03\x02\x02\x02\u0A28" +
		"\u0A29\x03\x02\x02";
	private static readonly _serializedATNSegment5: string =
		"\x02\u0A29\u0A2A\x03\x02\x02\x02\u0A2A\u0A2C\x05\u0112\x8A\x02\u0A2B\u0A2D" +
		"\x07\xE2\x02\x02\u0A2C\u0A2B\x03\x02\x02\x02\u0A2C\u0A2D\x03\x02\x02\x02" +
		"\u0A2D\u0A2E\x03\x02\x02\x02\u0A2E\u0A2F\x07\xD0\x02\x02\u0A2F\u0A31\x03" +
		"\x02\x02\x02\u0A30\u0A24\x03\x02\x02\x02\u0A30\u0A31\x03\x02\x02\x02\u0A31" +
		"\xFB\x03\x02\x02\x02\u0A32\u0A33\x07\x13\x02\x02\u0A33\u0A35\x07\xE2\x02" +
		"\x02\u0A34\u0A36\x05\u0104\x83\x02\u0A35\u0A34\x03\x02\x02\x02\u0A35\u0A36" +
		"\x03\x02\x02\x02\u0A36\u0A37\x03\x02\x02\x02\u0A37\u0A39\x07\xBD\x02\x02" +
		"\u0A38\u0A3A\x07\xE2\x02\x02\u0A39\u0A38\x03\x02\x02\x02\u0A39\u0A3A\x03" +
		"\x02\x02\x02\u0A3A\u0A3B\x03\x02\x02\x02\u0A3B\u0A3D\x05\u0122\x92\x02" +
		"\u0A3C\u0A3E\x05\u013C\x9F\x02\u0A3D\u0A3C\x03\x02\x02\x02\u0A3D\u0A3E" +
		"\x03\x02\x02\x02\u0A3E\u0A4C\x03\x02\x02\x02\u0A3F\u0A41\x07\xE2\x02\x02" +
		"\u0A40\u0A3F\x03\x02\x02\x02\u0A40\u0A41\x03\x02\x02\x02\u0A41\u0A42\x03" +
		"\x02\x02\x02\u0A42\u0A44\x07\xC5\x02\x02\u0A43\u0A45\x07\xE2\x02\x02\u0A44" +
		"\u0A43\x03\x02\x02\x02\u0A44\u0A45\x03\x02\x02\x02\u0A45\u0A46\x03\x02" +
		"\x02\x02\u0A46\u0A48\x05\u0112\x8A\x02\u0A47\u0A49\x07\xE2\x02\x02\u0A48" +
		"\u0A47\x03\x02\x02\x02\u0A48\u0A49\x03\x02\x02\x02\u0A49\u0A4A\x03\x02" +
		"\x02\x02\u0A4A\u0A4B\x07\xD0\x02\x02\u0A4B\u0A4D\x03\x02\x02\x02\u0A4C" +
		"\u0A40\x03\x02\x02\x02\u0A4C\u0A4D\x03\x02\x02\x02\u0A4D\xFD\x03\x02\x02" +
		"\x02\u0A4E\u0A51\x05\u0100\x81\x02\u0A4F\u0A51\x05\u0102\x82\x02\u0A50" +
		"\u0A4E\x03\x02\x02\x02\u0A50\u0A4F\x03\x02\x02\x02\u0A51\xFF\x03\x02\x02" +
		"\x02\u0A52\u0A55\x05\u0128\x95\x02\u0A53\u0A54\x07\xE2\x02\x02\u0A54\u0A56" +
		"\x05\u0112\x8A\x02\u0A55\u0A53\x03\x02\x02\x02\u0A55\u0A56\x03\x02\x02" +
		"\x02\u0A56\u0101\x03\x02\x02\x02\u0A57\u0A59\x05\u0104\x83\x02\u0A58\u0A57" +
		"\x03\x02\x02\x02\u0A58\u0A59\x03\x02\x02\x02\u0A59\u0A5A\x03\x02\x02\x02" +
		"\u0A5A\u0A5B\x07\xBD\x02\x02\u0A5B\u0A5D\x05\u0122\x92\x02\u0A5C\u0A5E" +
		"\x05\u013C\x9F\x02\u0A5D\u0A5C\x03\x02\x02\x02\u0A5D\u0A5E\x03\x02\x02" +
		"\x02\u0A5E\u0A61\x03\x02\x02\x02\u0A5F\u0A60\x07\xE2\x02\x02\u0A60\u0A62" +
		"\x05\u0112\x8A\x02\u0A61\u0A5F\x03\x02\x02\x02\u0A61\u0A62\x03\x02\x02" +
		"\x02\u0A62\u0A64\x03\x02\x02\x02\u0A63\u0A65\x05\u0116\x8C\x02\u0A64\u0A63" +
		"\x03\x02\x02\x02\u0A64\u0A65\x03\x02\x02\x02\u0A65\u0103\x03\x02\x02\x02" +
		"\u0A66\u0A6B\x05\u010C\x87\x02\u0A67\u0A6B\x05\u0106\x84\x02\u0A68\u0A6B" +
		"\x05\u0108\x85\x02\u0A69\u0A6B\x05\u0110\x89\x02\u0A6A\u0A66\x03\x02\x02" +
		"\x02\u0A6A\u0A67\x03\x02\x02\x02\u0A6A\u0A68\x03\x02\x02\x02\u0A6A\u0A69" +
		"\x03\x02\x02\x02\u0A6B\u0105\x03\x02\x02\x02\u0A6C\u0A6E\x05\u0122\x92" +
		"\x02\u0A6D\u0A6F\x05\u013C\x9F\x02\u0A6E\u0A6D\x03\x02\x02\x02\u0A6E\u0A6F" +
		"\x03\x02\x02\x02\u0A6F\u0A71\x03\x02\x02\x02\u0A70\u0A72\x05\u0116\x8C" +
		"\x02\u0A71\u0A70\x03\x02\x02\x02\u0A71\u0A72\x03\x02\x02\x02\u0A72\u0107" +
		"\x03\x02\x02\x02\u0A73\u0A77\x05\u0122\x92\x02\u0A74\u0A77\x05\u0126\x94" +
		"\x02\u0A75\u0A77\x05\u010A\x86\x02\u0A76\u0A73\x03\x02\x02\x02\u0A76\u0A74" +
		"\x03\x02\x02\x02\u0A76\u0A75\x03\x02\x02\x02\u0A77\u0A79\x03\x02\x02\x02" +
		"\u0A78\u0A7A\x05\u013C\x9F\x02\u0A79\u0A78\x03\x02\x02\x02\u0A79\u0A7A" +
		"\x03\x02\x02\x02\u0A7A\u0A7C\x03\x02\x02\x02\u0A7B\u0A7D\x07\xE2\x02\x02" +
		"\u0A7C\u0A7B\x03\x02\x02\x02\u0A7C\u0A7D\x03\x02\x02\x02\u0A7D\u0A89\x03" +
		"\x02\x02\x02\u0A7E\u0A80\x07\xC5\x02\x02\u0A7F\u0A81\x07\xE2\x02\x02\u0A80" +
		"\u0A7F\x03\x02\x02\x02\u0A80\u0A81\x03\x02\x02\x02\u0A81\u0A86\x03\x02" +
		"\x02\x02\u0A82\u0A84\x05\u0112\x8A\x02\u0A83\u0A85\x07\xE2\x02\x02\u0A84" +
		"\u0A83\x03\x02\x02\x02\u0A84\u0A85\x03\x02\x02\x02\u0A85\u0A87\x03\x02" +
		"\x02\x02\u0A86\u0A82\x03\x02\x02\x02\u0A86\u0A87\x03\x02\x02\x02\u0A87" +
		"\u0A88\x03\x02\x02\x02\u0A88\u0A8A\x07\xD0\x02\x02\u0A89\u0A7E\x03\x02" +
		"\x02\x02\u0A8A\u0A8B\x03\x02\x02\x02\u0A8B\u0A89\x03\x02\x02\x02\u0A8B" +
		"\u0A8C\x03\x02\x02\x02\u0A8C\u0A8E\x03\x02\x02\x02\u0A8D\u0A8F\x05\u0116" +
		"\x8C\x02\u0A8E\u0A8D\x03\x02\x02\x02\u0A8E\u0A8F\x03\x02\x02\x02\u0A8F" +
		"\u0109\x03\x02\x02\x02\u0A90\u0A92\x05\u0122\x92\x02\u0A91\u0A93\x05\u013C" +
		"\x9F\x02\u0A92\u0A91\x03\x02\x02\x02\u0A92\u0A93\x03\x02\x02\x02\u0A93" +
		"\u0A95\x03\x02\x02\x02\u0A94\u0A96\x07\xE2\x02\x02\u0A95\u0A94\x03\x02" +
		"\x02\x02\u0A95\u0A96\x03\x02\x02\x02\u0A96\u0A97\x03\x02\x02\x02\u0A97" +
		"\u0A99\x07\xC5\x02\x02\u0A98\u0A9A\x07\xE2\x02\x02\u0A99\u0A98\x03\x02" +
		"\x02\x02\u0A99\u0A9A\x03\x02\x02\x02\u0A9A\u0A9F\x03\x02\x02\x02\u0A9B" +
		"\u0A9D\x05\u0112\x8A\x02\u0A9C\u0A9E\x07\xE2\x02\x02\u0A9D\u0A9C\x03\x02" +
		"\x02\x02\u0A9D\u0A9E\x03\x02\x02\x02\u0A9E\u0AA0\x03\x02\x02\x02\u0A9F" +
		"\u0A9B\x03\x02\x02\x02\u0A9F\u0AA0\x03\x02\x02\x02\u0AA0\u0AA1\x03\x02" +
		"\x02\x02\u0AA1\u0AA2\x07\xD0\x02\x02\u0AA2\u010B\x03\x02\x02\x02\u0AA3" +
		"\u0AA6\x05\u0106\x84\x02\u0AA4\u0AA6\x05\u0108\x85\x02\u0AA5\u0AA3\x03" +
		"\x02\x02\x02\u0AA5\u0AA4\x03\x02\x02\x02\u0AA5\u0AA6\x03\x02\x02\x02\u0AA6" +
		"\u0AA8\x03\x02\x02\x02\u0AA7\u0AA9\x05\u010E\x88\x02\u0AA8\u0AA7\x03\x02" +
		"\x02\x02\u0AA9\u0AAA\x03\x02\x02\x02\u0AAA\u0AA8\x03\x02\x02\x02\u0AAA" +
		"\u0AAB\x03\x02\x02\x02\u0AAB\u0AAD\x03\x02\x02\x02\u0AAC\u0AAE\x05\u0116" +
		"\x8C\x02\u0AAD\u0AAC\x03\x02\x02\x02\u0AAD\u0AAE\x03\x02\x02\x02\u0AAE" +
		"\u010D\x03\x02\x02\x02\u0AAF\u0AB1\x07\xE2\x02\x02\u0AB0\u0AAF\x03\x02" +
		"\x02\x02\u0AB0\u0AB1\x03\x02\x02\x02\u0AB1\u0AB2\x03\x02\x02\x02\u0AB2" +
		"\u0AB5\x07\xBD\x02\x02\u0AB3\u0AB6\x05\u0106\x84\x02\u0AB4\u0AB6\x05\u0108" +
		"\x85\x02\u0AB5\u0AB3\x03\x02\x02\x02\u0AB5\u0AB4\x03\x02\x02\x02\u0AB6" +
		"\u010F\x03\x02\x02\x02\u0AB7\u0AB8\x05\u0116\x8C\x02\u0AB8\u0111\x03\x02" +
		"\x02\x02\u0AB9\u0ABB\x05\u0114\x8B\x02\u0ABA\u0AB9\x03\x02\x02\x02\u0ABA" +
		"\u0ABB\x03\x02\x02\x02\u0ABB\u0ABD\x03\x02\x02\x02\u0ABC\u0ABE\x07\xE2" +
		"\x02\x02\u0ABD\u0ABC\x03\x02\x02\x02\u0ABD\u0ABE\x03\x02\x02\x02\u0ABE" +
		"\u0ABF\x03\x02\x02\x02\u0ABF\u0AC1\t\v\x02\x02\u0AC0\u0AC2\x07\xE2\x02" +
		"\x02\u0AC1\u0AC0\x03\x02\x02\x02\u0AC1\u0AC2\x03\x02\x02\x02\u0AC2\u0AC4" +
		"\x03\x02\x02\x02\u0AC3\u0ABA\x03\x02\x02\x02\u0AC4\u0AC7\x03\x02\x02\x02" +
		"\u0AC5\u0AC3\x03\x02\x02\x02\u0AC5\u0AC6\x03\x02\x02\x02\u0AC6\u0AC8\x03" +
		"\x02\x02\x02\u0AC7\u0AC5\x03\x02\x02\x02\u0AC8\u0AD5\x05\u0114\x8B\x02" +
		"\u0AC9\u0ACB\x07\xE2\x02\x02\u0ACA\u0AC9\x03\x02\x02\x02\u0ACA\u0ACB\x03" +
		"\x02\x02\x02\u0ACB\u0ACC\x03\x02\x02\x02\u0ACC\u0ACE\t\v\x02\x02\u0ACD" +
		"\u0ACF\x07\xE2\x02\x02\u0ACE\u0ACD\x03\x02\x02\x02\u0ACE\u0ACF\x03\x02" +
		"\x02\x02\u0ACF\u0AD1\x03\x02\x02\x02\u0AD0\u0AD2\x05\u0114\x8B\x02\u0AD1" +
		"\u0AD0\x03\x02\x02\x02\u0AD1\u0AD2\x03\x02\x02\x02\u0AD2\u0AD4\x03\x02" +
		"\x02\x02\u0AD3\u0ACA\x03\x02\x02\x02\u0AD4\u0AD7\x03\x02\x02\x02\u0AD5" +
		"\u0AD3\x03\x02\x02\x02\u0AD5\u0AD6\x03\x02\x02\x02\u0AD6\u0113\x03\x02" +
		"\x02\x02\u0AD7\u0AD5\x03\x02\x02\x02\u0AD8\u0AD9\t\r\x02\x02\u0AD9\u0ADB" +
		"\x07\xE2\x02\x02\u0ADA\u0AD8\x03\x02\x02\x02\u0ADA\u0ADB\x03\x02\x02\x02" +
		"\u0ADB\u0ADC\x03\x02\x02\x02\u0ADC\u0ADD\x05\xE8u\x02\u0ADD\u0115\x03" +
		"\x02\x02\x02\u0ADE\u0ADF\x07\xBF\x02\x02\u0ADF\u0AE1\x05\u0122\x92\x02" +
		"\u0AE0\u0AE2\x05\u013C\x9F\x02\u0AE1\u0AE0\x03\x02\x02\x02\u0AE1\u0AE2" +
		"\x03\x02\x02\x02\u0AE2\u0117\x03\x02\x02\x02\u0AE3\u0AF5\x07\xC5\x02\x02" +
		"\u0AE4\u0AE6\x07\xE2\x02\x02\u0AE5\u0AE4\x03\x02\x02\x02\u0AE5\u0AE6\x03" +
		"\x02\x02\x02\u0AE6\u0AE7\x03\x02\x02\x02\u0AE7\u0AF2\x05\u011A\x8E\x02" +
		"\u0AE8\u0AEA\x07\xE2\x02\x02\u0AE9\u0AE8\x03\x02\x02\x02\u0AE9\u0AEA\x03" +
		"\x02\x02\x02\u0AEA\u0AEB\x03\x02\x02\x02\u0AEB\u0AED\x07\xBA\x02\x02\u0AEC" +
		"\u0AEE\x07\xE2\x02\x02\u0AED\u0AEC\x03\x02\x02\x02\u0AED\u0AEE\x03\x02" +
		"\x02\x02\u0AEE\u0AEF\x03\x02\x02\x02\u0AEF\u0AF1\x05\u011A\x8E\x02\u0AF0" +
		"\u0AE9\x03\x02\x02\x02\u0AF1\u0AF4\x03\x02\x02\x02\u0AF2\u0AF0\x03\x02" +
		"\x02\x02\u0AF2\u0AF3\x03\x02\x02\x02\u0AF3\u0AF6\x03\x02\x02\x02\u0AF4" +
		"\u0AF2\x03\x02\x02\x02\u0AF5\u0AE5\x03\x02\x02\x02\u0AF5\u0AF6\x03\x02" +
		"\x02\x02\u0AF6\u0AF8\x03\x02\x02\x02\u0AF7\u0AF9\x07\xE2\x02\x02\u0AF8" +
		"\u0AF7\x03\x02\x02\x02\u0AF8\u0AF9\x03\x02\x02\x02\u0AF9\u0AFA\x03\x02" +
		"\x02\x02\u0AFA\u0AFB\x07\xD0\x02\x02\u0AFB\u0119\x03\x02\x02\x02\u0AFC" +
		"\u0AFD\x07w\x02\x02\u0AFD\u0AFF\x07\xE2\x02\x02\u0AFE\u0AFC\x03\x02\x02" +
		"\x02\u0AFE\u0AFF\x03\x02\x02\x02\u0AFF\u0B02\x03\x02\x02\x02\u0B00\u0B01" +
		"\t\x0E\x02\x02\u0B01\u0B03\x07\xE2\x02\x02\u0B02\u0B00\x03\x02\x02\x02" +
		"\u0B02\u0B03\x03\x02\x02\x02\u0B03\u0B06\x03\x02\x02\x02\u0B04\u0B05\x07" +
		"~\x02\x02\u0B05\u0B07\x07\xE2\x02\x02\u0B06\u0B04\x03\x02\x02\x02\u0B06" +
		"\u0B07\x03\x02\x02\x02\u0B07\u0B08\x03\x02\x02\x02\u0B08\u0B0A\x05\u0122" +
		"\x92\x02\u0B09\u0B0B\x05\u013C\x9F\x02\u0B0A\u0B09\x03\x02\x02\x02\u0B0A" +
		"\u0B0B\x03\x02\x02\x02\u0B0B\u0B14\x03\x02\x02\x02\u0B0C\u0B0E\x07\xE2" +
		"\x02\x02\u0B0D\u0B0C\x03\x02\x02\x02\u0B0D\u0B0E\x03\x02\x02\x02\u0B0E" +
		"\u0B0F\x03\x02\x02\x02\u0B0F\u0B11\x07\xC5\x02\x02\u0B10\u0B12\x07\xE2" +
		"\x02\x02\u0B11\u0B10\x03\x02\x02\x02\u0B11\u0B12\x03\x02\x02\x02\u0B12" +
		"\u0B13\x03\x02\x02\x02\u0B13\u0B15\x07\xD0\x02\x02\u0B14\u0B0D\x03\x02" +
		"\x02\x02\u0B14\u0B15\x03\x02\x02\x02\u0B15\u0B18\x03\x02\x02\x02\u0B16" +
		"\u0B17\x07\xE2\x02\x02\u0B17\u0B19\x05\u0124\x93\x02\u0B18\u0B16\x03\x02" +
		"\x02\x02\u0B18\u0B19\x03\x02\x02\x02\u0B19\u0B1E\x03\x02\x02\x02\u0B1A" +
		"\u0B1C\x07\xE2\x02\x02\u0B1B\u0B1A\x03\x02\x02\x02\u0B1B\u0B1C\x03\x02" +
		"\x02\x02\u0B1C\u0B1D\x03\x02\x02\x02\u0B1D\u0B1F\x05\u011C\x8F\x02\u0B1E" +
		"\u0B1B\x03\x02\x02\x02\u0B1E\u0B1F\x03\x02\x02\x02\u0B1F\u011B\x03\x02" +
		"\x02\x02\u0B20\u0B22\x07\xBE\x02\x02\u0B21\u0B23\x07\xE2\x02\x02\u0B22" +
		"\u0B21\x03\x02\x02\x02\u0B22\u0B23\x03\x02\x02\x02\u0B23\u0B24\x03\x02" +
		"\x02\x02\u0B24\u0B25\x05\xE8u\x02\u0B25\u011D\x03\x02\x02\x02\u0B26\u0B31" +
		"\x05\u0120\x91\x02\u0B27\u0B29\x07\xE2\x02\x02\u0B28\u0B27\x03\x02\x02" +
		"\x02\u0B28\u0B29\x03\x02\x02\x02\u0B29\u0B2A\x03\x02\x02\x02\u0B2A\u0B2C" +
		"\x07\xBA\x02\x02\u0B2B\u0B2D\x07\xE2\x02\x02\u0B2C\u0B2B\x03\x02\x02\x02" +
		"\u0B2C\u0B2D\x03\x02\x02\x02\u0B2D\u0B2E\x03\x02\x02\x02\u0B2E\u0B30\x05" +
		"\u0120\x91\x02\u0B2F\u0B28\x03\x02\x02\x02\u0B30\u0B33\x03\x02\x02\x02" +
		"\u0B31\u0B2F\x03\x02\x02\x02\u0B31\u0B32\x03\x02\x02\x02\u0B32\u011F\x03" +
		"\x02\x02\x02\u0B33\u0B31\x03\x02\x02\x02\u0B34\u0B35\x05\xE8u\x02\u0B35" +
		"\u0B36\x07\xE2\x02\x02\u0B36\u0B37\x07\xA6\x02\x02\u0B37\u0B38\x07\xE2" +
		"\x02\x02\u0B38\u0B3A\x03\x02\x02\x02\u0B39\u0B34\x03\x02\x02\x02\u0B39" +
		"\u0B3A\x03\x02\x02\x02\u0B3A\u0B3B\x03\x02\x02\x02\u0B3B\u0B3C\x05\xE8" +
		"u\x02\u0B3C\u0121\x03\x02\x02\x02\u0B3D\u0B40\x07\xDE\x02\x02\u0B3E\u0B40" +
		"\x05\u0140\xA1\x02\u0B3F\u0B3D\x03\x02\x02\x02\u0B3F\u0B3E\x03\x02\x02" +
		"\x02\u0B40\u0B41\x03\x02\x02\x02\u0B41\u0B3F\x03\x02\x02\x02\u0B41\u0B42" +
		"\x03\x02\x02\x02\u0B42\u0B4C\x03\x02\x02\x02\u0B43\u0B46\x07\xD2\x02\x02" +
		"\u0B44\u0B47\x07\xDE\x02\x02\u0B45\u0B47\x05\u0140\xA1\x02\u0B46\u0B44" +
		"\x03\x02\x02\x02\u0B46\u0B45\x03\x02\x02\x02\u0B47\u0B48\x03\x02\x02\x02" +
		"\u0B48\u0B46\x03\x02\x02\x02\u0B48\u0B49\x03\x02\x02\x02\u0B49\u0B4A\x03" +
		"\x02\x02\x02\u0B4A\u0B4C\x07\xD3\x02\x02\u0B4B\u0B3F\x03\x02\x02\x02\u0B4B" +
		"\u0B43\x03\x02\x02\x02\u0B4C\u0123\x03\x02\x02\x02\u0B4D\u0B4E\x07\n\x02" +
		"\x02\u0B4E\u0B51\x07\xE2\x02\x02\u0B4F\u0B50\x07n\x02\x02\u0B50\u0B52" +
		"\x07\xE2\x02\x02\u0B51\u0B4F\x03\x02\x02\x02\u0B51\u0B52\x03\x02\x02\x02" +
		"\u0B52\u0B53\x03\x02\x02\x02\u0B53\u0B56\x05\u013A\x9E\x02\u0B54\u0B55" +
		"\x07\xE2\x02\x02\u0B55\u0B57\x05\u012E\x98\x02\u0B56\u0B54\x03\x02\x02" +
		"\x02\u0B56\u0B57\x03\x02\x02\x02\u0B57\u0125\x03\x02\x02\x02\u0B58\u0B59" +
		"\t\x0F\x02\x02\u0B59\u0127\x03\x02\x02\x02\u0B5A\u0B5F\x07\xDE\x02\x02" +
		"\u0B5B\u0B5E\x05\u0140\xA1\x02\u0B5C\u0B5E\x07\xDE\x02\x02\u0B5D\u0B5B" +
		"\x03\x02\x02\x02\u0B5D\u0B5C\x03\x02\x02\x02\u0B5E\u0B61\x03\x02\x02\x02" +
		"\u0B5F\u0B5D\x03\x02\x02\x02\u0B5F\u0B60\x03\x02\x02\x02\u0B60\u0B6A\x03" +
		"\x02\x02\x02\u0B61\u0B5F\x03\x02\x02\x02\u0B62\u0B65\x05\u0140\xA1\x02" +
		"\u0B63\u0B66\x05\u0140\xA1\x02\u0B64\u0B66\x07\xDE\x02\x02\u0B65\u0B63" +
		"\x03\x02\x02\x02\u0B65\u0B64\x03\x02\x02\x02\u0B66\u0B67\x03\x02\x02\x02" +
		"\u0B67\u0B65\x03\x02\x02\x02\u0B67\u0B68\x03\x02\x02\x02\u0B68\u0B6A\x03" +
		"\x02\x02\x02\u0B69\u0B5A\x03\x02\x02\x02\u0B69\u0B62\x03\x02\x02\x02\u0B6A" +
		"\u0129\x03\x02\x02\x02\u0B6B\u0B6C\t\x10\x02\x02\u0B6C\u012B\x03\x02\x02" +
		"\x02\u0B6D\u0B72\x05\u0122\x92\x02\u0B6E\u0B6F\x07\xBD\x02\x02\u0B6F\u0B71" +
		"\x05\u0122\x92\x02\u0B70\u0B6E\x03\x02\x02\x02\u0B71\u0B74\x03\x02\x02" +
		"\x02\u0B72\u0B70\x03\x02\x02\x02\u0B72\u0B73\x03\x02\x02\x02\u0B73\u012D" +
		"\x03\x02\x02\x02\u0B74\u0B72\x03\x02\x02\x02\u0B75\u0B77\x07\xC9\x02\x02" +
		"\u0B76\u0B78\x07\xE2\x02\x02\u0B77\u0B76\x03\x02\x02\x02\u0B77\u0B78\x03" +
		"\x02\x02\x02\u0B78\u0B7B\x03\x02\x02\x02\u0B79\u0B7C\x07\xD7\x02\x02\u0B7A" +
		"\u0B7C\x05\u0122\x92\x02\u0B7B\u0B79\x03\x02\x02\x02\u0B7B\u0B7A\x03\x02" +
		"\x02\x02\u0B7C\u012F\x03\x02\x02\x02\u0B7D\u0B86\x05\u0128\x95\x02\u0B7E" +
		"\u0B80\x07\xE2\x02\x02\u0B7F\u0B7E\x03\x02\x02\x02\u0B7F\u0B80\x03\x02" +
		"\x02\x02\u0B80\u0B81\x03\x02\x02\x02\u0B81\u0B83\x07\xC7\x02\x02\u0B82" +
		"\u0B84\x07\xE2\x02\x02\u0B83\u0B82\x03\x02\x02\x02\u0B83\u0B84\x03\x02" +
		"\x02\x02\u0B84\u0B85\x03\x02\x02\x02\u0B85\u0B87\x05\u0128\x95\x02\u0B86" +
		"\u0B7F\x03\x02\x02\x02\u0B86\u0B87\x03\x02\x02\x02\u0B87\u0131\x03\x02" +
		"\x02\x02\u0B88\u0B89\x05\u0122\x92\x02\u0B89\u0B8A\x07\xB9\x02\x02\u0B8A" +
		"\u0133\x03\x02\x02\x02\u0B8B\u0B8C\t\x11\x02\x02\u0B8C\u0135\x03\x02\x02" +
		"\x02\u0B8D\u0B8E\t\x12\x02\x02\u0B8E\u0137\x03\x02\x02\x02\u0B8F\u0B90" +
		"\t\x13\x02\x02\u0B90\u0139\x03\x02\x02\x02\u0B91\u0B94\x05\u0126\x94\x02" +
		"\u0B92\u0B94\x05\u012C\x97\x02\u0B93\u0B91\x03\x02\x02\x02\u0B93\u0B92" +
		"\x03\x02\x02\x02\u0B94\u0B9D\x03\x02\x02\x02\u0B95\u0B97\x07\xE2\x02\x02" +
		"\u0B96\u0B95\x03\x02\x02\x02\u0B96\u0B97\x03\x02\x02\x02\u0B97\u0B98\x03" +
		"\x02\x02\x02\u0B98\u0B9A\x07\xC5\x02\x02\u0B99\u0B9B\x07\xE2\x02\x02\u0B9A" +
		"\u0B99\x03\x02\x02\x02\u0B9A\u0B9B\x03\x02\x02\x02\u0B9B\u0B9C\x03\x02" +
		"\x02\x02\u0B9C\u0B9E\x07\xD0\x02\x02\u0B9D\u0B96\x03\x02\x02\x02\u0B9D" +
		"\u0B9E\x03\x02\x02\x02\u0B9E\u013B\x03\x02\x02\x02\u0B9F\u0BA0\t\x14\x02" +
		"\x02\u0BA0\u013D\x03\x02\x02\x02\u0BA1\u0BA2\t\x15\x02\x02\u0BA2\u013F" +
		"\x03\x02\x02\x02\u0BA3\u0BA4\t\x16\x02\x02\u0BA4\u0141\x03\x02\x02\x02" +
		"\u0205\u0146\u014B\u0152\u0154\u0157\u015C\u0160\u0165\u0169\u016E\u0172" +
		"\u0177\u017B\u0180\u0184\u0189\u018D\u0192\u0196\u019B\u01A1\u01A5\u01A9" +
		"\u01AD\u01B2\u01B5\u01BA\u01C6\u01CC\u01D1\u01D7\u01DB\u01DF\u01E8\u01EC" +
		"\u01F2\u01F6\u0200\u0206\u020B\u021B\u0221\u0226\u0231\u0234\u023C\u0241" +
		"\u0246\u024C\u0252\u0255\u0259\u025D\u0260\u0264\u0269\u026D\u0274\u027C" +
		"\u0280\u0284\u028D\u0290\u0298\u029C\u02A1\u02A6\u02A8\u02AE\u02BE\u02C2" +
		"\u02C6\u02CA\u02CF\u02D6\u02D9\u02DE\u0324\u032A\u032E\u0331\u0340\u0348" +
		"\u034E\u0350\u0358\u035C\u0361\u0364\u0369\u036F\u0373\u0378\u037D\u0381" +
		"\u0384\u0388\u038E\u0392\u0399\u039F\u03A2\u03A7\u03B1\u03B4\u03B7\u03BB" +
		"\u03C1\u03C5\u03CA\u03D1\u03D5\u03D9\u03DD\u03E0\u03E6\u03EC\u03EE\u03F9" +
		"\u03FF\u0401\u0409\u040F\u0417\u041E\u0426\u042B\u0432\u0436\u0439\u043E" +
		"\u0444\u0448\u044D\u0457\u045D\u0467\u046B\u0475\u047E\u0484\u0486\u048B" +
		"\u0491\u0495\u0498\u049C\u04A7\u04AC\u04B2\u04B4\u04BA\u04BC\u04C1\u04C5" +
		"\u04CB\u04CE\u04D2\u04D7\u04DD\u04DF\u04E7\u04EB\u04EE\u04F1\u04F5\u050C" +
		"\u0512\u0516\u051A\u0524\u052A\u052C\u0538\u053E\u0540\u0546\u054C\u054E" +
		"\u0558\u055C\u0561\u0569\u056D\u0571\u0579\u057D\u0589\u058D\u0594\u0596" +
		"\u059C\u05A0\u05A8\u05AC\u05B8\u05BE\u05C0\u05CA\u05D0\u05D2\u05D8\u05DE" +
		"\u05E0\u05E4\u05E8\u05EC\u0602\u0607\u0611\u0615\u061A\u0625\u0629\u062E" +
		"\u063C\u0640\u0649\u064D\u0650\u0654\u0658\u065B\u065F\u0663\u0666\u066A" +
		"\u066D\u0671\u0673\u0677\u067B\u067F\u0683\u0686\u068C\u0690\u0693\u0698" +
		"\u069C\u06A2\u06A5\u06A8\u06AC\u06B1\u06B7\u06B9\u06C0\u06C4\u06CA\u06CD" +
		"\u06D2\u06D8\u06DA\u06E1\u06E5\u06EB\u06EE\u06F3\u06F9\u06FB\u0703\u0707" +
		"\u070A\u070D\u0711\u0719\u071D\u0721\u0723\u0726\u072B\u0731\u0735\u0739" +
		"\u073E\u0743\u0747\u074B\u0750\u0758\u075A\u075F\u0769\u076D\u0775\u0779" +
		"\u0781\u0785\u0789\u078D\u0791\u0795\u079D\u07A1\u07AD\u07B2\u07B6\u07BE" +
		"\u07C1\u07C6\u07CC\u07CE\u07D4\u07D6\u07DB\u07DF\u07E4\u07E7\u07EB\u07EF" +
		"\u07FA\u0800\u0804\u0807\u080D\u0811\u0819\u081D\u0826\u082A\u0830\u0833" +
		"\u0838\u083E\u0840\u0846\u084A\u0851\u0859\u085E\u0865\u0869\u086C\u086F" +
		"\u0872\u0876\u087B\u0884\u088E\u0892\u0899\u089B\u08A1\u08A5\u08A9\u08AE" +
		"\u08B2\u08BF\u08C3\u08C9\u08CE\u08D6\u08DA\u08DE\u08E2\u08E6\u08EA\u08EF" +
		"\u08F3\u08F8\u08FC\u0901\u0905\u090A\u090E\u0913\u0917\u091C\u0920\u0925" +
		"\u0929\u092E\u0932\u0937\u093B\u0940\u0944\u0949\u094D\u0952\u0956\u0965" +
		"\u0969\u096E\u0972\u0977\u097B\u0980\u0984\u0989\u098D\u0990\u0992\u0998" +
		"\u099D\u09A3\u09A7\u09AC\u09B1\u09B4\u09B8\u09BC\u09BE\u09C2\u09C4\u09C8" +
		"\u09CB\u09CF\u09D2\u09DA\u09DF\u09E5\u09EE\u09F2\u09FA\u0A00\u0A06\u0A08" +
		"\u0A10\u0A14\u0A17\u0A1B\u0A21\u0A24\u0A28\u0A2C\u0A30\u0A35\u0A39\u0A3D" +
		"\u0A40\u0A44\u0A48\u0A4C\u0A50\u0A55\u0A58\u0A5D\u0A61\u0A64\u0A6A\u0A6E" +
		"\u0A71\u0A76\u0A79\u0A7C\u0A80\u0A84\u0A86\u0A8B\u0A8E\u0A92\u0A95\u0A99" +
		"\u0A9D\u0A9F\u0AA5\u0AAA\u0AAD\u0AB0\u0AB5\u0ABA\u0ABD\u0AC1\u0AC5\u0ACA" +
		"\u0ACE\u0AD1\u0AD5\u0ADA\u0AE1\u0AE5\u0AE9\u0AED\u0AF2\u0AF5\u0AF8\u0AFE" +
		"\u0B02\u0B06\u0B0A\u0B0D\u0B11\u0B14\u0B18\u0B1B\u0B1E\u0B22\u0B28\u0B2C" +
		"\u0B31\u0B39\u0B3F\u0B41\u0B46\u0B48\u0B4B\u0B51\u0B56\u0B5D\u0B5F\u0B65" +
		"\u0B67\u0B69\u0B72\u0B77\u0B7B\u0B7F\u0B83\u0B86\u0B93\u0B96\u0B9A\u0B9D";
	public static readonly _serializedATN: string = Utils.join(
		[
			BosParser._serializedATNSegment0,
			BosParser._serializedATNSegment1,
			BosParser._serializedATNSegment2,
			BosParser._serializedATNSegment3,
			BosParser._serializedATNSegment4,
			BosParser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BosParser.__ATN) {
			BosParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BosParser._serializedATN));
		}

		return BosParser.__ATN;
	}

}

export class StartRuleContext extends ParserRuleContext {
	public module(): ModuleContext {
		return this.getRuleContext(0, ModuleContext);
	}
	public EOF(): TerminalNode { return this.getToken(BosParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_startRule; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterStartRule) {
			listener.enterStartRule(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitStartRule) {
			listener.exitStartRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitStartRule) {
			return visitor.visitStartRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public moduleHeader(): ModuleHeaderContext | undefined {
		return this.tryGetRuleContext(0, ModuleHeaderContext);
	}
	public moduleReferences(): ModuleReferencesContext | undefined {
		return this.tryGetRuleContext(0, ModuleReferencesContext);
	}
	public moduleImports(): ModuleImportsContext | undefined {
		return this.tryGetRuleContext(0, ModuleImportsContext);
	}
	public controlProperties(): ControlPropertiesContext | undefined {
		return this.tryGetRuleContext(0, ControlPropertiesContext);
	}
	public moduleConfig(): ModuleConfigContext | undefined {
		return this.tryGetRuleContext(0, ModuleConfigContext);
	}
	public moduleAttributes(): ModuleAttributesContext | undefined {
		return this.tryGetRuleContext(0, ModuleAttributesContext);
	}
	public moduleOptions(): ModuleOptionsContext | undefined {
		return this.tryGetRuleContext(0, ModuleOptionsContext);
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_module; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleReferencesContext extends ParserRuleContext {
	public moduleReference(): ModuleReferenceContext[];
	public moduleReference(i: number): ModuleReferenceContext;
	public moduleReference(i?: number): ModuleReferenceContext | ModuleReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleReferenceContext);
		} else {
			return this.getRuleContext(i, ModuleReferenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleReferences; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleReferences) {
			listener.enterModuleReferences(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleReferences) {
			listener.exitModuleReferences(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleReferences) {
			return visitor.visitModuleReferences(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleImportsContext extends ParserRuleContext {
	public importStmt(): ImportStmtContext[];
	public importStmt(i: number): ImportStmtContext;
	public importStmt(i?: number): ImportStmtContext | ImportStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportStmtContext);
		} else {
			return this.getRuleContext(i, ImportStmtContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleImports; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleImports) {
			listener.enterModuleImports(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleImports) {
			listener.exitModuleImports(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleImports) {
			return visitor.visitModuleImports(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleReferenceContext extends ParserRuleContext {
	public OBJECT(): TerminalNode { return this.getToken(BosParser.OBJECT, 0); }
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public moduleReferenceValue(): ModuleReferenceValueContext {
		return this.getRuleContext(0, ModuleReferenceValueContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(BosParser.SEMICOLON, 0); }
	public moduleReferenceComponent(): ModuleReferenceComponentContext | undefined {
		return this.tryGetRuleContext(0, ModuleReferenceComponentContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleReference; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleReference) {
			listener.enterModuleReference(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleReference) {
			listener.exitModuleReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleReference) {
			return visitor.visitModuleReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleReferenceValueContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode { return this.getToken(BosParser.STRINGLITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleReferenceValue; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleReferenceValue) {
			listener.enterModuleReferenceValue(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleReferenceValue) {
			listener.exitModuleReferenceValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleReferenceValue) {
			return visitor.visitModuleReferenceValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleReferenceComponentContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode { return this.getToken(BosParser.STRINGLITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleReferenceComponent; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleReferenceComponent) {
			listener.enterModuleReferenceComponent(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleReferenceComponent) {
			listener.exitModuleReferenceComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleReferenceComponent) {
			return visitor.visitModuleReferenceComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleHeaderContext extends ParserRuleContext {
	public VERSION(): TerminalNode { return this.getToken(BosParser.VERSION, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public DOUBLELITERAL(): TerminalNode { return this.getToken(BosParser.DOUBLELITERAL, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(BosParser.CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleHeader; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleHeader) {
			listener.enterModuleHeader(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleHeader) {
			listener.exitModuleHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleHeader) {
			return visitor.visitModuleHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleConfigContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(BosParser.BEGIN, 0); }
	public END(): TerminalNode { return this.getToken(BosParser.END, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public moduleConfigElement(): ModuleConfigElementContext[];
	public moduleConfigElement(i: number): ModuleConfigElementContext;
	public moduleConfigElement(i?: number): ModuleConfigElementContext | ModuleConfigElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleConfigElementContext);
		} else {
			return this.getRuleContext(i, ModuleConfigElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleConfig; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleConfig) {
			listener.enterModuleConfig(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleConfig) {
			listener.exitModuleConfig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleConfig) {
			return visitor.visitModuleConfig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleConfigElementContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(BosParser.NEWLINE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleConfigElement; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleConfigElement) {
			listener.enterModuleConfigElement(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleConfigElement) {
			listener.exitModuleConfigElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleConfigElement) {
			return visitor.visitModuleConfigElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleAttributesContext extends ParserRuleContext {
	public attributeStmt(): AttributeStmtContext[];
	public attributeStmt(i: number): AttributeStmtContext;
	public attributeStmt(i?: number): AttributeStmtContext | AttributeStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeStmtContext);
		} else {
			return this.getRuleContext(i, AttributeStmtContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleAttributes; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleAttributes) {
			listener.enterModuleAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleAttributes) {
			listener.exitModuleAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleAttributes) {
			return visitor.visitModuleAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleOptionsContext extends ParserRuleContext {
	public moduleOption(): ModuleOptionContext[];
	public moduleOption(i: number): ModuleOptionContext;
	public moduleOption(i?: number): ModuleOptionContext | ModuleOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleOptionContext);
		} else {
			return this.getRuleContext(i, ModuleOptionContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleOptions; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleOptions) {
			listener.enterModuleOptions(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleOptions) {
			listener.exitModuleOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleOptions) {
			return visitor.visitModuleOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleOptionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleOption; }
	public copyFrom(ctx: ModuleOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class OptionBaseStmtContext extends ModuleOptionContext {
	public OPTION_BASE(): TerminalNode { return this.getToken(BosParser.OPTION_BASE, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public INTEGERLITERAL(): TerminalNode { return this.getToken(BosParser.INTEGERLITERAL, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOptionBaseStmt) {
			listener.enterOptionBaseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOptionBaseStmt) {
			listener.exitOptionBaseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOptionBaseStmt) {
			return visitor.visitOptionBaseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionCompareStmtContext extends ModuleOptionContext {
	public OPTION_COMPARE(): TerminalNode { return this.getToken(BosParser.OPTION_COMPARE, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(BosParser.BINARY, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(BosParser.TEXT, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOptionCompareStmt) {
			listener.enterOptionCompareStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOptionCompareStmt) {
			listener.exitOptionCompareStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOptionCompareStmt) {
			return visitor.visitOptionCompareStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionExplicitStmtContext extends ModuleOptionContext {
	public OPTION_EXPLICIT(): TerminalNode { return this.getToken(BosParser.OPTION_EXPLICIT, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOptionExplicitStmt) {
			listener.enterOptionExplicitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOptionExplicitStmt) {
			listener.exitOptionExplicitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOptionExplicitStmt) {
			return visitor.visitOptionExplicitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionPrivateModuleStmtContext extends ModuleOptionContext {
	public OPTION_PRIVATE_MODULE(): TerminalNode { return this.getToken(BosParser.OPTION_PRIVATE_MODULE, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOptionPrivateModuleStmt) {
			listener.enterOptionPrivateModuleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOptionPrivateModuleStmt) {
			listener.exitOptionPrivateModuleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOptionPrivateModuleStmt) {
			return visitor.visitOptionPrivateModuleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	public moduleBodyElement(): ModuleBodyElementContext[];
	public moduleBodyElement(i: number): ModuleBodyElementContext;
	public moduleBodyElement(i?: number): ModuleBodyElementContext | ModuleBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBodyElementContext);
		} else {
			return this.getRuleContext(i, ModuleBodyElementContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleBody; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleBody) {
			listener.enterModuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleBody) {
			listener.exitModuleBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleBody) {
			return visitor.visitModuleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBodyElementContext extends ParserRuleContext {
	public classStmt(): ClassStmtContext | undefined {
		return this.tryGetRuleContext(0, ClassStmtContext);
	}
	public moduleBlock(): ModuleBlockContext | undefined {
		return this.tryGetRuleContext(0, ModuleBlockContext);
	}
	public moduleOption(): ModuleOptionContext | undefined {
		return this.tryGetRuleContext(0, ModuleOptionContext);
	}
	public declareStmt(): DeclareStmtContext | undefined {
		return this.tryGetRuleContext(0, DeclareStmtContext);
	}
	public enumerationStmt(): EnumerationStmtContext | undefined {
		return this.tryGetRuleContext(0, EnumerationStmtContext);
	}
	public eventStmt(): EventStmtContext | undefined {
		return this.tryGetRuleContext(0, EventStmtContext);
	}
	public functionStmt(): FunctionStmtContext | undefined {
		return this.tryGetRuleContext(0, FunctionStmtContext);
	}
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroIfThenElseStmtContext);
	}
	public propertyGetStmt(): PropertyGetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertyGetStmtContext);
	}
	public propertySetStmt(): PropertySetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertySetStmtContext);
	}
	public propertyLetStmt(): PropertyLetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertyLetStmtContext);
	}
	public subStmt(): SubStmtContext | undefined {
		return this.tryGetRuleContext(0, SubStmtContext);
	}
	public typeStmt(): TypeStmtContext | undefined {
		return this.tryGetRuleContext(0, TypeStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleBodyElement; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleBodyElement) {
			listener.enterModuleBodyElement(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleBodyElement) {
			listener.exitModuleBodyElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleBodyElement) {
			return visitor.visitModuleBodyElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public classBodyElement(): ClassBodyElementContext[];
	public classBodyElement(i: number): ClassBodyElementContext;
	public classBodyElement(i?: number): ClassBodyElementContext | ClassBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyElementContext);
		} else {
			return this.getRuleContext(i, ClassBodyElementContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_classBody; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyElementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public declareStmt(): DeclareStmtContext | undefined {
		return this.tryGetRuleContext(0, DeclareStmtContext);
	}
	public enumerationStmt(): EnumerationStmtContext | undefined {
		return this.tryGetRuleContext(0, EnumerationStmtContext);
	}
	public eventStmt(): EventStmtContext | undefined {
		return this.tryGetRuleContext(0, EventStmtContext);
	}
	public functionStmt(): FunctionStmtContext | undefined {
		return this.tryGetRuleContext(0, FunctionStmtContext);
	}
	public propertyGetStmt(): PropertyGetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertyGetStmtContext);
	}
	public propertySetStmt(): PropertySetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertySetStmtContext);
	}
	public subStmt(): SubStmtContext | undefined {
		return this.tryGetRuleContext(0, SubStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_classBodyElement; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterClassBodyElement) {
			listener.enterClassBodyElement(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitClassBodyElement) {
			listener.exitClassBodyElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitClassBodyElement) {
			return visitor.visitClassBodyElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlPropertiesContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(BosParser.BEGIN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public cp_ControlType(): Cp_ControlTypeContext {
		return this.getRuleContext(0, Cp_ControlTypeContext);
	}
	public cp_ControlIdentifier(): Cp_ControlIdentifierContext {
		return this.getRuleContext(0, Cp_ControlIdentifierContext);
	}
	public END(): TerminalNode { return this.getToken(BosParser.END, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public cp_Properties(): Cp_PropertiesContext[];
	public cp_Properties(i: number): Cp_PropertiesContext;
	public cp_Properties(i?: number): Cp_PropertiesContext | Cp_PropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cp_PropertiesContext);
		} else {
			return this.getRuleContext(i, Cp_PropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_controlProperties; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterControlProperties) {
			listener.enterControlProperties(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitControlProperties) {
			listener.exitControlProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitControlProperties) {
			return visitor.visitControlProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_PropertiesContext extends ParserRuleContext {
	public cp_SingleProperty(): Cp_SinglePropertyContext | undefined {
		return this.tryGetRuleContext(0, Cp_SinglePropertyContext);
	}
	public cp_NestedProperty(): Cp_NestedPropertyContext | undefined {
		return this.tryGetRuleContext(0, Cp_NestedPropertyContext);
	}
	public controlProperties(): ControlPropertiesContext | undefined {
		return this.tryGetRuleContext(0, ControlPropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_cp_Properties; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCp_Properties) {
			listener.enterCp_Properties(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCp_Properties) {
			listener.exitCp_Properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCp_Properties) {
			return visitor.visitCp_Properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_SinglePropertyContext extends ParserRuleContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public cp_PropertyValue(): Cp_PropertyValueContext {
		return this.getRuleContext(0, Cp_PropertyValueContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DOLLAR, 0); }
	public FRX_OFFSET(): TerminalNode | undefined { return this.tryGetToken(BosParser.FRX_OFFSET, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_cp_SingleProperty; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCp_SingleProperty) {
			listener.enterCp_SingleProperty(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCp_SingleProperty) {
			listener.exitCp_SingleProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCp_SingleProperty) {
			return visitor.visitCp_SingleProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_PropertyNameContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(BosParser.OBJECT, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.DOT);
		} else {
			return this.getToken(BosParser.DOT, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.LPAREN);
		} else {
			return this.getToken(BosParser.LPAREN, i);
		}
	}
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.RPAREN);
		} else {
			return this.getToken(BosParser.RPAREN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_cp_PropertyName; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCp_PropertyName) {
			listener.enterCp_PropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCp_PropertyName) {
			listener.exitCp_PropertyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCp_PropertyName) {
			return visitor.visitCp_PropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_PropertyValueContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public POW(): TerminalNode | undefined { return this.tryGetToken(BosParser.POW, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DOLLAR, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(BosParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(BosParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_cp_PropertyValue; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCp_PropertyValue) {
			listener.enterCp_PropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCp_PropertyValue) {
			listener.exitCp_PropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCp_PropertyValue) {
			return visitor.visitCp_PropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_NestedPropertyContext extends ParserRuleContext {
	public BEGINPROPERTY(): TerminalNode { return this.getToken(BosParser.BEGINPROPERTY, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public ENDPROPERTY(): TerminalNode { return this.getToken(BosParser.ENDPROPERTY, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public INTEGERLITERAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.INTEGERLITERAL, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	public GUID(): TerminalNode | undefined { return this.tryGetToken(BosParser.GUID, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public cp_Properties(): Cp_PropertiesContext[];
	public cp_Properties(i: number): Cp_PropertiesContext;
	public cp_Properties(i?: number): Cp_PropertiesContext | Cp_PropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cp_PropertiesContext);
		} else {
			return this.getRuleContext(i, Cp_PropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_cp_NestedProperty; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCp_NestedProperty) {
			listener.enterCp_NestedProperty(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCp_NestedProperty) {
			listener.exitCp_NestedProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCp_NestedProperty) {
			return visitor.visitCp_NestedProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_ControlTypeContext extends ParserRuleContext {
	public complexType(): ComplexTypeContext {
		return this.getRuleContext(0, ComplexTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_cp_ControlType; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCp_ControlType) {
			listener.enterCp_ControlType(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCp_ControlType) {
			listener.exitCp_ControlType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCp_ControlType) {
			return visitor.visitCp_ControlType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_ControlIdentifierContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_cp_ControlIdentifier; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCp_ControlIdentifier) {
			listener.enterCp_ControlIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCp_ControlIdentifier) {
			listener.exitCp_ControlIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCp_ControlIdentifier) {
			return visitor.visitCp_ControlIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBlockContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_moduleBlock; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterModuleBlock) {
			listener.enterModuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitModuleBlock) {
			listener.exitModuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitModuleBlock) {
			return visitor.visitModuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(BosParser.IMPORT, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_importStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterImportStmt) {
			listener.enterImportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitImportStmt) {
			listener.exitImportStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitImportStmt) {
			return visitor.visitImportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeStmtContext extends ParserRuleContext {
	public ATTRIBUTE(): TerminalNode { return this.getToken(BosParser.ATTRIBUTE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_attributeStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterAttributeStmt) {
			listener.enterAttributeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitAttributeStmt) {
			listener.exitAttributeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitAttributeStmt) {
			return visitor.visitAttributeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public blockStmt(): BlockStmtContext[];
	public blockStmt(i: number): BlockStmtContext;
	public blockStmt(i?: number): BlockStmtContext | BlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStmtContext);
		} else {
			return this.getRuleContext(i, BlockStmtContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_block; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStmtContext extends ParserRuleContext {
	public appActivateStmt(): AppActivateStmtContext | undefined {
		return this.tryGetRuleContext(0, AppActivateStmtContext);
	}
	public attributeStmt(): AttributeStmtContext | undefined {
		return this.tryGetRuleContext(0, AttributeStmtContext);
	}
	public chDirStmt(): ChDirStmtContext | undefined {
		return this.tryGetRuleContext(0, ChDirStmtContext);
	}
	public chDriveStmt(): ChDriveStmtContext | undefined {
		return this.tryGetRuleContext(0, ChDriveStmtContext);
	}
	public closeStmt(): CloseStmtContext | undefined {
		return this.tryGetRuleContext(0, CloseStmtContext);
	}
	public constStmt(): ConstStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstStmtContext);
	}
	public dateStmt(): DateStmtContext | undefined {
		return this.tryGetRuleContext(0, DateStmtContext);
	}
	public deleteSettingStmt(): DeleteSettingStmtContext | undefined {
		return this.tryGetRuleContext(0, DeleteSettingStmtContext);
	}
	public deftypeStmt(): DeftypeStmtContext | undefined {
		return this.tryGetRuleContext(0, DeftypeStmtContext);
	}
	public doLoopStmt(): DoLoopStmtContext | undefined {
		return this.tryGetRuleContext(0, DoLoopStmtContext);
	}
	public endStmt(): EndStmtContext | undefined {
		return this.tryGetRuleContext(0, EndStmtContext);
	}
	public eraseStmt(): EraseStmtContext | undefined {
		return this.tryGetRuleContext(0, EraseStmtContext);
	}
	public errorStmt(): ErrorStmtContext | undefined {
		return this.tryGetRuleContext(0, ErrorStmtContext);
	}
	public exitStmt(): ExitStmtContext | undefined {
		return this.tryGetRuleContext(0, ExitStmtContext);
	}
	public explicitCallStmt(): ExplicitCallStmtContext | undefined {
		return this.tryGetRuleContext(0, ExplicitCallStmtContext);
	}
	public filecopyStmt(): FilecopyStmtContext | undefined {
		return this.tryGetRuleContext(0, FilecopyStmtContext);
	}
	public forEachStmt(): ForEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ForEachStmtContext);
	}
	public forNextStmt(): ForNextStmtContext | undefined {
		return this.tryGetRuleContext(0, ForNextStmtContext);
	}
	public getStmt(): GetStmtContext | undefined {
		return this.tryGetRuleContext(0, GetStmtContext);
	}
	public goSubStmt(): GoSubStmtContext | undefined {
		return this.tryGetRuleContext(0, GoSubStmtContext);
	}
	public goToStmt(): GoToStmtContext | undefined {
		return this.tryGetRuleContext(0, GoToStmtContext);
	}
	public ifThenElseStmt(): IfThenElseStmtContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStmtContext);
	}
	public implementsStmt(): ImplementsStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplementsStmtContext);
	}
	public inputStmt(): InputStmtContext | undefined {
		return this.tryGetRuleContext(0, InputStmtContext);
	}
	public killStmt(): KillStmtContext | undefined {
		return this.tryGetRuleContext(0, KillStmtContext);
	}
	public letStmt(): LetStmtContext | undefined {
		return this.tryGetRuleContext(0, LetStmtContext);
	}
	public lineInputStmt(): LineInputStmtContext | undefined {
		return this.tryGetRuleContext(0, LineInputStmtContext);
	}
	public lineLabel(): LineLabelContext | undefined {
		return this.tryGetRuleContext(0, LineLabelContext);
	}
	public loadStmt(): LoadStmtContext | undefined {
		return this.tryGetRuleContext(0, LoadStmtContext);
	}
	public lockStmt(): LockStmtContext | undefined {
		return this.tryGetRuleContext(0, LockStmtContext);
	}
	public lsetStmt(): LsetStmtContext | undefined {
		return this.tryGetRuleContext(0, LsetStmtContext);
	}
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroIfThenElseStmtContext);
	}
	public midStmt(): MidStmtContext | undefined {
		return this.tryGetRuleContext(0, MidStmtContext);
	}
	public mkdirStmt(): MkdirStmtContext | undefined {
		return this.tryGetRuleContext(0, MkdirStmtContext);
	}
	public nameStmt(): NameStmtContext | undefined {
		return this.tryGetRuleContext(0, NameStmtContext);
	}
	public onErrorStmt(): OnErrorStmtContext | undefined {
		return this.tryGetRuleContext(0, OnErrorStmtContext);
	}
	public onGoToStmt(): OnGoToStmtContext | undefined {
		return this.tryGetRuleContext(0, OnGoToStmtContext);
	}
	public onGoSubStmt(): OnGoSubStmtContext | undefined {
		return this.tryGetRuleContext(0, OnGoSubStmtContext);
	}
	public openStmt(): OpenStmtContext | undefined {
		return this.tryGetRuleContext(0, OpenStmtContext);
	}
	public printStmt(): PrintStmtContext | undefined {
		return this.tryGetRuleContext(0, PrintStmtContext);
	}
	public putStmt(): PutStmtContext | undefined {
		return this.tryGetRuleContext(0, PutStmtContext);
	}
	public raiseEventStmt(): RaiseEventStmtContext | undefined {
		return this.tryGetRuleContext(0, RaiseEventStmtContext);
	}
	public randomizeStmt(): RandomizeStmtContext | undefined {
		return this.tryGetRuleContext(0, RandomizeStmtContext);
	}
	public redimStmt(): RedimStmtContext | undefined {
		return this.tryGetRuleContext(0, RedimStmtContext);
	}
	public resetStmt(): ResetStmtContext | undefined {
		return this.tryGetRuleContext(0, ResetStmtContext);
	}
	public resumeStmt(): ResumeStmtContext | undefined {
		return this.tryGetRuleContext(0, ResumeStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public rmdirStmt(): RmdirStmtContext | undefined {
		return this.tryGetRuleContext(0, RmdirStmtContext);
	}
	public rsetStmt(): RsetStmtContext | undefined {
		return this.tryGetRuleContext(0, RsetStmtContext);
	}
	public savepictureStmt(): SavepictureStmtContext | undefined {
		return this.tryGetRuleContext(0, SavepictureStmtContext);
	}
	public saveSettingStmt(): SaveSettingStmtContext | undefined {
		return this.tryGetRuleContext(0, SaveSettingStmtContext);
	}
	public seekStmt(): SeekStmtContext | undefined {
		return this.tryGetRuleContext(0, SeekStmtContext);
	}
	public selectCaseStmt(): SelectCaseStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectCaseStmtContext);
	}
	public sendkeysStmt(): SendkeysStmtContext | undefined {
		return this.tryGetRuleContext(0, SendkeysStmtContext);
	}
	public setattrStmt(): SetattrStmtContext | undefined {
		return this.tryGetRuleContext(0, SetattrStmtContext);
	}
	public setStmt(): SetStmtContext | undefined {
		return this.tryGetRuleContext(0, SetStmtContext);
	}
	public stopStmt(): StopStmtContext | undefined {
		return this.tryGetRuleContext(0, StopStmtContext);
	}
	public timeStmt(): TimeStmtContext | undefined {
		return this.tryGetRuleContext(0, TimeStmtContext);
	}
	public unloadStmt(): UnloadStmtContext | undefined {
		return this.tryGetRuleContext(0, UnloadStmtContext);
	}
	public unlockStmt(): UnlockStmtContext | undefined {
		return this.tryGetRuleContext(0, UnlockStmtContext);
	}
	public variableStmt(): VariableStmtContext | undefined {
		return this.tryGetRuleContext(0, VariableStmtContext);
	}
	public whileWendStmt(): WhileWendStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileWendStmtContext);
	}
	public widthStmt(): WidthStmtContext | undefined {
		return this.tryGetRuleContext(0, WidthStmtContext);
	}
	public withStmt(): WithStmtContext | undefined {
		return this.tryGetRuleContext(0, WithStmtContext);
	}
	public writeStmt(): WriteStmtContext | undefined {
		return this.tryGetRuleContext(0, WriteStmtContext);
	}
	public implicitCallStmt_InBlock(): ImplicitCallStmt_InBlockContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InBlockContext);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_blockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterBlockStmt) {
			listener.enterBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitBlockStmt) {
			listener.exitBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitBlockStmt) {
			return visitor.visitBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppActivateStmtContext extends ParserRuleContext {
	public APPACTIVATE(): TerminalNode { return this.getToken(BosParser.APPACTIVATE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(BosParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_appActivateStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterAppActivateStmt) {
			listener.enterAppActivateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitAppActivateStmt) {
			listener.exitAppActivateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitAppActivateStmt) {
			return visitor.visitAppActivateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeepStmtContext extends ParserRuleContext {
	public BEEP(): TerminalNode { return this.getToken(BosParser.BEEP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_beepStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterBeepStmt) {
			listener.enterBeepStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitBeepStmt) {
			listener.exitBeepStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitBeepStmt) {
			return visitor.visitBeepStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChDirStmtContext extends ParserRuleContext {
	public CHDIR(): TerminalNode { return this.getToken(BosParser.CHDIR, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_chDirStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterChDirStmt) {
			listener.enterChDirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitChDirStmt) {
			listener.exitChDirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitChDirStmt) {
			return visitor.visitChDirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChDriveStmtContext extends ParserRuleContext {
	public CHDRIVE(): TerminalNode { return this.getToken(BosParser.CHDRIVE, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_chDriveStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterChDriveStmt) {
			listener.enterChDriveStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitChDriveStmt) {
			listener.exitChDriveStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitChDriveStmt) {
			return visitor.visitChDriveStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassStmtContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(BosParser.CLASS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_CLASS(): TerminalNode { return this.getToken(BosParser.END_CLASS, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_classStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterClassStmt) {
			listener.enterClassStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitClassStmt) {
			listener.exitClassStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitClassStmt) {
			return visitor.visitClassStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CloseStmtContext extends ParserRuleContext {
	public CLOSE(): TerminalNode { return this.getToken(BosParser.CLOSE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_closeStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCloseStmt) {
			listener.enterCloseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCloseStmt) {
			listener.exitCloseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCloseStmt) {
			return visitor.visitCloseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstStmtContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(BosParser.CONST, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public constSubStmt(): ConstSubStmtContext[];
	public constSubStmt(i: number): ConstSubStmtContext;
	public constSubStmt(i?: number): ConstSubStmtContext | ConstSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstSubStmtContext);
		} else {
			return this.getRuleContext(i, ConstSubStmtContext);
		}
	}
	public publicPrivateGlobalVisibility(): PublicPrivateGlobalVisibilityContext | undefined {
		return this.tryGetRuleContext(0, PublicPrivateGlobalVisibilityContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_constStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterConstStmt) {
			listener.enterConstStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitConstStmt) {
			listener.exitConstStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitConstStmt) {
			return visitor.visitConstStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstSubStmtContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_constSubStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterConstSubStmt) {
			listener.enterConstSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitConstSubStmt) {
			listener.exitConstSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitConstSubStmt) {
			return visitor.visitConstSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateStmtContext extends ParserRuleContext {
	public DATE(): TerminalNode { return this.getToken(BosParser.DATE, 0); }
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_dateStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterDateStmt) {
			listener.enterDateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitDateStmt) {
			listener.exitDateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitDateStmt) {
			return visitor.visitDateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareStmtContext extends ParserRuleContext {
	public DECLARE(): TerminalNode { return this.getToken(BosParser.DECLARE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LIB(): TerminalNode { return this.getToken(BosParser.LIB, 0); }
	public STRINGLITERAL(): TerminalNode[];
	public STRINGLITERAL(i: number): TerminalNode;
	public STRINGLITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.STRINGLITERAL);
		} else {
			return this.getToken(BosParser.STRINGLITERAL, i);
		}
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(BosParser.FUNCTION, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(BosParser.SUB, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public typeHint(): TypeHintContext[];
	public typeHint(i: number): TypeHintContext;
	public typeHint(i?: number): TypeHintContext | TypeHintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeHintContext);
		} else {
			return this.getRuleContext(i, TypeHintContext);
		}
	}
	public ALIAS(): TerminalNode | undefined { return this.tryGetToken(BosParser.ALIAS, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_declareStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterDeclareStmt) {
			listener.enterDeclareStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitDeclareStmt) {
			listener.exitDeclareStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitDeclareStmt) {
			return visitor.visitDeclareStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeftypeStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public letterrange(): LetterrangeContext[];
	public letterrange(i: number): LetterrangeContext;
	public letterrange(i?: number): LetterrangeContext | LetterrangeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LetterrangeContext);
		} else {
			return this.getRuleContext(i, LetterrangeContext);
		}
	}
	public DEFBOOL(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFBOOL, 0); }
	public DEFBYTE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFBYTE, 0); }
	public DEFINT(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFINT, 0); }
	public DEFLNG(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFLNG, 0); }
	public DEFCUR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFCUR, 0); }
	public DEFSNG(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFSNG, 0); }
	public DEFDBL(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFDBL, 0); }
	public DEFDEC(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFDEC, 0); }
	public DEFDATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFDATE, 0); }
	public DEFSTR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFSTR, 0); }
	public DEFOBJ(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFOBJ, 0); }
	public DEFVAR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFVAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_deftypeStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterDeftypeStmt) {
			listener.enterDeftypeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitDeftypeStmt) {
			listener.exitDeftypeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitDeftypeStmt) {
			return visitor.visitDeftypeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteSettingStmtContext extends ParserRuleContext {
	public DELETESETTING(): TerminalNode { return this.getToken(BosParser.DELETESETTING, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_deleteSettingStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterDeleteSettingStmt) {
			listener.enterDeleteSettingStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitDeleteSettingStmt) {
			listener.exitDeleteSettingStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitDeleteSettingStmt) {
			return visitor.visitDeleteSettingStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoLoopStmtContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(BosParser.DO, 0); }
	public LOOP(): TerminalNode { return this.getToken(BosParser.LOOP, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(BosParser.WHILE, 0); }
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(BosParser.UNTIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_doLoopStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterDoLoopStmt) {
			listener.enterDoLoopStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitDoLoopStmt) {
			listener.exitDoLoopStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitDoLoopStmt) {
			return visitor.visitDoLoopStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndStmtContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(BosParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_endStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterEndStmt) {
			listener.enterEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitEndStmt) {
			listener.exitEndStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitEndStmt) {
			return visitor.visitEndStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationStmtContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(BosParser.ENUM, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_ENUM(): TerminalNode { return this.getToken(BosParser.END_ENUM, 0); }
	public publicPrivateVisibility(): PublicPrivateVisibilityContext | undefined {
		return this.tryGetRuleContext(0, PublicPrivateVisibilityContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public enumerationStmt_Constant(): EnumerationStmt_ConstantContext[];
	public enumerationStmt_Constant(i: number): EnumerationStmt_ConstantContext;
	public enumerationStmt_Constant(i?: number): EnumerationStmt_ConstantContext | EnumerationStmt_ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumerationStmt_ConstantContext);
		} else {
			return this.getRuleContext(i, EnumerationStmt_ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_enumerationStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterEnumerationStmt) {
			listener.enterEnumerationStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitEnumerationStmt) {
			listener.exitEnumerationStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitEnumerationStmt) {
			return visitor.visitEnumerationStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationStmt_ConstantContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_enumerationStmt_Constant; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterEnumerationStmt_Constant) {
			listener.enterEnumerationStmt_Constant(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitEnumerationStmt_Constant) {
			listener.exitEnumerationStmt_Constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitEnumerationStmt_Constant) {
			return visitor.visitEnumerationStmt_Constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EraseStmtContext extends ParserRuleContext {
	public ERASE(): TerminalNode { return this.getToken(BosParser.ERASE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_eraseStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterEraseStmt) {
			listener.enterEraseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitEraseStmt) {
			listener.exitEraseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitEraseStmt) {
			return visitor.visitEraseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorStmtContext extends ParserRuleContext {
	public ERROR(): TerminalNode { return this.getToken(BosParser.ERROR, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_errorStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterErrorStmt) {
			listener.enterErrorStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitErrorStmt) {
			listener.exitErrorStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitErrorStmt) {
			return visitor.visitErrorStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventStmtContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(BosParser.EVENT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public argList(): ArgListContext {
		return this.getRuleContext(0, ArgListContext);
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_eventStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterEventStmt) {
			listener.enterEventStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitEventStmt) {
			listener.exitEventStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitEventStmt) {
			return visitor.visitEventStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExitStmtContext extends ParserRuleContext {
	public EXIT_DO(): TerminalNode | undefined { return this.tryGetToken(BosParser.EXIT_DO, 0); }
	public EXIT_FOR(): TerminalNode | undefined { return this.tryGetToken(BosParser.EXIT_FOR, 0); }
	public EXIT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(BosParser.EXIT_FUNCTION, 0); }
	public EXIT_PROPERTY(): TerminalNode | undefined { return this.tryGetToken(BosParser.EXIT_PROPERTY, 0); }
	public EXIT_SUB(): TerminalNode | undefined { return this.tryGetToken(BosParser.EXIT_SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_exitStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterExitStmt) {
			listener.enterExitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitExitStmt) {
			listener.exitExitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitExitStmt) {
			return visitor.visitExitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilecopyStmtContext extends ParserRuleContext {
	public FILECOPY(): TerminalNode { return this.getToken(BosParser.FILECOPY, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(BosParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_filecopyStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterFilecopyStmt) {
			listener.enterFilecopyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitFilecopyStmt) {
			listener.exitFilecopyStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitFilecopyStmt) {
			return visitor.visitFilecopyStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForEachStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(BosParser.FOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public EACH(): TerminalNode { return this.getToken(BosParser.EACH, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(BosParser.IN, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public NEXT(): TerminalNode { return this.getToken(BosParser.NEXT, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_forEachStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterForEachStmt) {
			listener.enterForEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitForEachStmt) {
			listener.exitForEachStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitForEachStmt) {
			return visitor.visitForEachStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForNextStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(BosParser.FOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		return this.getRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(BosParser.TO, 0); }
	public NEXT(): TerminalNode { return this.getToken(BosParser.NEXT, 0); }
	public typeHint(): TypeHintContext[];
	public typeHint(i: number): TypeHintContext;
	public typeHint(i?: number): TypeHintContext | TypeHintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeHintContext);
		} else {
			return this.getRuleContext(i, TypeHintContext);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public STEP(): TerminalNode | undefined { return this.tryGetToken(BosParser.STEP, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_forNextStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterForNextStmt) {
			listener.enterForNextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitForNextStmt) {
			listener.exitForNextStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitForNextStmt) {
			return visitor.visitForNextStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStmtContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(BosParser.FUNCTION, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_FUNCTION(): TerminalNode { return this.getToken(BosParser.END_FUNCTION, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_functionStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterFunctionStmt) {
			listener.enterFunctionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitFunctionStmt) {
			listener.exitFunctionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitFunctionStmt) {
			return visitor.visitFunctionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetStmtContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(BosParser.GET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_getStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterGetStmt) {
			listener.enterGetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitGetStmt) {
			listener.exitGetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitGetStmt) {
			return visitor.visitGetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GoSubStmtContext extends ParserRuleContext {
	public GOSUB(): TerminalNode { return this.getToken(BosParser.GOSUB, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_goSubStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterGoSubStmt) {
			listener.enterGoSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitGoSubStmt) {
			listener.exitGoSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitGoSubStmt) {
			return visitor.visitGoSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GoToStmtContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(BosParser.GOTO, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_goToStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterGoToStmt) {
			listener.enterGoToStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitGoToStmt) {
			listener.exitGoToStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitGoToStmt) {
			return visitor.visitGoToStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_ifThenElseStmt; }
	public copyFrom(ctx: IfThenElseStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class InlineIfThenElseContext extends IfThenElseStmtContext {
	public IF(): TerminalNode { return this.getToken(BosParser.IF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(BosParser.THEN, 0); }
	public blockStmt(): BlockStmtContext[];
	public blockStmt(i: number): BlockStmtContext;
	public blockStmt(i?: number): BlockStmtContext | BlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStmtContext);
		} else {
			return this.getRuleContext(i, BlockStmtContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(BosParser.ELSE, 0); }
	constructor(ctx: IfThenElseStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterInlineIfThenElse) {
			listener.enterInlineIfThenElse(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitInlineIfThenElse) {
			listener.exitInlineIfThenElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitInlineIfThenElse) {
			return visitor.visitInlineIfThenElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockIfThenElseContext extends IfThenElseStmtContext {
	public ifBlockStmt(): IfBlockStmtContext {
		return this.getRuleContext(0, IfBlockStmtContext);
	}
	public END_IF(): TerminalNode { return this.getToken(BosParser.END_IF, 0); }
	public ifElseIfBlockStmt(): IfElseIfBlockStmtContext[];
	public ifElseIfBlockStmt(i: number): IfElseIfBlockStmtContext;
	public ifElseIfBlockStmt(i?: number): IfElseIfBlockStmtContext | IfElseIfBlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfElseIfBlockStmtContext);
		} else {
			return this.getRuleContext(i, IfElseIfBlockStmtContext);
		}
	}
	public ifElseBlockStmt(): IfElseBlockStmtContext | undefined {
		return this.tryGetRuleContext(0, IfElseBlockStmtContext);
	}
	constructor(ctx: IfThenElseStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterBlockIfThenElse) {
			listener.enterBlockIfThenElse(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitBlockIfThenElse) {
			listener.exitBlockIfThenElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitBlockIfThenElse) {
			return visitor.visitBlockIfThenElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfBlockStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(BosParser.IF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(BosParser.THEN, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_ifBlockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterIfBlockStmt) {
			listener.enterIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitIfBlockStmt) {
			listener.exitIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitIfBlockStmt) {
			return visitor.visitIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfConditionStmtContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_ifConditionStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterIfConditionStmt) {
			listener.enterIfConditionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitIfConditionStmt) {
			listener.exitIfConditionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitIfConditionStmt) {
			return visitor.visitIfConditionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseIfBlockStmtContext extends ParserRuleContext {
	public ELSEIF(): TerminalNode { return this.getToken(BosParser.ELSEIF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(BosParser.THEN, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_ifElseIfBlockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterIfElseIfBlockStmt) {
			listener.enterIfElseIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitIfElseIfBlockStmt) {
			listener.exitIfElseIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitIfElseIfBlockStmt) {
			return visitor.visitIfElseIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseBlockStmtContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(BosParser.ELSE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_ifElseBlockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterIfElseBlockStmt) {
			listener.enterIfElseBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitIfElseBlockStmt) {
			listener.exitIfElseBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitIfElseBlockStmt) {
			return visitor.visitIfElseBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementsStmtContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(BosParser.IMPLEMENTS, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_implementsStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterImplementsStmt) {
			listener.enterImplementsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitImplementsStmt) {
			listener.exitImplementsStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitImplementsStmt) {
			return visitor.visitImplementsStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputStmtContext extends ParserRuleContext {
	public INPUT(): TerminalNode { return this.getToken(BosParser.INPUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_inputStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterInputStmt) {
			listener.enterInputStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitInputStmt) {
			listener.exitInputStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitInputStmt) {
			return visitor.visitInputStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KillStmtContext extends ParserRuleContext {
	public KILL(): TerminalNode { return this.getToken(BosParser.KILL, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_killStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterKillStmt) {
			listener.enterKillStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitKillStmt) {
			listener.exitKillStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitKillStmt) {
			return visitor.visitKillStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStmtContext extends ParserRuleContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.MINUS_EQ, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(BosParser.LET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_letStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterLetStmt) {
			listener.enterLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitLetStmt) {
			listener.exitLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitLetStmt) {
			return visitor.visitLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineInputStmtContext extends ParserRuleContext {
	public LINE_INPUT(): TerminalNode { return this.getToken(BosParser.LINE_INPUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(BosParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_lineInputStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterLineInputStmt) {
			listener.enterLineInputStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitLineInputStmt) {
			listener.exitLineInputStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitLineInputStmt) {
			return visitor.visitLineInputStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadStmtContext extends ParserRuleContext {
	public LOAD(): TerminalNode { return this.getToken(BosParser.LOAD, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_loadStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterLoadStmt) {
			listener.enterLoadStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitLoadStmt) {
			listener.exitLoadStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitLoadStmt) {
			return visitor.visitLoadStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LockStmtContext extends ParserRuleContext {
	public LOCK(): TerminalNode { return this.getToken(BosParser.LOCK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(BosParser.COMMA, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(BosParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_lockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterLockStmt) {
			listener.enterLockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitLockStmt) {
			listener.exitLockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitLockStmt) {
			return visitor.visitLockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LsetStmtContext extends ParserRuleContext {
	public LSET(): TerminalNode { return this.getToken(BosParser.LSET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_lsetStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterLsetStmt) {
			listener.enterLsetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitLsetStmt) {
			listener.exitLsetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitLsetStmt) {
			return visitor.visitLsetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroIfThenElseStmtContext extends ParserRuleContext {
	public macroIfBlockStmt(): MacroIfBlockStmtContext {
		return this.getRuleContext(0, MacroIfBlockStmtContext);
	}
	public MACRO_END_IF(): TerminalNode { return this.getToken(BosParser.MACRO_END_IF, 0); }
	public macroElseIfBlockStmt(): MacroElseIfBlockStmtContext[];
	public macroElseIfBlockStmt(i: number): MacroElseIfBlockStmtContext;
	public macroElseIfBlockStmt(i?: number): MacroElseIfBlockStmtContext | MacroElseIfBlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MacroElseIfBlockStmtContext);
		} else {
			return this.getRuleContext(i, MacroElseIfBlockStmtContext);
		}
	}
	public macroElseBlockStmt(): MacroElseBlockStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroElseBlockStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_macroIfThenElseStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterMacroIfThenElseStmt) {
			listener.enterMacroIfThenElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitMacroIfThenElseStmt) {
			listener.exitMacroIfThenElseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitMacroIfThenElseStmt) {
			return visitor.visitMacroIfThenElseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroIfBlockStmtContext extends ParserRuleContext {
	public MACRO_IF(): TerminalNode { return this.getToken(BosParser.MACRO_IF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(BosParser.THEN, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_macroIfBlockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterMacroIfBlockStmt) {
			listener.enterMacroIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitMacroIfBlockStmt) {
			listener.exitMacroIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitMacroIfBlockStmt) {
			return visitor.visitMacroIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroElseIfBlockStmtContext extends ParserRuleContext {
	public MACRO_ELSEIF(): TerminalNode { return this.getToken(BosParser.MACRO_ELSEIF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(BosParser.THEN, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_macroElseIfBlockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterMacroElseIfBlockStmt) {
			listener.enterMacroElseIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitMacroElseIfBlockStmt) {
			listener.exitMacroElseIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitMacroElseIfBlockStmt) {
			return visitor.visitMacroElseIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroElseBlockStmtContext extends ParserRuleContext {
	public MACRO_ELSE(): TerminalNode { return this.getToken(BosParser.MACRO_ELSE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_macroElseBlockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterMacroElseBlockStmt) {
			listener.enterMacroElseBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitMacroElseBlockStmt) {
			listener.exitMacroElseBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitMacroElseBlockStmt) {
			return visitor.visitMacroElseBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MidStmtContext extends ParserRuleContext {
	public MID(): TerminalNode { return this.getToken(BosParser.MID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(BosParser.LPAREN, 0); }
	public argsCall(): ArgsCallContext {
		return this.getRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(BosParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_midStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterMidStmt) {
			listener.enterMidStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitMidStmt) {
			listener.exitMidStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitMidStmt) {
			return visitor.visitMidStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MkdirStmtContext extends ParserRuleContext {
	public MKDIR(): TerminalNode { return this.getToken(BosParser.MKDIR, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_mkdirStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterMkdirStmt) {
			listener.enterMkdirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitMkdirStmt) {
			listener.exitMkdirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitMkdirStmt) {
			return visitor.visitMkdirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameStmtContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(BosParser.NAME, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AS(): TerminalNode { return this.getToken(BosParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_nameStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterNameStmt) {
			listener.enterNameStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitNameStmt) {
			listener.exitNameStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitNameStmt) {
			return visitor.visitNameStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnErrorStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ON_ERROR(): TerminalNode | undefined { return this.tryGetToken(BosParser.ON_ERROR, 0); }
	public ON_LOCAL_ERROR(): TerminalNode | undefined { return this.tryGetToken(BosParser.ON_LOCAL_ERROR, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(BosParser.GOTO, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public RESUME(): TerminalNode | undefined { return this.tryGetToken(BosParser.RESUME, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(BosParser.NEXT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(BosParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_onErrorStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOnErrorStmt) {
			listener.enterOnErrorStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOnErrorStmt) {
			listener.exitOnErrorStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOnErrorStmt) {
			return visitor.visitOnErrorStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnGoToStmtContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(BosParser.ON, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GOTO(): TerminalNode { return this.getToken(BosParser.GOTO, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_onGoToStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOnGoToStmt) {
			listener.enterOnGoToStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOnGoToStmt) {
			listener.exitOnGoToStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOnGoToStmt) {
			return visitor.visitOnGoToStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnGoSubStmtContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(BosParser.ON, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GOSUB(): TerminalNode { return this.getToken(BosParser.GOSUB, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_onGoSubStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOnGoSubStmt) {
			listener.enterOnGoSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOnGoSubStmt) {
			listener.exitOnGoSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOnGoSubStmt) {
			return visitor.visitOnGoSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(BosParser.OPEN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public FOR(): TerminalNode { return this.getToken(BosParser.FOR, 0); }
	public AS(): TerminalNode { return this.getToken(BosParser.AS, 0); }
	public APPEND(): TerminalNode | undefined { return this.tryGetToken(BosParser.APPEND, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(BosParser.BINARY, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(BosParser.INPUT, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(BosParser.OUTPUT, 0); }
	public RANDOM(): TerminalNode | undefined { return this.tryGetToken(BosParser.RANDOM, 0); }
	public ACCESS(): TerminalNode | undefined { return this.tryGetToken(BosParser.ACCESS, 0); }
	public LEN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LEN, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.EQ, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(BosParser.READ, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(BosParser.WRITE, 0); }
	public READ_WRITE(): TerminalNode | undefined { return this.tryGetToken(BosParser.READ_WRITE, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(BosParser.SHARED, 0); }
	public LOCK_READ(): TerminalNode | undefined { return this.tryGetToken(BosParser.LOCK_READ, 0); }
	public LOCK_WRITE(): TerminalNode | undefined { return this.tryGetToken(BosParser.LOCK_WRITE, 0); }
	public LOCK_READ_WRITE(): TerminalNode | undefined { return this.tryGetToken(BosParser.LOCK_READ_WRITE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_openStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOpenStmt) {
			listener.enterOpenStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOpenStmt) {
			listener.exitOpenStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOpenStmt) {
			return visitor.visitOpenStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputListContext extends ParserRuleContext {
	public outputList_Expression(): OutputList_ExpressionContext[];
	public outputList_Expression(i: number): OutputList_ExpressionContext;
	public outputList_Expression(i?: number): OutputList_ExpressionContext | OutputList_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OutputList_ExpressionContext);
		} else {
			return this.getRuleContext(i, OutputList_ExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.SEMICOLON);
		} else {
			return this.getToken(BosParser.SEMICOLON, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_outputList; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOutputList) {
			listener.enterOutputList(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOutputList) {
			listener.exitOutputList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOutputList) {
			return visitor.visitOutputList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputList_ExpressionContext extends ParserRuleContext {
	public SPC(): TerminalNode | undefined { return this.tryGetToken(BosParser.SPC, 0); }
	public TAB(): TerminalNode | undefined { return this.tryGetToken(BosParser.TAB, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_outputList_Expression; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterOutputList_Expression) {
			listener.enterOutputList_Expression(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitOutputList_Expression) {
			listener.exitOutputList_Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitOutputList_Expression) {
			return visitor.visitOutputList_Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStmtContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(BosParser.PRINT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public COMMA(): TerminalNode { return this.getToken(BosParser.COMMA, 0); }
	public outputList(): OutputListContext | undefined {
		return this.tryGetRuleContext(0, OutputListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_printStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterPrintStmt) {
			listener.enterPrintStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitPrintStmt) {
			listener.exitPrintStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitPrintStmt) {
			return visitor.visitPrintStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyGetStmtContext extends ParserRuleContext {
	public PROPERTY_GET(): TerminalNode { return this.getToken(BosParser.PROPERTY_GET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(BosParser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.STATIC, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_propertyGetStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterPropertyGetStmt) {
			listener.enterPropertyGetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitPropertyGetStmt) {
			listener.exitPropertyGetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitPropertyGetStmt) {
			return visitor.visitPropertyGetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertySetStmtContext extends ParserRuleContext {
	public PROPERTY_SET(): TerminalNode { return this.getToken(BosParser.PROPERTY_SET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(BosParser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_propertySetStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterPropertySetStmt) {
			listener.enterPropertySetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitPropertySetStmt) {
			listener.exitPropertySetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitPropertySetStmt) {
			return visitor.visitPropertySetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyLetStmtContext extends ParserRuleContext {
	public PROPERTY_LET(): TerminalNode { return this.getToken(BosParser.PROPERTY_LET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(BosParser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_propertyLetStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterPropertyLetStmt) {
			listener.enterPropertyLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitPropertyLetStmt) {
			listener.exitPropertyLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitPropertyLetStmt) {
			return visitor.visitPropertyLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PutStmtContext extends ParserRuleContext {
	public PUT(): TerminalNode { return this.getToken(BosParser.PUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_putStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterPutStmt) {
			listener.enterPutStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitPutStmt) {
			listener.exitPutStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitPutStmt) {
			return visitor.visitPutStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RaiseEventStmtContext extends ParserRuleContext {
	public RAISEEVENT(): TerminalNode { return this.getToken(BosParser.RAISEEVENT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_raiseEventStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterRaiseEventStmt) {
			listener.enterRaiseEventStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitRaiseEventStmt) {
			listener.exitRaiseEventStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitRaiseEventStmt) {
			return visitor.visitRaiseEventStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomizeStmtContext extends ParserRuleContext {
	public RANDOMIZE(): TerminalNode { return this.getToken(BosParser.RANDOMIZE, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_randomizeStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterRandomizeStmt) {
			listener.enterRandomizeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitRandomizeStmt) {
			listener.exitRandomizeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitRandomizeStmt) {
			return visitor.visitRandomizeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedimStmtContext extends ParserRuleContext {
	public REDIM(): TerminalNode { return this.getToken(BosParser.REDIM, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public redimSubStmt(): RedimSubStmtContext[];
	public redimSubStmt(i: number): RedimSubStmtContext;
	public redimSubStmt(i?: number): RedimSubStmtContext | RedimSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RedimSubStmtContext);
		} else {
			return this.getRuleContext(i, RedimSubStmtContext);
		}
	}
	public PRESERVE(): TerminalNode | undefined { return this.tryGetToken(BosParser.PRESERVE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_redimStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterRedimStmt) {
			listener.enterRedimStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitRedimStmt) {
			listener.exitRedimStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitRedimStmt) {
			return visitor.visitRedimStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedimSubStmtContext extends ParserRuleContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(BosParser.LPAREN, 0); }
	public subscripts(): SubscriptsContext {
		return this.getRuleContext(0, SubscriptsContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(BosParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_redimSubStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterRedimSubStmt) {
			listener.enterRedimSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitRedimSubStmt) {
			listener.exitRedimSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitRedimSubStmt) {
			return visitor.visitRedimSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetStmtContext extends ParserRuleContext {
	public RESET(): TerminalNode { return this.getToken(BosParser.RESET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_resetStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterResetStmt) {
			listener.enterResetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitResetStmt) {
			listener.exitResetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitResetStmt) {
			return visitor.visitResetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResumeStmtContext extends ParserRuleContext {
	public RESUME(): TerminalNode { return this.getToken(BosParser.RESUME, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(BosParser.NEXT, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_resumeStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterResumeStmt) {
			listener.enterResumeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitResumeStmt) {
			listener.exitResumeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitResumeStmt) {
			return visitor.visitResumeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(BosParser.RETURN, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RmdirStmtContext extends ParserRuleContext {
	public RMDIR(): TerminalNode { return this.getToken(BosParser.RMDIR, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_rmdirStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterRmdirStmt) {
			listener.enterRmdirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitRmdirStmt) {
			listener.exitRmdirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitRmdirStmt) {
			return visitor.visitRmdirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RsetStmtContext extends ParserRuleContext {
	public RSET(): TerminalNode { return this.getToken(BosParser.RSET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_rsetStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterRsetStmt) {
			listener.enterRsetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitRsetStmt) {
			listener.exitRsetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitRsetStmt) {
			return visitor.visitRsetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SavepictureStmtContext extends ParserRuleContext {
	public SAVEPICTURE(): TerminalNode { return this.getToken(BosParser.SAVEPICTURE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(BosParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_savepictureStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSavepictureStmt) {
			listener.enterSavepictureStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSavepictureStmt) {
			listener.exitSavepictureStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSavepictureStmt) {
			return visitor.visitSavepictureStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SaveSettingStmtContext extends ParserRuleContext {
	public SAVESETTING(): TerminalNode { return this.getToken(BosParser.SAVESETTING, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_saveSettingStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSaveSettingStmt) {
			listener.enterSaveSettingStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSaveSettingStmt) {
			listener.exitSaveSettingStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSaveSettingStmt) {
			return visitor.visitSaveSettingStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SeekStmtContext extends ParserRuleContext {
	public SEEK(): TerminalNode { return this.getToken(BosParser.SEEK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(BosParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_seekStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSeekStmt) {
			listener.enterSeekStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSeekStmt) {
			listener.exitSeekStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSeekStmt) {
			return visitor.visitSeekStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectCaseStmtContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(BosParser.SELECT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public CASE(): TerminalNode { return this.getToken(BosParser.CASE, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public END_SELECT(): TerminalNode { return this.getToken(BosParser.END_SELECT, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public sC_Case(): SC_CaseContext[];
	public sC_Case(i: number): SC_CaseContext;
	public sC_Case(i?: number): SC_CaseContext | SC_CaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SC_CaseContext);
		} else {
			return this.getRuleContext(i, SC_CaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_selectCaseStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSelectCaseStmt) {
			listener.enterSelectCaseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSelectCaseStmt) {
			listener.exitSelectCaseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSelectCaseStmt) {
			return visitor.visitSelectCaseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_CaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(BosParser.CASE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public sC_Cond(): SC_CondContext {
		return this.getRuleContext(0, SC_CondContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(BosParser.COLON, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_sC_Case; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSC_Case) {
			listener.enterSC_Case(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSC_Case) {
			listener.exitSC_Case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSC_Case) {
			return visitor.visitSC_Case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_CondContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_sC_Cond; }
	public copyFrom(ctx: SC_CondContext): void {
		super.copyFrom(ctx);
	}
}
export class CaseCondElseContext extends SC_CondContext {
	public ELSE(): TerminalNode { return this.getToken(BosParser.ELSE, 0); }
	constructor(ctx: SC_CondContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCaseCondElse) {
			listener.enterCaseCondElse(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCaseCondElse) {
			listener.exitCaseCondElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCaseCondElse) {
			return visitor.visitCaseCondElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondExprContext extends SC_CondContext {
	public sC_CondExpr(): SC_CondExprContext[];
	public sC_CondExpr(i: number): SC_CondExprContext;
	public sC_CondExpr(i?: number): SC_CondExprContext | SC_CondExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SC_CondExprContext);
		} else {
			return this.getRuleContext(i, SC_CondExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: SC_CondContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCaseCondExpr) {
			listener.enterCaseCondExpr(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCaseCondExpr) {
			listener.exitCaseCondExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCaseCondExpr) {
			return visitor.visitCaseCondExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_CondExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_sC_CondExpr; }
	public copyFrom(ctx: SC_CondExprContext): void {
		super.copyFrom(ctx);
	}
}
export class CaseCondExprIsContext extends SC_CondExprContext {
	public IS(): TerminalNode { return this.getToken(BosParser.IS, 0); }
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: SC_CondExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCaseCondExprIs) {
			listener.enterCaseCondExprIs(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCaseCondExprIs) {
			listener.exitCaseCondExprIs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCaseCondExprIs) {
			return visitor.visitCaseCondExprIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondExprValueContext extends SC_CondExprContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(ctx: SC_CondExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCaseCondExprValue) {
			listener.enterCaseCondExprValue(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCaseCondExprValue) {
			listener.exitCaseCondExprValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCaseCondExprValue) {
			return visitor.visitCaseCondExprValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondExprToContext extends SC_CondExprContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public TO(): TerminalNode { return this.getToken(BosParser.TO, 0); }
	constructor(ctx: SC_CondExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCaseCondExprTo) {
			listener.enterCaseCondExprTo(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCaseCondExprTo) {
			listener.exitCaseCondExprTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCaseCondExprTo) {
			return visitor.visitCaseCondExprTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SendkeysStmtContext extends ParserRuleContext {
	public SENDKEYS(): TerminalNode { return this.getToken(BosParser.SENDKEYS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(BosParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_sendkeysStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSendkeysStmt) {
			listener.enterSendkeysStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSendkeysStmt) {
			listener.exitSendkeysStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSendkeysStmt) {
			return visitor.visitSendkeysStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetattrStmtContext extends ParserRuleContext {
	public SETATTR(): TerminalNode { return this.getToken(BosParser.SETATTR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(BosParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_setattrStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSetattrStmt) {
			listener.enterSetattrStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSetattrStmt) {
			listener.exitSetattrStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSetattrStmt) {
			return visitor.visitSetattrStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetStmtContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(BosParser.SET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_setStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSetStmt) {
			listener.enterSetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSetStmt) {
			listener.exitSetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSetStmt) {
			return visitor.visitSetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StopStmtContext extends ParserRuleContext {
	public STOP(): TerminalNode { return this.getToken(BosParser.STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_stopStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterStopStmt) {
			listener.enterStopStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitStopStmt) {
			listener.exitStopStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitStopStmt) {
			return visitor.visitStopStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubStmtContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(BosParser.SUB, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_SUB(): TerminalNode { return this.getToken(BosParser.END_SUB, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_subStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSubStmt) {
			listener.enterSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSubStmt) {
			listener.exitSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSubStmt) {
			return visitor.visitSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeStmtContext extends ParserRuleContext {
	public TIME(): TerminalNode { return this.getToken(BosParser.TIME, 0); }
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_timeStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterTimeStmt) {
			listener.enterTimeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitTimeStmt) {
			listener.exitTimeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitTimeStmt) {
			return visitor.visitTimeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStmtContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(BosParser.TYPE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_TYPE(): TerminalNode { return this.getToken(BosParser.END_TYPE, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public typeStmt_Element(): TypeStmt_ElementContext[];
	public typeStmt_Element(i: number): TypeStmt_ElementContext;
	public typeStmt_Element(i?: number): TypeStmt_ElementContext | TypeStmt_ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeStmt_ElementContext);
		} else {
			return this.getRuleContext(i, TypeStmt_ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_typeStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterTypeStmt) {
			listener.enterTypeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitTypeStmt) {
			listener.exitTypeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitTypeStmt) {
			return visitor.visitTypeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStmt_ElementContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public subscripts(): SubscriptsContext | undefined {
		return this.tryGetRuleContext(0, SubscriptsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_typeStmt_Element; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterTypeStmt_Element) {
			listener.enterTypeStmt_Element(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitTypeStmt_Element) {
			listener.exitTypeStmt_Element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitTypeStmt_Element) {
			return visitor.visitTypeStmt_Element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeOfStmtContext extends ParserRuleContext {
	public TYPEOF(): TerminalNode { return this.getToken(BosParser.TYPEOF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(BosParser.IS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_typeOfStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterTypeOfStmt) {
			listener.enterTypeOfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitTypeOfStmt) {
			listener.exitTypeOfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitTypeOfStmt) {
			return visitor.visitTypeOfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnloadStmtContext extends ParserRuleContext {
	public UNLOAD(): TerminalNode { return this.getToken(BosParser.UNLOAD, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_unloadStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterUnloadStmt) {
			listener.enterUnloadStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitUnloadStmt) {
			listener.exitUnloadStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitUnloadStmt) {
			return visitor.visitUnloadStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnlockStmtContext extends ParserRuleContext {
	public UNLOCK(): TerminalNode { return this.getToken(BosParser.UNLOCK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(BosParser.COMMA, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(BosParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_unlockStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterUnlockStmt) {
			listener.enterUnlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitUnlockStmt) {
			listener.exitUnlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitUnlockStmt) {
			return visitor.visitUnlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_valueStmt; }
	public copyFrom(ctx: ValueStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class VsLiteralContext extends ValueStmtContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsLiteral) {
			listener.enterVsLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsLiteral) {
			listener.exitVsLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsLiteral) {
			return visitor.visitVsLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsStructContext extends ValueStmtContext {
	public LPAREN(): TerminalNode { return this.getToken(BosParser.LPAREN, 0); }
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(BosParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsStruct) {
			listener.enterVsStruct(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsStruct) {
			listener.exitVsStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsStruct) {
			return visitor.visitVsStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNewContext extends ValueStmtContext {
	public NEW(): TerminalNode { return this.getToken(BosParser.NEW, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsNew) {
			listener.enterVsNew(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsNew) {
			listener.exitVsNew(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsNew) {
			return visitor.visitVsNew(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsTypeOfContext extends ValueStmtContext {
	public typeOfStmt(): TypeOfStmtContext {
		return this.getRuleContext(0, TypeOfStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsTypeOf) {
			listener.enterVsTypeOf(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsTypeOf) {
			listener.exitVsTypeOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsTypeOf) {
			return visitor.visitVsTypeOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAddressOfContext extends ValueStmtContext {
	public ADDRESSOF(): TerminalNode { return this.getToken(BosParser.ADDRESSOF, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsAddressOf) {
			listener.enterVsAddressOf(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsAddressOf) {
			listener.exitVsAddressOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsAddressOf) {
			return visitor.visitVsAddressOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAssignContext extends ValueStmtContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(BosParser.ASSIGN, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsAssign) {
			listener.enterVsAssign(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsAssign) {
			listener.exitVsAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsAssign) {
			return visitor.visitVsAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsPowContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public POW(): TerminalNode { return this.getToken(BosParser.POW, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsPow) {
			listener.enterVsPow(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsPow) {
			listener.exitVsPow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsPow) {
			return visitor.visitVsPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNegationContext extends ValueStmtContext {
	public MINUS(): TerminalNode { return this.getToken(BosParser.MINUS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsNegation) {
			listener.enterVsNegation(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsNegation) {
			listener.exitVsNegation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsNegation) {
			return visitor.visitVsNegation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsPlusContext extends ValueStmtContext {
	public PLUS(): TerminalNode { return this.getToken(BosParser.PLUS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsPlus) {
			listener.enterVsPlus(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsPlus) {
			listener.exitVsPlus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsPlus) {
			return visitor.visitVsPlus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsDivContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(BosParser.DIV, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsDiv) {
			listener.enterVsDiv(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsDiv) {
			listener.exitVsDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsDiv) {
			return visitor.visitVsDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMultContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MULT(): TerminalNode { return this.getToken(BosParser.MULT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsMult) {
			listener.enterVsMult(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsMult) {
			listener.exitVsMult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsMult) {
			return visitor.visitVsMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsModContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MOD(): TerminalNode { return this.getToken(BosParser.MOD, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsMod) {
			listener.enterVsMod(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsMod) {
			listener.exitVsMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsMod) {
			return visitor.visitVsMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAddContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public PLUS(): TerminalNode { return this.getToken(BosParser.PLUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsAdd) {
			listener.enterVsAdd(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsAdd) {
			listener.exitVsAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsAdd) {
			return visitor.visitVsAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMinusContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MINUS(): TerminalNode { return this.getToken(BosParser.MINUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsMinus) {
			listener.enterVsMinus(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsMinus) {
			listener.exitVsMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsMinus) {
			return visitor.visitVsMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAmpContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AMPERSAND(): TerminalNode { return this.getToken(BosParser.AMPERSAND, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsAmp) {
			listener.enterVsAmp(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsAmp) {
			listener.exitVsAmp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsAmp) {
			return visitor.visitVsAmp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsEqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsEq) {
			listener.enterVsEq(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsEq) {
			listener.exitVsEq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsEq) {
			return visitor.visitVsEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public NEQ(): TerminalNode { return this.getToken(BosParser.NEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsNeq) {
			listener.enterVsNeq(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsNeq) {
			listener.exitVsNeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsNeq) {
			return visitor.visitVsNeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLtContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public LT(): TerminalNode { return this.getToken(BosParser.LT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsLt) {
			listener.enterVsLt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsLt) {
			listener.exitVsLt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsLt) {
			return visitor.visitVsLt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsGtContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(BosParser.GT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsGt) {
			listener.enterVsGt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsGt) {
			listener.exitVsGt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsGt) {
			return visitor.visitVsGt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public LEQ(): TerminalNode { return this.getToken(BosParser.LEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsLeq) {
			listener.enterVsLeq(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsLeq) {
			listener.exitVsLeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsLeq) {
			return visitor.visitVsLeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsGeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GEQ(): TerminalNode { return this.getToken(BosParser.GEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsGeq) {
			listener.enterVsGeq(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsGeq) {
			listener.exitVsGeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsGeq) {
			return visitor.visitVsGeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLikeContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public LIKE(): TerminalNode { return this.getToken(BosParser.LIKE, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsLike) {
			listener.enterVsLike(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsLike) {
			listener.exitVsLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsLike) {
			return visitor.visitVsLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsIsContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public IS(): TerminalNode { return this.getToken(BosParser.IS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsIs) {
			listener.enterVsIs(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsIs) {
			listener.exitVsIs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsIs) {
			return visitor.visitVsIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNotContext extends ValueStmtContext {
	public NOT(): TerminalNode { return this.getToken(BosParser.NOT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsNot) {
			listener.enterVsNot(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsNot) {
			listener.exitVsNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsNot) {
			return visitor.visitVsNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAndContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(BosParser.AND, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsAnd) {
			listener.enterVsAnd(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsAnd) {
			listener.exitVsAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsAnd) {
			return visitor.visitVsAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsOrContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(BosParser.OR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsOr) {
			listener.enterVsOr(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsOr) {
			listener.exitVsOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsOr) {
			return visitor.visitVsOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsXorContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public XOR(): TerminalNode { return this.getToken(BosParser.XOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsXor) {
			listener.enterVsXor(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsXor) {
			listener.exitVsXor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsXor) {
			return visitor.visitVsXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsEqvContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public EQV(): TerminalNode { return this.getToken(BosParser.EQV, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsEqv) {
			listener.enterVsEqv(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsEqv) {
			listener.exitVsEqv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsEqv) {
			return visitor.visitVsEqv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsImpContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public IMP(): TerminalNode { return this.getToken(BosParser.IMP, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsImp) {
			listener.enterVsImp(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsImp) {
			listener.exitVsImp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsImp) {
			return visitor.visitVsImp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsICSContext extends ValueStmtContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsICS) {
			listener.enterVsICS(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsICS) {
			listener.exitVsICS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsICS) {
			return visitor.visitVsICS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMidContext extends ValueStmtContext {
	public midStmt(): MidStmtContext {
		return this.getRuleContext(0, MidStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVsMid) {
			listener.enterVsMid(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVsMid) {
			listener.exitVsMid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVsMid) {
			return visitor.visitVsMid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public variableListStmt(): VariableListStmtContext {
		return this.getRuleContext(0, VariableListStmtContext);
	}
	public DIM(): TerminalNode | undefined { return this.tryGetToken(BosParser.DIM, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.STATIC, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public WITHEVENTS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WITHEVENTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_variableStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVariableStmt) {
			listener.enterVariableStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVariableStmt) {
			listener.exitVariableStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVariableStmt) {
			return visitor.visitVariableStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableListStmtContext extends ParserRuleContext {
	public variableSubStmt(): VariableSubStmtContext[];
	public variableSubStmt(i: number): VariableSubStmtContext;
	public variableSubStmt(i?: number): VariableSubStmtContext | VariableSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableSubStmtContext);
		} else {
			return this.getRuleContext(i, VariableSubStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_variableListStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVariableListStmt) {
			listener.enterVariableListStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVariableListStmt) {
			listener.exitVariableListStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVariableListStmt) {
			return visitor.visitVariableListStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableSubStmtContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public subscripts(): SubscriptsContext | undefined {
		return this.tryGetRuleContext(0, SubscriptsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_variableSubStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVariableSubStmt) {
			listener.enterVariableSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVariableSubStmt) {
			listener.exitVariableSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVariableSubStmt) {
			return visitor.visitVariableSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileWendStmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(BosParser.WHILE, 0); }
	public WS(): TerminalNode { return this.getToken(BosParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WEND(): TerminalNode { return this.getToken(BosParser.WEND, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_whileWendStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterWhileWendStmt) {
			listener.enterWhileWendStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitWhileWendStmt) {
			listener.exitWhileWendStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitWhileWendStmt) {
			return visitor.visitWhileWendStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WidthStmtContext extends ParserRuleContext {
	public WIDTH(): TerminalNode { return this.getToken(BosParser.WIDTH, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(BosParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_widthStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterWidthStmt) {
			listener.enterWidthStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitWidthStmt) {
			listener.exitWidthStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitWidthStmt) {
			return visitor.visitWidthStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithStmtContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(BosParser.WITH, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public END_WITH(): TerminalNode { return this.getToken(BosParser.END_WITH, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(BosParser.NEW, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.NEWLINE);
		} else {
			return this.getToken(BosParser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_withStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterWithStmt) {
			listener.enterWithStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitWithStmt) {
			listener.exitWithStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitWithStmt) {
			return visitor.visitWithStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WriteStmtContext extends ParserRuleContext {
	public WRITE(): TerminalNode { return this.getToken(BosParser.WRITE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public COMMA(): TerminalNode { return this.getToken(BosParser.COMMA, 0); }
	public outputList(): OutputListContext | undefined {
		return this.tryGetRuleContext(0, OutputListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_writeStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterWriteStmt) {
			listener.enterWriteStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitWriteStmt) {
			listener.exitWriteStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitWriteStmt) {
			return visitor.visitWriteStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitCallStmtContext extends ParserRuleContext {
	public eCS_ProcedureCall(): ECS_ProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ECS_ProcedureCallContext);
	}
	public eCS_MemberProcedureCall(): ECS_MemberProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ECS_MemberProcedureCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_explicitCallStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterExplicitCallStmt) {
			listener.enterExplicitCallStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitExplicitCallStmt) {
			listener.exitExplicitCallStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitExplicitCallStmt) {
			return visitor.visitExplicitCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ECS_ProcedureCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(BosParser.CALL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_eCS_ProcedureCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterECS_ProcedureCall) {
			listener.enterECS_ProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitECS_ProcedureCall) {
			listener.exitECS_ProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitECS_ProcedureCall) {
			return visitor.visitECS_ProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ECS_MemberProcedureCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(BosParser.CALL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(BosParser.DOT, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_eCS_MemberProcedureCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterECS_MemberProcedureCall) {
			listener.enterECS_MemberProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitECS_MemberProcedureCall) {
			listener.exitECS_MemberProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitECS_MemberProcedureCall) {
			return visitor.visitECS_MemberProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitCallStmt_InBlockContext extends ParserRuleContext {
	public iCS_B_ProcedureCall(): ICS_B_ProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_B_ProcedureCallContext);
	}
	public iCS_B_MemberProcedureCall(): ICS_B_MemberProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_B_MemberProcedureCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_implicitCallStmt_InBlock; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterImplicitCallStmt_InBlock) {
			listener.enterImplicitCallStmt_InBlock(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitImplicitCallStmt_InBlock) {
			listener.exitImplicitCallStmt_InBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitImplicitCallStmt_InBlock) {
			return visitor.visitImplicitCallStmt_InBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_B_ProcedureCallContext extends ParserRuleContext {
	public certainIdentifier(): CertainIdentifierContext {
		return this.getRuleContext(0, CertainIdentifierContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_iCS_B_ProcedureCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterICS_B_ProcedureCall) {
			listener.enterICS_B_ProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitICS_B_ProcedureCall) {
			listener.exitICS_B_ProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitICS_B_ProcedureCall) {
			return visitor.visitICS_B_ProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_B_MemberProcedureCallContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(BosParser.DOT, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_iCS_B_MemberProcedureCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterICS_B_MemberProcedureCall) {
			listener.enterICS_B_MemberProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitICS_B_MemberProcedureCall) {
			listener.exitICS_B_MemberProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitICS_B_MemberProcedureCall) {
			return visitor.visitICS_B_MemberProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitCallStmt_InStmtContext extends ParserRuleContext {
	public iCS_S_MembersCall(): ICS_S_MembersCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_MembersCallContext);
	}
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	public iCS_S_DictionaryCall(): ICS_S_DictionaryCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_DictionaryCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_implicitCallStmt_InStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterImplicitCallStmt_InStmt) {
			listener.enterImplicitCallStmt_InStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitImplicitCallStmt_InStmt) {
			listener.exitImplicitCallStmt_InStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitImplicitCallStmt_InStmt) {
			return visitor.visitImplicitCallStmt_InStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_VariableOrProcedureCallContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_iCS_S_VariableOrProcedureCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterICS_S_VariableOrProcedureCall) {
			listener.enterICS_S_VariableOrProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitICS_S_VariableOrProcedureCall) {
			listener.exitICS_S_VariableOrProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitICS_S_VariableOrProcedureCall) {
			return visitor.visitICS_S_VariableOrProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_ProcedureOrArrayCallContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public iCS_S_NestedProcedureCall(): ICS_S_NestedProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_NestedProcedureCallContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.LPAREN);
		} else {
			return this.getToken(BosParser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.RPAREN);
		} else {
			return this.getToken(BosParser.RPAREN, i);
		}
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	public argsCall(): ArgsCallContext[];
	public argsCall(i: number): ArgsCallContext;
	public argsCall(i?: number): ArgsCallContext | ArgsCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgsCallContext);
		} else {
			return this.getRuleContext(i, ArgsCallContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_iCS_S_ProcedureOrArrayCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterICS_S_ProcedureOrArrayCall) {
			listener.enterICS_S_ProcedureOrArrayCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitICS_S_ProcedureOrArrayCall) {
			listener.exitICS_S_ProcedureOrArrayCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitICS_S_ProcedureOrArrayCall) {
			return visitor.visitICS_S_ProcedureOrArrayCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_NestedProcedureCallContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(BosParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(BosParser.RPAREN, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_iCS_S_NestedProcedureCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterICS_S_NestedProcedureCall) {
			listener.enterICS_S_NestedProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitICS_S_NestedProcedureCall) {
			listener.exitICS_S_NestedProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitICS_S_NestedProcedureCall) {
			return visitor.visitICS_S_NestedProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_MembersCallContext extends ParserRuleContext {
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	public iCS_S_MemberCall(): ICS_S_MemberCallContext[];
	public iCS_S_MemberCall(i: number): ICS_S_MemberCallContext;
	public iCS_S_MemberCall(i?: number): ICS_S_MemberCallContext | ICS_S_MemberCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ICS_S_MemberCallContext);
		} else {
			return this.getRuleContext(i, ICS_S_MemberCallContext);
		}
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_iCS_S_MembersCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterICS_S_MembersCall) {
			listener.enterICS_S_MembersCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitICS_S_MembersCall) {
			listener.exitICS_S_MembersCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitICS_S_MembersCall) {
			return visitor.visitICS_S_MembersCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_MemberCallContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(BosParser.DOT, 0); }
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_iCS_S_MemberCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterICS_S_MemberCall) {
			listener.enterICS_S_MemberCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitICS_S_MemberCall) {
			listener.exitICS_S_MemberCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitICS_S_MemberCall) {
			return visitor.visitICS_S_MemberCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_DictionaryCallContext extends ParserRuleContext {
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		return this.getRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_iCS_S_DictionaryCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterICS_S_DictionaryCall) {
			listener.enterICS_S_DictionaryCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitICS_S_DictionaryCall) {
			listener.exitICS_S_DictionaryCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitICS_S_DictionaryCall) {
			return visitor.visitICS_S_DictionaryCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsCallContext extends ParserRuleContext {
	public argCall(): ArgCallContext[];
	public argCall(i: number): ArgCallContext;
	public argCall(i?: number): ArgCallContext | ArgCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgCallContext);
		} else {
			return this.getRuleContext(i, ArgCallContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.SEMICOLON);
		} else {
			return this.getToken(BosParser.SEMICOLON, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_argsCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterArgsCall) {
			listener.enterArgsCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitArgsCall) {
			listener.exitArgsCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitArgsCall) {
			return visitor.visitArgsCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgCallContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(BosParser.BYREF, 0); }
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(BosParser.PARAMARRAY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_argCall; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterArgCall) {
			listener.enterArgCall(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitArgCall) {
			listener.exitArgCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitArgCall) {
			return visitor.visitArgCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryCallStmtContext extends ParserRuleContext {
	public EXCLAMATIONMARK(): TerminalNode { return this.getToken(BosParser.EXCLAMATIONMARK, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_dictionaryCallStmt; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterDictionaryCallStmt) {
			listener.enterDictionaryCallStmt(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitDictionaryCallStmt) {
			listener.exitDictionaryCallStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitDictionaryCallStmt) {
			return visitor.visitDictionaryCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(BosParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(BosParser.RPAREN, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_argList; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.OPTIONAL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(BosParser.PARAMARRAY, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public argDefaultValue(): ArgDefaultValueContext | undefined {
		return this.tryGetRuleContext(0, ArgDefaultValueContext);
	}
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(BosParser.BYREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_arg; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgDefaultValueContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(BosParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_argDefaultValue; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterArgDefaultValue) {
			listener.enterArgDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitArgDefaultValue) {
			listener.exitArgDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitArgDefaultValue) {
			return visitor.visitArgDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptsContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.COMMA);
		} else {
			return this.getToken(BosParser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_subscripts; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSubscripts) {
			listener.enterSubscripts(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSubscripts) {
			listener.exitSubscripts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSubscripts) {
			return visitor.visitSubscripts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(BosParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_subscript; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.IDENTIFIER);
		} else {
			return this.getToken(BosParser.IDENTIFIER, i);
		}
	}
	public ambiguousKeyword(): AmbiguousKeywordContext[];
	public ambiguousKeyword(i: number): AmbiguousKeywordContext;
	public ambiguousKeyword(i?: number): AmbiguousKeywordContext | AmbiguousKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousKeywordContext);
		} else {
			return this.getRuleContext(i, AmbiguousKeywordContext);
		}
	}
	public L_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BosParser.L_SQUARE_BRACKET, 0); }
	public R_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(BosParser.R_SQUARE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_ambiguousIdentifier; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterAmbiguousIdentifier) {
			listener.enterAmbiguousIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitAmbiguousIdentifier) {
			listener.exitAmbiguousIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitAmbiguousIdentifier) {
			return visitor.visitAmbiguousIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsTypeClauseContext extends ParserRuleContext {
	public AS(): TerminalNode { return this.getToken(BosParser.AS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(BosParser.NEW, 0); }
	public fieldLength(): FieldLengthContext | undefined {
		return this.tryGetRuleContext(0, FieldLengthContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_asTypeClause; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterAsTypeClause) {
			listener.enterAsTypeClause(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitAsTypeClause) {
			listener.exitAsTypeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitAsTypeClause) {
			return visitor.visitAsTypeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(BosParser.BOOLEAN, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(BosParser.BYTE, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(BosParser.COLLECTION, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DATE, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DOUBLE, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(BosParser.INTEGER, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(BosParser.LONG, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(BosParser.OBJECT, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(BosParser.SINGLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(BosParser.STRING, 0); }
	public VARIANT(): TerminalNode | undefined { return this.tryGetToken(BosParser.VARIANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_baseType; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CertainIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.IDENTIFIER);
		} else {
			return this.getToken(BosParser.IDENTIFIER, i);
		}
	}
	public ambiguousKeyword(): AmbiguousKeywordContext[];
	public ambiguousKeyword(i: number): AmbiguousKeywordContext;
	public ambiguousKeyword(i?: number): AmbiguousKeywordContext | AmbiguousKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousKeywordContext);
		} else {
			return this.getRuleContext(i, AmbiguousKeywordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_certainIdentifier; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterCertainIdentifier) {
			listener.enterCertainIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitCertainIdentifier) {
			listener.exitCertainIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitCertainIdentifier) {
			return visitor.visitCertainIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(BosParser.LT, 0); }
	public LEQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.LEQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(BosParser.GT, 0); }
	public GEQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.GEQ, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(BosParser.NEQ, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(BosParser.IS, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(BosParser.LIKE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexTypeContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.DOT);
		} else {
			return this.getToken(BosParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_complexType; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterComplexType) {
			listener.enterComplexType(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitComplexType) {
			listener.exitComplexType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitComplexType) {
			return visitor.visitComplexType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldLengthContext extends ParserRuleContext {
	public MULT(): TerminalNode { return this.getToken(BosParser.MULT, 0); }
	public INTEGERLITERAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.INTEGERLITERAL, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_fieldLength; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterFieldLength) {
			listener.enterFieldLength(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitFieldLength) {
			listener.exitFieldLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitFieldLength) {
			return visitor.visitFieldLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetterrangeContext extends ParserRuleContext {
	public certainIdentifier(): CertainIdentifierContext[];
	public certainIdentifier(i: number): CertainIdentifierContext;
	public certainIdentifier(i?: number): CertainIdentifierContext | CertainIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CertainIdentifierContext);
		} else {
			return this.getRuleContext(i, CertainIdentifierContext);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(BosParser.MINUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_letterrange; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterLetterrange) {
			listener.enterLetterrange(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitLetterrange) {
			listener.exitLetterrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitLetterrange) {
			return visitor.visitLetterrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineLabelContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(BosParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_lineLabel; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterLineLabel) {
			listener.enterLineLabel(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitLineLabel) {
			listener.exitLineLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitLineLabel) {
			return visitor.visitLineLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public COLORLITERAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.COLORLITERAL, 0); }
	public DATELITERAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.DATELITERAL, 0); }
	public DOUBLELITERAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.DOUBLELITERAL, 0); }
	public FILENUMBER(): TerminalNode | undefined { return this.tryGetToken(BosParser.FILENUMBER, 0); }
	public INTEGERLITERAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.INTEGERLITERAL, 0); }
	public OCTALLITERAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.OCTALLITERAL, 0); }
	public STRINGLITERAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.STRINGLITERAL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(BosParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(BosParser.FALSE, 0); }
	public NOTHING(): TerminalNode | undefined { return this.tryGetToken(BosParser.NOTHING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(BosParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_literal; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PublicPrivateVisibilityContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.PUBLIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_publicPrivateVisibility; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterPublicPrivateVisibility) {
			listener.enterPublicPrivateVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitPublicPrivateVisibility) {
			listener.exitPublicPrivateVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitPublicPrivateVisibility) {
			return visitor.visitPublicPrivateVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PublicPrivateGlobalVisibilityContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.PUBLIC, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.GLOBAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_publicPrivateGlobalVisibility; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterPublicPrivateGlobalVisibility) {
			listener.enterPublicPrivateGlobalVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitPublicPrivateGlobalVisibility) {
			listener.exitPublicPrivateGlobalVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitPublicPrivateGlobalVisibility) {
			return visitor.visitPublicPrivateGlobalVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public complexType(): ComplexTypeContext | undefined {
		return this.tryGetRuleContext(0, ComplexTypeContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BosParser.WS);
		} else {
			return this.getToken(BosParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_type; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeHintContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(BosParser.AMPERSAND, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(BosParser.AT, 0); }
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DOLLAR, 0); }
	public EXCLAMATIONMARK(): TerminalNode | undefined { return this.tryGetToken(BosParser.EXCLAMATIONMARK, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(BosParser.HASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(BosParser.PERCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_typeHint; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterTypeHint) {
			listener.enterTypeHint(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitTypeHint) {
			listener.exitTypeHint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitTypeHint) {
			return visitor.visitTypeHint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisibilityContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.PUBLIC, 0); }
	public FRIEND(): TerminalNode | undefined { return this.tryGetToken(BosParser.FRIEND, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.GLOBAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_visibility; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterVisibility) {
			listener.enterVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitVisibility) {
			listener.exitVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitVisibility) {
			return visitor.visitVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousKeywordContext extends ParserRuleContext {
	public ACCESS(): TerminalNode | undefined { return this.tryGetToken(BosParser.ACCESS, 0); }
	public ADDRESSOF(): TerminalNode | undefined { return this.tryGetToken(BosParser.ADDRESSOF, 0); }
	public ALIAS(): TerminalNode | undefined { return this.tryGetToken(BosParser.ALIAS, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(BosParser.AND, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(BosParser.ATTRIBUTE, 0); }
	public APPACTIVATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.APPACTIVATE, 0); }
	public APPEND(): TerminalNode | undefined { return this.tryGetToken(BosParser.APPEND, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(BosParser.AS, 0); }
	public BEEP(): TerminalNode | undefined { return this.tryGetToken(BosParser.BEEP, 0); }
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(BosParser.BEGIN, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(BosParser.BINARY, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(BosParser.BOOLEAN, 0); }
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(BosParser.BYREF, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(BosParser.BYTE, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(BosParser.CALL, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(BosParser.CASE, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(BosParser.CLASS, 0); }
	public CLOSE(): TerminalNode | undefined { return this.tryGetToken(BosParser.CLOSE, 0); }
	public CHDIR(): TerminalNode | undefined { return this.tryGetToken(BosParser.CHDIR, 0); }
	public CHDRIVE(): TerminalNode | undefined { return this.tryGetToken(BosParser.CHDRIVE, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(BosParser.COLLECTION, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(BosParser.CONST, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DATE, 0); }
	public DECLARE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DECLARE, 0); }
	public DEFBOOL(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFBOOL, 0); }
	public DEFBYTE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFBYTE, 0); }
	public DEFCUR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFCUR, 0); }
	public DEFDBL(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFDBL, 0); }
	public DEFDATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFDATE, 0); }
	public DEFDEC(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFDEC, 0); }
	public DEFINT(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFINT, 0); }
	public DEFLNG(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFLNG, 0); }
	public DEFOBJ(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFOBJ, 0); }
	public DEFSNG(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFSNG, 0); }
	public DEFSTR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFSTR, 0); }
	public DEFVAR(): TerminalNode | undefined { return this.tryGetToken(BosParser.DEFVAR, 0); }
	public DELETESETTING(): TerminalNode | undefined { return this.tryGetToken(BosParser.DELETESETTING, 0); }
	public DIM(): TerminalNode | undefined { return this.tryGetToken(BosParser.DIM, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(BosParser.DO, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(BosParser.DOUBLE, 0); }
	public EACH(): TerminalNode | undefined { return this.tryGetToken(BosParser.EACH, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(BosParser.ELSE, 0); }
	public ELSEIF(): TerminalNode | undefined { return this.tryGetToken(BosParser.ELSEIF, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(BosParser.END, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(BosParser.ENUM, 0); }
	public EQV(): TerminalNode | undefined { return this.tryGetToken(BosParser.EQV, 0); }
	public ERASE(): TerminalNode | undefined { return this.tryGetToken(BosParser.ERASE, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(BosParser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(BosParser.EVENT, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(BosParser.FALSE, 0); }
	public FILECOPY(): TerminalNode | undefined { return this.tryGetToken(BosParser.FILECOPY, 0); }
	public FRIEND(): TerminalNode | undefined { return this.tryGetToken(BosParser.FRIEND, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(BosParser.FOR, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(BosParser.FUNCTION, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(BosParser.GET, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.GLOBAL, 0); }
	public GOSUB(): TerminalNode | undefined { return this.tryGetToken(BosParser.GOSUB, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(BosParser.GOTO, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(BosParser.IF, 0); }
	public IMP(): TerminalNode | undefined { return this.tryGetToken(BosParser.IMP, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(BosParser.IMPLEMENTS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(BosParser.IN, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(BosParser.INPUT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(BosParser.IS, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(BosParser.INTEGER, 0); }
	public KILL(): TerminalNode | undefined { return this.tryGetToken(BosParser.KILL, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(BosParser.LOAD, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(BosParser.LOCK, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(BosParser.LONG, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(BosParser.LOOP, 0); }
	public LEN(): TerminalNode | undefined { return this.tryGetToken(BosParser.LEN, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(BosParser.LET, 0); }
	public LIB(): TerminalNode | undefined { return this.tryGetToken(BosParser.LIB, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(BosParser.LIKE, 0); }
	public LSET(): TerminalNode | undefined { return this.tryGetToken(BosParser.LSET, 0); }
	public ME(): TerminalNode | undefined { return this.tryGetToken(BosParser.ME, 0); }
	public MID(): TerminalNode | undefined { return this.tryGetToken(BosParser.MID, 0); }
	public MKDIR(): TerminalNode | undefined { return this.tryGetToken(BosParser.MKDIR, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(BosParser.MOD, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(BosParser.NAME, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(BosParser.NEXT, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(BosParser.NEW, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(BosParser.NOT, 0); }
	public NOTHING(): TerminalNode | undefined { return this.tryGetToken(BosParser.NOTHING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(BosParser.NULL, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(BosParser.OBJECT, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(BosParser.ON, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(BosParser.OPEN, 0); }
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(BosParser.OPTIONAL, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(BosParser.OR, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(BosParser.OUTPUT, 0); }
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(BosParser.PARAMARRAY, 0); }
	public PRESERVE(): TerminalNode | undefined { return this.tryGetToken(BosParser.PRESERVE, 0); }
	public PRINT(): TerminalNode | undefined { return this.tryGetToken(BosParser.PRINT, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(BosParser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.PUBLIC, 0); }
	public PUT(): TerminalNode | undefined { return this.tryGetToken(BosParser.PUT, 0); }
	public RANDOM(): TerminalNode | undefined { return this.tryGetToken(BosParser.RANDOM, 0); }
	public RANDOMIZE(): TerminalNode | undefined { return this.tryGetToken(BosParser.RANDOMIZE, 0); }
	public RAISEEVENT(): TerminalNode | undefined { return this.tryGetToken(BosParser.RAISEEVENT, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(BosParser.READ, 0); }
	public REDIM(): TerminalNode | undefined { return this.tryGetToken(BosParser.REDIM, 0); }
	public REM(): TerminalNode | undefined { return this.tryGetToken(BosParser.REM, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(BosParser.RESET, 0); }
	public RESUME(): TerminalNode | undefined { return this.tryGetToken(BosParser.RESUME, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(BosParser.RETURN, 0); }
	public RMDIR(): TerminalNode | undefined { return this.tryGetToken(BosParser.RMDIR, 0); }
	public RSET(): TerminalNode | undefined { return this.tryGetToken(BosParser.RSET, 0); }
	public SAVEPICTURE(): TerminalNode | undefined { return this.tryGetToken(BosParser.SAVEPICTURE, 0); }
	public SAVESETTING(): TerminalNode | undefined { return this.tryGetToken(BosParser.SAVESETTING, 0); }
	public SEEK(): TerminalNode | undefined { return this.tryGetToken(BosParser.SEEK, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(BosParser.SELECT, 0); }
	public SENDKEYS(): TerminalNode | undefined { return this.tryGetToken(BosParser.SENDKEYS, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(BosParser.SET, 0); }
	public SETATTR(): TerminalNode | undefined { return this.tryGetToken(BosParser.SETATTR, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(BosParser.SHARED, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(BosParser.SINGLE, 0); }
	public SPC(): TerminalNode | undefined { return this.tryGetToken(BosParser.SPC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(BosParser.STATIC, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(BosParser.STEP, 0); }
	public STOP(): TerminalNode | undefined { return this.tryGetToken(BosParser.STOP, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(BosParser.STRING, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(BosParser.SUB, 0); }
	public TAB(): TerminalNode | undefined { return this.tryGetToken(BosParser.TAB, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(BosParser.TEXT, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(BosParser.THEN, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(BosParser.TIME, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(BosParser.TO, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(BosParser.TRUE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(BosParser.TYPE, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(BosParser.TYPEOF, 0); }
	public UNLOAD(): TerminalNode | undefined { return this.tryGetToken(BosParser.UNLOAD, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(BosParser.UNLOCK, 0); }
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(BosParser.UNTIL, 0); }
	public VARIANT(): TerminalNode | undefined { return this.tryGetToken(BosParser.VARIANT, 0); }
	public VERSION(): TerminalNode | undefined { return this.tryGetToken(BosParser.VERSION, 0); }
	public WEND(): TerminalNode | undefined { return this.tryGetToken(BosParser.WEND, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(BosParser.WHILE, 0); }
	public WIDTH(): TerminalNode | undefined { return this.tryGetToken(BosParser.WIDTH, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(BosParser.WITH, 0); }
	public WITHEVENTS(): TerminalNode | undefined { return this.tryGetToken(BosParser.WITHEVENTS, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(BosParser.WRITE, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(BosParser.XOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BosParser.RULE_ambiguousKeyword; }
	// @Override
	public enterRule(listener: BosListener): void {
		if (listener.enterAmbiguousKeyword) {
			listener.enterAmbiguousKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: BosListener): void {
		if (listener.exitAmbiguousKeyword) {
			listener.exitAmbiguousKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BosVisitor<Result>): Result {
		if (visitor.visitAmbiguousKeyword) {
			return visitor.visitAmbiguousKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


