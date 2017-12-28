// Generated from C:/Users/jleveau/WebstormProjects/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
const Action = require('./nodes/action');
const Step = require('./nodes/step');
const RegexType = require('./nodes/types/regex_type');
const Spec = require('./nodes/spec');
const antlr4 = require('antlr4/index');
const action_natures = require('./nodes/action_nature');
let spec;


// This class defines a complete generic visitor for a parse tree produced by BusinessRulesParser.

class BusinessRulesVisitor extends antlr4.tree.ParseTreeVisitor {
    constructor() {
        super();
        antlr4.tree.ParseTreeVisitor.call(this);
        return this;
    }

// Visit a parse tree produced by BusinessRulesParser#declared_type.
    static visitCustom_type(ctx) {
        if (!spec.types.some((type) => type.nature === ctx.getText())) {
            throw new Error("Type " + ctx.getText() + " is not declared");
        }
        return ctx.getText()
    }

    // Visit a parse tree produced by BusinessRulesParser#declared_type.
    static visitDeclared_type(ctx) {
        if (ctx.custom_type()) {
            return this.visitCustom_type(ctx.custom_type());
        }
        return ctx.getText()
    }

    static visitSubmit(ctx) {
        return new action_natures.Submit();
    }

    static visitType_action(ctx) {
        return new action_natures.Type(ctx.IDENTIFIER().getText(), this.visitDeclared_type(ctx.declared_type()));
    }

// Visit a parse tree produced by BusinessRulesParser#action_nature.
    static visitAction_nature(ctx) {
        if (ctx.submit()) {
            return BusinessRulesVisitor.visitSubmit(ctx.submit());
        } else if (ctx.type_action()) {
            return BusinessRulesVisitor.visitType_action(ctx.type_action());
        }
    }

// Visit a parse tree produced by BusinessRulesParser#type_declaration.
    static visitType_declaration(ctx) {
        const string_content = ctx.STRING().getText();
        return new RegexType(ctx.IDENTIFIER().getText(), string_content.slice(1, string_content.length-1))
    }

// Visit a parse tree produced by BusinessRulesParser#type_declarations.
    visitType_declarations(ctx, list_types) {
        if (!ctx.type_declarations() || !ctx.type_declaration()) {
            return list_types;
        }
        list_types.push(BusinessRulesVisitor.visitType_declaration(ctx.type_declaration()));
        if (ctx.type_declarations()) {
            this.visitType_declarations(ctx.type_declarations(), list_types);
        }
        return list_types
    }

// Visit a parse tree produced by BusinessRulesParser#step.
    static visitStep(ctx){
        if (ctx.type_action()) {
            return new Step(this.visitType_action(ctx.type_action()));
        } else if (ctx.submit()) {
            return new Step(this.visitSubmit(ctx.submit()));
    }}

// Visit a parse tree produced by BusinessRulesParser#steps.
    visitSteps(ctx, list_steps) {
        if (!list_steps) {
            list_steps = [];
        }
        if (ctx.step()) {
            list_steps.push(BusinessRulesVisitor.visitStep(ctx.step()));
        }
        if (ctx.steps()) {
            this.visitSteps(ctx.steps(), list_steps);
        }
        return list_steps;
    }

// Visit a parse tree produced by BusinessRulesParser#business_rule.
    visitActionDeclaration(ctx) {
        const steps = this.visitSteps(ctx.steps());
        const name = ctx.IDENTIFIER().getText();
        return new Action(name, steps)
    }

// Visit a parse tree produced by BusinessRulesParser#business_rules.
    visitActionDeclarations(ctx, list_rules) {
        if (ctx.action_declaration()) {
            list_rules.push(this.visitActionDeclaration(ctx.action_declaration()));
        }
        if (ctx.action_declarations()) {
            this.visitActionDeclarations(ctx.action_declarations(), list_rules)
        }
        return list_rules}

// Visit a parse tree produced by BusinessRulesParser#main.
    visitMain(ctx) {
        spec = new Spec();
        this.visitType_declarations(ctx.type_declarations(), spec.types);
        this.visitActionDeclarations(ctx.action_declarations(), spec.actions);
        return spec;
    }

}

exports.BusinessRulesVisitor = BusinessRulesVisitor;