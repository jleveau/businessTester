const chai = require('chai');
const expect = chai.expect;
const Parser = require('../../src/parser/parser');
const path = require('path');

module.exports = function() {
    describe('parsing rules', () => {
        it('parse a rule and should success', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/single_rule')).then((spec) => {
                expect(spec.actions).to.have.lengthOf(1);
                expect(spec.types).to.have.lengthOf(0);

                const rule = spec.actions[0];
                expect(rule.name).to.be.eql('connect');
                expect(rule.steps).to.have.lengthOf(2);

                expect(rule.steps[0].action_type.target).to.be.eql("login");
                expect(rule.steps[0].action_type.content_nature).to.be.eql("alphanumeric");
                expect(rule.steps[0].action_type.nature).to.be.eql("type");
                done();
            }).catch((error) => {
                return done(error);
            });
        });
        it('parse multiple rules and should success', (done) => {
            Parser.parseFile(path.join(__dirname, '../inputs/multiple_rules'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(2);
                    expect(spec.types).to.have.lengthOf(0);
                    done();
                }).catch((error) => {
                return done(error);
            });
        });

        it('parse no rule and should fail', (done) => {
            spec = Parser.parseFile(path.join(__dirname, '../inputs/no_rule'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(0);
                    expect(spec.types).to.have.lengthOf(0);
                    done();
                }).catch((error) => {
                    return done(error);
                });
        });

        it('parse a type declaration from a regex', (done) => {
            spec = Parser.parseFile(path.join(__dirname, '../inputs/type_declaration'))
                .then((spec) => {
                    expect(spec.actions).to.have.lengthOf(1);
                    expect(spec.types).to.have.lengthOf(1);
                    done();
                }).catch((error) => {
                    return done(error);
                });
        });

        it('should fail to declare rule using undeclared type', (done) => {
            spec = Parser.parseFile(path.join(__dirname, '../inputs/undeclared_type'))
                .then(() => {
                    done("should have raised an error");
                }).catch((error) => {
                    expect(error.message).to.be.eql("Type password_syntax is not declared");
                    done();
                });
        });
    });
};
