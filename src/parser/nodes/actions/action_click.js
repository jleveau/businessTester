const Action = require("./action");

class ClickAction extends Action{

    constructor(target) {
        super('click');
        if (!target) {
            throw Error("You can't create an action type Click with no target");
        }
        this.target = target;
    }

}

module.exports = ClickAction;