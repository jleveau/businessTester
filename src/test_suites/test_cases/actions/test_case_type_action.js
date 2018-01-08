const TestCaseAction = require('./test_case_action');

class TestCaseTypeAction extends TestCaseAction{

    constructor(target, content= "") {
        super();
        this.target = target;
        this.content = content;
    }

}

module.exports = TestCaseTypeAction;
