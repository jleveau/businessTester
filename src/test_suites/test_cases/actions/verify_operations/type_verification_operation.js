const VerificationOperation = require('./verification_operation');

class TypeVerificationOperation extends VerificationOperation {

    constructor(type_description) {
        super();
        this.type_description = type_description;
    }

    verify(elem){
        return this.type_description.type.match(elem);
    }

}
module.exports = TypeVerificationOperation;