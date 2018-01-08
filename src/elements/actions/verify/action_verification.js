const Action = require("../action");

class VerificationAction extends Action{

    constructor(operation) {
        super();
        this.operation = operation;
    }

}

module.exports = VerificationAction;