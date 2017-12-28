class ActionNature {

}

class Submit extends ActionNature {
    constructor() {
        super();
        this.nature = "submit";
    }
}

class Type extends ActionNature {

    constructor(target, content_nature, content="") {
        super();
        if (target === null || content_nature === null) {
            throw Error("You can't create an action type Type with no target or content");
        }
        this.nature = "type";
        this.target = target;
        this.content = content;
        this.content_nature = content_nature;
    }

}

module.exports = {
    Submit,
    Type
};