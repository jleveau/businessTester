const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const TestCaseFactory = require('../../src/test_case_factory/test_case_factory');
const Parser = require('../../src/parser/parser');
const NightmareBuilder = require('../../src/nightmare_factory/nightmare_factory');

module.exports = function() {
    describe('builds a Nightmare Scenario from a test case contain one type action', () => {

        it('convert a single rule with 2 actions', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/single_rule"))
                .then((spec) => TestCaseFactory.createFromSpec(spec))
                .then((test_cases) =>
                    Promise.all(test_cases.map((test_case) => {
                        const builder = new NightmareBuilder();
                        return builder.toNightmare(test_case);
                    })))
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

        it('create no scenario from no rule', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/no_rule"))
                .then((spec) => TestCaseFactory.createFromSpec(spec))
                .then((test_cases) =>
                    Promise.all(test_cases.map((test_case) => {
                        const builder = new NightmareBuilder();
                        return builder.toNightmare(test_case);
                    })))
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(0);
                    done();
                })
                .catch((error) => done(error))
        });

        it('create 2 from 2 rule', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/multiple_rules"))
                .then((spec) => TestCaseFactory.createFromSpec(spec))
                .then((test_cases) =>
                    Promise.all(test_cases.map((test_case) => {
                        const builder = new NightmareBuilder();
                        return builder.toNightmare(test_case);
                    })))
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(2);
                    done();
                })
                .catch((error) => done(error))
        })
    });
};
