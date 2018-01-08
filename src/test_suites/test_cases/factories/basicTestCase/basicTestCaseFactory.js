const TestCase = require('../../test_case');
const TestCaseFactory = require('../../test_case_factory');
const ActionFactory = require('./test_actions_factory');
class BasicTestCaseFactory extends TestCaseFactory{

    createTestCase(actions, spec) {
        let action_list = [];
        actions.forEach((action) => {
            action.steps.forEach((step) => {
                action_list = action_list.concat(createBasicTestCaseAction(step, spec));
            });
        });
        return new TestCase(action_list);
    }

}

function createBasicTestCaseAction(action, spec) {
    if (!action.steps || !action.steps.length) {
        return ActionFactory.createActions(action);
    }
        let actions = [];
        action.steps.forEach((step) => {
            actions = actions.concat(createBasicTestCaseAction(step, spec))
        });
        return actions
}


module.exports = new BasicTestCaseFactory();