const TypeDeclared = require("./type_declared");

class RegexType extends TypeDeclared {

    constructor(name, regex) {
        super(name);
        this.regex = regex
    }
}

module.exports = RegexType;