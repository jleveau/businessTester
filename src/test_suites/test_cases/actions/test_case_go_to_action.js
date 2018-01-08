const TestCaseAction = require('./test_case_action');

class TestCaseGoToAction extends TestCaseAction{

    constructor(url) {
        super();
        this.url = url;
    }

}

module.exports = TestCaseGoToAction;
