const chai = require('chai');
const expect = chai.expect;
const path = require("path");
const Parser = require('../../src/parser/parser');
const action_natures = require("../../src/parser/elements/actions/action_nature");
const Types = require('../../src/parser/elements/types/types');
const Action = require("../../src/parser/elements/actions/action");
const TypeActionEntry = require("../../src/parser/elements/actions/type_action_entry");


module.exports = function() {

    describe('Action Declaration', () => {
        it('parse a action and should success', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/declarations/single_action')).then((spec) => {
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
            Parser.parseFile(path.join(__dirname, '../inputs/declarations/multiple_actions'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(2);
                    expect(spec.types).to.have.lengthOf(0);
                    done();
                }).catch((error) => {
                return done(error);
            });
        });

        it('parse no action', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/declarations/no_action'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(0);
                    expect(spec.types).to.have.lengthOf(0);
                    done();
                }).catch((error) => {
                return done(error);
            });
        });

        it('should declare an action using a previously declared action', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/declarations/action_composition'))
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
    describe('Type declaration', () => {

        it('parse a type_declared action declaration from a fixed value', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/types/fixed_value'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(1);
                    const action = spec.actions[0];
                    const type_action = action.steps[0];
                    const fixed_value_type = type_action.entries[0];
                    const entry_nature = fixed_value_type.content_nature;
                    expect(entry_nature).to.be.instanceOf(Types.FixedValueType);

                    expect(entry_nature.name).to.be.eql("fixed");
                    expect(entry_nature.value).to.be.eql("12");

                    done();
                }).catch((error) => {
                return done(error);
            })
        });

        it('parse an action declaration from a regex', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/types/type_declared'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(1);
                    expect(spec.types).to.have.lengthOf(1);
                    done();
                }).catch((error) => {
                return done(error);
            });
        });

        it('should fail to declare an action from undeclared type_declared', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/declarations/undeclared_type'))
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
    });

    describe("Entry Declaration", () => {

        it("should create a type action using a declared entry", (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/declarations/entry'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(1);
                    expect(spec.actions[0].name).to.be.eql('add');
                    const add_action = spec.actions[0];
                    expect(add_action.steps).to.have.lengthOf(1);
                    expect(add_action.steps[0]).to.be.instanceOf(action_natures.TypeAction);
                    const type_action = add_action.steps[0];
                    expect(type_action.entries).to.have.lengthOf(2);
                    expect(type_action.entries[0]).to.be.instanceOf(TypeActionEntry);
                    done();
                }).catch((error) => {
                done(error);
            });
        });

    });

    describe("Parsing action execution", () => {

        it('should constain the declaration and the execution of an action', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/executions/declared_action'))
                .then((spec) => {
                    expect(spec.executions).to.have.lengthOf(1);
                    expect(spec.executions[0]).to.be.eql("connect");
                    done();
                }).catch((error) => {
                done(error);
            });
        });

        it('should fail to execute an undeclared action', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/executions/undeclared_action'))
                .then(() => {
                    expect()
                }).catch((error) => {
                expect(error.message).to.be.eql("Action connect is not declared");
                done();
            });
        });

        it('should fail to parse not well formed declaration', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/declarations/bad_input'))
                .then(() => {
                    done(new Error("Should have failed"));
                }).catch((error) => {
                expect(error.message).to.be.eql("no viable alternative at input 'typetextas' at line : 2, col : 0");
                done();
            });
        });
    });

    describe("Parse Actions", () => {

        describe("Type Action", () => {

            it("should create a type_declared action", (done) => {
                Parser.parseFile(path.join(__dirname, '../inputs/declarations/single_action'))
                    .then((spec) => {
                        expect(spec.actions).to.have.lengthOf(1);
                        const action = spec.actions.find((action) => action.name === "connect");
                        const type_action = action.steps[0];
                        const type_entries = type_action.entries;
                        expect(type_entries).to.have.lengthOf(1);
                        const type_entry = type_entries[0];
                        expect(type_entry).to.be.instanceOf(TypeActionEntry);

                        expect(type_entry.target).to.be.eql("login");
                        expect(type_entry.content_nature).to.be.eql("alphanumeric");
                        done();
                    })
                    .catch((err) => done(err))
            });

            it("should fail to create type_declared action of unknown name", (done) => {
                Parser.parseFile(path.join(__dirname, '../inputs/action_natures/type_action_no_target'))
                    .then(() => {
                        done(new Error("should have failed"));
                    })
                    .catch(() => done())
            });

            it('parse a type_declared action using a list of entries', (done) => {
                Parser.parseFile(path.join(__dirname, '../inputs/action_natures/type_list_of_entries'))
                    .then((spec) => {
                        expect(spec.actions).to.have.lengthOf(1);
                        const action = spec.actions[0];
                        const type_action = action.steps[0];
                        expect(type_action.entries).to.be.lengthOf(3);
                        type_action.entries.forEach((entry) => {
                            expect(entry).to.be.instanceOf(TypeActionEntry);
                        });
                        const entry = type_action.entries[0];
                        expect(entry.content_nature).to.be.instanceOf(Types.FixedValueType);
                        expect(entry.target).to.be.eql('user');
                        done();
                    }).catch((error) => {
                    return done(error);
                });
            });
        });
        describe("Go To Action", () => {
            it("should create a go to action", (done) => {
                Parser.parseFile(path.join(__dirname, '../inputs/action_natures/go_to_action')).then((spec) => {
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
                Parser.parseFile(path.join(__dirname, '../inputs/action_natures/click_action')).then((spec) => {
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