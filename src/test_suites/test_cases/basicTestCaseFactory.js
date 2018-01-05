const TestCase = require('./test_case');
const alphanumeric_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const RandExp = require('randexp');
const TestCaseFactory = require('./test_case_factory');
const TestCaseActionNatures = require('./actions/test_cases_actions_natures');

class BasicTestCaseFactory extends TestCaseFactory{

    createTestCase(actions, spec) {
        let action_list = [];
        actions.forEach((action) => {
            action.steps.forEach((step) => {
                action_list = action_list.concat(createBasicTestCaseAction(step, spec));
            });
        });
        return new TestCase(action_list);
    }
}

function createBasicTestCaseAction(step, spec) {
    let actions = [];
    if (step.steps && step.steps.length) {
        step.steps.forEach((sub_step) => {
            actions = actions.concat(createBasicTestCaseAction(sub_step, spec));
        })
    }
    else if(step.name === "type") {
        actions = step.entries.map((entry) => {
            return new TestCaseActionNatures.TestCaseTypeAction(
                entry.target,
                generateContent(entry.content_nature, spec.types)
            );
        });
    } else if (step.name === "go_to") {
        actions = [new TestCaseActionNatures.TestCaseGoToAction(step.url)];
    } else if (step.name === "click") {
        actions = [new TestCaseActionNatures.TestCaseClickAction(step.target)];
    }
    return actions;
}

function generateContent(content_type, type_list) {
    if (!content_type) {
        return null;
    } else if (content_type.name && content_type.name === "fixed") {
        return content_type.value;
    } else if (content_type === "alphanumeric") {
        return generateRandomAlphanumeric();
    } else if (content_type === "word") {
        return generateWord();
    } else if (content_type === "number") {
        return generateRandomNumber();
    } else if (content_type === "boolean") {
        return generateRandomBoolean();
    } else if (type = type_list.find((declared_type) => content_type === declared_type.name)) {
        return generateFromRegex(type.regex);
    } else {
        throw new Error("Type : " + content_type + " is not a declared type_declared");
    }
}

function generateRandomAlphanumeric() {
    let  result = '';
    const length = Math.floor(Math.random() * 24) + 1;
    for (let i = length; i > 0; --i) result += alphanumeric_chars[Math.floor(Math.random() * alphanumeric_chars.length)];
    return result;
}

function generateFromRegex(regex) {
    let s;
    for (let i=0; i<15; ++i) {
        s = new RandExp(regex).gen();
        if (s.match(regex)) return s;
    }
    throw new Error("Failed to generate from regex : " + regex);
}

function generateWord() {
    return generateFromRegex(new RegExp("^(?=[^,]+,[^,]+$)[a-zA-Z,]{1,256}$"));
}

function generateRandomBoolean() {
    return Math.random() >= 0.5
}

function generateRandomNumber() {
    return Math.floor(Math.random() * Number.MAX_VALUE);
}
module.exports = new BasicTestCaseFactory();