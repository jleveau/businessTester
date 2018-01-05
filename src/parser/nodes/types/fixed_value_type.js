const TypeDeclared = require("./type_declared");

class FixedValueType extends TypeDeclared {

    constructor(value) {
        super("fixed");
        this.value = value
    }
}

module.exports = FixedValueType;