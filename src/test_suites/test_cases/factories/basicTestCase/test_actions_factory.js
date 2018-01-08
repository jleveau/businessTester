const action_natures = require('../../../../elements/actions/action_natures');
const test_case_action_natures = require('../../actions/test_cases_actions_natures');
class TestActionFactory {

   static  createActions(step) {
       if (step instanceof action_natures.TypeAction) {
           return createTypeAction(step)
        } else if (step instanceof action_natures.GoToAction) {
            return [new test_case_action_natures.TestCaseGoToAction(step.url)];
        } else if (step instanceof  action_natures.ClickAction) {
            return [new test_case_action_natures.TestCaseClickAction(step.target)];
        } else if (step instanceof action_natures.VerificationAction) {
            return createVerificationAction(step);
       }
    }
}

function createTypeAction(action) {
    return action.entries.map((entry) => {
        return new test_case_action_natures.TestCaseTypeAction(
            entry.target,
            entry.content_nature.generate()
        );
    });
}

function createVerificationAction(action) {
    const verificationAction = new test_case_action_natures.TestCaseVerifyAction(action.target);
    verificationAction.addOperation(action.operation);
    return verificationAction;
}

module.exports = TestActionFactory;