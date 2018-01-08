const Action = require("./action");

class GoToAction extends Action{

    constructor(url) {
        super();
        this.url = url;
    }

}

module.exports = GoToAction;