.PHONY: run

export CLASSPATH=antlr.jar:generated

run: generated/*.class
	java Main input.desc

grun: generated/*.class
	java org.antlr.v4.gui.TestRig Compilador programa -gui input.desc
	
generated/*.class : *.java generated/*.java
	javac -d generated *.java generated/*.java

generated/*.java : Compilador.e4
	java -jar antlr.jar -o generated Compilador.e4
	java -jar antlr.jar -Dlanguage=Python3 -o generated Compilador.e4
	java -jar antlr.jar -Dlanguage=JavaScript -o generated Compilador.e4

clean: 
	rm generated/*.*

