class TestCaseFactory {

    create(spec) {
        const actions = spec.executions.map((action_execution) => {
            const action = spec.actions.find((action) => action.name === action_execution);
            if (!action) {
                throw new Error("Action " + action_execution + " cannot be found in declared actions");
            } else {
                return action;
            }
        });
        return this.createTestCase(actions, spec);
    }

    createTestCase(actions, spec) {
        throw new Error("This class is supposed to be abstract");
    }
}


module.exports = TestCaseFactory;