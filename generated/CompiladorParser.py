# Generated from Compilador.e4 by ANTLR 4.8
# encoding: utf-8
from antlr4 import *
from io import StringIO
import sys
if sys.version_info[1] > 5:
	from typing import TextIO
else:
	from typing.io import TextIO


def serializedATN():
    with StringIO() as buf:
        buf.write("\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\n")
        buf.write("#\4\2\t\2\4\3\t\3\4\4\t\4\3\2\7\2\n\n\2\f\2\16\2\r\13")
        buf.write("\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3\30\n\3\f\3")
        buf.write("\16\3\33\13\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\2\2\5\2\4\6")
        buf.write("\2\2\2!\2\13\3\2\2\2\4\20\3\2\2\2\6\37\3\2\2\2\b\n\5\4")
        buf.write("\3\2\t\b\3\2\2\2\n\r\3\2\2\2\13\t\3\2\2\2\13\f\3\2\2\2")
        buf.write("\f\16\3\2\2\2\r\13\3\2\2\2\16\17\7\2\2\3\17\3\3\2\2\2")
        buf.write("\20\21\7\3\2\2\21\22\7\4\2\2\22\23\7\t\2\2\23\24\7\5\2")
        buf.write("\2\24\31\5\6\4\2\25\26\7\6\2\2\26\30\5\6\4\2\27\25\3\2")
        buf.write("\2\2\30\33\3\2\2\2\31\27\3\2\2\2\31\32\3\2\2\2\32\34\3")
        buf.write("\2\2\2\33\31\3\2\2\2\34\35\7\7\2\2\35\36\7\b\2\2\36\5")
        buf.write("\3\2\2\2\37 \7\t\2\2 !\7\t\2\2!\7\3\2\2\2\4\13\31")
        return buf.getvalue()


class CompiladorParser ( Parser ):

    grammarFileName = "Compilador.e4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "'data'", "'class'", "'('", "','", "')'", 
                     "';'" ]

    symbolicNames = [ "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "<INVALID>", "<INVALID>", "<INVALID>", "ID", "SPACE" ]

    RULE_programa = 0
    RULE_classe = 1
    RULE_var = 2

    ruleNames =  [ "programa", "classe", "var" ]

    EOF = Token.EOF
    T__0=1
    T__1=2
    T__2=3
    T__3=4
    T__4=5
    T__5=6
    ID=7
    SPACE=8

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.8")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class ProgramaContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def EOF(self):
            return self.getToken(CompiladorParser.EOF, 0)

        def classe(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(CompiladorParser.ClasseContext)
            else:
                return self.getTypedRuleContext(CompiladorParser.ClasseContext,i)


        def getRuleIndex(self):
            return CompiladorParser.RULE_programa

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterPrograma" ):
                listener.enterPrograma(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitPrograma" ):
                listener.exitPrograma(self)




    def programa(self):

        localctx = CompiladorParser.ProgramaContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_programa)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 9
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==CompiladorParser.T__0:
                self.state = 6
                self.classe()
                self.state = 11
                self._errHandler.sync(self)
                _la = self._input.LA(1)

            self.state = 12
            self.match(CompiladorParser.EOF)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ClasseContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def ID(self):
            return self.getToken(CompiladorParser.ID, 0)

        def var(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(CompiladorParser.VarContext)
            else:
                return self.getTypedRuleContext(CompiladorParser.VarContext,i)


        def getRuleIndex(self):
            return CompiladorParser.RULE_classe

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterClasse" ):
                listener.enterClasse(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitClasse" ):
                listener.exitClasse(self)




    def classe(self):

        localctx = CompiladorParser.ClasseContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_classe)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 14
            self.match(CompiladorParser.T__0)
            self.state = 15
            self.match(CompiladorParser.T__1)
            self.state = 16
            self.match(CompiladorParser.ID)
            self.state = 17
            self.match(CompiladorParser.T__2)
            self.state = 18
            self.var()
            self.state = 23
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==CompiladorParser.T__3:
                self.state = 19
                self.match(CompiladorParser.T__3)
                self.state = 20
                self.var()
                self.state = 25
                self._errHandler.sync(self)
                _la = self._input.LA(1)

            self.state = 26
            self.match(CompiladorParser.T__4)
            self.state = 27
            self.match(CompiladorParser.T__5)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class VarContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def ID(self, i:int=None):
            if i is None:
                return self.getTokens(CompiladorParser.ID)
            else:
                return self.getToken(CompiladorParser.ID, i)

        def getRuleIndex(self):
            return CompiladorParser.RULE_var

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterVar" ):
                listener.enterVar(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitVar" ):
                listener.exitVar(self)




    def var(self):

        localctx = CompiladorParser.VarContext(self, self._ctx, self.state)
        self.enterRule(localctx, 4, self.RULE_var)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 29
            self.match(CompiladorParser.ID)
            self.state = 30
            self.match(CompiladorParser.ID)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx





