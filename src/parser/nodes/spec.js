class Spec extends Object{

    constructor(type_list=[], rule_list=[], execution_list=[]) {
        super();
        this.types = type_list;
        this.actions = rule_list;
        this.executions = execution_list;
    }
}

module.exports = Spec;