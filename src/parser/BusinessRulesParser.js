// Generated from C:/Users/jleveau/WebstormProjects/businessTester/src/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "BusinessRules.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013g\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0005\u0005.\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u00079\n\u0007\f\u0007\u000e\u0007<\u000b\u0007\u0003\b\u0003\b\u0005",
    "\b@\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tG\n\t\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000bR\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e]\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0002\u0003\f\u0012\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\u0002\u0002\u0002\\\u0002\"\u0003\u0002\u0002\u0002\u0004\'\u0003\u0002",
    "\u0002\u0002\u0006)\u0003\u0002\u0002\u0002\b-\u0003\u0002\u0002\u0002",
    "\n/\u0003\u0002\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000e?\u0003",
    "\u0002\u0002\u0002\u0010F\u0003\u0002\u0002\u0002\u0012H\u0003\u0002",
    "\u0002\u0002\u0014Q\u0003\u0002\u0002\u0002\u0016S\u0003\u0002\u0002",
    "\u0002\u0018U\u0003\u0002\u0002\u0002\u001a\\\u0003\u0002\u0002\u0002",
    "\u001c^\u0003\u0002\u0002\u0002\u001ea\u0003\u0002\u0002\u0002 c\u0003",
    "\u0002\u0002\u0002\"#\u0007\u000b\u0002\u0002#$\u0007\u0011\u0002\u0002",
    "$%\u0007\t\u0002\u0002%&\u0005\b\u0005\u0002&\u0003\u0003\u0002\u0002",
    "\u0002\'(\u0007\r\u0002\u0002(\u0005\u0003\u0002\u0002\u0002)*\u0007",
    "\u0011\u0002\u0002*\u0007\u0003\u0002\u0002\u0002+.\u0007\u0006\u0002",
    "\u0002,.\u0005\u0006\u0004\u0002-+\u0003\u0002\u0002\u0002-,\u0003\u0002",
    "\u0002\u0002.\t\u0003\u0002\u0002\u0002/0\u0007\u0005\u0002\u000201",
    "\u0007\u0011\u0002\u000212\u0007\t\u0002\u000223\u0007\u0004\u0002\u0002",
    "34\u0007\u0010\u0002\u00024\u000b\u0003\u0002\u0002\u00025:\b\u0007",
    "\u0001\u000267\f\u0004\u0002\u000279\u0005\n\u0006\u000286\u0003\u0002",
    "\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003",
    "\u0002\u0002\u0002;\r\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002",
    "=@\u0005\u0002\u0002\u0002>@\u0005\u0004\u0003\u0002?=\u0003\u0002\u0002",
    "\u0002?>\u0003\u0002\u0002\u0002@\u000f\u0003\u0002\u0002\u0002AB\u0005",
    "\u000e\b\u0002BC\u0007\u000e\u0002\u0002CD\u0005\u0010\t\u0002DG\u0003",
    "\u0002\u0002\u0002EG\u0005\u000e\b\u0002FA\u0003\u0002\u0002\u0002F",
    "E\u0003\u0002\u0002\u0002G\u0011\u0003\u0002\u0002\u0002HI\u0007\u0007",
    "\u0002\u0002IJ\u0007\u0011\u0002\u0002JK\u0007\n\u0002\u0002KL\u0005",
    "\u0010\t\u0002L\u0013\u0003\u0002\u0002\u0002MN\u0005\u0012\n\u0002",
    "NO\u0005\u0014\u000b\u0002OR\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002",
    "\u0002QM\u0003\u0002\u0002\u0002QP\u0003\u0002\u0002\u0002R\u0015\u0003",
    "\u0002\u0002\u0002ST\u0007\u0011\u0002\u0002T\u0017\u0003\u0002\u0002",
    "\u0002UV\u0007\b\u0002\u0002VW\u0005\u0016\f\u0002W\u0019\u0003\u0002",
    "\u0002\u0002XY\u0005\u0018\r\u0002YZ\u0005\u001a\u000e\u0002Z]\u0003",
    "\u0002\u0002\u0002[]\u0003\u0002\u0002\u0002\\X\u0003\u0002\u0002\u0002",
    "\\[\u0003\u0002\u0002\u0002]\u001b\u0003\u0002\u0002\u0002^_\u0005\f",
    "\u0007\u0002_`\u0005\u0014\u000b\u0002`\u001d\u0003\u0002\u0002\u0002",
    "ab\u0005\u001a\u000e\u0002b\u001f\u0003\u0002\u0002\u0002cd\u0005\u001c",
    "\u000f\u0002de\u0005\u001e\u0010\u0002e!\u0003\u0002\u0002\u0002\b-",
    ":?FQ\\"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'regexp'", "'define'", "'alphanumeric'", 
                     "'to'", "'do'", "'as'", "'you must'", "'type'", "'then'", 
                     "'submit'", "'and'", "';'" ];

var symbolicNames = [ null, "SKIPED", "REGEXP", "DEFINE", "ALPHANUM", "TO", 
                      "DO", "AS", "YOU_MUST", "TYPE_ACTION", "THEN", "SUBMIT", 
                      "AND", "SEMICOLON", "STRING", "IDENTIFIER", "WHITESPACE", 
                      "LINE_JOINING" ];

var ruleNames =  [ "type_action", "submit", "custom_type", "declared_type", 
                   "type_declaration", "type_declarations", "step", "steps", 
                   "action_declaration", "action_declarations", "declared_action", 
                   "execute_action", "execute_actions", "declarations", 
                   "executions", "main" ];

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
BusinessRulesParser.REGEXP = 2;
BusinessRulesParser.DEFINE = 3;
BusinessRulesParser.ALPHANUM = 4;
BusinessRulesParser.TO = 5;
BusinessRulesParser.DO = 6;
BusinessRulesParser.AS = 7;
BusinessRulesParser.YOU_MUST = 8;
BusinessRulesParser.TYPE_ACTION = 9;
BusinessRulesParser.THEN = 10;
BusinessRulesParser.SUBMIT = 11;
BusinessRulesParser.AND = 12;
BusinessRulesParser.SEMICOLON = 13;
BusinessRulesParser.STRING = 14;
BusinessRulesParser.IDENTIFIER = 15;
BusinessRulesParser.WHITESPACE = 16;
BusinessRulesParser.LINE_JOINING = 17;

BusinessRulesParser.RULE_type_action = 0;
BusinessRulesParser.RULE_submit = 1;
BusinessRulesParser.RULE_custom_type = 2;
BusinessRulesParser.RULE_declared_type = 3;
BusinessRulesParser.RULE_type_declaration = 4;
BusinessRulesParser.RULE_type_declarations = 5;
BusinessRulesParser.RULE_step = 6;
BusinessRulesParser.RULE_steps = 7;
BusinessRulesParser.RULE_action_declaration = 8;
BusinessRulesParser.RULE_action_declarations = 9;
BusinessRulesParser.RULE_declared_action = 10;
BusinessRulesParser.RULE_execute_action = 11;
BusinessRulesParser.RULE_execute_actions = 12;
BusinessRulesParser.RULE_declarations = 13;
BusinessRulesParser.RULE_executions = 14;
BusinessRulesParser.RULE_main = 15;

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
        this.state = 32;
        this.match(BusinessRulesParser.TYPE_ACTION);
        this.state = 33;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 34;
        this.match(BusinessRulesParser.AS);
        this.state = 35;
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

function SubmitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BusinessRulesParser.RULE_submit;
    return this;
}

SubmitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubmitContext.prototype.constructor = SubmitContext;

SubmitContext.prototype.SUBMIT = function() {
    return this.getToken(BusinessRulesParser.SUBMIT, 0);
};




BusinessRulesParser.SubmitContext = SubmitContext;

BusinessRulesParser.prototype.submit = function() {

    var localctx = new SubmitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BusinessRulesParser.RULE_submit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(BusinessRulesParser.SUBMIT);
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
    this.enterRule(localctx, 4, BusinessRulesParser.RULE_custom_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
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
    this.enterRule(localctx, 6, BusinessRulesParser.RULE_declared_type);
    try {
        this.state = 43;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.ALPHANUM:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.match(BusinessRulesParser.ALPHANUM);
            break;
        case BusinessRulesParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
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

Type_declarationContext.prototype.REGEXP = function() {
    return this.getToken(BusinessRulesParser.REGEXP, 0);
};

Type_declarationContext.prototype.STRING = function() {
    return this.getToken(BusinessRulesParser.STRING, 0);
};




BusinessRulesParser.Type_declarationContext = Type_declarationContext;

BusinessRulesParser.prototype.type_declaration = function() {

    var localctx = new Type_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BusinessRulesParser.RULE_type_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(BusinessRulesParser.DEFINE);
        this.state = 46;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 47;
        this.match(BusinessRulesParser.AS);
        this.state = 48;
        this.match(BusinessRulesParser.REGEXP);
        this.state = 49;
        this.match(BusinessRulesParser.STRING);
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
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, BusinessRulesParser.RULE_type_declarations, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this._ctx.stop = this._input.LT(-1);
        this.state = 56;
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
                this.state = 52;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 53;
                this.type_declaration(); 
            }
            this.state = 58;
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

StepContext.prototype.type_action = function() {
    return this.getTypedRuleContext(Type_actionContext,0);
};

StepContext.prototype.submit = function() {
    return this.getTypedRuleContext(SubmitContext,0);
};




BusinessRulesParser.StepContext = StepContext;

BusinessRulesParser.prototype.step = function() {

    var localctx = new StepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BusinessRulesParser.RULE_step);
    try {
        this.state = 61;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.TYPE_ACTION:
            this.enterOuterAlt(localctx, 1);
            this.state = 59;
            this.type_action();
            break;
        case BusinessRulesParser.SUBMIT:
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.submit();
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
    this.enterRule(localctx, 14, BusinessRulesParser.RULE_steps);
    try {
        this.state = 68;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 63;
            this.step();
            this.state = 64;
            this.match(BusinessRulesParser.AND);
            this.state = 65;
            this.steps();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.step();
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
    this.enterRule(localctx, 16, BusinessRulesParser.RULE_action_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(BusinessRulesParser.TO);
        this.state = 71;
        this.match(BusinessRulesParser.IDENTIFIER);
        this.state = 72;
        this.match(BusinessRulesParser.YOU_MUST);
        this.state = 73;
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
    this.enterRule(localctx, 18, BusinessRulesParser.RULE_action_declarations);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.TO:
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            this.action_declaration();
            this.state = 76;
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
    this.enterRule(localctx, 20, BusinessRulesParser.RULE_declared_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
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
    this.enterRule(localctx, 22, BusinessRulesParser.RULE_execute_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(BusinessRulesParser.DO);
        this.state = 84;
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
    this.enterRule(localctx, 24, BusinessRulesParser.RULE_execute_actions);
    try {
        this.state = 90;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BusinessRulesParser.DO:
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.execute_action();
            this.state = 87;
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
    this.enterRule(localctx, 26, BusinessRulesParser.RULE_declarations);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.type_declarations(0);
        this.state = 93;
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
    this.enterRule(localctx, 28, BusinessRulesParser.RULE_executions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
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
    this.enterRule(localctx, 30, BusinessRulesParser.RULE_main);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.declarations();
        this.state = 98;
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
	case 5:
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
