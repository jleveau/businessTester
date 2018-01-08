const chai = require('chai');
chai.use(require('chai-match'));
const expect = chai.expect;
const path = require('path');
const TestFactory = require('../../src/test_suites/testFactory');
const Parser = require('../../src/parser/parser');
const TestCase = require('../../src/test_suites/test_cases/test_case');
const test_cases_actions_natures = require('../../src/test_suites/test_cases/actions/test_cases_actions_natures');
const type_verification_operations = require('../../src/elements/actions/verify/verification_operations/verification_operations_natures');
const types = require('../../src/elements/types/types');

module.exports = function() {

    describe('Types Operations', () => {
        describe('Type Verification', () => {

            it('should test word', (done) => {
                let wordInstance = new types.WordType();
                expect(wordInstance.match("myword")).to.be.eql(true);
                expect(wordInstance.match("myword42")).to.be.eql(false);
                expect(wordInstance.match("my word")).to.be.eql(false);
                expect(wordInstance.match("")).to.be.eql(false);
                done();
            });

            it('should test alphanumeric', (done) => {
                let alphanumInstance = new types.AlphanumType();
                expect(alphanumInstance.match("myword42")).to.be.eql(true);
                expect(alphanumInstance.match("my word")).to.be.eql(false);
                expect(alphanumInstance.match("")).to.be.eql(false);
                done();
            });

            it('should test number', (done) => {
                let numberInstance = new types.WordType();
                expect(numberInstance.match("42")).to.be.eql(true);
                expect(numberInstance.match("mword")).to.be.eql(false);
                expect(numberInstance.match("")).to.be.eql(false);
                done();
            });

            it('should test boolean', (done) => {
                let booleanInstance = new types.WordType(true);
                expect(booleanInstance.match(true)).to.be.eql();
                expect(booleanInstance.match("true")).to.be.eql(false);
                expect(booleanInstance.match()).to.be.eql(false);
                done();
            });
        });
    });

    describe('Basic Test Case', () => {

        it('creates a test case from one action', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/executions/declared_action"))
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

        it('create from type_declared alphanum', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/types/alphanum"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {

                    const test_case = test.test_cases[0];
                    const action = test_case.test_case_actions[0];
                    expect(action).to.be.instanceOf(test_cases_actions_natures.TestCaseTypeAction);
                    expect(action.content).to.match(/^\w+$/);
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('create from type_declared word', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/types/word"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    const test_case = test.test_cases[0];
                    const action = test_case.test_case_actions[0];
                    expect(action).to.be.instanceOf(test_cases_actions_natures.TestCaseTypeAction);
                    expect(action.content).to.match(/[a-zA-Z]+/);
                    done();
                })
                .catch((err) =>
                    done(err))        });

        it('create from type_declared numeric', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/types/number"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    const test_case = test.test_cases[0];
                    const action = test_case.test_case_actions[0];
                    expect(action).to.be.instanceOf(test_cases_actions_natures.TestCaseTypeAction);
                    expect(parseInt(action.content)).to.not.be.eql(NaN);
                    done();
                })
                .catch((err) =>
                    done(err))

        });

        it('create from type_declared boolean', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/types/boolean"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    const test_case = test.test_cases[0];
                    const action = test_case.test_case_actions[0];
                    expect(action).to.be.instanceOf(test_cases_actions_natures.TestCaseTypeAction);
                    expect(typeof action.content).to.be.eql('boolean');
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('create from list of entries', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/action_natures/type_list_of_entries"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    const test_case = test.test_cases[0];
                    expect(test_case.test_case_actions).to.have.lengthOf(3);
                    test_case.test_case_actions.forEach((action) =>
                        expect(action).to.be.instanceOf(test_cases_actions_natures.TestCaseTypeAction));
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('create from click action', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/action_natures/click_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    const test_case = test.test_cases[0];
                    expect(test_case.test_case_actions).to.have.lengthOf(1);
                    test_case.test_case_actions.forEach((action) =>
                        expect(action).to.be.instanceOf(test_cases_actions_natures.TestCaseClickAction)
                    );
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('create from go_to action', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/action_natures/go_to_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    const test_case = test.test_cases[0];
                    expect(test_case.test_case_actions).to.have.lengthOf(1);
                    test_case.test_case_actions.forEach((action) =>
                        expect(action).to.be.instanceOf(test_cases_actions_natures.TestCaseGoToAction)
                    );
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('creates from custom regex', (done)=> {
            let types;
            Parser.parseFile(path.join(__dirname, "../inputs/types/type_declared"))
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

        it('create with no actions', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/declarations/no_action"))
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

        it('create from multiple actions', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/executions/multiple_actions"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    expect(test.test_cases).to.have.lengthOf(1);
                    expect(test.test_cases[0].test_case_actions).to.have.lengthOf(3);
                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it('create from action composition', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/declarations/action_composition"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    expect(test.test_cases).to.have.lengthOf(1);
                    const test_case = test.test_cases[0];
                    expect(test_case.test_case_actions).to.have.lengthOf(3);
                    expect(test_case.test_case_actions[0]).to.be.instanceOf(test_cases_actions_natures.TestCaseGoToAction);
                    expect(test_case.test_case_actions[1]).to.be.instanceOf(test_cases_actions_natures.TestCaseTypeAction);
                    expect(test_case.test_case_actions[2]).to.be.instanceOf(test_cases_actions_natures.TestCaseTypeAction);

                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it("should create a test_case with verifications actions", (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/action_natures/verification_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test)=> {
                    expect(test.test_cases).to.have.lengthOf(1);
                    const test_case = test.test_cases[0];
                    expect(test_case.test_case_actions).to.have.lengthOf(1);
                    expect(test_case.test_case_actions[0]).to.be.instanceOf(test_cases_actions_natures.TestCaseVerifyAction);

                    const verify_action = test_case.test_case_actions[0];
                    expect(verify_action.operation).to.be.instanceOf(type_verification_operations.TypeVerification);
                    const verification_type = verify_action.operation.type_description;
                    expect(verification_type).to.be.instanceOf(types.WordType);

                    done();
                })
                .catch((err) =>
                    done(err))
        });

    });
};