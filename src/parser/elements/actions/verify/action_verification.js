const Action = require("../action");
const VerificationOperationDecorator = require('./verification_operation_decorator');

class VerificationAction extends Action{

    constructor(operation) {
        super('verification');
        this.operation = operation;
    }

    addOperation(operation) {
        const verification_operation = new VerificationOperationDecorator(operation);
        verification_operation.next_verification = this.operation;
        this.operation = verification_operation;
    }

}

module.exports = VerificationAction;