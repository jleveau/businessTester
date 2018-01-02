const TestCaseAction = require('./test_case_action');

class TestCaseTypeAction extends TestCaseAction{

    constructor(target, name, content= "") {
        super(name);
        this.target = target;
        this.content = content;
    }

}

module.exports = TestCaseTypeAction;
