// Generated from C:/Users/jleveau/WebstormProjects/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
const types = require('../../src/elements/types/types');
const RegexType = require('../../src/elements/types/regex_type');
const Spec = require('../../src/elements/spec');
const antlr4 = require('antlr4/index');
const action_natures = require('../../src/elements/actions/action_natures');
const TypeActionEntry = require('../../src/elements/actions/type/type_action_entry');
const verify_operations = require('../../src/elements/actions/verify/verification_operations/verification_operations_natures');
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
        const type = spec.types.find((type) => type.name === ctx.getText());
        return type;
    }

    visitClick_action(ctx, spec) {
        const target = ctx.IDENTIFIER().getText();
        return new action_natures.ClickAction(target);
    }

    visitEntryValue(ctx, spec) {
        if (ctx.type_description()) {
            return this.visitType_description(ctx.type_description(), spec);
        } else {
            throw new Error("Invalid call");
        }
    }

    visitDeclared_entry(ctx, spec) {
        const entry_name = ctx.IDENTIFIER().getText();
        const entry = spec.entries[entry_name];
        if (!entry) {
            throw new Error('Entry ' + entry_name + 'has not been declared');
        }
        return entry;
    }

    visitEntry(ctx, spec) {
        const target = ctx.IDENTIFIER().getText();
        const content_nature = this.visitEntryValue(ctx.entry_value(), spec);
        return new TypeActionEntry(content_nature, target);
    }

    visitEntries(ctx, spec, entries_list=[]) {
        if (ctx.entry()) {
            entries_list.push(this.visitEntry(ctx.entry(), spec));
        }
        if (ctx.declared_entry()) {
            entries_list = entries_list.concat(this.visitDeclared_entry(ctx.declared_entry(), spec));
        }
        if (ctx.entries()) {
            this.visitEntries(ctx.entries(), spec, entries_list);
        }
        return entries_list;
    }

    visitType_action(ctx, spec) {
        const entries = this.visitEntries(ctx.entries(), spec);
        return new action_natures.TypeAction(entries);
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

    visitVerificationOperation(ctx, spec) {
        if (ctx.type_description()) {
            return new verify_operations.TypeVerification(this.visitType_description(ctx.type_description(), spec))
        }
    }

    visitVerificationOperations(ctx, spec) {
        let operation = this.visitVerificationOperation(ctx.verification_operation(), spec);
        if (ctx.verification_operations()) {
            operation.addOperation(this.visitVerificationOperations(ctx.verification_operations(), spec));
        }
        return operation;
    }

    visitVerify_action(ctx, spec) {
        return new action_natures.VerificationAction(this.visitVerificationOperations(ctx.verification_operations(), spec));
    }

    visitAlphanum_type(ctx, spec) {
        return new types.AlphanumType();
    }

    visitWord_type(ctx, spec) {
        return new types.WordType();
    }

    visitNumber_type(ctx, spec) {
        return new types.NumberType();
    }

    visitBoolean_type(ctx, spec) {
        return new types.BooleanType();
    }

    visitFixed_value_type(ctx, spec) {
        const quoted_content = ctx.QUOTED_CONTENT().getText();
        return new types.FixedValueType(quoted_content.slice(1, quoted_content.length-1));
    }

    visitType_description(ctx, spec) {
        if (ctx.regex_type()) {
            const regex = BusinessRulesVisitor.visitRegex(ctx.regex_type(), spec);
            return new RegexType("", regex.slice(1, regex.length-1))
        }
        else if (ctx.custom_type()) {
            return this.visitCustom_type(ctx.custom_type(), spec);
        }
        else if (ctx.boolean_type()) {
            return this.visitBoolean_type(ctx.boolean_type(), spec);
        }
        else if (ctx.alphanum_type()) {
            return this.visitAlphanum_type(ctx, spec);
        }
        else if (ctx.number_type()) {
            return this.visitNumber_type(ctx, spec);
        }
        else if (ctx.word_type()) {
            return this.visitWord_type(ctx, spec);
        }
        else if (ctx.fixed_value_type()) {
            return this.visitFixed_value_type(ctx.fixed_value_type(), spec);
        }
        else {
            throw new Error("Can't find any type_declared description");

        }
    }

// Visit a parse tree produced by BusinessRulesParser#type_declared.
    visitType_declaration(ctx, spec) {
        if (ctx.type_description()) {
            const type = this.visitType_description(ctx.type_description(), spec);
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
        spec.types.push(this.visitType_declaration(ctx.type_declaration()));
        if (ctx.type_declarations()) {
            this.visitType_declarations(ctx.type_declarations(), spec);
        }
    }

// Visit a parse tree produced by BusinessRulesParser#step.
    visitStep(ctx, spec){
        /*   if (ctx.declared_action()) {
               return this.visitDeclared_action(ctx.declared_action(), spec);
           }*/
        if (ctx.click_action()) {
            return this.visitClick_action(ctx.click_action(), spec);
        }
        if (ctx.type_action()) {
            return this.visitType_action(ctx.type_action(), spec);
        }
        if (ctx.go_to_action()) {
            return this.visitGo_to_action(ctx.go_to_action(), spec);
        }
        if (ctx.declared_action()) {
            return this.visitDeclared_action(ctx.declared_action(), spec);
        }
        if (ctx.verify_action()) {
            return this.visitVerify_action(ctx.verify_action(), spec);
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
    visitAction_declaration(ctx, spec) {
        const steps = this.visitSteps(ctx.steps(), spec);
        const name = ctx.IDENTIFIER().getText();
        return new action_natures.UserAction(name, steps)
    }

// Visit a parse tree produced by BusinessRulesParser#business_rules.
    visitAction_declarations(ctx, spec) {
        if (ctx.action_declaration()) {
            spec.actions.push(this.visitAction_declaration(ctx.action_declaration(), spec));
        }
        if (ctx.action_declarations()) {
            this.visitAction_declarations(ctx.action_declarations(), spec)
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

    visitEntryDeclaration(ctx, spec) {
        const entry_name = ctx.IDENTIFIER().getText();
        const entry = this.visitEntries(ctx.entries(), spec);
        return {
            name: entry_name,
            entry
        };
    }

    visitEntryDeclarations(ctx, spec) {
        if (ctx.entry_declaration()) {
            const entry_obj = this.visitEntryDeclaration(ctx.entry_declaration(), spec);
            spec.entries[entry_obj.name] = entry_obj.entry;
        }
        if (ctx.entry_declarations()) {
            this.visitEntryDeclarations(ctx.entry_declarations(), spec);
        }
    }

    visitDeclarations(ctx, spec) {
        if (ctx.entry_declarations()) {
            this.visitEntryDeclarations(ctx.entry_declarations(), spec);
        }
        if (ctx.type_declarations()) {
            this.visitType_declarations(ctx.type_declarations(), spec);
        }
        if (ctx.action_declarations()) {
            this.visitAction_declarations(ctx.action_declarations(), spec);
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