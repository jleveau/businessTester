// Generated from C:/Users/jleveau/WebstormProjects/tester/businessTester/src/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "BusinessRules.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001f\u00cb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\t[\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000be\n\u000b\f\u000b\u000e\u000bh\u000b\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000ev\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0081\n\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u0098\n\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u009f\n\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00aa\n\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0005\u001c\u00b3\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u00be\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0002",
    "\u0003\u0014#\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B\u0002\u0002\u0002\u00bb",
    "\u0002D\u0003\u0002\u0002\u0002\u0004F\u0003\u0002\u0002\u0002\u0006",
    "H\u0003\u0002\u0002\u0002\bJ\u0003\u0002\u0002\u0002\nL\u0003\u0002",
    "\u0002\u0002\fN\u0003\u0002\u0002\u0002\u000eQ\u0003\u0002\u0002\u0002",
    "\u0010Z\u0003\u0002\u0002\u0002\u0012\\\u0003\u0002\u0002\u0002\u0014",
    "a\u0003\u0002\u0002\u0002\u0016i\u0003\u0002\u0002\u0002\u0018k\u0003",
    "\u0002\u0002\u0002\u001au\u0003\u0002\u0002\u0002\u001cw\u0003\u0002",
    "\u0002\u0002\u001ey\u0003\u0002\u0002\u0002 \u0080\u0003\u0002\u0002",
    "\u0002\"\u0082\u0003\u0002\u0002\u0002$\u0085\u0003\u0002\u0002\u0002",
    "&\u0088\u0003\u0002\u0002\u0002(\u008b\u0003\u0002\u0002\u0002*\u0090",
    "\u0003\u0002\u0002\u0002,\u0097\u0003\u0002\u0002\u0002.\u009e\u0003",
    "\u0002\u0002\u00020\u00a0\u0003\u0002\u0002\u00022\u00a9\u0003\u0002",
    "\u0002\u00024\u00ab\u0003\u0002\u0002\u00026\u00b2\u0003\u0002\u0002",
    "\u00028\u00b4\u0003\u0002\u0002\u0002:\u00bd\u0003\u0002\u0002\u0002",
    "<\u00bf\u0003\u0002\u0002\u0002>\u00c3\u0003\u0002\u0002\u0002@\u00c5",
    "\u0003\u0002\u0002\u0002B\u00c8\u0003\u0002\u0002\u0002DE\u0007\n\u0002",
    "\u0002E\u0003\u0003\u0002\u0002\u0002FG\u0007\b\u0002\u0002G\u0005\u0003",
    "\u0002\u0002\u0002HI\u0007\t\u0002\u0002I\u0007\u0003\u0002\u0002\u0002",
    "JK\u0007\u0007\u0002\u0002K\t\u0003\u0002\u0002\u0002LM\u0007\u001d",
    "\u0002\u0002M\u000b\u0003\u0002\u0002\u0002NO\u0007\u0005\u0002\u0002",
    "OP\u0007\u001d\u0002\u0002P\r\u0003\u0002\u0002\u0002QR\u0007\u001e",
    "\u0002\u0002R\u000f\u0003\u0002\u0002\u0002S[\u0005\f\u0007\u0002T[",
    "\u0005\u0002\u0002\u0002U[\u0005\u0004\u0003\u0002V[\u0005\u0006\u0004",
    "\u0002W[\u0005\b\u0005\u0002X[\u0005\u000e\b\u0002Y[\u0005\n\u0006\u0002",
    "ZS\u0003\u0002\u0002\u0002ZT\u0003\u0002\u0002\u0002ZU\u0003\u0002\u0002",
    "\u0002ZV\u0003\u0002\u0002\u0002ZW\u0003\u0002\u0002\u0002ZX\u0003\u0002",
    "\u0002\u0002ZY\u0003\u0002\u0002\u0002[\u0011\u0003\u0002\u0002\u0002",
    "\\]\u0007\u0006\u0002\u0002]^\u0007\u001e\u0002\u0002^_\u0007\u000f",
    "\u0002\u0002_`\u0005\u0010\t\u0002`\u0013\u0003\u0002\u0002\u0002af",
    "\b\u000b\u0001\u0002bc\f\u0004\u0002\u0002ce\u0005\u0012\n\u0002db\u0003",
    "\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002",
    "fg\u0003\u0002\u0002\u0002g\u0015\u0003\u0002\u0002\u0002hf\u0003\u0002",
    "\u0002\u0002ij\u0005\u0010\t\u0002j\u0017\u0003\u0002\u0002\u0002kl",
    "\u0007\u001e\u0002\u0002lm\u0007\u000f\u0002\u0002mn\u0005\u0016\f\u0002",
    "n\u0019\u0003\u0002\u0002\u0002op\u0005\u0018\r\u0002pq\u0007\u001c",
    "\u0002\u0002qr\u0005\u001a\u000e\u0002rv\u0003\u0002\u0002\u0002sv\u0005",
    "\u0018\r\u0002tv\u0005\u001c\u000f\u0002uo\u0003\u0002\u0002\u0002u",
    "s\u0003\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002v\u001b\u0003\u0002",
    "\u0002\u0002wx\u0007\u001e\u0002\u0002x\u001d\u0003\u0002\u0002\u0002",
    "yz\u0005\u0010\t\u0002z\u001f\u0003\u0002\u0002\u0002{|\u0005\u001e",
    "\u0010\u0002|}\u0007\u0015\u0002\u0002}~\u0005 \u0011\u0002~\u0081\u0003",
    "\u0002\u0002\u0002\u007f\u0081\u0005\u001e\u0010\u0002\u0080{\u0003",
    "\u0002\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0081!\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0007\u0013\u0002\u0002\u0083\u0084\u0005",
    "\u001a\u000e\u0002\u0084#\u0003\u0002\u0002\u0002\u0085\u0086\u0007",
    "\u000b\u0002\u0002\u0086\u0087\u0005B\"\u0002\u0087%\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007\f\u0002\u0002\u0089\u008a\u0007\u001e\u0002",
    "\u0002\u008a\'\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0011\u0002",
    "\u0002\u008c\u008d\u0007\u001e\u0002\u0002\u008d\u008e\u0007\u0010\u0002",
    "\u0002\u008e\u008f\u0005 \u0011\u0002\u008f)\u0003\u0002\u0002\u0002",
    "\u0090\u0091\u0007\u001e\u0002\u0002\u0091+\u0003\u0002\u0002\u0002",
    "\u0092\u0098\u0005&\u0014\u0002\u0093\u0098\u0005\"\u0012\u0002\u0094",
    "\u0098\u0005$\u0013\u0002\u0095\u0098\u0005*\u0016\u0002\u0096\u0098",
    "\u0005(\u0015\u0002\u0097\u0092\u0003\u0002\u0002\u0002\u0097\u0093",
    "\u0003\u0002\u0002\u0002\u0097\u0094\u0003\u0002\u0002\u0002\u0097\u0095",
    "\u0003\u0002\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0098-",
    "\u0003\u0002\u0002\u0002\u0099\u009f\u0005,\u0017\u0002\u009a\u009b",
    "\u0005,\u0017\u0002\u009b\u009c\u0007\u0015\u0002\u0002\u009c\u009d",
    "\u0005.\u0018\u0002\u009d\u009f\u0003\u0002\u0002\u0002\u009e\u0099",
    "\u0003\u0002\u0002\u0002\u009e\u009a\u0003\u0002\u0002\u0002\u009f/",
    "\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007\r\u0002\u0002\u00a1\u00a2",
    "\u0007\u001e\u0002\u0002\u00a2\u00a3\u0007\u0012\u0002\u0002\u00a3\u00a4",
    "\u0005.\u0018\u0002\u00a41\u0003\u0002\u0002\u0002\u00a5\u00a6\u0005",
    "0\u0019\u0002\u00a6\u00a7\u00052\u001a\u0002\u00a7\u00aa\u0003\u0002",
    "\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9\u00a5\u0003\u0002",
    "\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002\u00aa3\u0003\u0002",
    "\u0002\u0002\u00ab\u00ac\u0007\u000e\u0002\u0002\u00ac\u00ad\u0005*",
    "\u0016\u0002\u00ad5\u0003\u0002\u0002\u0002\u00ae\u00af\u00054\u001b",
    "\u0002\u00af\u00b0\u00056\u001c\u0002\u00b0\u00b3\u0003\u0002\u0002",
    "\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00ae\u0003\u0002\u0002",
    "\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b37\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0007\u0016\u0002\u0002\u00b5\u00b6\u0007\u001e\u0002",
    "\u0002\u00b6\u00b7\u0007\u000f\u0002\u0002\u00b7\u00b8\u0005\u001a\u000e",
    "\u0002\u00b89\u0003\u0002\u0002\u0002\u00b9\u00ba\u00058\u001d\u0002",
    "\u00ba\u00bb\u0005:\u001e\u0002\u00bb\u00be\u0003\u0002\u0002\u0002",
    "\u00bc\u00be\u0003\u0002\u0002\u0002\u00bd\u00b9\u0003\u0002\u0002\u0002",
    "\u00bd\u00bc\u0003\u0002\u0002\u0002\u00be;\u0003\u0002\u0002\u0002",
    "\u00bf\u00c0\u0005:\u001e\u0002\u00c0\u00c1\u0005\u0014\u000b\u0002",
    "\u00c1\u00c2\u00052\u001a\u0002\u00c2=\u0003\u0002\u0002\u0002\u00c3",
    "\u00c4\u00056\u001c\u0002\u00c4?\u0003\u0002\u0002\u0002\u00c5\u00c6",
    "\u0005<\u001f\u0002\u00c6\u00c7\u0005> \u0002\u00c7A\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0007\u001d\u0002\u0002\u00c9C\u0003\u0002\u0002",
    "\u0002\u000bZfu\u0080\u0097\u009e\u00a9\u00b2\u00bd"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'regexp'", "'define'", "'alphanumeric'", 
                     "'boolean'", "'number'", "'word'", "'go to'", "'click on'", 
                     "'to'", "'do'", "'as'", "'is'", "'verify'", "'you must'", 
                     "'type'", "'then'", "'and'", "'entry'", "';'", "'{'", 
                     "'}'", "'set'", "':'", "','" ];

var symbolicNames = [ null, "SKIPED", "LINE_JOINING", "REGEXP", "DEFINE", 
                      "ALPHANUM", "BOOLEAN", "NUMBER", "WORD", "GO_TO_ACTION", 
                      "CLICK_ON", "TO", "DO", "AS", "IS", "VERIFY", "YOU_MUST", 
                      "TYPE_ACTION", "THEN", "AND", "ENTRY", "SEMICOLON", 
                      "L_BRACE", "R_BRACE", "SET", "TWO_DOT", "COMA", "QUOTED_CONTENT", 
                      "IDENTIFIER", "WHITESPACE" ];

var ruleNames =  [ "word_type", "boolean_type", "number_type", "alphanum_type", 
                   "fixed_value_type", "regex_type", "custom_type", "type_description", 
                   "type_declaration", "type_declarations", "entry_value", 
                   "entry", "entries", "declared_entry", "verification_operation", 
                   "verification_operations", "type_action", "go_to_action", 
                   "click_action", "verify_action", "declared_action", "step", 
                   "steps", "action_declaration", "action_declarations", 
                   "execute_action", "execute_actions", "entry_declaration", 
                   "entry_declarations", "declarations", "executions", "main", 
                   "url" ];

function BusinessRulesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BusinessRulesParser.prototype = Object.create(antlr4.Parser.prototype);
BusinessRulesParser.prototype.constructor = BusinessRulesParser;

Object.defineProperty(BusinessRulesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BusinessRulesParser.EOF = antlr4.Token.EOF;
BusinessRulesParser.SKIPED = 1;
BusinessRulesParser.LINE_JOINING = 2;
BusinessRulesParser.REGEXP = 3;
BusinessRulesParser.DEFINE = 4;
BusinessRulesParser.ALPHANUM = 5;
BusinessRulesParser.BOOLEAN = 6;
BusinessRulesParser.NUMBER = 7;
BusinessRulesParser.WORD = 8;
BusinessRulesParser.GO_TO_ACTION = 9;
BusinessRulesParser.CLICK_ON = 10;
BusinessRulesParser.TO = 11;
BusinessRulesParser.DO = 12;
BusinessRulesParser.AS = 13;
BusinessRulesParser.IS = 14;
BusinessRulesParser.VERIFY = 15;
BusinessRulesParser.YOU_MUST = 16;
BusinessRulesParser.TYPE_ACTION = 17;
BusinessRulesParser.THEN = 18;
BusinessRulesParser.AND = 19;
BusinessRulesParser.ENTRY = 20;
BusinessRulesParser.SEMICOLON = 21;
BusinessRulesParser.L_BRACE = 22;
BusinessRulesParser.R_BRACE = 23;
BusinessRulesParser.SET = 24;
BusinessRulesParser.TWO_DOT = 25;
BusinessRulesParser.COMA = 26;
BusinessRulesParser.QUOTED_CONTENT = 27;
BusinessRulesParser.IDENTIFIER = 28;
BusinessRulesParser.WHITESPACE = 29;

BusinessRulesParser.RULE_word_type = 0;
BusinessRulesParser.RULE_boolean_type = 1;
BusinessRulesParser.RULE_number_type = 2;
BusinessRulesParser.RULE_alphanum_type = 3;
BusinessRulesParser.RULE_fixed_value_type = 4;
BusinessRulesParser.RULE_regex_type = 5;
BusinessRulesParser.RULE_custom_type = 6;
BusinessRulesParser.RULE_type_description = 7;
BusinessRulesParser.RULE_type_declaration = 8;
BusinessRulesParser.RULE_type_declarations = 9;
BusinessRulesParser.RULE_entry_value = 10;
BusinessRulesParser.RULE_entry = 11;
BusinessRulesParser.RULE_entries = 12;
BusinessRulesParser.RULE_declared_entry = 13;
BusinessRulesParser.RULE_verification_operation = 14;
BusinessRulesParser.RULE_verification_operations = 15;
BusinessRulesParser.RULE_type_action = 16;
BusinessRulesParser.RULE_go_to_action = 17;
BusinessRulesParser.RULE_click_action = 18;
BusinessRulesParser.RULE_verify_action = 19;
BusinessRulesParser.RULE_declared_action = 20;
BusinessRulesParser.RULE_step = 21;
BusinessRulesParser.RULE_steps = 22;
BusinessRulesParser.RULE_action_declaration = 23;
BusinessRulesParser.RULE_action_declarations = 24;
BusinessRulesParser.RULE_execute_action = 25;
BusinessRulesParser.RULE_execute_actions = 26;
BusinessRulesParser.RULE_entry_declaration = 27;
BusinessRulesParser.RULE_entry_declarations = 28;
BusinessRulesParser.RULE_declarations = 29;
BusinessRulesParser.RULE_executions = 30;
BusinessRulesParser.RULE_main = 31;
BusinessRulesParser.RULE_url = 32;

function Word_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_word_type;
    return this;
}

Word_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Word_typeContext.prototype.constructor = Word_typeContext;

Word_typeContext.prototype.WORD = function() {
    return this.getToken(BusinessRulesParser.WORD, 0);
};




BusinessRulesParser.Word_typeContext = Word_typeContext;

BusinessRulesParser.prototype.word_type = function() {

    var localctx = new Word_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BusinessRulesParser.RULE_word_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(BusinessRulesParser.WORD);
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

function Boolean_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_boolean_type;
    return this;
}

Boolean_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Boolean_typeContext.prototype.constructor = Boolean_typeContext;

Boolean_typeContext.prototype.BOOLEAN = function() {
    return this.getToken(BusinessRulesParser.BOOLEAN, 0);
};




BusinessRulesParser.Boolean_typeContext = Boolean_typeContext;

BusinessRulesParser.prototype.boolean_type = function() {

    var localctx = new Boolean_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BusinessRulesParser.RULE_boolean_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(BusinessRulesParser.BOOLEAN);
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

function Number_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_number_type;
    return this;
}

Number_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Number_typeContext.prototype.constructor = Number_typeContext;

Number_typeContext.prototype.NUMBER = function() {
    return this.getToken(BusinessRulesParser.NUMBER, 0);
};




BusinessRulesParser.Number_typeContext = Number_typeContext;

BusinessRulesParser.prototype.number_type = function() {

    var localctx = new Number_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BusinessRulesParser.RULE_number_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(BusinessRulesParser.NUMBER);
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

function Alphanum_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_alphanum_type;
    return this;
}

Alphanum_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Alphanum_typeContext.prototype.constructor = Alphanum_typeContext;

Alphanum_typeContext.prototype.ALPHANUM = function() {
    return this.getToken(BusinessRulesParser.ALPHANUM, 0);
};




BusinessRulesParser.Alphanum_typeContext = Alphanum_typeContext;

BusinessRulesParser.prototype.alphanum_type = function() {

    var localctx = new Alphanum_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BusinessRulesParser.RULE_alphanum_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(BusinessRulesParser.ALPHANUM);
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

function Fixed_value_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_fixed_value_type;
    return this;
}

Fixed_value_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fixed_value_typeContext.prototype.constructor = Fixed_value_typeContext;

Fixed_value_typeContext.prototype.QUOTED_CONTENT = function() {
    return this.getToken(BusinessRulesParser.QUOTED_CONTENT, 0);
};




BusinessRulesParser.Fixed_value_typeContext = Fixed_value_typeContext;

BusinessRulesParser.prototype.fixed_value_type = function() {

    var localctx = new Fixed_value_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BusinessRulesParser.RULE_fixed_value_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(BusinessRulesParser.QUOTED_CONTENT);
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

function Regex_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_regex_type;
    return this;
}

Regex_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Regex_typeContext.prototype.constructor = Regex_typeContext;

Regex_typeContext.prototype.REGEXP = function() {
    return this.getToken(BusinessRulesParser.REGEXP, 0);
};

Regex_typeContext.prototype.QUOTED_CONTENT = function() {
    return this.getToken(BusinessRulesParser.QUOTED_CONTENT, 0);
};




BusinessRulesParser.Regex_typeContext = Regex_typeContext;

BusinessRulesParser.prototype.regex_type = function() {

    var localctx = new Regex_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BusinessRulesParser.RULE_regex_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(BusinessRulesParser.REGEXP);
        this.state = 77;
        this.match(BusinessRulesParser.QUOTED_CONTENT);
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

function Custom_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_custom_type;
    return this;
}

Custom_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Custom_typeContext.prototype.constructor = Custom_typeContext;

Custom_typeContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};




BusinessRulesParser.Custom_typeContext = Custom_typeContext;

BusinessRulesParser.prototype.custom_type = function() {

    var localctx = new Custom_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BusinessRulesParser.RULE_custom_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(BusinessRulesParser.IDENTIFIER);
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

function Type_descriptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_type_description;
    return this;
}

Type_descriptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_descriptionContext.prototype.constructor = Type_descriptionContext;

Type_descriptionContext.prototype.regex_type = function() {
    return this.getTypedRuleContext(Regex_typeContext,0);
};

Type_descriptionContext.prototype.word_type = function() {
    return this.getTypedRuleContext(Word_typeContext,0);
};

Type_descriptionContext.prototype.boolean_type = function() {
    return this.getTypedRuleContext(Boolean_typeContext,0);
};

Type_descriptionContext.prototype.number_type = function() {
    return this.getTypedRuleContext(Number_typeContext,0);
};

Type_descriptionContext.prototype.alphanum_type = function() {
    return this.getTypedRuleContext(Alphanum_typeContext,0);
};

Type_descriptionContext.prototype.custom_type = function() {
    return this.getTypedRuleContext(Custom_typeContext,0);
};

Type_descriptionContext.prototype.fixed_value_type = function() {
    return this.getTypedRuleContext(Fixed_value_typeContext,0);
};




BusinessRulesParser.Type_descriptionContext = Type_descriptionContext;

BusinessRulesParser.prototype.type_description = function() {

    var localctx = new Type_descriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BusinessRulesParser.RULE_type_description);
    try {
        this.state = 88;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.REGEXP:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.regex_type();
            break;
        case BusinessRulesParser.WORD:
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            this.word_type();
            break;
        case BusinessRulesParser.BOOLEAN:
            this.enterOuterAlt(localctx, 3);
            this.state = 83;
            this.boolean_type();
            break;
        case BusinessRulesParser.NUMBER:
            this.enterOuterAlt(localctx, 4);
            this.state = 84;
            this.number_type();
            break;
        case BusinessRulesParser.ALPHANUM:
            this.enterOuterAlt(localctx, 5);
            this.state = 85;
            this.alphanum_type();
            break;
        case BusinessRulesParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 6);
            this.state = 86;
            this.custom_type();
            break;
        case BusinessRulesParser.QUOTED_CONTENT:
            this.enterOuterAlt(localctx, 7);
            this.state = 87;
            this.fixed_value_type();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function Type_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_type_declaration;
    return this;
}

Type_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_declarationContext.prototype.constructor = Type_declarationContext;

Type_declarationContext.prototype.DEFINE = function() {
    return this.getToken(BusinessRulesParser.DEFINE, 0);
};

Type_declarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};

Type_declarationContext.prototype.AS = function() {
    return this.getToken(BusinessRulesParser.AS, 0);
};

Type_declarationContext.prototype.type_description = function() {
    return this.getTypedRuleContext(Type_descriptionContext,0);
};




BusinessRulesParser.Type_declarationContext = Type_declarationContext;

BusinessRulesParser.prototype.type_declaration = function() {

    var localctx = new Type_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BusinessRulesParser.RULE_type_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(BusinessRulesParser.DEFINE);
        this.state = 91;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 92;
        this.match(BusinessRulesParser.AS);
        this.state = 93;
        this.type_description();
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

function Type_declarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_type_declarations;
    return this;
}

Type_declarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_declarationsContext.prototype.constructor = Type_declarationsContext;

Type_declarationsContext.prototype.type_declarations = function() {
    return this.getTypedRuleContext(Type_declarationsContext,0);
};

Type_declarationsContext.prototype.type_declaration = function() {
    return this.getTypedRuleContext(Type_declarationContext,0);
};



BusinessRulesParser.prototype.type_declarations = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Type_declarationsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, BusinessRulesParser.RULE_type_declarations, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this._ctx.stop = this._input.LT(-1);
        this.state = 100;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Type_declarationsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, BusinessRulesParser.RULE_type_declarations);
                this.state = 96;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 97;
                this.type_declaration(); 
            }
            this.state = 102;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Entry_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_entry_value;
    return this;
}

Entry_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Entry_valueContext.prototype.constructor = Entry_valueContext;

Entry_valueContext.prototype.type_description = function() {
    return this.getTypedRuleContext(Type_descriptionContext,0);
};




BusinessRulesParser.Entry_valueContext = Entry_valueContext;

BusinessRulesParser.prototype.entry_value = function() {

    var localctx = new Entry_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BusinessRulesParser.RULE_entry_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.type_description();
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

function EntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_entry;
    return this;
}

EntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryContext.prototype.constructor = EntryContext;

EntryContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};

EntryContext.prototype.AS = function() {
    return this.getToken(BusinessRulesParser.AS, 0);
};

EntryContext.prototype.entry_value = function() {
    return this.getTypedRuleContext(Entry_valueContext,0);
};




BusinessRulesParser.EntryContext = EntryContext;

BusinessRulesParser.prototype.entry = function() {

    var localctx = new EntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BusinessRulesParser.RULE_entry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 106;
        this.match(BusinessRulesParser.AS);
        this.state = 107;
        this.entry_value();
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

function EntriesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_entries;
    return this;
}

EntriesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntriesContext.prototype.constructor = EntriesContext;

EntriesContext.prototype.entry = function() {
    return this.getTypedRuleContext(EntryContext,0);
};

EntriesContext.prototype.COMA = function() {
    return this.getToken(BusinessRulesParser.COMA, 0);
};

EntriesContext.prototype.entries = function() {
    return this.getTypedRuleContext(EntriesContext,0);
};

EntriesContext.prototype.declared_entry = function() {
    return this.getTypedRuleContext(Declared_entryContext,0);
};




BusinessRulesParser.EntriesContext = EntriesContext;

BusinessRulesParser.prototype.entries = function() {

    var localctx = new EntriesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BusinessRulesParser.RULE_entries);
    try {
        this.state = 115;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 109;
            this.entry();
            this.state = 110;
            this.match(BusinessRulesParser.COMA);
            this.state = 111;
            this.entries();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.entry();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 114;
            this.declared_entry();
            break;

        }
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

function Declared_entryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_declared_entry;
    return this;
}

Declared_entryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declared_entryContext.prototype.constructor = Declared_entryContext;

Declared_entryContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};




BusinessRulesParser.Declared_entryContext = Declared_entryContext;

BusinessRulesParser.prototype.declared_entry = function() {

    var localctx = new Declared_entryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BusinessRulesParser.RULE_declared_entry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(BusinessRulesParser.IDENTIFIER);
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

function Verification_operationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_verification_operation;
    return this;
}

Verification_operationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Verification_operationContext.prototype.constructor = Verification_operationContext;

Verification_operationContext.prototype.type_description = function() {
    return this.getTypedRuleContext(Type_descriptionContext,0);
};




BusinessRulesParser.Verification_operationContext = Verification_operationContext;

BusinessRulesParser.prototype.verification_operation = function() {

    var localctx = new Verification_operationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BusinessRulesParser.RULE_verification_operation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.type_description();
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

function Verification_operationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_verification_operations;
    return this;
}

Verification_operationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Verification_operationsContext.prototype.constructor = Verification_operationsContext;

Verification_operationsContext.prototype.verification_operation = function() {
    return this.getTypedRuleContext(Verification_operationContext,0);
};

Verification_operationsContext.prototype.AND = function() {
    return this.getToken(BusinessRulesParser.AND, 0);
};

Verification_operationsContext.prototype.verification_operations = function() {
    return this.getTypedRuleContext(Verification_operationsContext,0);
};




BusinessRulesParser.Verification_operationsContext = Verification_operationsContext;

BusinessRulesParser.prototype.verification_operations = function() {

    var localctx = new Verification_operationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BusinessRulesParser.RULE_verification_operations);
    try {
        this.state = 126;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.verification_operation();
            this.state = 122;
            this.match(BusinessRulesParser.AND);
            this.state = 123;
            this.verification_operations();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.verification_operation();
            break;

        }
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

function Type_actionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_type_action;
    return this;
}

Type_actionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_actionContext.prototype.constructor = Type_actionContext;

Type_actionContext.prototype.TYPE_ACTION = function() {
    return this.getToken(BusinessRulesParser.TYPE_ACTION, 0);
};

Type_actionContext.prototype.entries = function() {
    return this.getTypedRuleContext(EntriesContext,0);
};




BusinessRulesParser.Type_actionContext = Type_actionContext;

BusinessRulesParser.prototype.type_action = function() {

    var localctx = new Type_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BusinessRulesParser.RULE_type_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(BusinessRulesParser.TYPE_ACTION);
        this.state = 129;
        this.entries();
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

function Go_to_actionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_go_to_action;
    return this;
}

Go_to_actionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Go_to_actionContext.prototype.constructor = Go_to_actionContext;

Go_to_actionContext.prototype.GO_TO_ACTION = function() {
    return this.getToken(BusinessRulesParser.GO_TO_ACTION, 0);
};

Go_to_actionContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};




BusinessRulesParser.Go_to_actionContext = Go_to_actionContext;

BusinessRulesParser.prototype.go_to_action = function() {

    var localctx = new Go_to_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BusinessRulesParser.RULE_go_to_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(BusinessRulesParser.GO_TO_ACTION);
        this.state = 132;
        this.url();
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

function Click_actionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_click_action;
    return this;
}

Click_actionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Click_actionContext.prototype.constructor = Click_actionContext;

Click_actionContext.prototype.CLICK_ON = function() {
    return this.getToken(BusinessRulesParser.CLICK_ON, 0);
};

Click_actionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};




BusinessRulesParser.Click_actionContext = Click_actionContext;

BusinessRulesParser.prototype.click_action = function() {

    var localctx = new Click_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BusinessRulesParser.RULE_click_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(BusinessRulesParser.CLICK_ON);
        this.state = 135;
        this.match(BusinessRulesParser.IDENTIFIER);
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

function Verify_actionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_verify_action;
    return this;
}

Verify_actionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Verify_actionContext.prototype.constructor = Verify_actionContext;

Verify_actionContext.prototype.VERIFY = function() {
    return this.getToken(BusinessRulesParser.VERIFY, 0);
};

Verify_actionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};

Verify_actionContext.prototype.IS = function() {
    return this.getToken(BusinessRulesParser.IS, 0);
};

Verify_actionContext.prototype.verification_operations = function() {
    return this.getTypedRuleContext(Verification_operationsContext,0);
};




BusinessRulesParser.Verify_actionContext = Verify_actionContext;

BusinessRulesParser.prototype.verify_action = function() {

    var localctx = new Verify_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BusinessRulesParser.RULE_verify_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(BusinessRulesParser.VERIFY);
        this.state = 138;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 139;
        this.match(BusinessRulesParser.IS);
        this.state = 140;
        this.verification_operations();
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

function Declared_actionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_declared_action;
    return this;
}

Declared_actionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declared_actionContext.prototype.constructor = Declared_actionContext;

Declared_actionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};




BusinessRulesParser.Declared_actionContext = Declared_actionContext;

BusinessRulesParser.prototype.declared_action = function() {

    var localctx = new Declared_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BusinessRulesParser.RULE_declared_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(BusinessRulesParser.IDENTIFIER);
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

function StepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_step;
    return this;
}

StepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepContext.prototype.constructor = StepContext;

StepContext.prototype.click_action = function() {
    return this.getTypedRuleContext(Click_actionContext,0);
};

StepContext.prototype.type_action = function() {
    return this.getTypedRuleContext(Type_actionContext,0);
};

StepContext.prototype.go_to_action = function() {
    return this.getTypedRuleContext(Go_to_actionContext,0);
};

StepContext.prototype.declared_action = function() {
    return this.getTypedRuleContext(Declared_actionContext,0);
};

StepContext.prototype.verify_action = function() {
    return this.getTypedRuleContext(Verify_actionContext,0);
};




BusinessRulesParser.StepContext = StepContext;

BusinessRulesParser.prototype.step = function() {

    var localctx = new StepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BusinessRulesParser.RULE_step);
    try {
        this.state = 149;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.CLICK_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.click_action();
            break;
        case BusinessRulesParser.TYPE_ACTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 145;
            this.type_action();
            break;
        case BusinessRulesParser.GO_TO_ACTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 146;
            this.go_to_action();
            break;
        case BusinessRulesParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 4);
            this.state = 147;
            this.declared_action();
            break;
        case BusinessRulesParser.VERIFY:
            this.enterOuterAlt(localctx, 5);
            this.state = 148;
            this.verify_action();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function StepsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_steps;
    return this;
}

StepsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepsContext.prototype.constructor = StepsContext;

StepsContext.prototype.step = function() {
    return this.getTypedRuleContext(StepContext,0);
};

StepsContext.prototype.AND = function() {
    return this.getToken(BusinessRulesParser.AND, 0);
};

StepsContext.prototype.steps = function() {
    return this.getTypedRuleContext(StepsContext,0);
};




BusinessRulesParser.StepsContext = StepsContext;

BusinessRulesParser.prototype.steps = function() {

    var localctx = new StepsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BusinessRulesParser.RULE_steps);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 151;
            this.step();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            this.step();
            this.state = 153;
            this.match(BusinessRulesParser.AND);
            this.state = 154;
            this.steps();
            break;

        }
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

function Action_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_action_declaration;
    return this;
}

Action_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Action_declarationContext.prototype.constructor = Action_declarationContext;

Action_declarationContext.prototype.TO = function() {
    return this.getToken(BusinessRulesParser.TO, 0);
};

Action_declarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};

Action_declarationContext.prototype.YOU_MUST = function() {
    return this.getToken(BusinessRulesParser.YOU_MUST, 0);
};

Action_declarationContext.prototype.steps = function() {
    return this.getTypedRuleContext(StepsContext,0);
};




BusinessRulesParser.Action_declarationContext = Action_declarationContext;

BusinessRulesParser.prototype.action_declaration = function() {

    var localctx = new Action_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BusinessRulesParser.RULE_action_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(BusinessRulesParser.TO);
        this.state = 159;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 160;
        this.match(BusinessRulesParser.YOU_MUST);
        this.state = 161;
        this.steps();
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

function Action_declarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_action_declarations;
    return this;
}

Action_declarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Action_declarationsContext.prototype.constructor = Action_declarationsContext;

Action_declarationsContext.prototype.action_declaration = function() {
    return this.getTypedRuleContext(Action_declarationContext,0);
};

Action_declarationsContext.prototype.action_declarations = function() {
    return this.getTypedRuleContext(Action_declarationsContext,0);
};




BusinessRulesParser.Action_declarationsContext = Action_declarationsContext;

BusinessRulesParser.prototype.action_declarations = function() {

    var localctx = new Action_declarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BusinessRulesParser.RULE_action_declarations);
    try {
        this.state = 167;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.TO:
            this.enterOuterAlt(localctx, 1);
            this.state = 163;
            this.action_declaration();
            this.state = 164;
            this.action_declarations();
            break;
        case BusinessRulesParser.EOF:
        case BusinessRulesParser.DO:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function Execute_actionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_execute_action;
    return this;
}

Execute_actionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Execute_actionContext.prototype.constructor = Execute_actionContext;

Execute_actionContext.prototype.DO = function() {
    return this.getToken(BusinessRulesParser.DO, 0);
};

Execute_actionContext.prototype.declared_action = function() {
    return this.getTypedRuleContext(Declared_actionContext,0);
};




BusinessRulesParser.Execute_actionContext = Execute_actionContext;

BusinessRulesParser.prototype.execute_action = function() {

    var localctx = new Execute_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, BusinessRulesParser.RULE_execute_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(BusinessRulesParser.DO);
        this.state = 170;
        this.declared_action();
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

function Execute_actionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_execute_actions;
    return this;
}

Execute_actionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Execute_actionsContext.prototype.constructor = Execute_actionsContext;

Execute_actionsContext.prototype.execute_action = function() {
    return this.getTypedRuleContext(Execute_actionContext,0);
};

Execute_actionsContext.prototype.execute_actions = function() {
    return this.getTypedRuleContext(Execute_actionsContext,0);
};




BusinessRulesParser.Execute_actionsContext = Execute_actionsContext;

BusinessRulesParser.prototype.execute_actions = function() {

    var localctx = new Execute_actionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, BusinessRulesParser.RULE_execute_actions);
    try {
        this.state = 176;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.DO:
            this.enterOuterAlt(localctx, 1);
            this.state = 172;
            this.execute_action();
            this.state = 173;
            this.execute_actions();
            break;
        case BusinessRulesParser.EOF:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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

function Entry_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_entry_declaration;
    return this;
}

Entry_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Entry_declarationContext.prototype.constructor = Entry_declarationContext;

Entry_declarationContext.prototype.ENTRY = function() {
    return this.getToken(BusinessRulesParser.ENTRY, 0);
};

Entry_declarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};

Entry_declarationContext.prototype.AS = function() {
    return this.getToken(BusinessRulesParser.AS, 0);
};

Entry_declarationContext.prototype.entries = function() {
    return this.getTypedRuleContext(EntriesContext,0);
};




BusinessRulesParser.Entry_declarationContext = Entry_declarationContext;

BusinessRulesParser.prototype.entry_declaration = function() {

    var localctx = new Entry_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, BusinessRulesParser.RULE_entry_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(BusinessRulesParser.ENTRY);
        this.state = 179;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 180;
        this.match(BusinessRulesParser.AS);
        this.state = 181;
        this.entries();
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

function Entry_declarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_entry_declarations;
    return this;
}

Entry_declarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Entry_declarationsContext.prototype.constructor = Entry_declarationsContext;

Entry_declarationsContext.prototype.entry_declaration = function() {
    return this.getTypedRuleContext(Entry_declarationContext,0);
};

Entry_declarationsContext.prototype.entry_declarations = function() {
    return this.getTypedRuleContext(Entry_declarationsContext,0);
};




BusinessRulesParser.Entry_declarationsContext = Entry_declarationsContext;

BusinessRulesParser.prototype.entry_declarations = function() {

    var localctx = new Entry_declarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, BusinessRulesParser.RULE_entry_declarations);
    try {
        this.state = 187;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 183;
            this.entry_declaration();
            this.state = 184;
            this.entry_declarations();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);

            break;

        }
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

function DeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_declarations;
    return this;
}

DeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationsContext.prototype.constructor = DeclarationsContext;

DeclarationsContext.prototype.entry_declarations = function() {
    return this.getTypedRuleContext(Entry_declarationsContext,0);
};

DeclarationsContext.prototype.type_declarations = function() {
    return this.getTypedRuleContext(Type_declarationsContext,0);
};

DeclarationsContext.prototype.action_declarations = function() {
    return this.getTypedRuleContext(Action_declarationsContext,0);
};




BusinessRulesParser.DeclarationsContext = DeclarationsContext;

BusinessRulesParser.prototype.declarations = function() {

    var localctx = new DeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, BusinessRulesParser.RULE_declarations);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.entry_declarations();
        this.state = 190;
        this.type_declarations(0);
        this.state = 191;
        this.action_declarations();
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

function ExecutionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_executions;
    return this;
}

ExecutionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExecutionsContext.prototype.constructor = ExecutionsContext;

ExecutionsContext.prototype.execute_actions = function() {
    return this.getTypedRuleContext(Execute_actionsContext,0);
};




BusinessRulesParser.ExecutionsContext = ExecutionsContext;

BusinessRulesParser.prototype.executions = function() {

    var localctx = new ExecutionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, BusinessRulesParser.RULE_executions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.execute_actions();
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

function MainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_main;
    return this;
}

MainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainContext.prototype.constructor = MainContext;

MainContext.prototype.declarations = function() {
    return this.getTypedRuleContext(DeclarationsContext,0);
};

MainContext.prototype.executions = function() {
    return this.getTypedRuleContext(ExecutionsContext,0);
};




BusinessRulesParser.MainContext = MainContext;

BusinessRulesParser.prototype.main = function() {

    var localctx = new MainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, BusinessRulesParser.RULE_main);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.declarations();
        this.state = 196;
        this.executions();
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

function UrlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_url;
    return this;
}

UrlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UrlContext.prototype.constructor = UrlContext;

UrlContext.prototype.QUOTED_CONTENT = function() {
    return this.getToken(BusinessRulesParser.QUOTED_CONTENT, 0);
};




BusinessRulesParser.UrlContext = UrlContext;

BusinessRulesParser.prototype.url = function() {

    var localctx = new UrlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, BusinessRulesParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(BusinessRulesParser.QUOTED_CONTENT);
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


BusinessRulesParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 9:
			return this.type_declarations_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

BusinessRulesParser.prototype.type_declarations_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.BusinessRulesParser = BusinessRulesParser;
