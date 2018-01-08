const chai = require('chai');
chai.use(require('chai-match'));
const expect = chai.expect;
const path = require('path');
const TestFactory = require('../../src/test_suites/testFactory');
const Parser = require('../../src/parser/parser');
const TestCase = require('../../src/test_suites/test_cases/test_case');

module.exports = function() {

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
                    expect(action.name).to.be.eql("type");
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
                    expect(action.name).to.be.eql("type");
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
                    expect(action.name).to.be.eql("type");
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
                    expect(action.name).to.be.eql("type");
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
                    test_case.test_case_actions.forEach((action) => expect(action.name).to.be.eql('type'));
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
                    test_case.test_case_actions.forEach((action) => expect(action.name).to.be.eql('click'));
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
                    test_case.test_case_actions.forEach((action) => expect(action.name).to.be.eql('go_to'));
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
                    expect(test_case.test_case_actions[0].name).to.be.eql('go_to');
                    expect(test_case.test_case_actions[1].name).to.be.eql('type');
                    expect(test_case.test_case_actions[1].name).to.be.eql('type');

                    done();
                })
                .catch((err) =>
                    done(err))
        });

        it("should create a test_case with verifications actions", (done) => {
            done(new Error('not implemented'))
        });

    });
};