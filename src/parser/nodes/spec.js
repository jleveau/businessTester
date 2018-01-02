const actions = require('./actions/action_nature');

class Spec extends Object{

    static DEFAULT_ACTIONS() {
        return [
            new actions.GoToAction(),
            new actions.TypeAction()
        ]
    };

    constructor(type_list=[], actions_list=[], execution_list=[]) {
        super();
        this.types = type_list;
        this.actions = actions_list.concat(Spec.DEFAULT_ACTIONS());

        this.executions = execution_list;

    }
}

module.exports = Spec;