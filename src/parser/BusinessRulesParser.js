// Generated from C:/Users/jleveau/WebstormProjects/businessTester/src/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "BusinessRules.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014{\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0005\b>\n\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0007\u000bJ\n\u000b\f\u000b\u000e\u000bM\u000b\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\fS\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0005\rZ\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000fe",
    "\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011n\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0002\u0003\u0014\u0016",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(\u0002\u0002\u0002n\u0002*\u0003\u0002\u0002\u0002\u0004",
    "/\u0003\u0002\u0002\u0002\u00062\u0003\u0002\u0002\u0002\b5\u0003\u0002",
    "\u0002\u0002\n7\u0003\u0002\u0002\u0002\f9\u0003\u0002\u0002\u0002\u000e",
    "=\u0003\u0002\u0002\u0002\u0010?\u0003\u0002\u0002\u0002\u0012A\u0003",
    "\u0002\u0002\u0002\u0014F\u0003\u0002\u0002\u0002\u0016R\u0003\u0002",
    "\u0002\u0002\u0018Y\u0003\u0002\u0002\u0002\u001a[\u0003\u0002\u0002",
    "\u0002\u001cd\u0003\u0002\u0002\u0002\u001ef\u0003\u0002\u0002\u0002",
    " m\u0003\u0002\u0002\u0002\"o\u0003\u0002\u0002\u0002$r\u0003\u0002",
    "\u0002\u0002&t\u0003\u0002\u0002\u0002(w\u0003\u0002\u0002\u0002*+\u0007",
    "\u000e\u0002\u0002+,\u0007\u0013\u0002\u0002,-\u0007\f\u0002\u0002-",
    ".\u0005\u000e\b\u0002.\u0003\u0003\u0002\u0002\u0002/0\u0007\b\u0002",
    "\u000201\u0005\n\u0006\u00021\u0005\u0003\u0002\u0002\u000223\u0007",
    "\t\u0002\u000234\u0007\u0013\u0002\u00024\u0007\u0003\u0002\u0002\u0002",
    "56\u0007\u0013\u0002\u00026\t\u0003\u0002\u0002\u000278\u0007\u0012",
    "\u0002\u00028\u000b\u0003\u0002\u0002\u00029:\u0007\u0013\u0002\u0002",
    ":\r\u0003\u0002\u0002\u0002;>\u0007\u0007\u0002\u0002<>\u0005\f\u0007",
    "\u0002=;\u0003\u0002\u0002\u0002=<\u0003\u0002\u0002\u0002>\u000f\u0003",
    "\u0002\u0002\u0002?@\u0005&\u0014\u0002@\u0011\u0003\u0002\u0002\u0002",
    "AB\u0007\u0006\u0002\u0002BC\u0007\u0013\u0002\u0002CD\u0007\f\u0002",
    "\u0002DE\u0005\u0010\t\u0002E\u0013\u0003\u0002\u0002\u0002FK\b\u000b",
    "\u0001\u0002GH\f\u0004\u0002\u0002HJ\u0005\u0012\n\u0002IG\u0003\u0002",
    "\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003",
    "\u0002\u0002\u0002L\u0015\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002",
    "\u0002NS\u0005\u0006\u0004\u0002OS\u0005\u0002\u0002\u0002PS\u0005\u0004",
    "\u0003\u0002QS\u0005\b\u0005\u0002RN\u0003\u0002\u0002\u0002RO\u0003",
    "\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002",
    "S\u0017\u0003\u0002\u0002\u0002TZ\u0005\u0016\f\u0002UV\u0005\u0016",
    "\f\u0002VW\u0007\u0010\u0002\u0002WX\u0005\u0018\r\u0002XZ\u0003\u0002",
    "\u0002\u0002YT\u0003\u0002\u0002\u0002YU\u0003\u0002\u0002\u0002Z\u0019",
    "\u0003\u0002\u0002\u0002[\\\u0007\n\u0002\u0002\\]\u0007\u0013\u0002",
    "\u0002]^\u0007\r\u0002\u0002^_\u0005\u0018\r\u0002_\u001b\u0003\u0002",
    "\u0002\u0002`a\u0005\u001a\u000e\u0002ab\u0005\u001c\u000f\u0002be\u0003",
    "\u0002\u0002\u0002ce\u0003\u0002\u0002\u0002d`\u0003\u0002\u0002\u0002",
    "dc\u0003\u0002\u0002\u0002e\u001d\u0003\u0002\u0002\u0002fg\u0007\u000b",
    "\u0002\u0002gh\u0005\b\u0005\u0002h\u001f\u0003\u0002\u0002\u0002ij",
    "\u0005\u001e\u0010\u0002jk\u0005 \u0011\u0002kn\u0003\u0002\u0002\u0002",
    "ln\u0003\u0002\u0002\u0002mi\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002",
    "\u0002n!\u0003\u0002\u0002\u0002op\u0005\u0014\u000b\u0002pq\u0005\u001c",
    "\u000f\u0002q#\u0003\u0002\u0002\u0002rs\u0005 \u0011\u0002s%\u0003",
    "\u0002\u0002\u0002tu\u0007\u0005\u0002\u0002uv\u0007\u0012\u0002\u0002",
    "v\'\u0003\u0002\u0002\u0002wx\u0005\"\u0012\u0002xy\u0005$\u0013\u0002",
    "y)\u0003\u0002\u0002\u0002\b=KRYdm"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'regexp'", "'define'", "'alphanumeric'", 
                     "'go to'", "'click on'", "'to'", "'do'", "'as'", "'you must'", 
                     "'type'", "'then'", "'and'", "';'" ];

var symbolicNames = [ null, "SKIPED", "LINE_JOINING", "REGEXP", "DEFINE", 
                      "ALPHANUM", "GO_TO_ACTION", "CLICK_ON", "TO", "DO", 
                      "AS", "YOU_MUST", "TYPE_ACTION", "THEN", "AND", "SEMICOLON", 
                      "QUOTED_CONTENT", "IDENTIFIER", "WHITESPACE" ];

var ruleNames =  [ "type_action", "go_to_action", "click_action", "declared_action", 
                   "url", "custom_type", "declared_type", "type_description", 
                   "type_declaration", "type_declarations", "step", "steps", 
                   "action_declaration", "action_declarations", "execute_action", 
                   "execute_actions", "declarations", "executions", "regex", 
                   "main" ];

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
BusinessRulesParser.GO_TO_ACTION = 6;
BusinessRulesParser.CLICK_ON = 7;
BusinessRulesParser.TO = 8;
BusinessRulesParser.DO = 9;
BusinessRulesParser.AS = 10;
BusinessRulesParser.YOU_MUST = 11;
BusinessRulesParser.TYPE_ACTION = 12;
BusinessRulesParser.THEN = 13;
BusinessRulesParser.AND = 14;
BusinessRulesParser.SEMICOLON = 15;
BusinessRulesParser.QUOTED_CONTENT = 16;
BusinessRulesParser.IDENTIFIER = 17;
BusinessRulesParser.WHITESPACE = 18;

BusinessRulesParser.RULE_type_action = 0;
BusinessRulesParser.RULE_go_to_action = 1;
BusinessRulesParser.RULE_click_action = 2;
BusinessRulesParser.RULE_declared_action = 3;
BusinessRulesParser.RULE_url = 4;
BusinessRulesParser.RULE_custom_type = 5;
BusinessRulesParser.RULE_declared_type = 6;
BusinessRulesParser.RULE_type_description = 7;
BusinessRulesParser.RULE_type_declaration = 8;
BusinessRulesParser.RULE_type_declarations = 9;
BusinessRulesParser.RULE_step = 10;
BusinessRulesParser.RULE_steps = 11;
BusinessRulesParser.RULE_action_declaration = 12;
BusinessRulesParser.RULE_action_declarations = 13;
BusinessRulesParser.RULE_execute_action = 14;
BusinessRulesParser.RULE_execute_actions = 15;
BusinessRulesParser.RULE_declarations = 16;
BusinessRulesParser.RULE_executions = 17;
BusinessRulesParser.RULE_regex = 18;
BusinessRulesParser.RULE_main = 19;

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

Type_actionContext.prototype.IDENTIFIER = function() {
    return this.getToken(BusinessRulesParser.IDENTIFIER, 0);
};

Type_actionContext.prototype.AS = function() {
    return this.getToken(BusinessRulesParser.AS, 0);
};

Type_actionContext.prototype.declared_type = function() {
    return this.getTypedRuleContext(Declared_typeContext,0);
};




BusinessRulesParser.Type_actionContext = Type_actionContext;

BusinessRulesParser.prototype.type_action = function() {

    var localctx = new Type_actionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BusinessRulesParser.RULE_type_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(BusinessRulesParser.TYPE_ACTION);
        this.state = 41;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 42;
        this.match(BusinessRulesParser.AS);
        this.state = 43;
        this.declared_type();
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
    this.enterRule(localctx, 2, BusinessRulesParser.RULE_go_to_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(BusinessRulesParser.GO_TO_ACTION);
        this.state = 46;
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
    this.enterRule(localctx, 4, BusinessRulesParser.RULE_click_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(BusinessRulesParser.CLICK_ON);
        this.state = 49;
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
    this.enterRule(localctx, 6, BusinessRulesParser.RULE_declared_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
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
    this.enterRule(localctx, 8, BusinessRulesParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
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
    this.enterRule(localctx, 10, BusinessRulesParser.RULE_custom_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
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

function Declared_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_declared_type;
    return this;
}

Declared_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declared_typeContext.prototype.constructor = Declared_typeContext;

Declared_typeContext.prototype.ALPHANUM = function() {
    return this.getToken(BusinessRulesParser.ALPHANUM, 0);
};

Declared_typeContext.prototype.custom_type = function() {
    return this.getTypedRuleContext(Custom_typeContext,0);
};




BusinessRulesParser.Declared_typeContext = Declared_typeContext;

BusinessRulesParser.prototype.declared_type = function() {

    var localctx = new Declared_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BusinessRulesParser.RULE_declared_type);
    try {
        this.state = 59;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.ALPHANUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.match(BusinessRulesParser.ALPHANUM);
            break;
        case BusinessRulesParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.custom_type();
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

Type_descriptionContext.prototype.regex = function() {
    return this.getTypedRuleContext(RegexContext,0);
};




BusinessRulesParser.Type_descriptionContext = Type_descriptionContext;

BusinessRulesParser.prototype.type_description = function() {

    var localctx = new Type_descriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BusinessRulesParser.RULE_type_description);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.regex();
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
        this.state = 63;
        this.match(BusinessRulesParser.DEFINE);
        this.state = 64;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 65;
        this.match(BusinessRulesParser.AS);
        this.state = 66;
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
        this.state = 73;
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
                this.state = 69;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 70;
                this.type_declaration(); 
            }
            this.state = 75;
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




BusinessRulesParser.StepContext = StepContext;

BusinessRulesParser.prototype.step = function() {

    var localctx = new StepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BusinessRulesParser.RULE_step);
    try {
        this.state = 80;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.CLICK_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.click_action();
            break;
        case BusinessRulesParser.TYPE_ACTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.type_action();
            break;
        case BusinessRulesParser.GO_TO_ACTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 78;
            this.go_to_action();
            break;
        case BusinessRulesParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 4);
            this.state = 79;
            this.declared_action();
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
    this.enterRule(localctx, 22, BusinessRulesParser.RULE_steps);
    try {
        this.state = 87;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.step();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.step();
            this.state = 84;
            this.match(BusinessRulesParser.AND);
            this.state = 85;
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
    this.enterRule(localctx, 24, BusinessRulesParser.RULE_action_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(BusinessRulesParser.TO);
        this.state = 90;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 91;
        this.match(BusinessRulesParser.YOU_MUST);
        this.state = 92;
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
    this.enterRule(localctx, 26, BusinessRulesParser.RULE_action_declarations);
    try {
        this.state = 98;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.TO:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.action_declaration();
            this.state = 95;
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
    this.enterRule(localctx, 28, BusinessRulesParser.RULE_execute_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(BusinessRulesParser.DO);
        this.state = 101;
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
    this.enterRule(localctx, 30, BusinessRulesParser.RULE_execute_actions);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.DO:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.execute_action();
            this.state = 104;
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

DeclarationsContext.prototype.type_declarations = function() {
    return this.getTypedRuleContext(Type_declarationsContext,0);
};

DeclarationsContext.prototype.action_declarations = function() {
    return this.getTypedRuleContext(Action_declarationsContext,0);
};




BusinessRulesParser.DeclarationsContext = DeclarationsContext;

BusinessRulesParser.prototype.declarations = function() {

    var localctx = new DeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BusinessRulesParser.RULE_declarations);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.type_declarations(0);
        this.state = 110;
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
    this.enterRule(localctx, 34, BusinessRulesParser.RULE_executions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
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

function RegexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_regex;
    return this;
}

RegexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegexContext.prototype.constructor = RegexContext;

RegexContext.prototype.REGEXP = function() {
    return this.getToken(BusinessRulesParser.REGEXP, 0);
};

RegexContext.prototype.QUOTED_CONTENT = function() {
    return this.getToken(BusinessRulesParser.QUOTED_CONTENT, 0);
};




BusinessRulesParser.RegexContext = RegexContext;

BusinessRulesParser.prototype.regex = function() {

    var localctx = new RegexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BusinessRulesParser.RULE_regex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(BusinessRulesParser.REGEXP);
        this.state = 115;
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
    this.enterRule(localctx, 38, BusinessRulesParser.RULE_main);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.declarations();
        this.state = 118;
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
