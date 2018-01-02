// Generated from C:/Users/jleveau/WebstormProjects/businessTester/src/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0013\u00ab\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0007\u00048\n\u0004\f\u0004\u000e\u0004",
    ";\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0006\u0006C\n\u0006\r\u0006\u000e\u0006D\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0005\bL\n\b\u0003\b\u0003\b\u0003",
    "\t\u0005\tQ\n\t\u0003\t\u0003\t\u0006\tU\n\t\r\t\u000e\tV\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0006\u0017\u00a3",
    "\n\u0017\r\u0017\u000e\u0017\u00a4\u0003\u0018\u0006\u0018\u00a8\n\u0018",
    "\r\u0018\u000e\u0018\u00a9\u0003D\u0002\u0019\u0003\u0002\u0005\u0002",
    "\u0007\u0002\t\u0002\u000b\u0002\r\u0002\u000f\u0003\u0011\u0004\u0013",
    "\u0005\u0015\u0006\u0017\u0007\u0019\b\u001b\t\u001d\n\u001f\u000b!",
    "\f#\r%\u000e\'\u000f)\u0010+\u0011-\u0012/\u0013\u0003\u0002\u0006\u0003",
    "\u0002c|\u0003\u0002C\\\u0004\u0002\f\f\u000f\u000f\u0004\u0002\u000b",
    "\u000b\"\"\u0002\u00b0\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00031\u0003\u0002\u0002\u0002",
    "\u00053\u0003\u0002\u0002\u0002\u00075\u0003\u0002\u0002\u0002\t<\u0003",
    "\u0002\u0002\u0002\u000bB\u0003\u0002\u0002\u0002\rF\u0003\u0002\u0002",
    "\u0002\u000fK\u0003\u0002\u0002\u0002\u0011T\u0003\u0002\u0002\u0002",
    "\u0013X\u0003\u0002\u0002\u0002\u0015_\u0003\u0002\u0002\u0002\u0017",
    "f\u0003\u0002\u0002\u0002\u0019s\u0003\u0002\u0002\u0002\u001by\u0003",
    "\u0002\u0002\u0002\u001d|\u0003\u0002\u0002\u0002\u001f\u007f\u0003",
    "\u0002\u0002\u0002!\u0082\u0003\u0002\u0002\u0002#\u008b\u0003\u0002",
    "\u0002\u0002%\u0090\u0003\u0002\u0002\u0002\'\u0095\u0003\u0002\u0002",
    "\u0002)\u0099\u0003\u0002\u0002\u0002+\u009b\u0003\u0002\u0002\u0002",
    "-\u00a2\u0003\u0002\u0002\u0002/\u00a7\u0003\u0002\u0002\u000212\t\u0002",
    "\u0002\u00022\u0004\u0003\u0002\u0002\u000234\t\u0003\u0002\u00024\u0006",
    "\u0003\u0002\u0002\u000259\u0007%\u0002\u000268\n\u0004\u0002\u0002",
    "76\u0003\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002",
    "\u00029:\u0003\u0002\u0002\u0002:\b\u0003\u0002\u0002\u0002;9\u0003",
    "\u0002\u0002\u0002<=\u0007^\u0002\u0002=>\u0007$\u0002\u0002>\n\u0003",
    "\u0002\u0002\u0002?@\u0007^\u0002\u0002@C\u0007$\u0002\u0002AC\u000b",
    "\u0002\u0002\u0002B?\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002",
    "CD\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002",
    "\u0002E\f\u0003\u0002\u0002\u0002FG\u0007$\u0002\u0002G\u000e\u0003",
    "\u0002\u0002\u0002HL\u0005/\u0018\u0002IL\u0005\u0007\u0004\u0002JL",
    "\u0005\u0011\t\u0002KH\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002",
    "KJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\b\b\u0002\u0002",
    "N\u0010\u0003\u0002\u0002\u0002OQ\u0007\u000f\u0002\u0002PO\u0003\u0002",
    "\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RU\u0007",
    "\f\u0002\u0002SU\u0007\u000f\u0002\u0002TP\u0003\u0002\u0002\u0002T",
    "S\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002W\u0012\u0003\u0002\u0002\u0002XY\u0007",
    "t\u0002\u0002YZ\u0007g\u0002\u0002Z[\u0007i\u0002\u0002[\\\u0007g\u0002",
    "\u0002\\]\u0007z\u0002\u0002]^\u0007r\u0002\u0002^\u0014\u0003\u0002",
    "\u0002\u0002_`\u0007f\u0002\u0002`a\u0007g\u0002\u0002ab\u0007h\u0002",
    "\u0002bc\u0007k\u0002\u0002cd\u0007p\u0002\u0002de\u0007g\u0002\u0002",
    "e\u0016\u0003\u0002\u0002\u0002fg\u0007c\u0002\u0002gh\u0007n\u0002",
    "\u0002hi\u0007r\u0002\u0002ij\u0007j\u0002\u0002jk\u0007c\u0002\u0002",
    "kl\u0007p\u0002\u0002lm\u0007w\u0002\u0002mn\u0007o\u0002\u0002no\u0007",
    "g\u0002\u0002op\u0007t\u0002\u0002pq\u0007k\u0002\u0002qr\u0007e\u0002",
    "\u0002r\u0018\u0003\u0002\u0002\u0002st\u0007i\u0002\u0002tu\u0007q",
    "\u0002\u0002uv\u0007\"\u0002\u0002vw\u0007v\u0002\u0002wx\u0007q\u0002",
    "\u0002x\u001a\u0003\u0002\u0002\u0002yz\u0007v\u0002\u0002z{\u0007q",
    "\u0002\u0002{\u001c\u0003\u0002\u0002\u0002|}\u0007f\u0002\u0002}~\u0007",
    "q\u0002\u0002~\u001e\u0003\u0002\u0002\u0002\u007f\u0080\u0007c\u0002",
    "\u0002\u0080\u0081\u0007u\u0002\u0002\u0081 \u0003\u0002\u0002\u0002",
    "\u0082\u0083\u0007{\u0002\u0002\u0083\u0084\u0007q\u0002\u0002\u0084",
    "\u0085\u0007w\u0002\u0002\u0085\u0086\u0007\"\u0002\u0002\u0086\u0087",
    "\u0007o\u0002\u0002\u0087\u0088\u0007w\u0002\u0002\u0088\u0089\u0007",
    "u\u0002\u0002\u0089\u008a\u0007v\u0002\u0002\u008a\"\u0003\u0002\u0002",
    "\u0002\u008b\u008c\u0007v\u0002\u0002\u008c\u008d\u0007{\u0002\u0002",
    "\u008d\u008e\u0007r\u0002\u0002\u008e\u008f\u0007g\u0002\u0002\u008f",
    "$\u0003\u0002\u0002\u0002\u0090\u0091\u0007v\u0002\u0002\u0091\u0092",
    "\u0007j\u0002\u0002\u0092\u0093\u0007g\u0002\u0002\u0093\u0094\u0007",
    "p\u0002\u0002\u0094&\u0003\u0002\u0002\u0002\u0095\u0096\u0007c\u0002",
    "\u0002\u0096\u0097\u0007p\u0002\u0002\u0097\u0098\u0007f\u0002\u0002",
    "\u0098(\u0003\u0002\u0002\u0002\u0099\u009a\u0007=\u0002\u0002\u009a",
    "*\u0003\u0002\u0002\u0002\u009b\u009c\u0005\r\u0007\u0002\u009c\u009d",
    "\u0005\u000b\u0006\u0002\u009d\u009e\u0005\r\u0007\u0002\u009e,\u0003",
    "\u0002\u0002\u0002\u009f\u00a3\u0005\u0003\u0002\u0002\u00a0\u00a3\u0005",
    "\u0005\u0003\u0002\u00a1\u00a3\u0007a\u0002\u0002\u00a2\u009f\u0003",
    "\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a1\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003",
    "\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5.\u0003",
    "\u0002\u0002\u0002\u00a6\u00a8\t\u0005\u0002\u0002\u00a7\u00a6\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003",
    "\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa0\u0003",
    "\u0002\u0002\u0002\r\u00029BDKPTV\u00a2\u00a4\u00a9\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function BusinessRulesLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

BusinessRulesLexer.prototype = Object.create(antlr4.Lexer.prototype);
BusinessRulesLexer.prototype.constructor = BusinessRulesLexer;

BusinessRulesLexer.EOF = antlr4.Token.EOF;
BusinessRulesLexer.SKIPED = 1;
BusinessRulesLexer.LINE_JOINING = 2;
BusinessRulesLexer.REGEXP = 3;
BusinessRulesLexer.DEFINE = 4;
BusinessRulesLexer.ALPHANUM = 5;
BusinessRulesLexer.GO_TO_ACTION = 6;
BusinessRulesLexer.TO = 7;
BusinessRulesLexer.DO = 8;
BusinessRulesLexer.AS = 9;
BusinessRulesLexer.YOU_MUST = 10;
BusinessRulesLexer.TYPE_ACTION = 11;
BusinessRulesLexer.THEN = 12;
BusinessRulesLexer.AND = 13;
BusinessRulesLexer.SEMICOLON = 14;
BusinessRulesLexer.QUOTED_CONTENT = 15;
BusinessRulesLexer.IDENTIFIER = 16;
BusinessRulesLexer.WHITESPACE = 17;

BusinessRulesLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

BusinessRulesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

BusinessRulesLexer.prototype.literalNames = [ null, null, null, "'regexp'", 
                                              "'define'", "'alphanumeric'", 
                                              "'go to'", "'to'", "'do'", 
                                              "'as'", "'you must'", "'type'", 
                                              "'then'", "'and'", "';'" ];

BusinessRulesLexer.prototype.symbolicNames = [ null, "SKIPED", "LINE_JOINING", 
                                               "REGEXP", "DEFINE", "ALPHANUM", 
                                               "GO_TO_ACTION", "TO", "DO", 
                                               "AS", "YOU_MUST", "TYPE_ACTION", 
                                               "THEN", "AND", "SEMICOLON", 
                                               "QUOTED_CONTENT", "IDENTIFIER", 
                                               "WHITESPACE" ];

BusinessRulesLexer.prototype.ruleNames = [ "LOWERCASE", "UPPERCASE", "COMMENT", 
                                           "ESCAPED_QUOTE", "CONTENT", "QUOTE", 
                                           "SKIPED", "LINE_JOINING", "REGEXP", 
                                           "DEFINE", "ALPHANUM", "GO_TO_ACTION", 
                                           "TO", "DO", "AS", "YOU_MUST", 
                                           "TYPE_ACTION", "THEN", "AND", 
                                           "SEMICOLON", "QUOTED_CONTENT", 
                                           "IDENTIFIER", "WHITESPACE" ];

BusinessRulesLexer.prototype.grammarFileName = "BusinessRules.g4";



exports.BusinessRulesLexer = BusinessRulesLexer;

