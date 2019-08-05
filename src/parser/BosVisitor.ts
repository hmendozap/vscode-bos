// Generated from grammars/Bos.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BosParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface BosVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineIfThenElse?: (ctx: InlineIfThenElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockIfThenElse?: (ctx: BlockIfThenElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLiteral`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLiteral?: (ctx: VsLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsStruct`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsStruct?: (ctx: VsStructContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNew`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNew?: (ctx: VsNewContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsTypeOf?: (ctx: VsTypeOfContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAddressOf?: (ctx: VsAddressOfContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAssign`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAssign?: (ctx: VsAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsPow`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsPow?: (ctx: VsPowContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNegation`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNegation?: (ctx: VsNegationContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsPlus`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsPlus?: (ctx: VsPlusContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsDiv`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsDiv?: (ctx: VsDivContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMult`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMult?: (ctx: VsMultContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMod`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMod?: (ctx: VsModContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAdd`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAdd?: (ctx: VsAddContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMinus`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMinus?: (ctx: VsMinusContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAmp`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAmp?: (ctx: VsAmpContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsEq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsEq?: (ctx: VsEqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNeq?: (ctx: VsNeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLt`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLt?: (ctx: VsLtContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsGt`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsGt?: (ctx: VsGtContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLeq?: (ctx: VsLeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsGeq`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsGeq?: (ctx: VsGeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLike`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLike?: (ctx: VsLikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsIs`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsIs?: (ctx: VsIsContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNot`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNot?: (ctx: VsNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAnd`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAnd?: (ctx: VsAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsOr`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsOr?: (ctx: VsOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsXor`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsXor?: (ctx: VsXorContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsEqv`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsEqv?: (ctx: VsEqvContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsImp`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsImp?: (ctx: VsImpContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsICS`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsICS?: (ctx: VsICSContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMid`
	 * labeled alternative in `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMid?: (ctx: VsMidContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionBaseStmt?: (ctx: OptionBaseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionCompareStmt?: (ctx: OptionCompareStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondElse`
	 * labeled alternative in `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondElse?: (ctx: CaseCondElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondExpr`
	 * labeled alternative in `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondExpr?: (ctx: CaseCondExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondExprIs`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondExprIs?: (ctx: CaseCondExprIsContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondExprValue`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondExprValue?: (ctx: CaseCondExprValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondExprTo`
	 * labeled alternative in `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondExprTo?: (ctx: CaseCondExprToContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.startRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartRule?: (ctx: StartRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleReferences`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleReferences?: (ctx: ModuleReferencesContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleImports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleImports?: (ctx: ModuleImportsContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleReference?: (ctx: ModuleReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleReferenceValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleReferenceValue?: (ctx: ModuleReferenceValueContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleReferenceComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleReferenceComponent?: (ctx: ModuleReferenceComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleHeader?: (ctx: ModuleHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleConfig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleConfig?: (ctx: ModuleConfigContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleConfigElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleConfigElement?: (ctx: ModuleConfigElementContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleAttributes?: (ctx: ModuleAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleOptions?: (ctx: ModuleOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleOption?: (ctx: ModuleOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBody?: (ctx: ModuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBodyElement?: (ctx: ModuleBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.classBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyElement?: (ctx: ClassBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.controlProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlProperties?: (ctx: ControlPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.cp_Properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_Properties?: (ctx: Cp_PropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.cp_SingleProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_SingleProperty?: (ctx: Cp_SinglePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.cp_PropertyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_PropertyName?: (ctx: Cp_PropertyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.cp_PropertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_PropertyValue?: (ctx: Cp_PropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.cp_NestedProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_NestedProperty?: (ctx: Cp_NestedPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.cp_ControlType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_ControlType?: (ctx: Cp_ControlTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.cp_ControlIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_ControlIdentifier?: (ctx: Cp_ControlIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.moduleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBlock?: (ctx: ModuleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStmt?: (ctx: ImportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.attributeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeStmt?: (ctx: AttributeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.blockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmt?: (ctx: BlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.appActivateStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAppActivateStmt?: (ctx: AppActivateStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.beepStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeepStmt?: (ctx: BeepStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.chDirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChDirStmt?: (ctx: ChDirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.chDriveStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChDriveStmt?: (ctx: ChDriveStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.classStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassStmt?: (ctx: ClassStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.closeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseStmt?: (ctx: CloseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.constStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstStmt?: (ctx: ConstStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.constSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstSubStmt?: (ctx: ConstSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.dateStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateStmt?: (ctx: DateStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.declareStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareStmt?: (ctx: DeclareStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.deftypeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeftypeStmt?: (ctx: DeftypeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.doLoopStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoLoopStmt?: (ctx: DoLoopStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.endStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndStmt?: (ctx: EndStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.enumerationStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationStmt?: (ctx: EnumerationStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.eraseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEraseStmt?: (ctx: EraseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.errorStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorStmt?: (ctx: ErrorStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.eventStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventStmt?: (ctx: EventStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.exitStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitStmt?: (ctx: ExitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.filecopyStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilecopyStmt?: (ctx: FilecopyStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.forEachStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForEachStmt?: (ctx: ForEachStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.forNextStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForNextStmt?: (ctx: ForNextStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.functionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionStmt?: (ctx: FunctionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.getStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetStmt?: (ctx: GetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.goSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoSubStmt?: (ctx: GoSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.goToStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoToStmt?: (ctx: GoToStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStmt?: (ctx: IfThenElseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.ifBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBlockStmt?: (ctx: IfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.ifConditionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfConditionStmt?: (ctx: IfConditionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.implementsStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementsStmt?: (ctx: ImplementsStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.inputStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputStmt?: (ctx: InputStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.killStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillStmt?: (ctx: KillStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.letStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStmt?: (ctx: LetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.lineInputStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineInputStmt?: (ctx: LineInputStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.loadStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadStmt?: (ctx: LoadStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.lockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockStmt?: (ctx: LockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.lsetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLsetStmt?: (ctx: LsetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.midStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMidStmt?: (ctx: MidStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.mkdirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMkdirStmt?: (ctx: MkdirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.nameStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameStmt?: (ctx: NameStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.onErrorStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnErrorStmt?: (ctx: OnErrorStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.onGoToStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnGoToStmt?: (ctx: OnGoToStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.onGoSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnGoSubStmt?: (ctx: OnGoSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.openStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenStmt?: (ctx: OpenStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.outputList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputList?: (ctx: OutputListContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.outputList_Expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputList_Expression?: (ctx: OutputList_ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.printStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.propertyGetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyGetStmt?: (ctx: PropertyGetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.propertySetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertySetStmt?: (ctx: PropertySetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.propertyLetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyLetStmt?: (ctx: PropertyLetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.putStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPutStmt?: (ctx: PutStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.raiseEventStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaiseEventStmt?: (ctx: RaiseEventStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.randomizeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomizeStmt?: (ctx: RandomizeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.redimStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedimStmt?: (ctx: RedimStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.redimSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedimSubStmt?: (ctx: RedimSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.resetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetStmt?: (ctx: ResetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.resumeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResumeStmt?: (ctx: ResumeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.rmdirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRmdirStmt?: (ctx: RmdirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.rsetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRsetStmt?: (ctx: RsetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.savepictureStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSavepictureStmt?: (ctx: SavepictureStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.saveSettingStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSaveSettingStmt?: (ctx: SaveSettingStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.seekStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeekStmt?: (ctx: SeekStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.selectCaseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectCaseStmt?: (ctx: SelectCaseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.sC_Case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_Case?: (ctx: SC_CaseContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_Cond?: (ctx: SC_CondContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.sC_CondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_CondExpr?: (ctx: SC_CondExprContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.sendkeysStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSendkeysStmt?: (ctx: SendkeysStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.setattrStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetattrStmt?: (ctx: SetattrStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.setStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStmt?: (ctx: SetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.stopStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStopStmt?: (ctx: StopStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.subStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubStmt?: (ctx: SubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.timeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeStmt?: (ctx: TimeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.typeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStmt?: (ctx: TypeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.typeStmt_Element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.typeOfStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeOfStmt?: (ctx: TypeOfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.unloadStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnloadStmt?: (ctx: UnloadStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.unlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockStmt?: (ctx: UnlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueStmt?: (ctx: ValueStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.variableStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStmt?: (ctx: VariableStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.variableListStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableListStmt?: (ctx: VariableListStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.variableSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableSubStmt?: (ctx: VariableSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.whileWendStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileWendStmt?: (ctx: WhileWendStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.widthStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWidthStmt?: (ctx: WidthStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.withStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithStmt?: (ctx: WithStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.writeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWriteStmt?: (ctx: WriteStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.explicitCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.iCS_S_NestedProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_NestedProcedureCall?: (ctx: ICS_S_NestedProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.argsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsCall?: (ctx: ArgsCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.argCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgCall?: (ctx: ArgCallContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.argList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgList?: (ctx: ArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.argDefaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgDefaultValue?: (ctx: ArgDefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.subscripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscripts?: (ctx: SubscriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.asTypeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsTypeClause?: (ctx: AsTypeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.certainIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCertainIdentifier?: (ctx: CertainIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.complexType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexType?: (ctx: ComplexTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.fieldLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldLength?: (ctx: FieldLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.letterrange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetterrange?: (ctx: LetterrangeContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.lineLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineLabel?: (ctx: LineLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.publicPrivateVisibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPublicPrivateVisibility?: (ctx: PublicPrivateVisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.publicPrivateGlobalVisibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPublicPrivateGlobalVisibility?: (ctx: PublicPrivateGlobalVisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.typeHint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeHint?: (ctx: TypeHintContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.visibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisibility?: (ctx: VisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `BosParser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => Result;
}

