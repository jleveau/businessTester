const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const TestFactory = require('../../src/test_suites/testFactory');
const Parser = require('../../src/parser/parser');
const NightmareFactory = require('../../src/nightmare_factory/nightmare_factory');

module.exports = function() {
    describe('builds a Nightmare Scenario from a test case contain one type action', () => {

        it('convert a single action with 2 actions', (done) => {
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

        it('create no scenario from no action', (done) => {
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

        it('create 1 scenario from 2 action', (done) => {
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
        })
    });
};
