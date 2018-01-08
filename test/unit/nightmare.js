const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const TestFactory = require('../../src/test_suites/testFactory');
const Parser = require('../../src/parser/parser');
const NightmareFactory = require('../../src/nightmare_factory/nightmare_factory');

module.exports = function() {
    describe('Action creations', () => {

        it('create a scenario with type_declared', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/executions/declared_action"))
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

        it('create a scenario with "go to"', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/action_natures/go_to_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test) =>
                    Promise.all(test.test_cases.map((test_case) => {
                        const builder = new NightmareFactory();
                        return builder.toNightmare(test_case);
                    })))
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(1);

                    const scenario = scenarii[0];
                    expect(scenario.actions).to.have.lengthOf(2);
                    expect(scenario.actions[0].type).to.be.eql("GotoAction");
                    expect(scenario.actions[1].type).to.be.eql("WaitAction");

                    expect(scenario.actions[0].url).to.be.eql('https://www.khubla.com');

                    done();
                })
                .catch((error) => {
                    done(error);
                })
        });

        it('create a scenario with "click"', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/action_natures/click_action"))
                .then((spec) => new TestFactory().create(spec))
                .then((test) =>
                    Promise.all(test.test_cases.map((test_case) => {
                        const builder = new NightmareFactory();
                        return builder.toNightmare(test_case);
                    })))
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(1);

                    const scenario = scenarii[0];
                    expect(scenario.actions).to.have.lengthOf(2);
                    expect(scenario.actions[0].type).to.be.eql("ClickAction");
                    expect(scenario.actions[1].type).to.be.eql("WaitAction");

                    expect(scenario.actions[0].selector).to.be.eql('#talk_button');

                    done();
                })
                .catch((error) => {
                    done(error);
                })
        });

        it('create from no scenario', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/executions/no_execution"))
                .then((spec) => new TestFactory().create(spec))
                .then((test) => {
                    const test_cases = [];
                    return Promise.all(test.test_cases.map((test_case) => {
                        const builder = new NightmareFactory();
                        return builder.toNightmare(test_case);
                    }))
                })
                .then((scenarii) => {
                    expect(scenarii).to.have.lengthOf(1);
                    const scenario = scenarii[0];
                    expect(scenario.actions).to.have.lengthOf(0);
                    done();
                })
                .catch((error) => done(error))
        });

        it('create 1 scenario from a test_case with 2 actions', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/executions/multiple_actions"))
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

    });

    describe('Verifing results', () => {
      it('should evaluate results accord to the test_case', (done) => {
        done(new Error('not implemented'))
      })
    });

    describe('Test demo scenarii', () => {
        it('should create a scenario for demo1', (done) => {
            Parser.parseFile(path.join(__dirname, "../inputs/demos/demo_1"))
                .then((spec) => {
                    return new TestFactory().create(spec)
                })
                .then((test) =>
                    Promise.all(test.test_cases.map((test_case) => {
                        const builder = new NightmareFactory();
                        return builder.toNightmare(test_case);
                    })))
                .then((scenarii) => {
                    const scenario = scenarii[0];
                    done();
                })
        });
    });
};
