const Action = require('./action');

class UserAction extends Action {

    constructor(name, steps) {
        super(steps);
        this.name = name;
    }

}

module.exports = UserAction;