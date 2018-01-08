const TypeDeclared = require("./type");

class FixedValueType extends TypeDeclared {

    constructor(value) {
        super();
        this.value = value
    }

    generate() {
        return this.value;
    }

    match(elem) {
        return elem === this.value;
    }
}

module.exports = FixedValueType;