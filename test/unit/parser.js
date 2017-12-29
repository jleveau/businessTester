const chai = require('chai');
const expect = chai.expect;
const Parser = require('../../src/parser/parser');
const path = require('path');

module.exports = function() {

    describe('parsing actions declaration', () => {
        it('parse a action and should success', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/single_action')).then((spec) => {
                expect(spec.actions).to.have.lengthOf(1);
                expect(spec.types).to.have.lengthOf(0);

                const action = spec.actions[0];
                expect(action.name).to.be.eql('connect');
                expect(action.steps).to.have.lengthOf(2);

                expect(action.steps[0].action_nature.target).to.be.eql("login");
                expect(action.steps[0].action_nature.content_nature).to.be.eql("alphanumeric");
                expect(action.steps[0].action_nature.nature).to.be.eql("type");
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
    })
};
