const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const TestFactory = require('../../src/test_suites/testFactory');
const Parser = require('../../src/parser/parser');
const NightmareFactory = require('../../src/nightmare_factory/nightmare_factory');

module.exports = function() {
    describe('builds a Nightmare Scenario from test cases', () => {

        it('converts a single test_case containing 2 actions', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/declare_and_execute_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test) => {
                    const test_cases = test.test_cases;
                    return Promise.all(test_cases.map((test_case) =>
                        new NightmareFactory().toNightmare(test_case)))})

                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(1);

                    const scenario = scenarii[0];
                    expect(scenario.actions).to.have.lengthOf(2);
                    expect(scenario.actions[0].type).to.be.eql("TypeAction");
                    expect(scenario.actions[0].selector).to.be.eql("#login");
                    expect(scenario.actions[0].text).to.not.be.eql(null);
                    done();
                })
                .catch((error) => done(error))
        });

        it('create no scenario from no test_case', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/no_execution"))
                .then((spec) => new TestFactory().create(spec))
                .then((test) => {
                    const test_cases = [];
                    return Promise.all(test_cases.map((test_case) => {
                        const builder = new NightmareFactory();
                        return builder.toNightmare(test_case);
                    }))
                })
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(0);
                    done();
                })
                .catch((error) => done(error))
        });

        it('create 1 scenario from a test_case with 2 actions', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/multiple_actions_executions"))
                .then((spec) => new TestFactory().create(spec))
                .then((test) =>
                    Promise.all(test.test_cases.map((test_case) => {
                        const builder = new NightmareFactory();
                        return builder.toNightmare(test_case);
                    })))
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(1);
                    expect(scenarii[0].actions).to.have.lengthOf(3);
                    done();
                })
                .catch((error) => {
                    done(error);
                })
        });

        it('create a scenario containing a "go to"', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/declare_with_go_to"))
                .then((spec) => new TestFactory().create(spec))
                .then((test) =>
                    Promise.all(test.test_cases.map((test_case) => {
                        const builder = new NightmareFactory();
                        return builder.toNightmare(test_case);
                    })))
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(1);

                    const scenario = scenarii[0];
                    expect(scenario.actions).to.have.lengthOf(1);
                    expect(scenario.actions[0].type).to.be.eql("GotoAction");
                    expect(scenario.actions[0].url).to.be.eql('https://www.khubla.com');

                    done();
                })
                .catch((error) => {
                    done(error);
                })
        });

        it('create a scenario containing a "click"', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/click_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test) =>
                    Promise.all(test.test_cases.map((test_case) => {
                        const builder = new NightmareFactory();
                        return builder.toNightmare(test_case);
                    })))
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(1);

                    const scenario = scenarii[0];
                    expect(scenario.actions).to.have.lengthOf(1);
                    expect(scenario.actions[0].type).to.be.eql("ClickAction");
                    expect(scenario.actions[0].selector).to.be.eql('#talk_button');

                    done();
                })
                .catch((error) => {
                    done(error);
                })
        });
    });
};
