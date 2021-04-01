# Generated from Compilador.e4 by ANTLR 4.8
from antlr4 import *
from io import StringIO
from typing.io import TextIO
import sys



def serializedATN():
    with StringIO() as buf:
        buf.write("\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\n")
        buf.write("\61\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t")
        buf.write("\7\4\b\t\b\4\t\t\t\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3")
        buf.write("\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\7\b)")
        buf.write("\n\b\f\b\16\b,\13\b\3\t\3\t\3\t\3\t\2\2\n\3\3\5\4\7\5")
        buf.write("\t\6\13\7\r\b\17\t\21\n\3\2\5\4\2C\\c|\5\2\62;C\\c|\4")
        buf.write("\2\13\f\"\"\2\61\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2")
        buf.write("\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21")
        buf.write("\3\2\2\2\3\23\3\2\2\2\5\30\3\2\2\2\7\36\3\2\2\2\t \3\2")
        buf.write("\2\2\13\"\3\2\2\2\r$\3\2\2\2\17&\3\2\2\2\21-\3\2\2\2\23")
        buf.write("\24\7f\2\2\24\25\7c\2\2\25\26\7v\2\2\26\27\7c\2\2\27\4")
        buf.write("\3\2\2\2\30\31\7e\2\2\31\32\7n\2\2\32\33\7c\2\2\33\34")
        buf.write("\7u\2\2\34\35\7u\2\2\35\6\3\2\2\2\36\37\7*\2\2\37\b\3")
        buf.write("\2\2\2 !\7.\2\2!\n\3\2\2\2\"#\7+\2\2#\f\3\2\2\2$%\7=\2")
        buf.write("\2%\16\3\2\2\2&*\t\2\2\2\')\t\3\2\2(\'\3\2\2\2),\3\2\2")
        buf.write("\2*(\3\2\2\2*+\3\2\2\2+\20\3\2\2\2,*\3\2\2\2-.\t\4\2\2")
        buf.write("./\3\2\2\2/\60\b\t\2\2\60\22\3\2\2\2\4\2*\3\b\2\2")
        return buf.getvalue()


class CompiladorLexer(Lexer):

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    T__0 = 1
    T__1 = 2
    T__2 = 3
    T__3 = 4
    T__4 = 5
    T__5 = 6
    ID = 7
    SPACE = 8

    channelNames = [ u"DEFAULT_TOKEN_CHANNEL", u"HIDDEN" ]

    modeNames = [ "DEFAULT_MODE" ]

    literalNames = [ "<INVALID>",
            "'data'", "'class'", "'('", "','", "')'", "';'" ]

    symbolicNames = [ "<INVALID>",
            "ID", "SPACE" ]

    ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "ID", 
                  "SPACE" ]

    grammarFileName = "Compilador.e4"

    def __init__(self, input=None, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.8")
        self._interp = LexerATNSimulator(self, self.atn, self.decisionsToDFA, PredictionContextCache())
        self._actions = None
        self._predicates = None


