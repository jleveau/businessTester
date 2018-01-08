const UserType = require("./user_type");
const RandExp = require("randexp");
class RegexType extends UserType {

    constructor(name, regex) {
        super(name);
        this.regex = regex
    }

    generate() {
        let s;
        for (let i=0; i<15; ++i) {
            s = new RandExp(this.regex).gen();
            if (s.match(this.regex)) return s;
        }
        throw new Error("Failed to generate from regex : " + this.regex);
    }

    match(elem) {
        return this.regex.match(elem);
    }
}

module.exports = RegexType;