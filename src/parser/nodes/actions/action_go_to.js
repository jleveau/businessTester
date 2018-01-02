const Action = require("./action");

class GoToAction extends Action{

    constructor(url) {
        super('go_to');
        this.url = url;
    }

}

module.exports = GoToAction;