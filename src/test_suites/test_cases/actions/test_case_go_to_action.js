const TestCaseAction = require('./test_case_action');

class TestCaseGoToAction extends TestCaseAction{

    constructor(url) {
        super("go_to");
        this.url = url;
    }

}

module.exports = TestCaseGoToAction;
