const Type = require('./type');

class UserType extends Type {

    constructor(name) {
        super();
        this.name = name;
    }

}

module.exports = UserType;