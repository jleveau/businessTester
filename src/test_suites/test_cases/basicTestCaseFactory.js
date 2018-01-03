const TestCase = require('./test_case');
const alphanumeric_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const RandExp = require('randexp');
const TestCaseFactory = require('./test_case_factory');
const TestCaseActionNatures = require('./actions/test_cases_actions_natures');


class BasicTestCaseFactory extends TestCaseFactory{

    createTestCase(actions, spec) {
        let action_list = [];
        actions.forEach((action) => {
            action_list = action_list.concat(action.steps.map((step) => createBasicTestCaseAction(step, spec)))
        });
        return new TestCase(action_list);
    }
}

function createBasicTestCaseAction(step, spec) {
    if (step.name === "type") {
        return new TestCaseActionNatures.TestCaseTypeAction(step.target,
            step.name,
            generateContent(step.content_nature, spec.types));
    } else if (step.name === "go_to") {
        return new TestCaseActionNatures.TestCaseGoToAction(step.url)
    } else if (step.name === "click") {
        return new TestCaseActionNatures.TestCaseClickAction(step.target);
    }
}

function generateContent(content_type, type_list) {
    if (content_type === null) {
        return null;
    } else if (content_type === "alphanumeric") {
        return generateRandomAlphanumeric();
    } else if (type = type_list.find((declared_type) => content_type === declared_type.name)) {
        return generateFromRegex(type.regex);
    } else {
        throw new Error("Type : " + content_type + " is not a declared type");
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

module.exports = new BasicTestCaseFactory();