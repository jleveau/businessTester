// Generated from C:/Users/jleveau/WebstormProjects/parser/grammar\BusinessRules.g4 by ANTLR 4.7
// jshint ignore: start
const Action = require('./elements/actions/action');
const Types = require('./elements/types/types');
const RegexType = require('./elements/types/regex_type');
const Spec = require('./elements/spec');
const antlr4 = require('antlr4/index');
const action_natures = require('./elements/actions/action_nature');
const TypeActionEntry = require('./elements/actions/type/type_action_entry');
const VerificationEntry = require('./elements/actions/verify/verification_operation_decorator');

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
        return new VerificationEntry(this.visitType_description(ctx.type_description(), spec));
    }

    visitVerificationOperations(ctx, spec) {
        let operation = this.visitVerificationOperation(ctx.verification_operation(), spec);
        if (ctx.verification_operations()) {
            operation.next_verification = this.visitVerificationOperations(ctx.verification_operations(), spec);
        }
        return operation;
    }

    visitVerification(ctx, spec) {
        const target = ctx.IDENTIFIER().getText();
        const operation = this.visitVerificationOperations(ctx.verification_operations(), spec);
        return new VerificationEntry(target, operation);
    }

    visitVerifications(ctx, spec, verification_list=[]) {
        if (ctx.verification()) {
            verification_list.push(this.visitVerification(ctx.verification(), spec));
        }
        if (ctx.verifications()) {
            this.visitVerifications(ctx.verifications(), spec, verification_list);
        }
    }

    visitVerify_action(ctx, spec) {
        return new action_natures.VerificationAction(this.visitVerifications(ctx.verifications(), spec));
    }

    visitDefault_type(ctx, spec) {
        if (ctx.ALPHANUM()) {
            return ctx.ALPHANUM().getText();
        } else if (ctx.NUMBER()) {
            return ctx.NUMBER().getText();
        } else if (ctx.BOOLEAN()) {
            return ctx.BOOLEAN().getText();
        } else if (ctx.WORD()) {
            return ctx.WORD().getText();
        }
        throw new Error("type_declared does not exists");
    }

    visitFixed_value_type(ctx, spec) {
        const quoted_content = ctx.QUOTED_CONTENT().getText();
        return new Types.FixedValueType(quoted_content.slice(1, quoted_content.length-1));
    }

    visitType_description(ctx, spec) {
        if (ctx.regex_type()) {
            const regex = BusinessRulesVisitor.visitRegex(ctx.regex_type(), spec);
            return new RegexType("", regex.slice(1, regex.length-1))
        }
        if (ctx.custom_type()) {
            return this.visitCustom_type(ctx.custom_type(), spec);
        }
        if (ctx.default_type()) {
            return this.visitDefault_type(ctx.default_type(), spec);
        }
        if (ctx.fixed_value_type()) {
            return this.visitFixed_value_type(ctx.fixed_value_type(), spec);
        }
        throw new Error("Can't find any type_declared description");
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