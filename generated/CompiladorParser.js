// Generated from Compilador.e4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CompiladorListener = require('./CompiladorListener').CompiladorListener;
var grammarFileName = "Compilador.e4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\n#\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0018\n\u0003\f\u0003",
    "\u000e\u0003\u001b\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004",
    "\u0006\u0002\u0002\u0002!\u0002\u000b\u0003\u0002\u0002\u0002\u0004",
    "\u0010\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002\u0002\u0002\b",
    "\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002\u0002\n\r\u0003\u0002",
    "\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002",
    "\u0002\f\u000e\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002",
    "\u000e\u000f\u0007\u0002\u0002\u0003\u000f\u0003\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0007\u0003\u0002\u0002\u0011\u0012\u0007\u0004\u0002\u0002",
    "\u0012\u0013\u0007\t\u0002\u0002\u0013\u0014\u0007\u0005\u0002\u0002",
    "\u0014\u0019\u0005\u0006\u0004\u0002\u0015\u0016\u0007\u0006\u0002\u0002",
    "\u0016\u0018\u0005\u0006\u0004\u0002\u0017\u0015\u0003\u0002\u0002\u0002",
    "\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002",
    "\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002",
    "\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0007\u0002\u0002",
    "\u001d\u001e\u0007\b\u0002\u0002\u001e\u0005\u0003\u0002\u0002\u0002",
    "\u001f \u0007\t\u0002\u0002 !\u0007\t\u0002\u0002!\u0007\u0003\u0002",
    "\u0002\u0002\u0004\u000b\u0019"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'data'", "'class'", "'('", "','", "')'", "';'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "ID", "SPACE" ];

var ruleNames =  [ "programa", "classe", "var" ];

function CompiladorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CompiladorParser.prototype = Object.create(antlr4.Parser.prototype);
CompiladorParser.prototype.constructor = CompiladorParser;

Object.defineProperty(CompiladorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CompiladorParser.EOF = antlr4.Token.EOF;
CompiladorParser.T__0 = 1;
CompiladorParser.T__1 = 2;
CompiladorParser.T__2 = 3;
CompiladorParser.T__3 = 4;
CompiladorParser.T__4 = 5;
CompiladorParser.T__5 = 6;
CompiladorParser.ID = 7;
CompiladorParser.SPACE = 8;

CompiladorParser.RULE_programa = 0;
CompiladorParser.RULE_classe = 1;
CompiladorParser.RULE_var = 2;


function ProgramaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_programa;
    return this;
}

ProgramaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramaContext.prototype.constructor = ProgramaContext;

ProgramaContext.prototype.EOF = function() {
    return this.getToken(CompiladorParser.EOF, 0);
};

ProgramaContext.prototype.classe = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClasseContext);
    } else {
        return this.getTypedRuleContext(ClasseContext,i);
    }
};

ProgramaContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterPrograma(this);
	}
};

ProgramaContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitPrograma(this);
	}
};




CompiladorParser.ProgramaContext = ProgramaContext;

CompiladorParser.prototype.programa = function() {

    var localctx = new ProgramaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CompiladorParser.RULE_programa);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CompiladorParser.T__0) {
            this.state = 6;
            this.classe();
            this.state = 11;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 12;
        this.match(CompiladorParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClasseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_classe;
    return this;
}

ClasseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClasseContext.prototype.constructor = ClasseContext;

ClasseContext.prototype.ID = function() {
    return this.getToken(CompiladorParser.ID, 0);
};

ClasseContext.prototype.var = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarContext);
    } else {
        return this.getTypedRuleContext(VarContext,i);
    }
};

ClasseContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterClasse(this);
	}
};

ClasseContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitClasse(this);
	}
};




CompiladorParser.ClasseContext = ClasseContext;

CompiladorParser.prototype.classe = function() {

    var localctx = new ClasseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CompiladorParser.RULE_classe);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(CompiladorParser.T__0);
        this.state = 15;
        this.match(CompiladorParser.T__1);
        this.state = 16;
        this.match(CompiladorParser.ID);
        this.state = 17;
        this.match(CompiladorParser.T__2);
        this.state = 18;
        this.var();
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CompiladorParser.T__3) {
            this.state = 19;
            this.match(CompiladorParser.T__3);
            this.state = 20;
            this.var();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
        this.match(CompiladorParser.T__4);
        this.state = 27;
        this.match(CompiladorParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CompiladorParser.RULE_var;
    return this;
}

VarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarContext.prototype.constructor = VarContext;

VarContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CompiladorParser.ID);
    } else {
        return this.getToken(CompiladorParser.ID, i);
    }
};


VarContext.prototype.enterRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.enterVar(this);
	}
};

VarContext.prototype.exitRule = function(listener) {
    if(listener instanceof CompiladorListener ) {
        listener.exitVar(this);
	}
};




CompiladorParser.VarContext = VarContext;

CompiladorParser.prototype.var = function() {

    var localctx = new VarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CompiladorParser.RULE_var);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.match(CompiladorParser.ID);
        this.state = 30;
        this.match(CompiladorParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.CompiladorParser = CompiladorParser;
