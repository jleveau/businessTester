// Generated from C:/Users/jleveau/WebstormProjects/businessTester/src/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0012\u00a1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0007\u00042\n\u0004\f\u0004",
    "\u000e\u00045\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006=\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u0086\n\u0012",
    "\f\u0012\u000e\u0012\u0089\u000b\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0006\u0013\u0090\n\u0013\r\u0013\u000e",
    "\u0013\u0091\u0003\u0014\u0006\u0014\u0095\n\u0014\r\u0014\u000e\u0014",
    "\u0096\u0003\u0015\u0005\u0015\u009a\n\u0015\u0003\u0015\u0003\u0015",
    "\u0006\u0015\u009e\n\u0015\r\u0015\u000e\u0015\u009f\u0003\u0087\u0002",
    "\u0016\u0003\u0002\u0005\u0002\u0007\u0002\t\u0002\u000b\u0003\r\u0004",
    "\u000f\u0005\u0011\u0006\u0013\u0007\u0015\b\u0017\t\u0019\n\u001b\u000b",
    "\u001d\f\u001f\r!\u000e#\u000f%\u0010\'\u0011)\u0012\u0003\u0002\u0006",
    "\u0003\u0002c|\u0003\u0002C\\\u0004\u0002\f\f\u000f\u000f\u0004\u0002",
    "\u000b\u000b\"\"\u0002\u00a8\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002",
    "!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0003+\u0003\u0002\u0002\u0002\u0005-\u0003\u0002\u0002",
    "\u0002\u0007/\u0003\u0002\u0002\u0002\t6\u0003\u0002\u0002\u0002\u000b",
    "<\u0003\u0002\u0002\u0002\r@\u0003\u0002\u0002\u0002\u000fG\u0003\u0002",
    "\u0002\u0002\u0011N\u0003\u0002\u0002\u0002\u0013[\u0003\u0002\u0002",
    "\u0002\u0015^\u0003\u0002\u0002\u0002\u0017a\u0003\u0002\u0002\u0002",
    "\u0019j\u0003\u0002\u0002\u0002\u001bo\u0003\u0002\u0002\u0002\u001d",
    "t\u0003\u0002\u0002\u0002\u001f{\u0003\u0002\u0002\u0002!\u007f\u0003",
    "\u0002\u0002\u0002#\u0081\u0003\u0002\u0002\u0002%\u008f\u0003\u0002",
    "\u0002\u0002\'\u0094\u0003\u0002\u0002\u0002)\u009d\u0003\u0002\u0002",
    "\u0002+,\t\u0002\u0002\u0002,\u0004\u0003\u0002\u0002\u0002-.\t\u0003",
    "\u0002\u0002.\u0006\u0003\u0002\u0002\u0002/3\u0007%\u0002\u000202\n",
    "\u0004\u0002\u000210\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u0002",
    "31\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u00024\b\u0003\u0002",
    "\u0002\u000253\u0003\u0002\u0002\u000267\u0007^\u0002\u000278\u0007",
    "$\u0002\u00028\n\u0003\u0002\u0002\u00029=\u0005\'\u0014\u0002:=\u0005",
    "\u0007\u0004\u0002;=\u0005)\u0015\u0002<9\u0003\u0002\u0002\u0002<:",
    "\u0003\u0002\u0002\u0002<;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002",
    "\u0002>?\b\u0006\u0002\u0002?\f\u0003\u0002\u0002\u0002@A\u0007t\u0002",
    "\u0002AB\u0007g\u0002\u0002BC\u0007i\u0002\u0002CD\u0007g\u0002\u0002",
    "DE\u0007z\u0002\u0002EF\u0007r\u0002\u0002F\u000e\u0003\u0002\u0002",
    "\u0002GH\u0007f\u0002\u0002HI\u0007g\u0002\u0002IJ\u0007h\u0002\u0002",
    "JK\u0007k\u0002\u0002KL\u0007p\u0002\u0002LM\u0007g\u0002\u0002M\u0010",
    "\u0003\u0002\u0002\u0002NO\u0007c\u0002\u0002OP\u0007n\u0002\u0002P",
    "Q\u0007r\u0002\u0002QR\u0007j\u0002\u0002RS\u0007c\u0002\u0002ST\u0007",
    "p\u0002\u0002TU\u0007w\u0002\u0002UV\u0007o\u0002\u0002VW\u0007g\u0002",
    "\u0002WX\u0007t\u0002\u0002XY\u0007k\u0002\u0002YZ\u0007e\u0002\u0002",
    "Z\u0012\u0003\u0002\u0002\u0002[\\\u0007v\u0002\u0002\\]\u0007q\u0002",
    "\u0002]\u0014\u0003\u0002\u0002\u0002^_\u0007c\u0002\u0002_`\u0007u",
    "\u0002\u0002`\u0016\u0003\u0002\u0002\u0002ab\u0007{\u0002\u0002bc\u0007",
    "q\u0002\u0002cd\u0007w\u0002\u0002de\u0007\"\u0002\u0002ef\u0007o\u0002",
    "\u0002fg\u0007w\u0002\u0002gh\u0007u\u0002\u0002hi\u0007v\u0002\u0002",
    "i\u0018\u0003\u0002\u0002\u0002jk\u0007v\u0002\u0002kl\u0007{\u0002",
    "\u0002lm\u0007r\u0002\u0002mn\u0007g\u0002\u0002n\u001a\u0003\u0002",
    "\u0002\u0002op\u0007v\u0002\u0002pq\u0007j\u0002\u0002qr\u0007g\u0002",
    "\u0002rs\u0007p\u0002\u0002s\u001c\u0003\u0002\u0002\u0002tu\u0007u",
    "\u0002\u0002uv\u0007w\u0002\u0002vw\u0007d\u0002\u0002wx\u0007o\u0002",
    "\u0002xy\u0007k\u0002\u0002yz\u0007v\u0002\u0002z\u001e\u0003\u0002",
    "\u0002\u0002{|\u0007c\u0002\u0002|}\u0007p\u0002\u0002}~\u0007f\u0002",
    "\u0002~ \u0003\u0002\u0002\u0002\u007f\u0080\u0007=\u0002\u0002\u0080",
    "\"\u0003\u0002\u0002\u0002\u0081\u0087\u0007$\u0002\u0002\u0082\u0083",
    "\u0007^\u0002\u0002\u0083\u0086\u0007$\u0002\u0002\u0084\u0086\u000b",
    "\u0002\u0002\u0002\u0085\u0082\u0003\u0002\u0002\u0002\u0085\u0084\u0003",
    "\u0002\u0002\u0002\u0086\u0089\u0003\u0002\u0002\u0002\u0087\u0088\u0003",
    "\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u008a\u0003",
    "\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u008a\u008b\u0007",
    "$\u0002\u0002\u008b$\u0003\u0002\u0002\u0002\u008c\u0090\u0005\u0003",
    "\u0002\u0002\u008d\u0090\u0005\u0005\u0003\u0002\u008e\u0090\u0007a",
    "\u0002\u0002\u008f\u008c\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002",
    "\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002",
    "\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002",
    "\u0002\u0002\u0092&\u0003\u0002\u0002\u0002\u0093\u0095\t\u0005\u0002",
    "\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002",
    "\u0002\u0097(\u0003\u0002\u0002\u0002\u0098\u009a\u0007\u000f\u0002",
    "\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009e\u0007\f\u0002",
    "\u0002\u009c\u009e\u0007\u000f\u0002\u0002\u009d\u0099\u0003\u0002\u0002",
    "\u0002\u009d\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002",
    "\u0002\u00a0*\u0003\u0002\u0002\u0002\r\u00023<\u0085\u0087\u008f\u0091",
    "\u0096\u0099\u009d\u009f\u0003\b\u0002\u0002"].join("");


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
BusinessRulesLexer.REGEXP = 2;
BusinessRulesLexer.DEFINE = 3;
BusinessRulesLexer.ALPHANUM = 4;
BusinessRulesLexer.TO = 5;
BusinessRulesLexer.AS = 6;
BusinessRulesLexer.YOU_MUST = 7;
BusinessRulesLexer.TYPE_ACTION = 8;
BusinessRulesLexer.THEN = 9;
BusinessRulesLexer.SUBMIT = 10;
BusinessRulesLexer.AND = 11;
BusinessRulesLexer.SEMICOLON = 12;
BusinessRulesLexer.STRING = 13;
BusinessRulesLexer.IDENTIFIER = 14;
BusinessRulesLexer.WHITESPACE = 15;
BusinessRulesLexer.LINE_JOINING = 16;

BusinessRulesLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

BusinessRulesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

BusinessRulesLexer.prototype.literalNames = [ null, null, "'regexp'", "'define'", 
                                              "'alphanumeric'", "'to'", 
                                              "'as'", "'you must'", "'type'", 
                                              "'then'", "'submit'", "'and'", 
                                              "';'" ];

BusinessRulesLexer.prototype.symbolicNames = [ null, "SKIPED", "REGEXP", 
                                               "DEFINE", "ALPHANUM", "TO", 
                                               "AS", "YOU_MUST", "TYPE_ACTION", 
                                               "THEN", "SUBMIT", "AND", 
                                               "SEMICOLON", "STRING", "IDENTIFIER", 
                                               "WHITESPACE", "LINE_JOINING" ];

BusinessRulesLexer.prototype.ruleNames = [ "LOWERCASE", "UPPERCASE", "COMMENT", 
                                           "ESCAPED_QUOTE", "SKIPED", "REGEXP", 
                                           "DEFINE", "ALPHANUM", "TO", "AS", 
                                           "YOU_MUST", "TYPE_ACTION", "THEN", 
                                           "SUBMIT", "AND", "SEMICOLON", 
                                           "STRING", "IDENTIFIER", "WHITESPACE", 
                                           "LINE_JOINING" ];

BusinessRulesLexer.prototype.grammarFileName = "BusinessRules.g4";



exports.BusinessRulesLexer = BusinessRulesLexer;

