// Generated from C:/Users/jleveau/WebstormProjects/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
const Action = require('./nodes/actions/action');
const RegexType = require('./nodes/types/regex_type');
const Spec = require('./nodes/spec');
const antlr4 = require('antlr4/index');
const action_natures = require('./nodes/actions/action_nature');

// This class defines a complete generic visitor for a parse tree produced by BusinessRulesParser.

class BusinessRulesVisitor extends antlr4.tree.ParseTreeVisitor {

    constructor() {
        super();
        antlr4.tree.ParseTreeVisitor.call(this);
        return this;
    }

// Visit a parse tree produced by BusinessRulesParser#declared_type.
    visitCustom_type(ctx, spec) {
        if (!spec.types.some((type) => type.name === ctx.getText())) {
            throw new Error("Type " + ctx.getText() + " is not declared");
        }
        return ctx.getText()
    }

    // Visit a parse tree produced by BusinessRulesParser#declared_type.
    visitDeclared_type(ctx, spec) {
        if (ctx.custom_type()) {
            return this.visitCustom_type(ctx.custom_type(), spec);
        }
        return ctx.getText()
    }

    visitClick_action(ctx, spec) {
        const target = ctx.IDENTIFIER().getText();
        return new action_natures.ClickAction(target);
    }

    visitType_action(ctx, spec) {
        return new action_natures.TypeAction(ctx.IDENTIFIER().getText(), this.visitDeclared_type(ctx.declared_type(), spec));
    }

    visitUrl(ctx) {
        return ctx.getText().slice(1, -1);
    }

    visitGo_to_action(ctx, spec) {
        return new action_natures.GoToAction(this.visitUrl(ctx.url(), spec));
    }

    visitDeclared_action(ctx, spec) {
        const action_name = ctx.IDENTIFIER().getText();
        const action = spec.actions.find((action) => action.name === action_name);
        if (!action) {
            throw new Error("Action " + action_name + " is not declared");
        }
        return action;
    }

    static visitRegex(ctx) {
        return ctx.QUOTED_CONTENT().getText();
    }

    static visitTypeDescription(ctx, spec) {
        if (ctx.regex()) {
            const regex = BusinessRulesVisitor.visitRegex(ctx.regex(), spec);
            return new RegexType("", regex.slice(1, regex.length-1))
        }
        throw new Error("Can't find any type description");
    }

// Visit a parse tree produced by BusinessRulesParser#type_declaration.
    static visitType_declaration(ctx, spec) {
        if (ctx.type_description()) {
            const type = BusinessRulesVisitor.visitTypeDescription(ctx.type_description(), spec);
            type.name = ctx.IDENTIFIER().getText();
            return type;
        }
        throw new Error("Can create Type declaration, no description found");
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
    visitStep(ctx, spec){
     /*   if (ctx.declared_action()) {
            return this.visitDeclared_action(ctx.declared_action(), spec);
        }*/
        if(ctx.click_action()) {
            return this.visitClick_action(ctx.click_action(), spec);
        }
        if (ctx.type_action()) {
            return this.visitType_action(ctx.type_action(), spec);
        }
        if(ctx.go_to_action()) {
            return this.visitGo_to_action(ctx.go_to_action(), spec);
        }
        if(ctx.declared_action()) {
            return this.visitDeclared_action(ctx.declared_action(), spec);
        }
    }

// Visit a parse tree produced by BusinessRulesParser#steps.
    visitSteps(ctx, spec, list_steps) {
        if (!list_steps) {
            list_steps = [];
        }
        if (ctx.step()) {
            list_steps.push(this.visitStep(ctx.step(), spec));
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

    visitExecute_action(ctx, spec) {
        const action = this.visitDeclared_action(ctx.declared_action(), spec);
        return action.name;
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