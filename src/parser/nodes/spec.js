const actions = require('./actions/action_nature');

class Spec extends Object{

    constructor(type_list=[], actions_list=[], execution_list=[]) {
        super();
        this.types = type_list;
       // this.actions = actions_list.concat(Spec.DEFAULT_ACTIONS());
        this.actions = actions_list;
        this.executions = execution_list;

    }
}

module.exports = Spec;