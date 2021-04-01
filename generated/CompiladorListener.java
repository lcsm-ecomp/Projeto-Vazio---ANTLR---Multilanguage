// Generated from Compilador.e4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CompiladorParser}.
 */
public interface CompiladorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CompiladorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(CompiladorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompiladorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(CompiladorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompiladorParser#classe}.
	 * @param ctx the parse tree
	 */
	void enterClasse(CompiladorParser.ClasseContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompiladorParser#classe}.
	 * @param ctx the parse tree
	 */
	void exitClasse(CompiladorParser.ClasseContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompiladorParser#var}.
	 * @param ctx the parse tree
	 */
	void enterVar(CompiladorParser.VarContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompiladorParser#var}.
	 * @param ctx the parse tree
	 */
	void exitVar(CompiladorParser.VarContext ctx);
}