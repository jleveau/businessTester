const chai = require('chai');
chai.use(require('chai-match'));
const expect = chai.expect;
const path = require('path');
const TestFactory = require('../../src/test_suites/testFactory');
const Parser = require('../../src/parser/parser');
const TestCase = require('../../src/test_suites/test_cases/test_case');

module.exports = function() {

    describe('create Tests cases from actions execution with only one test case factory', () => {

        it('creates a test case from one action', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/declare_and_execute_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    expect(test.test_cases).to.have.lengthOf(1);
                    const test_case = test.test_cases[0];
                    expect(test_case).to.be.an.instanceof(TestCase);
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('checks if BasicTestCase generate a correct test case', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/declare_and_execute_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {

                    const test_case = test.test_cases[0];
                    expect(test.test_cases).to.have.lengthOf(1);
                    expect(test_case.test_case_actions).to.have.lengthOf(2);

                    const action = test_case.test_case_actions[0];
                    expect(action.nature).to.be.eql("type");
                    expect(action.content).to.match(/^\w+$/);
                    expect(action.target).to.be.eql('login');
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
                    return new TestFactory().create(spec)
                })
                .then((test)=> {
                    expect(test.test_cases).to.have.lengthOf(1);

                    const test_case = test.test_cases[0];
                    const regex = types[0].regex;
                    expect(test_case.test_case_actions).to.have.lengthOf(1);
                    expect(test_case.test_case_actions[0].content).to.match(new RegExp(regex));
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('using no actions should create no test cases', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/no_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    expect(test).to.not.be.eql(null);
                    expect(test.test_cases).to.have.lengthOf(1);
                    expect(test.test_cases[0].test_case_actions).to.have.lengthOf(0);
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('create a test case from multiple actions executions', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/multiple_actions_executions"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    expect(test.test_cases).to.have.lengthOf(1);
                    expect(test.test_cases[0].test_case_actions).to.have.lengthOf(3);
                    done();
                })
                .catch((err) =>
                    done(err))
        });

    });
};