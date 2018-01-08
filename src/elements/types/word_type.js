const Type = require('./type');
const RegexType = require('./regex_type');
class WordType extends Type {

    generate() {
        return new RegexType(null, new RegExp("^(?=[^,]+,[^,]+$)[a-zA-Z,]{1,256}$")).generate();
    }

    match(elem) {
        return elem.match(new RegExp("^(?=[^,]+,[^,]+$)[a-zA-Z,]{1,256}$"));
    }

}

module.exports = WordType;