
const antlr4 = require('antlr4/index');
const BusinessRulesLexer = require('./BusinessRulesLexer');
const BusinessRulesParser = require('./BusinessRulesParser');
const BusinessRulesVisitor = require('./BusinessRulesVisitor');

class Parser {

    parseFile(input_file) {
        return new Promise((resolve, reject) => {
            try {
                const chars = new antlr4.FileStream(input_file);
                const lexer = new BusinessRulesLexer.BusinessRulesLexer(chars);
                const tokens = new antlr4.CommonTokenStream(lexer);
                const parser = new BusinessRulesParser.BusinessRulesParser(tokens);
                parser.buildParseTrees = true;
                const visitor = new BusinessRulesVisitor.BusinessRulesVisitor();

                resolve(visitor.visitMain(parser.main()));
            }
            catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = new Parser();