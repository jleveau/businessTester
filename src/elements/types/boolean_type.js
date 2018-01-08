const Type = require('./type');

class BooleanType extends Type {

    generate() {
        return Math.random() >= 0.5
    }

    match(elem) {
        return elem === "true" || elem === false;
    }
}

module.exports = BooleanType;