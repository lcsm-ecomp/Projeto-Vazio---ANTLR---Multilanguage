// Generated from Compilador.e4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\n1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007\b)",
    "\n\b\f\b\u000e\b,\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0002\u0002",
    "\n\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0003\u0002\u0005\u0004\u0002C\\c|\u0005\u00022;C\\c|\u0004",
    "\u0002\u000b\f\"\"\u00021\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003\u0002\u0002\u0002\u0005",
    "\u0018\u0003\u0002\u0002\u0002\u0007\u001e\u0003\u0002\u0002\u0002\t",
    " \u0003\u0002\u0002\u0002\u000b\"\u0003\u0002\u0002\u0002\r$\u0003\u0002",
    "\u0002\u0002\u000f&\u0003\u0002\u0002\u0002\u0011-\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0007f\u0002\u0002\u0014\u0015\u0007c\u0002\u0002",
    "\u0015\u0016\u0007v\u0002\u0002\u0016\u0017\u0007c\u0002\u0002\u0017",
    "\u0004\u0003\u0002\u0002\u0002\u0018\u0019\u0007e\u0002\u0002\u0019",
    "\u001a\u0007n\u0002\u0002\u001a\u001b\u0007c\u0002\u0002\u001b\u001c",
    "\u0007u\u0002\u0002\u001c\u001d\u0007u\u0002\u0002\u001d\u0006\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0007*\u0002\u0002\u001f\b\u0003\u0002",
    "\u0002\u0002 !\u0007.\u0002\u0002!\n\u0003\u0002\u0002\u0002\"#\u0007",
    "+\u0002\u0002#\f\u0003\u0002\u0002\u0002$%\u0007=\u0002\u0002%\u000e",
    "\u0003\u0002\u0002\u0002&*\t\u0002\u0002\u0002\')\t\u0003\u0002\u0002",
    "(\'\u0003\u0002\u0002\u0002),\u0003\u0002\u0002\u0002*(\u0003\u0002",
    "\u0002\u0002*+\u0003\u0002\u0002\u0002+\u0010\u0003\u0002\u0002\u0002",
    ",*\u0003\u0002\u0002\u0002-.\t\u0004\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/0\b\t\u0002\u00020\u0012\u0003\u0002\u0002\u0002\u0004\u0002",
    "*\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CompiladorLexer extends antlr4.Lexer {

    static grammarFileName = "Compilador.e4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'data'", "'class'", "'('", "','", "')'", 
                         "';'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, "ID", 
                          "SPACE" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "ID", 
                      "SPACE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

CompiladorLexer.EOF = antlr4.Token.EOF;
CompiladorLexer.T__0 = 1;
CompiladorLexer.T__1 = 2;
CompiladorLexer.T__2 = 3;
CompiladorLexer.T__3 = 4;
CompiladorLexer.T__4 = 5;
CompiladorLexer.T__5 = 6;
CompiladorLexer.ID = 7;
CompiladorLexer.SPACE = 8;



