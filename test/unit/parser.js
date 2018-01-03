const chai = require('chai');
const expect = chai.expect;
const Parser = require('../../src/parser/parser');
const path = require('path');
const action_natures = require("../../src/parser/nodes/actions/action_nature");
const Action = require("../../src/parser/nodes/actions/action");
const Spec = require("../../src/parser/nodes/spec");

module.exports = function() {

    describe('parsing actions declaration', () => {
        it('parse a action and should success', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/single_action')).then((spec) => {
                expect(spec.actions).to.have.lengthOf(1);
                expect(spec.types).to.have.lengthOf(0);

                const action = spec.actions.find((action) => action.name === "connect");
                expect(action).to.not.be.eql(null);
                expect(action).to.be.instanceOf(Action);
                expect(action.name).to.be.eql('connect');
                expect(action.steps).to.have.lengthOf(2);

                done();
            }).catch((error) => {
                return done(error);
            });
        });

        it('parse multiple actions and should success', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/multiple_actions'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(2);
                    expect(spec.types).to.have.lengthOf(0);
                    done();
                }).catch((error) => {
                return done(error);
            });
        });

        it('parse no action', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/no_action'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(0);
                    expect(spec.types).to.have.lengthOf(0);
                    done();
                }).catch((error) => {
                return done(error);
            });
        });

        it('parse a type declaration from a regex', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/type_declaration'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(1);
                    expect(spec.types).to.have.lengthOf(1);
                    done();
                }).catch((error) => {
                return done(error);
            });
        });

        it('should fail to declare an action from undeclared type', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/undeclared_type'))
                .then(() => {
                    done(new Error("should have failed"));
                })
                .catch((error) => {
                    if (error.message === "Type password_syntax is not declared") {
                        return done();
                    }
                    return done(error);
                });
        });

        it('should declare an action using a previously declared action', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/declaring_action_composition'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(3);
                    expect(spec.executions).to.have.lengthOf(1);

                    const action = spec.actions.find((action) => action.name === "begin");
                    expect(action.steps).to.have.lengthOf(2);
                    expect(action.steps[0]).to.be.instanceOf(Action);
                    expect(action.steps[1]).to.be.instanceOf(Action);

                    let start_action = action.steps[0];
                    expect(start_action.steps).to.have.lengthOf(1);
                    expect(start_action.steps[0]).to.be.instanceOf(action_natures.GoToAction);

                    let connect_action = action.steps[1];
                    expect(connect_action.steps).to.have.lengthOf(2);
                    expect(connect_action.steps[0]).to.be.instanceOf(action_natures.TypeAction);
                    expect(connect_action.steps[1]).to.be.instanceOf(action_natures.TypeAction);

                    start_action = spec.actions.find((action) => action.name === "start");
                    connect_action = spec.actions.find((action) => action.name === "connect");

                    expect(start_action).to.not.be.eql(null);
                    expect(connect_action).to.not.be.eql(null);

                    done();
                }).catch((error) => {
                return done(error);
            });
        });
    });

    describe("Parsing action execution", () => {

        it('should constain the declaration and the execution of an action', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/declare_and_execute_action'))
                .then((spec) => {
                    expect(spec.executions).to.have.lengthOf(1);
                    expect(spec.executions[0]).to.be.eql("connect");
                    done();
                }).catch((error) => {
                done(error);
            });
        });

        it('should fail to execute an undeclared action', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/execute_undeclared_action'))
                .then(() => {
                    expect()
                }).catch((error) => {
                expect(error.message).to.be.eql("Action connect is not declared");
                done();
            });
        });

        it('should fail to parse not well formed declaration', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/bad_input'))
                .then(() => {
                    done(new Error("Should have failed"));
                }).catch((error) => {
                expect(error.message).to.be.eql("no viable alternative at input 'typetextas'");
                done();
            });
        });
    });

    describe("Parse Actions", () => {

        describe("Type Action", () => {
            it("should create a type action", (done) => {
                Parser.parseFile(path.join(__dirname, '../inputs/single_action'))
                    .then((spec) => {
                        expect(spec.actions).to.have.lengthOf(1);
                        const action = spec.actions.find((action) => action.name === "connect");
                        const type_action = action.steps[0];
                        expect(type_action.target).to.be.eql("login");
                        expect(type_action.content_nature).to.be.eql("alphanumeric");
                        done();
                    })
                    .catch((err) => done(err))
            });

            it("should fail to create type action of unknown name", (done) => {
                Parser.parseFile(path.join(__dirname, '../inputs/type_action_with_no_target'))
                    .then(() => {
                        done(new Error("should have failed"));
                    })
                    .catch(() => done())
            })
        });
        describe("Go To Action", () => {
            it("should create a go to action", (done) => {
                Parser.parseFile(path.join(__dirname, '../inputs/declare_with_go_to')).then((spec) => {
                    expect(spec.actions).to.have.lengthOf(1);
                    const action = spec.actions.find((action) => action.name === "start");
                    const go_to_action = action.steps[0];
                    expect(go_to_action).to.be.instanceOf(action_natures.GoToAction);
                    expect(go_to_action.url).to.be.eql("https://www.khubla.com");
                    done();
                })
                    .catch((err) => done(err))

            })
        });

        describe("Click Action", () => {
            it("should create a click action", (done) => {
                Parser.parseFile(path.join(__dirname, '../inputs/click_action')).then((spec) => {
                    expect(spec.actions).to.have.lengthOf(1);
                    const action = spec.actions.find((action) => action.name === "talk");
                    const click_action = action.steps[0];
                    expect(click_action).to.be.instanceOf(action_natures.ClickAction);
                    expect(click_action.target).to.be.eql("talk_button");
                    done();
                })
                    .catch((err) => done(err))
            });
        });
    });
};