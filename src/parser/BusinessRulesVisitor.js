// Generated from C:/Users/jleveau/WebstormProjects/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
const Action = require('./nodes/action');
const Step = require('./nodes/step');
const RegexType = require('./nodes/types/regex_type');
const Spec = require('./nodes/spec');
const antlr4 = require('antlr4/index');
const action_natures = require('./nodes/action_nature');

// This class defines a complete generic visitor for a parse tree produced by BusinessRulesParser.

class BusinessRulesVisitor extends antlr4.tree.ParseTreeVisitor {
    constructor() {
        super();
        antlr4.tree.ParseTreeVisitor.call(this);
        return this;
    }

// Visit a parse tree produced by BusinessRulesParser#declared_type.
    static visitCustom_type(ctx, spec) {
        if (!spec.types.some((type) => type.nature === ctx.getText())) {
            throw new Error("Type " + ctx.getText() + " is not declared");
        }
        return ctx.getText()
    }

    // Visit a parse tree produced by BusinessRulesParser#declared_type.
    static visitDeclared_type(ctx, spec) {
        if (ctx.custom_type()) {
            return this.visitCustom_type(ctx.custom_type(), spec);
        }
        return ctx.getText()
    }

    static visitSubmit(ctx) {
        return new action_natures.Submit();
    }

    static visitType_action(ctx, spec) {
        return new action_natures.Type(ctx.IDENTIFIER().getText(), this.visitDeclared_type(ctx.declared_type(), spec));
    }

// Visit a parse tree produced by BusinessRulesParser#type_declaration.
    static visitType_declaration(ctx) {
        const string_content = ctx.STRING().getText();
        return new RegexType(ctx.IDENTIFIER().getText(), string_content.slice(1, string_content.length-1))
    }

// Visit a parse tree produced by BusinessRulesParser#type_declarations.
    visitType_declarations(ctx, spec) {
        if (!ctx.type_declarations() || !ctx.type_declaration()) {
            return;
        }
        spec.types.push(BusinessRulesVisitor.visitType_declaration(ctx.type_declaration()));
        if (ctx.type_declarations()) {
            this.visitType_declarations(ctx.type_declarations(), spec);
        }
    }

// Visit a parse tree produced by BusinessRulesParser#step.
    static visitStep(ctx, spec){
        if (ctx.type_action()) {
            return new Step(this.visitType_action(ctx.type_action(), spec));
        } else if (ctx.submit()) {
            return new Step(this.visitSubmit(ctx.submit()));
    }}

// Visit a parse tree produced by BusinessRulesParser#steps.
    visitSteps(ctx, spec, list_steps) {
        if (!list_steps) {
            list_steps = [];
        }
        if (ctx.step()) {
            list_steps.push(BusinessRulesVisitor.visitStep(ctx.step(), spec));
        }
        if (ctx.steps()) {
            this.visitSteps(ctx.steps(), spec, list_steps);
        }
        return list_steps;
    }

// Visit a parse tree produced by BusinessRulesParser#business_rule.
    visitActionDeclaration(ctx, spec) {
        const steps = this.visitSteps(ctx.steps(), spec);
        const name = ctx.IDENTIFIER().getText();
        return new Action(name, steps)
    }

// Visit a parse tree produced by BusinessRulesParser#business_rules.
    visitActionDeclarations(ctx, spec) {
        if (ctx.action_declaration()) {
            spec.actions.push(this.visitActionDeclaration(ctx.action_declaration(), spec));
        }
        if (ctx.action_declarations()) {
            this.visitActionDeclarations(ctx.action_declarations(), spec)
        }
    }

    visitDeclared_action(ctx, spec) {
        const action_name = ctx.IDENTIFIER().getText();
        const action = spec.actions.find((action) => action.name === action_name);
        if (!action) {
            throw new Error("Action " + action_name + " is not declared");
        }
        return action.name;
    }

    visitExecute_action(ctx, spec) {
        return this.visitDeclared_action(ctx.declared_action(), spec);
    }

    visitExecute_actions(ctx, spec) {
        if (ctx.execute_action()) {
            spec.executions.push(this.visitExecute_action(ctx.execute_action(), spec));
        }
        if (ctx.execute_actions()) {
            this.visitExecute_actions(ctx.execute_actions(), spec);
        }
    }

    visitDeclarations(ctx, spec) {
        if (ctx.type_declarations()) {
            this.visitType_declarations(ctx.type_declarations(), spec);
        }
        if (ctx.action_declarations()) {
            this.visitActionDeclarations(ctx.action_declarations(), spec);
        }
    }

    visitExecutions(ctx, spec) {
        if (ctx.execute_actions()) {
            this.visitExecute_actions(ctx.execute_actions(), spec);
        }
    }

// Visit a parse tree produced by BusinessRulesParser#main.
    visitMain(ctx) {
        const spec = new Spec();
        if (ctx.declarations()) {
            this.visitDeclarations(ctx.declarations(), spec);
        }
        if (ctx.executions()) {
            this.visitExecutions(ctx.executions(), spec);
        }
        return spec;
    }

}

exports.BusinessRulesVisitor = BusinessRulesVisitor;