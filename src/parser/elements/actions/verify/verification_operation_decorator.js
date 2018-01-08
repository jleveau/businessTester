class VerificationOperationDecorator{

    constructor(operation) {
        this.next_verification = null;
        this.operation = operation;
    }

}

module.exports = VerificationOperationDecorator;