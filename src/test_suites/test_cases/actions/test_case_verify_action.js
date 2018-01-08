const TestCaseAction = require('./test_case_action');

class TestCaseVerifyAction extends TestCaseAction{

    constructor(target, operation) {
        super();
        this.target = target;
        this.operation = operation;
    }

    addOperation(operation) {
        operation.next = this.operation;
        this.operation = operation;
    }

}

module.exports = TestCaseVerifyAction;
