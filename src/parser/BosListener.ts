// Generated from grammars/Bos.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { InlineIfThenElseContext } from "./BosParser";
import { BlockIfThenElseContext } from "./BosParser";
import { VsLiteralContext } from "./BosParser";
import { VsStructContext } from "./BosParser";
import { VsNewContext } from "./BosParser";
import { VsTypeOfContext } from "./BosParser";
import { VsAddressOfContext } from "./BosParser";
import { VsAssignContext } from "./BosParser";
import { VsPowContext } from "./BosParser";
import { VsNegationContext } from "./BosParser";
import { VsPlusContext } from "./BosParser";
import { VsDivContext } from "./BosParser";
import { VsMultContext } from "./BosParser";
import { VsModContext } from "./BosParser";
import { VsAddContext } from "./BosParser";
import { VsMinusContext } from "./BosParser";
import { VsAmpContext } from "./BosParser";
import { VsEqContext } from "./BosParser";
import { VsNeqContext } from "./BosParser";
import { VsLtContext } from "./BosParser";
import { VsGtContext } from "./BosParser";
import { VsLeqContext } from "./BosParser";
import { VsGeqContext } from "./BosParser";
import { VsLikeContext } from "./BosParser";
import { VsIsContext } from "./BosParser";
import { VsNotContext } from "./BosParser";
import { VsAndContext } from "./BosParser";
import { VsOrContext } from "./BosParser";
import { VsXorContext } from "./BosParser";
import { VsEqvContext } from "./BosParser";
import { VsImpContext } from "./BosParser";
import { VsICSContext } from "./BosParser";
import { VsMidContext } from "./BosParser";
import { OptionBaseStmtContext } from "./BosParser";
import { OptionCompareStmtContext } from "./BosParser";
import { OptionExplicitStmtContext } from "./BosParser";
import { OptionPrivateModuleStmtContext } from "./BosParser";
import { CaseCondElseContext } from "./BosParser";
import { CaseCondExprContext } from "./BosParser";
import { CaseCondExprIsContext } from "./BosParser";
import { CaseCondExprValueContext } from "./BosParser";
import { CaseCondExprToContext } from "./BosParser";
import { StartRuleContext } from "./BosParser";
import { ModuleContext } from "./BosParser";
import { ModuleReferencesContext } from "./BosParser";
import { ModuleImportsContext } from "./BosParser";
import { ModuleReferenceContext } from "./BosParser";
import { ModuleReferenceValueContext } from "./BosParser";
import { ModuleReferenceComponentContext } from "./BosParser";
import { ModuleHeaderContext } from "./BosParser";
import { ModuleConfigContext } from "./BosParser";
import { ModuleConfigElementContext } from "./BosParser";
import { ModuleAttributesContext } from "./BosParser";
import { ModuleOptionsContext } from "./BosParser";
import { ModuleOptionContext } from "./BosParser";
import { ModuleBodyContext } from "./BosParser";
import { ModuleBodyElementContext } from "./BosParser";
import { ClassBodyContext } from "./BosParser";
import { ClassBodyElementContext } from "./BosParser";
import { ControlPropertiesContext } from "./BosParser";
import { Cp_PropertiesContext } from "./BosParser";
import { Cp_SinglePropertyContext } from "./BosParser";
import { Cp_PropertyNameContext } from "./BosParser";
import { Cp_PropertyValueContext } from "./BosParser";
import { Cp_NestedPropertyContext } from "./BosParser";
import { Cp_ControlTypeContext } from "./BosParser";
import { Cp_ControlIdentifierContext } from "./BosParser";
import { ModuleBlockContext } from "./BosParser";
import { ImportStmtContext } from "./BosParser";
import { AttributeStmtContext } from "./BosParser";
import { BlockContext } from "./BosParser";
import { BlockStmtContext } from "./BosParser";
import { AppActivateStmtContext } from "./BosParser";
import { BeepStmtContext } from "./BosParser";
import { ChDirStmtContext } from "./BosParser";
import { ChDriveStmtContext } from "./BosParser";
import { ClassStmtContext } from "./BosParser";
import { CloseStmtContext } from "./BosParser";
import { ConstStmtContext } from "./BosParser";
import { ConstSubStmtContext } from "./BosParser";
import { DateStmtContext } from "./BosParser";
import { DeclareStmtContext } from "./BosParser";
import { DeftypeStmtContext } from "./BosParser";
import { DeleteSettingStmtContext } from "./BosParser";
import { DoLoopStmtContext } from "./BosParser";
import { EndStmtContext } from "./BosParser";
import { EnumerationStmtContext } from "./BosParser";
import { EnumerationStmt_ConstantContext } from "./BosParser";
import { EraseStmtContext } from "./BosParser";
import { ErrorStmtContext } from "./BosParser";
import { EventStmtContext } from "./BosParser";
import { ExitStmtContext } from "./BosParser";
import { FilecopyStmtContext } from "./BosParser";
import { ForEachStmtContext } from "./BosParser";
import { ForNextStmtContext } from "./BosParser";
import { FunctionStmtContext } from "./BosParser";
import { GetStmtContext } from "./BosParser";
import { GoSubStmtContext } from "./BosParser";
import { GoToStmtContext } from "./BosParser";
import { IfThenElseStmtContext } from "./BosParser";
import { IfBlockStmtContext } from "./BosParser";
import { IfConditionStmtContext } from "./BosParser";
import { IfElseIfBlockStmtContext } from "./BosParser";
import { IfElseBlockStmtContext } from "./BosParser";
import { ImplementsStmtContext } from "./BosParser";
import { InputStmtContext } from "./BosParser";
import { KillStmtContext } from "./BosParser";
import { LetStmtContext } from "./BosParser";
import { LineInputStmtContext } from "./BosParser";
import { LoadStmtContext } from "./BosParser";
import { LockStmtContext } from "./BosParser";
import { LsetStmtContext } from "./BosParser";
import { MacroIfThenElseStmtContext } from "./BosParser";
import { MacroIfBlockStmtContext } from "./BosParser";
import { MacroElseIfBlockStmtContext } from "./BosParser";
import { MacroElseBlockStmtContext } from "./BosParser";
import { MidStmtContext } from "./BosParser";
import { MkdirStmtContext } from "./BosParser";
import { NameStmtContext } from "./BosParser";
import { OnErrorStmtContext } from "./BosParser";
import { OnGoToStmtContext } from "./BosParser";
import { OnGoSubStmtContext } from "./BosParser";
import { OpenStmtContext } from "./BosParser";
import { OutputListContext } from "./BosParser";
import { OutputList_ExpressionContext } from "./BosParser";
import { PrintStmtContext } from "./BosParser";
import { PropertyGetStmtContext } from "./BosParser";
import { PropertySetStmtContext } from "./BosParser";
import { PropertyLetStmtContext } from "./BosParser";
import { PutStmtContext } from "./BosParser";
import { RaiseEventStmtContext } from "./BosParser";
import { RandomizeStmtContext } from "./BosParser";
import { RedimStmtContext } from "./BosParser";
import { RedimSubStmtContext } from "./BosParser";
import { ResetStmtContext } from "./BosParser";
import { ResumeStmtContext } from "./BosParser";
import { ReturnStmtContext } from "./BosParser";
import { RmdirStmtContext } from "./BosParser";
import { RsetStmtContext } from "./BosParser";
import { SavepictureStmtContext } from "./BosParser";
import { SaveSettingStmtContext } from "./BosParser";
import { SeekStmtContext } from "./BosParser";
import { SelectCaseStmtContext } from "./BosParser";
import { SC_CaseContext } from "./BosParser";
import { SC_CondContext } from "./BosParser";
import { SC_CondExprContext } from "./BosParser";
import { SendkeysStmtContext } from "./BosParser";
import { SetattrStmtContext } from "./BosParser";
import { SetStmtContext } from "./BosParser";
import { StopStmtContext } from "./BosParser";
import { SubStmtContext } from "./BosParser";
import { TimeStmtContext } from "./BosParser";
import { TypeStmtContext } from "./BosParser";
import { TypeStmt_ElementContext } from "./BosParser";
import { TypeOfStmtContext } from "./BosParser";
import { UnloadStmtContext } from "./BosParser";
import { UnlockStmtContext } from "./BosParser";
import { ValueStmtContext } from "./BosParser";
import { VariableStmtContext } from "./BosParser";
import { VariableListStmtContext } from "./BosParser";
import { VariableSubStmtContext } from "./BosParser";
import { WhileWendStmtContext } from "./BosParser";
import { WidthStmtContext } from "./BosParser";
import { WithStmtContext } from "./BosParser";
import { WriteStmtContext } from "./BosParser";
import { ExplicitCallStmtContext } from "./BosParser";
import { ECS_ProcedureCallContext } from "./BosParser";
import { ECS_MemberProcedureCallContext } from "./BosParser";
import { ImplicitCallStmt_InBlockContext } from "./BosParser";
import { ICS_B_ProcedureCallContext } from "./BosParser";
import { ICS_B_MemberProcedureCallContext } from "./BosParser";
import { ImplicitCallStmt_InStmtContext } from "./BosParser";
import { ICS_S_VariableOrProcedureCallContext } from "./BosParser";
import { ICS_S_ProcedureOrArrayCallContext } from "./BosParser";
import { ICS_S_NestedProcedureCallContext } from "./BosParser";
import { ICS_S_MembersCallContext } from "./BosParser";
import { ICS_S_MemberCallContext } from "./BosParser";
import { ICS_S_DictionaryCallContext } from "./BosParser";
import { ArgsCallContext } from "./BosParser";
import { ArgCallContext } from "./BosParser";
import { DictionaryCallStmtContext } from "./BosParser";
import { ArgListContext } from "./BosParser";
import { ArgContext } from "./BosParser";
import { ArgDefaultValueContext } from "./BosParser";
import { SubscriptsContext } from "./BosParser";
import { SubscriptContext } from "./BosParser";
import { AmbiguousIdentifierContext } from "./BosParser";
import { AsTypeClauseContext } from "./BosParser";
import { BaseTypeContext } from "./BosParser";
import { CertainIdentifierContext } from "./BosParser";
import { ComparisonOperatorContext } from "./BosParser";
import { ComplexTypeContext } from "./BosParser";
import { FieldLengthContext } from "./BosParser";
import { LetterrangeContext } from "./BosParser";
import { LineLabelContext } from "./BosParser";
import { LiteralContext } from "./BosParser";
import { PublicPrivateVisibilityContext } from "./BosParser";
import { PublicPrivateGlobalVisibilityContext } from "./BosParser";
import { TypeContext } from "./BosParser";
import { TypeHintContext } from "./BosParser";
import { VisibilityContext } from "./BosParser";
import { AmbiguousKeywordContext } from "./BosParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BosParser`.
 */
export interface BosListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterInlineIfThenElse?: (ctx: InlineIfThenElseContext) => void;
	/**
	 * Exit a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitInlineIfThenElse?: (ctx: InlineIfThenElseContext) => void;

	/**
	 * Enter a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterBlockIfThenElse?: (ctx: BlockIfThenElseContext) => void;
	/**
	 * Exit a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitBlockIfThenElse?: (ctx: BlockIfThenElseContext) => void;

	/**
	 * Enter a parse tree produced by the `vsLiteral`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLiteral?: (ctx: VsLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLiteral`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLiteral?: (ctx: VsLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `vsStruct`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsStruct?: (ctx: VsStructContext) => void;
	/**
	 * Exit a parse tree produced by the `vsStruct`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsStruct?: (ctx: VsStructContext) => void;

	/**
	 * Enter a parse tree produced by the `vsNew`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNew?: (ctx: VsNewContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNew`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNew?: (ctx: VsNewContext) => void;

	/**
	 * Enter a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsTypeOf?: (ctx: VsTypeOfContext) => void;
	/**
	 * Exit a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsTypeOf?: (ctx: VsTypeOfContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAddressOf?: (ctx: VsAddressOfContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAddressOf?: (ctx: VsAddressOfContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAssign`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAssign?: (ctx: VsAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAssign`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAssign?: (ctx: VsAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `vsPow`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsPow?: (ctx: VsPowContext) => void;
	/**
	 * Exit a parse tree produced by the `vsPow`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsPow?: (ctx: VsPowContext) => void;

	/**
	 * Enter a parse tree produced by the `vsNegation`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNegation?: (ctx: VsNegationContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNegation`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNegation?: (ctx: VsNegationContext) => void;

	/**
	 * Enter a parse tree produced by the `vsPlus`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsPlus?: (ctx: VsPlusContext) => void;
	/**
	 * Exit a parse tree produced by the `vsPlus`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsPlus?: (ctx: VsPlusContext) => void;

	/**
	 * Enter a parse tree produced by the `vsDiv`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsDiv?: (ctx: VsDivContext) => void;
	/**
	 * Exit a parse tree produced by the `vsDiv`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsDiv?: (ctx: VsDivContext) => void;

	/**
	 * Enter a parse tree produced by the `vsMult`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMult?: (ctx: VsMultContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMult`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMult?: (ctx: VsMultContext) => void;

	/**
	 * Enter a parse tree produced by the `vsMod`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMod?: (ctx: VsModContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMod`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMod?: (ctx: VsModContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAdd`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAdd?: (ctx: VsAddContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAdd`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAdd?: (ctx: VsAddContext) => void;

	/**
	 * Enter a parse tree produced by the `vsMinus`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMinus?: (ctx: VsMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMinus`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMinus?: (ctx: VsMinusContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAmp`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAmp?: (ctx: VsAmpContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAmp`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAmp?: (ctx: VsAmpContext) => void;

	/**
	 * Enter a parse tree produced by the `vsEq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsEq?: (ctx: VsEqContext) => void;
	/**
	 * Exit a parse tree produced by the `vsEq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsEq?: (ctx: VsEqContext) => void;

	/**
	 * Enter a parse tree produced by the `vsNeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNeq?: (ctx: VsNeqContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNeq?: (ctx: VsNeqContext) => void;

	/**
	 * Enter a parse tree produced by the `vsLt`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLt?: (ctx: VsLtContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLt`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLt?: (ctx: VsLtContext) => void;

	/**
	 * Enter a parse tree produced by the `vsGt`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsGt?: (ctx: VsGtContext) => void;
	/**
	 * Exit a parse tree produced by the `vsGt`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsGt?: (ctx: VsGtContext) => void;

	/**
	 * Enter a parse tree produced by the `vsLeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLeq?: (ctx: VsLeqContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLeq?: (ctx: VsLeqContext) => void;

	/**
	 * Enter a parse tree produced by the `vsGeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsGeq?: (ctx: VsGeqContext) => void;
	/**
	 * Exit a parse tree produced by the `vsGeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsGeq?: (ctx: VsGeqContext) => void;

	/**
	 * Enter a parse tree produced by the `vsLike`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLike?: (ctx: VsLikeContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLike`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLike?: (ctx: VsLikeContext) => void;

	/**
	 * Enter a parse tree produced by the `vsIs`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsIs?: (ctx: VsIsContext) => void;
	/**
	 * Exit a parse tree produced by the `vsIs`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsIs?: (ctx: VsIsContext) => void;

	/**
	 * Enter a parse tree produced by the `vsNot`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNot?: (ctx: VsNotContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNot`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNot?: (ctx: VsNotContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAnd`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAnd?: (ctx: VsAndContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAnd`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAnd?: (ctx: VsAndContext) => void;

	/**
	 * Enter a parse tree produced by the `vsOr`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsOr?: (ctx: VsOrContext) => void;
	/**
	 * Exit a parse tree produced by the `vsOr`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsOr?: (ctx: VsOrContext) => void;

	/**
	 * Enter a parse tree produced by the `vsXor`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsXor?: (ctx: VsXorContext) => void;
	/**
	 * Exit a parse tree produced by the `vsXor`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsXor?: (ctx: VsXorContext) => void;

	/**
	 * Enter a parse tree produced by the `vsEqv`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsEqv?: (ctx: VsEqvContext) => void;
	/**
	 * Exit a parse tree produced by the `vsEqv`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsEqv?: (ctx: VsEqvContext) => void;

	/**
	 * Enter a parse tree produced by the `vsImp`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsImp?: (ctx: VsImpContext) => void;
	/**
	 * Exit a parse tree produced by the `vsImp`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsImp?: (ctx: VsImpContext) => void;

	/**
	 * Enter a parse tree produced by the `vsICS`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsICS?: (ctx: VsICSContext) => void;
	/**
	 * Exit a parse tree produced by the `vsICS`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsICS?: (ctx: VsICSContext) => void;

	/**
	 * Enter a parse tree produced by the `vsMid`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMid?: (ctx: VsMidContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMid`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMid?: (ctx: VsMidContext) => void;

	/**
	 * Enter a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionBaseStmt?: (ctx: OptionBaseStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionBaseStmt?: (ctx: OptionBaseStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionCompareStmt?: (ctx: OptionCompareStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionCompareStmt?: (ctx: OptionCompareStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondElse`
	 * labeled alternative in `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	enterCaseCondElse?: (ctx: CaseCondElseContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondElse`
	 * labeled alternative in `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	exitCaseCondElse?: (ctx: CaseCondElseContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondExpr`
	 * labeled alternative in `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	enterCaseCondExpr?: (ctx: CaseCondExprContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondExpr`
	 * labeled alternative in `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	exitCaseCondExpr?: (ctx: CaseCondExprContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondExprIs`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	enterCaseCondExprIs?: (ctx: CaseCondExprIsContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondExprIs`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	exitCaseCondExprIs?: (ctx: CaseCondExprIsContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondExprValue`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	enterCaseCondExprValue?: (ctx: CaseCondExprValueContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondExprValue`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	exitCaseCondExprValue?: (ctx: CaseCondExprValueContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondExprTo`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	enterCaseCondExprTo?: (ctx: CaseCondExprToContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondExprTo`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	exitCaseCondExprTo?: (ctx: CaseCondExprToContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.startRule`.
	 * @param ctx the parse tree
	 */
	enterStartRule?: (ctx: StartRuleContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.startRule`.
	 * @param ctx the parse tree
	 */
	exitStartRule?: (ctx: StartRuleContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleReferences`.
	 * @param ctx the parse tree
	 */
	enterModuleReferences?: (ctx: ModuleReferencesContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleReferences`.
	 * @param ctx the parse tree
	 */
	exitModuleReferences?: (ctx: ModuleReferencesContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleImports`.
	 * @param ctx the parse tree
	 */
	enterModuleImports?: (ctx: ModuleImportsContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleImports`.
	 * @param ctx the parse tree
	 */
	exitModuleImports?: (ctx: ModuleImportsContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleReference`.
	 * @param ctx the parse tree
	 */
	enterModuleReference?: (ctx: ModuleReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleReference`.
	 * @param ctx the parse tree
	 */
	exitModuleReference?: (ctx: ModuleReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleReferenceValue`.
	 * @param ctx the parse tree
	 */
	enterModuleReferenceValue?: (ctx: ModuleReferenceValueContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleReferenceValue`.
	 * @param ctx the parse tree
	 */
	exitModuleReferenceValue?: (ctx: ModuleReferenceValueContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleReferenceComponent`.
	 * @param ctx the parse tree
	 */
	enterModuleReferenceComponent?: (ctx: ModuleReferenceComponentContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleReferenceComponent`.
	 * @param ctx the parse tree
	 */
	exitModuleReferenceComponent?: (ctx: ModuleReferenceComponentContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleHeader`.
	 * @param ctx the parse tree
	 */
	enterModuleHeader?: (ctx: ModuleHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleHeader`.
	 * @param ctx the parse tree
	 */
	exitModuleHeader?: (ctx: ModuleHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleConfig`.
	 * @param ctx the parse tree
	 */
	enterModuleConfig?: (ctx: ModuleConfigContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleConfig`.
	 * @param ctx the parse tree
	 */
	exitModuleConfig?: (ctx: ModuleConfigContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleConfigElement`.
	 * @param ctx the parse tree
	 */
	enterModuleConfigElement?: (ctx: ModuleConfigElementContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleConfigElement`.
	 * @param ctx the parse tree
	 */
	exitModuleConfigElement?: (ctx: ModuleConfigElementContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleAttributes`.
	 * @param ctx the parse tree
	 */
	enterModuleAttributes?: (ctx: ModuleAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleAttributes`.
	 * @param ctx the parse tree
	 */
	exitModuleAttributes?: (ctx: ModuleAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleOptions`.
	 * @param ctx the parse tree
	 */
	enterModuleOptions?: (ctx: ModuleOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleOptions`.
	 * @param ctx the parse tree
	 */
	exitModuleOptions?: (ctx: ModuleOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterModuleOption?: (ctx: ModuleOptionContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitModuleOption?: (ctx: ModuleOptionContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	enterModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	exitModuleBody?: (ctx: ModuleBodyContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleBodyElement`.
	 * @param ctx the parse tree
	 */
	enterModuleBodyElement?: (ctx: ModuleBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleBodyElement`.
	 * @param ctx the parse tree
	 */
	exitModuleBodyElement?: (ctx: ModuleBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.classBodyElement`.
	 * @param ctx the parse tree
	 */
	enterClassBodyElement?: (ctx: ClassBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.classBodyElement`.
	 * @param ctx the parse tree
	 */
	exitClassBodyElement?: (ctx: ClassBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.controlProperties`.
	 * @param ctx the parse tree
	 */
	enterControlProperties?: (ctx: ControlPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.controlProperties`.
	 * @param ctx the parse tree
	 */
	exitControlProperties?: (ctx: ControlPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.cp_Properties`.
	 * @param ctx the parse tree
	 */
	enterCp_Properties?: (ctx: Cp_PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.cp_Properties`.
	 * @param ctx the parse tree
	 */
	exitCp_Properties?: (ctx: Cp_PropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.cp_SingleProperty`.
	 * @param ctx the parse tree
	 */
	enterCp_SingleProperty?: (ctx: Cp_SinglePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.cp_SingleProperty`.
	 * @param ctx the parse tree
	 */
	exitCp_SingleProperty?: (ctx: Cp_SinglePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.cp_PropertyName`.
	 * @param ctx the parse tree
	 */
	enterCp_PropertyName?: (ctx: Cp_PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.cp_PropertyName`.
	 * @param ctx the parse tree
	 */
	exitCp_PropertyName?: (ctx: Cp_PropertyNameContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.cp_PropertyValue`.
	 * @param ctx the parse tree
	 */
	enterCp_PropertyValue?: (ctx: Cp_PropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.cp_PropertyValue`.
	 * @param ctx the parse tree
	 */
	exitCp_PropertyValue?: (ctx: Cp_PropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.cp_NestedProperty`.
	 * @param ctx the parse tree
	 */
	enterCp_NestedProperty?: (ctx: Cp_NestedPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.cp_NestedProperty`.
	 * @param ctx the parse tree
	 */
	exitCp_NestedProperty?: (ctx: Cp_NestedPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.cp_ControlType`.
	 * @param ctx the parse tree
	 */
	enterCp_ControlType?: (ctx: Cp_ControlTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.cp_ControlType`.
	 * @param ctx the parse tree
	 */
	exitCp_ControlType?: (ctx: Cp_ControlTypeContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.cp_ControlIdentifier`.
	 * @param ctx the parse tree
	 */
	enterCp_ControlIdentifier?: (ctx: Cp_ControlIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.cp_ControlIdentifier`.
	 * @param ctx the parse tree
	 */
	exitCp_ControlIdentifier?: (ctx: Cp_ControlIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.moduleBlock`.
	 * @param ctx the parse tree
	 */
	enterModuleBlock?: (ctx: ModuleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.moduleBlock`.
	 * @param ctx the parse tree
	 */
	exitModuleBlock?: (ctx: ModuleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportStmt?: (ctx: ImportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportStmt?: (ctx: ImportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.attributeStmt`.
	 * @param ctx the parse tree
	 */
	enterAttributeStmt?: (ctx: AttributeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.attributeStmt`.
	 * @param ctx the parse tree
	 */
	exitAttributeStmt?: (ctx: AttributeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.blockStmt`.
	 * @param ctx the parse tree
	 */
	enterBlockStmt?: (ctx: BlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.blockStmt`.
	 * @param ctx the parse tree
	 */
	exitBlockStmt?: (ctx: BlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.appActivateStmt`.
	 * @param ctx the parse tree
	 */
	enterAppActivateStmt?: (ctx: AppActivateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.appActivateStmt`.
	 * @param ctx the parse tree
	 */
	exitAppActivateStmt?: (ctx: AppActivateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.beepStmt`.
	 * @param ctx the parse tree
	 */
	enterBeepStmt?: (ctx: BeepStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.beepStmt`.
	 * @param ctx the parse tree
	 */
	exitBeepStmt?: (ctx: BeepStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.chDirStmt`.
	 * @param ctx the parse tree
	 */
	enterChDirStmt?: (ctx: ChDirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.chDirStmt`.
	 * @param ctx the parse tree
	 */
	exitChDirStmt?: (ctx: ChDirStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.chDriveStmt`.
	 * @param ctx the parse tree
	 */
	enterChDriveStmt?: (ctx: ChDriveStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.chDriveStmt`.
	 * @param ctx the parse tree
	 */
	exitChDriveStmt?: (ctx: ChDriveStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.classStmt`.
	 * @param ctx the parse tree
	 */
	enterClassStmt?: (ctx: ClassStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.classStmt`.
	 * @param ctx the parse tree
	 */
	exitClassStmt?: (ctx: ClassStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.closeStmt`.
	 * @param ctx the parse tree
	 */
	enterCloseStmt?: (ctx: CloseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.closeStmt`.
	 * @param ctx the parse tree
	 */
	exitCloseStmt?: (ctx: CloseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.constStmt`.
	 * @param ctx the parse tree
	 */
	enterConstStmt?: (ctx: ConstStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.constStmt`.
	 * @param ctx the parse tree
	 */
	exitConstStmt?: (ctx: ConstStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.constSubStmt`.
	 * @param ctx the parse tree
	 */
	enterConstSubStmt?: (ctx: ConstSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.constSubStmt`.
	 * @param ctx the parse tree
	 */
	exitConstSubStmt?: (ctx: ConstSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.dateStmt`.
	 * @param ctx the parse tree
	 */
	enterDateStmt?: (ctx: DateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.dateStmt`.
	 * @param ctx the parse tree
	 */
	exitDateStmt?: (ctx: DateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.declareStmt`.
	 * @param ctx the parse tree
	 */
	enterDeclareStmt?: (ctx: DeclareStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.declareStmt`.
	 * @param ctx the parse tree
	 */
	exitDeclareStmt?: (ctx: DeclareStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.deftypeStmt`.
	 * @param ctx the parse tree
	 */
	enterDeftypeStmt?: (ctx: DeftypeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.deftypeStmt`.
	 * @param ctx the parse tree
	 */
	exitDeftypeStmt?: (ctx: DeftypeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 */
	enterDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 */
	exitDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.doLoopStmt`.
	 * @param ctx the parse tree
	 */
	enterDoLoopStmt?: (ctx: DoLoopStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.doLoopStmt`.
	 * @param ctx the parse tree
	 */
	exitDoLoopStmt?: (ctx: DoLoopStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.endStmt`.
	 * @param ctx the parse tree
	 */
	enterEndStmt?: (ctx: EndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.endStmt`.
	 * @param ctx the parse tree
	 */
	exitEndStmt?: (ctx: EndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.enumerationStmt`.
	 * @param ctx the parse tree
	 */
	enterEnumerationStmt?: (ctx: EnumerationStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.enumerationStmt`.
	 * @param ctx the parse tree
	 */
	exitEnumerationStmt?: (ctx: EnumerationStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 */
	enterEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 */
	exitEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.eraseStmt`.
	 * @param ctx the parse tree
	 */
	enterEraseStmt?: (ctx: EraseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.eraseStmt`.
	 * @param ctx the parse tree
	 */
	exitEraseStmt?: (ctx: EraseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.errorStmt`.
	 * @param ctx the parse tree
	 */
	enterErrorStmt?: (ctx: ErrorStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.errorStmt`.
	 * @param ctx the parse tree
	 */
	exitErrorStmt?: (ctx: ErrorStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.eventStmt`.
	 * @param ctx the parse tree
	 */
	enterEventStmt?: (ctx: EventStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.eventStmt`.
	 * @param ctx the parse tree
	 */
	exitEventStmt?: (ctx: EventStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.exitStmt`.
	 * @param ctx the parse tree
	 */
	enterExitStmt?: (ctx: ExitStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.exitStmt`.
	 * @param ctx the parse tree
	 */
	exitExitStmt?: (ctx: ExitStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.filecopyStmt`.
	 * @param ctx the parse tree
	 */
	enterFilecopyStmt?: (ctx: FilecopyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.filecopyStmt`.
	 * @param ctx the parse tree
	 */
	exitFilecopyStmt?: (ctx: FilecopyStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.forEachStmt`.
	 * @param ctx the parse tree
	 */
	enterForEachStmt?: (ctx: ForEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.forEachStmt`.
	 * @param ctx the parse tree
	 */
	exitForEachStmt?: (ctx: ForEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.forNextStmt`.
	 * @param ctx the parse tree
	 */
	enterForNextStmt?: (ctx: ForNextStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.forNextStmt`.
	 * @param ctx the parse tree
	 */
	exitForNextStmt?: (ctx: ForNextStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.functionStmt`.
	 * @param ctx the parse tree
	 */
	enterFunctionStmt?: (ctx: FunctionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.functionStmt`.
	 * @param ctx the parse tree
	 */
	exitFunctionStmt?: (ctx: FunctionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.getStmt`.
	 * @param ctx the parse tree
	 */
	enterGetStmt?: (ctx: GetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.getStmt`.
	 * @param ctx the parse tree
	 */
	exitGetStmt?: (ctx: GetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.goSubStmt`.
	 * @param ctx the parse tree
	 */
	enterGoSubStmt?: (ctx: GoSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.goSubStmt`.
	 * @param ctx the parse tree
	 */
	exitGoSubStmt?: (ctx: GoSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.goToStmt`.
	 * @param ctx the parse tree
	 */
	enterGoToStmt?: (ctx: GoToStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.goToStmt`.
	 * @param ctx the parse tree
	 */
	exitGoToStmt?: (ctx: GoToStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterIfThenElseStmt?: (ctx: IfThenElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitIfThenElseStmt?: (ctx: IfThenElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.ifBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfBlockStmt?: (ctx: IfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.ifBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfBlockStmt?: (ctx: IfBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.ifConditionStmt`.
	 * @param ctx the parse tree
	 */
	enterIfConditionStmt?: (ctx: IfConditionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.ifConditionStmt`.
	 * @param ctx the parse tree
	 */
	exitIfConditionStmt?: (ctx: IfConditionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.implementsStmt`.
	 * @param ctx the parse tree
	 */
	enterImplementsStmt?: (ctx: ImplementsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.implementsStmt`.
	 * @param ctx the parse tree
	 */
	exitImplementsStmt?: (ctx: ImplementsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.inputStmt`.
	 * @param ctx the parse tree
	 */
	enterInputStmt?: (ctx: InputStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.inputStmt`.
	 * @param ctx the parse tree
	 */
	exitInputStmt?: (ctx: InputStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.killStmt`.
	 * @param ctx the parse tree
	 */
	enterKillStmt?: (ctx: KillStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.killStmt`.
	 * @param ctx the parse tree
	 */
	exitKillStmt?: (ctx: KillStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.letStmt`.
	 * @param ctx the parse tree
	 */
	enterLetStmt?: (ctx: LetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.letStmt`.
	 * @param ctx the parse tree
	 */
	exitLetStmt?: (ctx: LetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.lineInputStmt`.
	 * @param ctx the parse tree
	 */
	enterLineInputStmt?: (ctx: LineInputStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.lineInputStmt`.
	 * @param ctx the parse tree
	 */
	exitLineInputStmt?: (ctx: LineInputStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.loadStmt`.
	 * @param ctx the parse tree
	 */
	enterLoadStmt?: (ctx: LoadStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.loadStmt`.
	 * @param ctx the parse tree
	 */
	exitLoadStmt?: (ctx: LoadStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.lockStmt`.
	 * @param ctx the parse tree
	 */
	enterLockStmt?: (ctx: LockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.lockStmt`.
	 * @param ctx the parse tree
	 */
	exitLockStmt?: (ctx: LockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.lsetStmt`.
	 * @param ctx the parse tree
	 */
	enterLsetStmt?: (ctx: LsetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.lsetStmt`.
	 * @param ctx the parse tree
	 */
	exitLsetStmt?: (ctx: LsetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.midStmt`.
	 * @param ctx the parse tree
	 */
	enterMidStmt?: (ctx: MidStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.midStmt`.
	 * @param ctx the parse tree
	 */
	exitMidStmt?: (ctx: MidStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.mkdirStmt`.
	 * @param ctx the parse tree
	 */
	enterMkdirStmt?: (ctx: MkdirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.mkdirStmt`.
	 * @param ctx the parse tree
	 */
	exitMkdirStmt?: (ctx: MkdirStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.nameStmt`.
	 * @param ctx the parse tree
	 */
	enterNameStmt?: (ctx: NameStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.nameStmt`.
	 * @param ctx the parse tree
	 */
	exitNameStmt?: (ctx: NameStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.onErrorStmt`.
	 * @param ctx the parse tree
	 */
	enterOnErrorStmt?: (ctx: OnErrorStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.onErrorStmt`.
	 * @param ctx the parse tree
	 */
	exitOnErrorStmt?: (ctx: OnErrorStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.onGoToStmt`.
	 * @param ctx the parse tree
	 */
	enterOnGoToStmt?: (ctx: OnGoToStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.onGoToStmt`.
	 * @param ctx the parse tree
	 */
	exitOnGoToStmt?: (ctx: OnGoToStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.onGoSubStmt`.
	 * @param ctx the parse tree
	 */
	enterOnGoSubStmt?: (ctx: OnGoSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.onGoSubStmt`.
	 * @param ctx the parse tree
	 */
	exitOnGoSubStmt?: (ctx: OnGoSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.openStmt`.
	 * @param ctx the parse tree
	 */
	enterOpenStmt?: (ctx: OpenStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.openStmt`.
	 * @param ctx the parse tree
	 */
	exitOpenStmt?: (ctx: OpenStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.outputList`.
	 * @param ctx the parse tree
	 */
	enterOutputList?: (ctx: OutputListContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.outputList`.
	 * @param ctx the parse tree
	 */
	exitOutputList?: (ctx: OutputListContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.outputList_Expression`.
	 * @param ctx the parse tree
	 */
	enterOutputList_Expression?: (ctx: OutputList_ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.outputList_Expression`.
	 * @param ctx the parse tree
	 */
	exitOutputList_Expression?: (ctx: OutputList_ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.printStmt`.
	 * @param ctx the parse tree
	 */
	enterPrintStmt?: (ctx: PrintStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.printStmt`.
	 * @param ctx the parse tree
	 */
	exitPrintStmt?: (ctx: PrintStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.propertyGetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertyGetStmt?: (ctx: PropertyGetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.propertyGetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertyGetStmt?: (ctx: PropertyGetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.propertySetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertySetStmt?: (ctx: PropertySetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.propertySetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertySetStmt?: (ctx: PropertySetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.propertyLetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertyLetStmt?: (ctx: PropertyLetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.propertyLetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertyLetStmt?: (ctx: PropertyLetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.putStmt`.
	 * @param ctx the parse tree
	 */
	enterPutStmt?: (ctx: PutStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.putStmt`.
	 * @param ctx the parse tree
	 */
	exitPutStmt?: (ctx: PutStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.raiseEventStmt`.
	 * @param ctx the parse tree
	 */
	enterRaiseEventStmt?: (ctx: RaiseEventStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.raiseEventStmt`.
	 * @param ctx the parse tree
	 */
	exitRaiseEventStmt?: (ctx: RaiseEventStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.randomizeStmt`.
	 * @param ctx the parse tree
	 */
	enterRandomizeStmt?: (ctx: RandomizeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.randomizeStmt`.
	 * @param ctx the parse tree
	 */
	exitRandomizeStmt?: (ctx: RandomizeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.redimStmt`.
	 * @param ctx the parse tree
	 */
	enterRedimStmt?: (ctx: RedimStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.redimStmt`.
	 * @param ctx the parse tree
	 */
	exitRedimStmt?: (ctx: RedimStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.redimSubStmt`.
	 * @param ctx the parse tree
	 */
	enterRedimSubStmt?: (ctx: RedimSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.redimSubStmt`.
	 * @param ctx the parse tree
	 */
	exitRedimSubStmt?: (ctx: RedimSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.resetStmt`.
	 * @param ctx the parse tree
	 */
	enterResetStmt?: (ctx: ResetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.resetStmt`.
	 * @param ctx the parse tree
	 */
	exitResetStmt?: (ctx: ResetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.resumeStmt`.
	 * @param ctx the parse tree
	 */
	enterResumeStmt?: (ctx: ResumeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.resumeStmt`.
	 * @param ctx the parse tree
	 */
	exitResumeStmt?: (ctx: ResumeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.rmdirStmt`.
	 * @param ctx the parse tree
	 */
	enterRmdirStmt?: (ctx: RmdirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.rmdirStmt`.
	 * @param ctx the parse tree
	 */
	exitRmdirStmt?: (ctx: RmdirStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.rsetStmt`.
	 * @param ctx the parse tree
	 */
	enterRsetStmt?: (ctx: RsetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.rsetStmt`.
	 * @param ctx the parse tree
	 */
	exitRsetStmt?: (ctx: RsetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.savepictureStmt`.
	 * @param ctx the parse tree
	 */
	enterSavepictureStmt?: (ctx: SavepictureStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.savepictureStmt`.
	 * @param ctx the parse tree
	 */
	exitSavepictureStmt?: (ctx: SavepictureStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.saveSettingStmt`.
	 * @param ctx the parse tree
	 */
	enterSaveSettingStmt?: (ctx: SaveSettingStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.saveSettingStmt`.
	 * @param ctx the parse tree
	 */
	exitSaveSettingStmt?: (ctx: SaveSettingStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.seekStmt`.
	 * @param ctx the parse tree
	 */
	enterSeekStmt?: (ctx: SeekStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.seekStmt`.
	 * @param ctx the parse tree
	 */
	exitSeekStmt?: (ctx: SeekStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.selectCaseStmt`.
	 * @param ctx the parse tree
	 */
	enterSelectCaseStmt?: (ctx: SelectCaseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.selectCaseStmt`.
	 * @param ctx the parse tree
	 */
	exitSelectCaseStmt?: (ctx: SelectCaseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.sC_Case`.
	 * @param ctx the parse tree
	 */
	enterSC_Case?: (ctx: SC_CaseContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.sC_Case`.
	 * @param ctx the parse tree
	 */
	exitSC_Case?: (ctx: SC_CaseContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	enterSC_Cond?: (ctx: SC_CondContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	exitSC_Cond?: (ctx: SC_CondContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	enterSC_CondExpr?: (ctx: SC_CondExprContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	exitSC_CondExpr?: (ctx: SC_CondExprContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.sendkeysStmt`.
	 * @param ctx the parse tree
	 */
	enterSendkeysStmt?: (ctx: SendkeysStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.sendkeysStmt`.
	 * @param ctx the parse tree
	 */
	exitSendkeysStmt?: (ctx: SendkeysStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.setattrStmt`.
	 * @param ctx the parse tree
	 */
	enterSetattrStmt?: (ctx: SetattrStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.setattrStmt`.
	 * @param ctx the parse tree
	 */
	exitSetattrStmt?: (ctx: SetattrStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.setStmt`.
	 * @param ctx the parse tree
	 */
	enterSetStmt?: (ctx: SetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.setStmt`.
	 * @param ctx the parse tree
	 */
	exitSetStmt?: (ctx: SetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.stopStmt`.
	 * @param ctx the parse tree
	 */
	enterStopStmt?: (ctx: StopStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.stopStmt`.
	 * @param ctx the parse tree
	 */
	exitStopStmt?: (ctx: StopStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.subStmt`.
	 * @param ctx the parse tree
	 */
	enterSubStmt?: (ctx: SubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.subStmt`.
	 * @param ctx the parse tree
	 */
	exitSubStmt?: (ctx: SubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.timeStmt`.
	 * @param ctx the parse tree
	 */
	enterTimeStmt?: (ctx: TimeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.timeStmt`.
	 * @param ctx the parse tree
	 */
	exitTimeStmt?: (ctx: TimeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.typeStmt`.
	 * @param ctx the parse tree
	 */
	enterTypeStmt?: (ctx: TypeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.typeStmt`.
	 * @param ctx the parse tree
	 */
	exitTypeStmt?: (ctx: TypeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.typeStmt_Element`.
	 * @param ctx the parse tree
	 */
	enterTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.typeStmt_Element`.
	 * @param ctx the parse tree
	 */
	exitTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.typeOfStmt`.
	 * @param ctx the parse tree
	 */
	enterTypeOfStmt?: (ctx: TypeOfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.typeOfStmt`.
	 * @param ctx the parse tree
	 */
	exitTypeOfStmt?: (ctx: TypeOfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.unloadStmt`.
	 * @param ctx the parse tree
	 */
	enterUnloadStmt?: (ctx: UnloadStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.unloadStmt`.
	 * @param ctx the parse tree
	 */
	exitUnloadStmt?: (ctx: UnloadStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.unlockStmt`.
	 * @param ctx the parse tree
	 */
	enterUnlockStmt?: (ctx: UnlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.unlockStmt`.
	 * @param ctx the parse tree
	 */
	exitUnlockStmt?: (ctx: UnlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterValueStmt?: (ctx: ValueStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitValueStmt?: (ctx: ValueStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.variableStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableStmt?: (ctx: VariableStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.variableStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableStmt?: (ctx: VariableStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.variableListStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableListStmt?: (ctx: VariableListStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.variableListStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableListStmt?: (ctx: VariableListStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.variableSubStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableSubStmt?: (ctx: VariableSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.variableSubStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableSubStmt?: (ctx: VariableSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.whileWendStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileWendStmt?: (ctx: WhileWendStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.whileWendStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileWendStmt?: (ctx: WhileWendStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.widthStmt`.
	 * @param ctx the parse tree
	 */
	enterWidthStmt?: (ctx: WidthStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.widthStmt`.
	 * @param ctx the parse tree
	 */
	exitWidthStmt?: (ctx: WidthStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.withStmt`.
	 * @param ctx the parse tree
	 */
	enterWithStmt?: (ctx: WithStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.withStmt`.
	 * @param ctx the parse tree
	 */
	exitWithStmt?: (ctx: WithStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.writeStmt`.
	 * @param ctx the parse tree
	 */
	enterWriteStmt?: (ctx: WriteStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.writeStmt`.
	 * @param ctx the parse tree
	 */
	exitWriteStmt?: (ctx: WriteStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.explicitCallStmt`.
	 * @param ctx the parse tree
	 */
	enterExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.explicitCallStmt`.
	 * @param ctx the parse tree
	 */
	exitExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 */
	enterImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 */
	exitImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 */
	enterImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 */
	exitImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.iCS_S_NestedProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_NestedProcedureCall?: (ctx: ICS_S_NestedProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.iCS_S_NestedProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_NestedProcedureCall?: (ctx: ICS_S_NestedProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.argsCall`.
	 * @param ctx the parse tree
	 */
	enterArgsCall?: (ctx: ArgsCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.argsCall`.
	 * @param ctx the parse tree
	 */
	exitArgsCall?: (ctx: ArgsCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.argCall`.
	 * @param ctx the parse tree
	 */
	enterArgCall?: (ctx: ArgCallContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.argCall`.
	 * @param ctx the parse tree
	 */
	exitArgCall?: (ctx: ArgCallContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 */
	enterDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 */
	exitDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.argList`.
	 * @param ctx the parse tree
	 */
	enterArgList?: (ctx: ArgListContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.argList`.
	 * @param ctx the parse tree
	 */
	exitArgList?: (ctx: ArgListContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.argDefaultValue`.
	 * @param ctx the parse tree
	 */
	enterArgDefaultValue?: (ctx: ArgDefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.argDefaultValue`.
	 * @param ctx the parse tree
	 */
	exitArgDefaultValue?: (ctx: ArgDefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.subscripts`.
	 * @param ctx the parse tree
	 */
	enterSubscripts?: (ctx: SubscriptsContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.subscripts`.
	 * @param ctx the parse tree
	 */
	exitSubscripts?: (ctx: SubscriptsContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.subscript`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.subscript`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.asTypeClause`.
	 * @param ctx the parse tree
	 */
	enterAsTypeClause?: (ctx: AsTypeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.asTypeClause`.
	 * @param ctx the parse tree
	 */
	exitAsTypeClause?: (ctx: AsTypeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.certainIdentifier`.
	 * @param ctx the parse tree
	 */
	enterCertainIdentifier?: (ctx: CertainIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.certainIdentifier`.
	 * @param ctx the parse tree
	 */
	exitCertainIdentifier?: (ctx: CertainIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.complexType`.
	 * @param ctx the parse tree
	 */
	enterComplexType?: (ctx: ComplexTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.complexType`.
	 * @param ctx the parse tree
	 */
	exitComplexType?: (ctx: ComplexTypeContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.fieldLength`.
	 * @param ctx the parse tree
	 */
	enterFieldLength?: (ctx: FieldLengthContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.fieldLength`.
	 * @param ctx the parse tree
	 */
	exitFieldLength?: (ctx: FieldLengthContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.letterrange`.
	 * @param ctx the parse tree
	 */
	enterLetterrange?: (ctx: LetterrangeContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.letterrange`.
	 * @param ctx the parse tree
	 */
	exitLetterrange?: (ctx: LetterrangeContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.lineLabel`.
	 * @param ctx the parse tree
	 */
	enterLineLabel?: (ctx: LineLabelContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.lineLabel`.
	 * @param ctx the parse tree
	 */
	exitLineLabel?: (ctx: LineLabelContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.publicPrivateVisibility`.
	 * @param ctx the parse tree
	 */
	enterPublicPrivateVisibility?: (ctx: PublicPrivateVisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.publicPrivateVisibility`.
	 * @param ctx the parse tree
	 */
	exitPublicPrivateVisibility?: (ctx: PublicPrivateVisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.publicPrivateGlobalVisibility`.
	 * @param ctx the parse tree
	 */
	enterPublicPrivateGlobalVisibility?: (ctx: PublicPrivateGlobalVisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.publicPrivateGlobalVisibility`.
	 * @param ctx the parse tree
	 */
	exitPublicPrivateGlobalVisibility?: (ctx: PublicPrivateGlobalVisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.typeHint`.
	 * @param ctx the parse tree
	 */
	enterTypeHint?: (ctx: TypeHintContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.typeHint`.
	 * @param ctx the parse tree
	 */
	exitTypeHint?: (ctx: TypeHintContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.visibility`.
	 * @param ctx the parse tree
	 */
	enterVisibility?: (ctx: VisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.visibility`.
	 * @param ctx the parse tree
	 */
	exitVisibility?: (ctx: VisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `BosParser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 */
	enterAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `BosParser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 */
	exitAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => void;
}

