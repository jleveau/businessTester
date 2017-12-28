const TypeDeclared = require("./type_declared");

class RegexType extends TypeDeclared {

    constructor(nature, regex) {
        super(nature);
        this.regex = regex
    }
}

module.exports = RegexType;