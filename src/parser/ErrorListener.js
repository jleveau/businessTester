const antlr4 = require('antlr4/index');
const ErrorListener = require('antlr4/error/index').ErrorListener;

class CustomErrorListener extends ErrorListener {

    syntaxError(recognizer, offendingSymbol, line, column, msg, e)  {
        throw new Error(msg);
    }

}

module.exports = CustomErrorListener;