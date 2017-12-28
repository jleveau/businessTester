const TestCase = require("./test_case");
const Action = require("./action");

const alphanumeric_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const RandExp = require('randexp');
class TestCaseFactory {

    createFromSpec(spec) {
        return new Promise((resolve, reject) => {
            try {
                resolve(spec.actions.map((rule)=> createFromRule(rule, spec.types)));
            }
            catch(error) {
                reject(error);
            }
        });
    }
}

function createFromRule(rule, type_list) {
    const test = new TestCase();
    test.action_list = rule.steps.map((step) => createAction(step, type_list));
    return test;
}

function createAction(step, type_list) {
    return new Action(step.action_type.target, step.action_type.nature, generateContent(step.action_type.content_nature, type_list));
}

function generateContent(content_type, type_list) {
    if (content_type === null) {
        return null;
    } else if (content_type === "alphanumeric") {
        return generateRandomAlphanumeric();
    } else if (type = type_list.find((declared_type) => content_type === declared_type.nature)) {
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

module.exports = new TestCaseFactory();