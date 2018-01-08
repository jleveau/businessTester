const VerificationOperation = require('./verification_operation');

class TypeVerification extends VerificationOperation {

    constructor(type_description) {
        super();
        this.type_description = type_description;
    }

    verify(elem) {
        super.verify(elem);
    }

}

module.exports = TypeVerification;