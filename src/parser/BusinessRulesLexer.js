// Generated from C:/Users/jleveau/WebstormProjects/tester/businessTester/src/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001f\u00fc\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0007\u0004P\n\u0004\f\u0004\u000e\u0004S\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0006\u0006[\n\u0006\r\u0006\u000e\u0006\\\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0005\bd\n\b\u0003\b\u0003\b\u0003\t\u0005",
    "\ti\n\t\u0003\t\u0003\t\u0006\tm\n\t\r\t\u000e\tn\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003#\u0006#\u00f4\n#\r#\u000e#\u00f5\u0003",
    "$\u0006$\u00f9\n$\r$\u000e$\u00fa\u0003\\\u0002%\u0003\u0002\u0005\u0002",
    "\u0007\u0002\t\u0002\u000b\u0002\r\u0002\u000f\u0003\u0011\u0004\u0013",
    "\u0005\u0015\u0006\u0017\u0007\u0019\b\u001b\t\u001d\n\u001f\u000b!",
    "\f#\r%\u000e\'\u000f)\u0010+\u0011-\u0012/\u00131\u00143\u00155\u0016",
    "7\u00179\u0018;\u0019=\u001a?\u001bA\u001cC\u001dE\u001eG\u001f\u0003",
    "\u0002\u0006\u0003\u0002c|\u0003\u0002C\\\u0004\u0002\f\f\u000f\u000f",
    "\u0004\u0002\u000b\u000b\"\"\u0002\u0101\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002",
    ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
    "\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002",
    "\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002",
    "\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002",
    "\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002",
    "?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003",
    "\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002",
    "\u0002\u0002\u0003I\u0003\u0002\u0002\u0002\u0005K\u0003\u0002\u0002",
    "\u0002\u0007M\u0003\u0002\u0002\u0002\tT\u0003\u0002\u0002\u0002\u000b",
    "Z\u0003\u0002\u0002\u0002\r^\u0003\u0002\u0002\u0002\u000fc\u0003\u0002",
    "\u0002\u0002\u0011l\u0003\u0002\u0002\u0002\u0013p\u0003\u0002\u0002",
    "\u0002\u0015w\u0003\u0002\u0002\u0002\u0017~\u0003\u0002\u0002\u0002",
    "\u0019\u008b\u0003\u0002\u0002\u0002\u001b\u0093\u0003\u0002\u0002\u0002",
    "\u001d\u009a\u0003\u0002\u0002\u0002\u001f\u009f\u0003\u0002\u0002\u0002",
    "!\u00a5\u0003\u0002\u0002\u0002#\u00ae\u0003\u0002\u0002\u0002%\u00b1",
    "\u0003\u0002\u0002\u0002\'\u00b4\u0003\u0002\u0002\u0002)\u00b7\u0003",
    "\u0002\u0002\u0002+\u00ba\u0003\u0002\u0002\u0002-\u00c1\u0003\u0002",
    "\u0002\u0002/\u00ca\u0003\u0002\u0002\u00021\u00cf\u0003\u0002\u0002",
    "\u00023\u00d4\u0003\u0002\u0002\u00025\u00d8\u0003\u0002\u0002\u0002",
    "7\u00de\u0003\u0002\u0002\u00029\u00e0\u0003\u0002\u0002\u0002;\u00e2",
    "\u0003\u0002\u0002\u0002=\u00e4\u0003\u0002\u0002\u0002?\u00e8\u0003",
    "\u0002\u0002\u0002A\u00ea\u0003\u0002\u0002\u0002C\u00ec\u0003\u0002",
    "\u0002\u0002E\u00f3\u0003\u0002\u0002\u0002G\u00f8\u0003\u0002\u0002",
    "\u0002IJ\t\u0002\u0002\u0002J\u0004\u0003\u0002\u0002\u0002KL\t\u0003",
    "\u0002\u0002L\u0006\u0003\u0002\u0002\u0002MQ\u0007%\u0002\u0002NP\n",
    "\u0004\u0002\u0002ON\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002",
    "QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002R\b\u0003\u0002",
    "\u0002\u0002SQ\u0003\u0002\u0002\u0002TU\u0007^\u0002\u0002UV\u0007",
    "$\u0002\u0002V\n\u0003\u0002\u0002\u0002WX\u0007^\u0002\u0002X[\u0007",
    "$\u0002\u0002Y[\u000b\u0002\u0002\u0002ZW\u0003\u0002\u0002\u0002ZY",
    "\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002",
    "\u0002\\Z\u0003\u0002\u0002\u0002]\f\u0003\u0002\u0002\u0002^_\u0007",
    "$\u0002\u0002_\u000e\u0003\u0002\u0002\u0002`d\u0005G$\u0002ad\u0005",
    "\u0007\u0004\u0002bd\u0005\u0011\t\u0002c`\u0003\u0002\u0002\u0002c",
    "a\u0003\u0002\u0002\u0002cb\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002ef\b\b\u0002\u0002f\u0010\u0003\u0002\u0002\u0002gi\u0007\u000f",
    "\u0002\u0002hg\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ij\u0003",
    "\u0002\u0002\u0002jm\u0007\f\u0002\u0002km\u0007\u000f\u0002\u0002l",
    "h\u0003\u0002\u0002\u0002lk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002",
    "\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002o\u0012\u0003",
    "\u0002\u0002\u0002pq\u0007t\u0002\u0002qr\u0007g\u0002\u0002rs\u0007",
    "i\u0002\u0002st\u0007g\u0002\u0002tu\u0007z\u0002\u0002uv\u0007r\u0002",
    "\u0002v\u0014\u0003\u0002\u0002\u0002wx\u0007f\u0002\u0002xy\u0007g",
    "\u0002\u0002yz\u0007h\u0002\u0002z{\u0007k\u0002\u0002{|\u0007p\u0002",
    "\u0002|}\u0007g\u0002\u0002}\u0016\u0003\u0002\u0002\u0002~\u007f\u0007",
    "c\u0002\u0002\u007f\u0080\u0007n\u0002\u0002\u0080\u0081\u0007r\u0002",
    "\u0002\u0081\u0082\u0007j\u0002\u0002\u0082\u0083\u0007c\u0002\u0002",
    "\u0083\u0084\u0007p\u0002\u0002\u0084\u0085\u0007w\u0002\u0002\u0085",
    "\u0086\u0007o\u0002\u0002\u0086\u0087\u0007g\u0002\u0002\u0087\u0088",
    "\u0007t\u0002\u0002\u0088\u0089\u0007k\u0002\u0002\u0089\u008a\u0007",
    "e\u0002\u0002\u008a\u0018\u0003\u0002\u0002\u0002\u008b\u008c\u0007",
    "d\u0002\u0002\u008c\u008d\u0007q\u0002\u0002\u008d\u008e\u0007q\u0002",
    "\u0002\u008e\u008f\u0007n\u0002\u0002\u008f\u0090\u0007g\u0002\u0002",
    "\u0090\u0091\u0007c\u0002\u0002\u0091\u0092\u0007p\u0002\u0002\u0092",
    "\u001a\u0003\u0002\u0002\u0002\u0093\u0094\u0007p\u0002\u0002\u0094",
    "\u0095\u0007w\u0002\u0002\u0095\u0096\u0007o\u0002\u0002\u0096\u0097",
    "\u0007d\u0002\u0002\u0097\u0098\u0007g\u0002\u0002\u0098\u0099\u0007",
    "t\u0002\u0002\u0099\u001c\u0003\u0002\u0002\u0002\u009a\u009b\u0007",
    "y\u0002\u0002\u009b\u009c\u0007q\u0002\u0002\u009c\u009d\u0007t\u0002",
    "\u0002\u009d\u009e\u0007f\u0002\u0002\u009e\u001e\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0007i\u0002\u0002\u00a0\u00a1\u0007q\u0002\u0002",
    "\u00a1\u00a2\u0007\"\u0002\u0002\u00a2\u00a3\u0007v\u0002\u0002\u00a3",
    "\u00a4\u0007q\u0002\u0002\u00a4 \u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u0007e\u0002\u0002\u00a6\u00a7\u0007n\u0002\u0002\u00a7\u00a8\u0007",
    "k\u0002\u0002\u00a8\u00a9\u0007e\u0002\u0002\u00a9\u00aa\u0007m\u0002",
    "\u0002\u00aa\u00ab\u0007\"\u0002\u0002\u00ab\u00ac\u0007q\u0002\u0002",
    "\u00ac\u00ad\u0007p\u0002\u0002\u00ad\"\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0007v\u0002\u0002\u00af\u00b0\u0007q\u0002\u0002\u00b0$\u0003",
    "\u0002\u0002\u0002\u00b1\u00b2\u0007f\u0002\u0002\u00b2\u00b3\u0007",
    "q\u0002\u0002\u00b3&\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007c\u0002",
    "\u0002\u00b5\u00b6\u0007u\u0002\u0002\u00b6(\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0007k\u0002\u0002\u00b8\u00b9\u0007u\u0002\u0002\u00b9",
    "*\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007x\u0002\u0002\u00bb\u00bc",
    "\u0007g\u0002\u0002\u00bc\u00bd\u0007t\u0002\u0002\u00bd\u00be\u0007",
    "k\u0002\u0002\u00be\u00bf\u0007h\u0002\u0002\u00bf\u00c0\u0007{\u0002",
    "\u0002\u00c0,\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007{\u0002\u0002",
    "\u00c2\u00c3\u0007q\u0002\u0002\u00c3\u00c4\u0007w\u0002\u0002\u00c4",
    "\u00c5\u0007\"\u0002\u0002\u00c5\u00c6\u0007o\u0002\u0002\u00c6\u00c7",
    "\u0007w\u0002\u0002\u00c7\u00c8\u0007u\u0002\u0002\u00c8\u00c9\u0007",
    "v\u0002\u0002\u00c9.\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007v\u0002",
    "\u0002\u00cb\u00cc\u0007{\u0002\u0002\u00cc\u00cd\u0007r\u0002\u0002",
    "\u00cd\u00ce\u0007g\u0002\u0002\u00ce0\u0003\u0002\u0002\u0002\u00cf",
    "\u00d0\u0007v\u0002\u0002\u00d0\u00d1\u0007j\u0002\u0002\u00d1\u00d2",
    "\u0007g\u0002\u0002\u00d2\u00d3\u0007p\u0002\u0002\u00d32\u0003\u0002",
    "\u0002\u0002\u00d4\u00d5\u0007c\u0002\u0002\u00d5\u00d6\u0007p\u0002",
    "\u0002\u00d6\u00d7\u0007f\u0002\u0002\u00d74\u0003\u0002\u0002\u0002",
    "\u00d8\u00d9\u0007g\u0002\u0002\u00d9\u00da\u0007p\u0002\u0002\u00da",
    "\u00db\u0007v\u0002\u0002\u00db\u00dc\u0007t\u0002\u0002\u00dc\u00dd",
    "\u0007{\u0002\u0002\u00dd6\u0003\u0002\u0002\u0002\u00de\u00df\u0007",
    "=\u0002\u0002\u00df8\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007}\u0002",
    "\u0002\u00e1:\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007\u007f\u0002",
    "\u0002\u00e3<\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007u\u0002\u0002",
    "\u00e5\u00e6\u0007g\u0002\u0002\u00e6\u00e7\u0007v\u0002\u0002\u00e7",
    ">\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007<\u0002\u0002\u00e9@\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u0007.\u0002\u0002\u00ebB\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\u0005\r\u0007\u0002\u00ed\u00ee\u0005\u000b",
    "\u0006\u0002\u00ee\u00ef\u0005\r\u0007\u0002\u00efD\u0003\u0002\u0002",
    "\u0002\u00f0\u00f4\u0005\u0003\u0002\u0002\u00f1\u00f4\u0005\u0005\u0003",
    "\u0002\u00f2\u00f4\u0007a\u0002\u0002\u00f3\u00f0\u0003\u0002\u0002",
    "\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f2\u0003\u0002\u0002",
    "\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6F\u0003\u0002\u0002",
    "\u0002\u00f7\u00f9\t\u0005\u0002\u0002\u00f8\u00f7\u0003\u0002\u0002",
    "\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002",
    "\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fbH\u0003\u0002\u0002",
    "\u0002\r\u0002QZ\\chln\u00f3\u00f5\u00fa\u0003\b\u0002\u0002"].join("");


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
BusinessRulesLexer.BOOLEAN = 6;
BusinessRulesLexer.NUMBER = 7;
BusinessRulesLexer.WORD = 8;
BusinessRulesLexer.GO_TO_ACTION = 9;
BusinessRulesLexer.CLICK_ON = 10;
BusinessRulesLexer.TO = 11;
BusinessRulesLexer.DO = 12;
BusinessRulesLexer.AS = 13;
BusinessRulesLexer.IS = 14;
BusinessRulesLexer.VERIFY = 15;
BusinessRulesLexer.YOU_MUST = 16;
BusinessRulesLexer.TYPE_ACTION = 17;
BusinessRulesLexer.THEN = 18;
BusinessRulesLexer.AND = 19;
BusinessRulesLexer.ENTRY = 20;
BusinessRulesLexer.SEMICOLON = 21;
BusinessRulesLexer.L_BRACE = 22;
BusinessRulesLexer.R_BRACE = 23;
BusinessRulesLexer.SET = 24;
BusinessRulesLexer.TWO_DOT = 25;
BusinessRulesLexer.COMA = 26;
BusinessRulesLexer.QUOTED_CONTENT = 27;
BusinessRulesLexer.IDENTIFIER = 28;
BusinessRulesLexer.WHITESPACE = 29;

BusinessRulesLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

BusinessRulesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

BusinessRulesLexer.prototype.literalNames = [ null, null, null, "'regexp'", 
                                              "'define'", "'alphanumeric'", 
                                              "'boolean'", "'number'", "'word'", 
                                              "'go to'", "'click on'", "'to'", 
                                              "'do'", "'as'", "'is'", "'verify'", 
                                              "'you must'", "'type'", "'then'", 
                                              "'and'", "'entry'", "';'", 
                                              "'{'", "'}'", "'set'", "':'", 
                                              "','" ];

BusinessRulesLexer.prototype.symbolicNames = [ null, "SKIPED", "LINE_JOINING", 
                                               "REGEXP", "DEFINE", "ALPHANUM", 
                                               "BOOLEAN", "NUMBER", "WORD", 
                                               "GO_TO_ACTION", "CLICK_ON", 
                                               "TO", "DO", "AS", "IS", "VERIFY", 
                                               "YOU_MUST", "TYPE_ACTION", 
                                               "THEN", "AND", "ENTRY", "SEMICOLON", 
                                               "L_BRACE", "R_BRACE", "SET", 
                                               "TWO_DOT", "COMA", "QUOTED_CONTENT", 
                                               "IDENTIFIER", "WHITESPACE" ];

BusinessRulesLexer.prototype.ruleNames = [ "LOWERCASE", "UPPERCASE", "COMMENT", 
                                           "ESCAPED_QUOTE", "CONTENT", "QUOTE", 
                                           "SKIPED", "LINE_JOINING", "REGEXP", 
                                           "DEFINE", "ALPHANUM", "BOOLEAN", 
                                           "NUMBER", "WORD", "GO_TO_ACTION", 
                                           "CLICK_ON", "TO", "DO", "AS", 
                                           "IS", "VERIFY", "YOU_MUST", "TYPE_ACTION", 
                                           "THEN", "AND", "ENTRY", "SEMICOLON", 
                                           "L_BRACE", "R_BRACE", "SET", 
                                           "TWO_DOT", "COMA", "QUOTED_CONTENT", 
                                           "IDENTIFIER", "WHITESPACE" ];

BusinessRulesLexer.prototype.grammarFileName = "BusinessRules.g4";



exports.BusinessRulesLexer = BusinessRulesLexer;

