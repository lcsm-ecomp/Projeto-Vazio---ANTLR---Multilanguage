// Generated from Compilador.e4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CompiladorParser.
function CompiladorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CompiladorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CompiladorListener.prototype.constructor = CompiladorListener;

// Enter a parse tree produced by CompiladorParser#programa.
CompiladorListener.prototype.enterPrograma = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#programa.
CompiladorListener.prototype.exitPrograma = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#classe.
CompiladorListener.prototype.enterClasse = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#classe.
CompiladorListener.prototype.exitClasse = function(ctx) {
};


// Enter a parse tree produced by CompiladorParser#var.
CompiladorListener.prototype.enterVar = function(ctx) {
};

// Exit a parse tree produced by CompiladorParser#var.
CompiladorListener.prototype.exitVar = function(ctx) {
};



exports.CompiladorListener = CompiladorListener;