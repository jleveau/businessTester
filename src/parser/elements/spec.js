const actions = require('./actions/action_nature');

class Spec extends Object{

    constructor(type_list=[], actions_list=[], execution_list=[], entries_map={}) {
        super();
        this.types = type_list;
       // this.actions = actions_list.concat(Spec.DEFAULT_ACTIONS());
        this.actions = actions_list;
        this.executions = execution_list;
        this.entries = entries_map;

    }
}

module.exports = Spec;