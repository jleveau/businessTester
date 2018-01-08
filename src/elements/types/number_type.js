const Type = require('./type');

class NumberType extends Type {

    generate() {
        return Math.floor(Math.random() * Number.MAX_VALUE);
    }

    match(elem) {
        return !isNaN(parseInt(elem));
    }
}

module.exports = NumberType;