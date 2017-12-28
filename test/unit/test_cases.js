const chai = require('chai');
chai.use(require('chai-match'));
const expect = chai.expect;
const path = require('path');
const TestCaseFactory = require('../../src/test_case_factory/test_case_factory');
const Parser = require('../../src/parser/parser');

module.exports = function() {

    describe('create Tests cases from rules', () => {

        it('creates a test case from one rule', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/single_rule"))
                .then((spec) => TestCaseFactory.createFromSpec(spec))
                .then((test_cases)=> {
                    expect(test_cases).to.have.lengthOf(1);
                    expect(test_cases[0].action_list).to.have.lengthOf(2);
                    expect(test_cases[0].action_list[0].nature).to.be.eql("type");
                    expect(test_cases[0].action_list[0].content).to.match(/^\w+$/);
                    expect(test_cases[0].action_list[0].target).to.be.eql('login');
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('creates a test case using custom regex', (done)=> {
            let types;
            Parser.parseFile(path.join(__dirname, "../inputs/type_declaration"))
                .then((spec) => {
                    types = spec.types;
                    return TestCaseFactory.createFromSpec(spec)
                })
                .then((test_cases)=> {
                    const regex = types[0].regex;
                    expect(test_cases).to.have.lengthOf(1);
                    expect(test_cases[0].action_list).to.have.lengthOf(1);
                    expect(test_cases[0].action_list[0].content).to.match(new RegExp(regex));
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('using no rules should create no test cases', (done) => {
            Parser.parseFile(path.join(__dirname,  "../inputs/no_rule"))
                .then((spec) => TestCaseFactory.createFromSpec(spec))
                .then((test_cases)=> {
                    expect(test_cases).to.have.lengthOf(0);
                    done();
                })
                .catch((err) =>
                    done(err))
        });

    });
};