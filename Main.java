import java.io.*;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.util.*;
import java.util.function.*;


class Main {

  static StringBuffer dest = new StringBuffer();
  //Imprime uma string formatadas no dest
  static void printf(String fmt, Object ...args) {
	  //substitui todos os argumentos to tipo Token pelo seu texto.
	  for (int c=0;c<args.length;c++)
	     if (args[c] instanceof Token)
		    args[c] = ((Token)args[c]).getText();
      dest.append(String.format(fmt,args));
  }
  public static void geraCodigo(ParseTree prog) {
      printf("//Codigo das dataclasses definidas\n");
	  for (int classNum=0;classNum<prog.getChildCount()-1;classNum++) {
		  ParseTree classe = prog.getChild(classNum);
		  String nomeClasse = classe.getChild(2).getText();
		  printf("class %s {\n",nomeClasse);
		  for (int decl=4;decl<classe.getChildCount()-2;decl+=2) {
			  ParseTree aDecl = classe.getChild(decl);
			  String tipo = aDecl.getChild(0).getText();
			  String nome = aDecl.getChild(1).getText();
			  printf("   //Declaracao de %s %s\n",tipo,nome);
			  printf("   private %s %s;\n",tipo,nome);
			  printf("   %s %s() { return %s; }\n",tipo,nome,nome);
			  printf("   void %s(%s _%s) { %s = _%s; }\n\n",nome,tipo,nome,nome,nome);
		  }
		  printf("   String toString() {\n");
		  printf("       return \"%s(\"",nomeClasse);
		  for (int decl=4;decl<classe.getChildCount()-2;decl+=2) {
			  ParseTree aDecl = classe.getChild(decl);
			  String tipo = aDecl.getChild(0).getText();
			  String nome = aDecl.getChild(1).getText();
			  printf("+%s+\" \"",nome);
		  }
		  printf("+\")\";\n");
		  printf("   }\n\n");
		  
		  printf("}\n\n");
	  }
  }
  public static void main(String args[]) throws Exception {
     //CharStream src = CharStreams.fromString("10 + 2 *3"); // Ler de uma String 
     CharStream src = CharStreams.fromFileName(args[0]); // Ler de um arquivo
     CompiladorLexer lexer = new CompiladorLexer(src);
     TokenStream tkStream = new CommonTokenStream(lexer);
     CompiladorParser parser = new CompiladorParser(tkStream);

     CompiladorParser.ProgramaContext ctx = parser.programa();
	 if (parser.getNumberOfSyntaxErrors()>0) {
		 System.out.println(parser.getNumberOfSyntaxErrors() + " Erros foram encontrados\n");
		 return;
	 }
	 System.out.println("Entrada ok");
	 geraCodigo(ctx);
	 System.out.println("Codigo gerado:\n" + dest.toString());

  }
}