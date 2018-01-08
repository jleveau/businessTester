
class VerificationOperation {

    verify(elem) {
        this.next.verify(elem);
    }

    addOperation(operation) {
        this.next = operation;
    }

}

module.exports = VerificationOperation;