# Generated from Compilador.e4 by ANTLR 4.8
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .CompiladorParser import CompiladorParser
else:
    from CompiladorParser import CompiladorParser

# This class defines a complete listener for a parse tree produced by CompiladorParser.
class CompiladorListener(ParseTreeListener):

    # Enter a parse tree produced by CompiladorParser#programa.
    def enterPrograma(self, ctx:CompiladorParser.ProgramaContext):
        pass

    # Exit a parse tree produced by CompiladorParser#programa.
    def exitPrograma(self, ctx:CompiladorParser.ProgramaContext):
        pass


    # Enter a parse tree produced by CompiladorParser#classe.
    def enterClasse(self, ctx:CompiladorParser.ClasseContext):
        pass

    # Exit a parse tree produced by CompiladorParser#classe.
    def exitClasse(self, ctx:CompiladorParser.ClasseContext):
        pass


    # Enter a parse tree produced by CompiladorParser#var.
    def enterVar(self, ctx:CompiladorParser.VarContext):
        pass

    # Exit a parse tree produced by CompiladorParser#var.
    def exitVar(self, ctx:CompiladorParser.VarContext):
        pass



del CompiladorParser