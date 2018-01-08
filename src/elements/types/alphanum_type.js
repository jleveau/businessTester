const Type = require('./type');
const alphanumeric_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

class AlphanumType extends Type {

    generate() {
        let  result = '';
        const length = Math.floor(Math.random() * 24) + 1;
        for (let i = length; i > 0; --i) result += alphanumeric_chars[Math.floor(Math.random() * alphanumeric_chars.length)];
        return result;
    }

    match(elem) {
        return (RegExp(elem).match(/^[a-zA-Z0-9]*$/));
    }
}


module.exports = AlphanumType;