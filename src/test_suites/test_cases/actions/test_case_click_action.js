const TestCaseAction = require('./test_case_action');

class TestCaseClickAction extends TestCaseAction{

    constructor(target) {
        super("click");
        this.target = target;
    }

}

module.exports = TestCaseClickAction;
