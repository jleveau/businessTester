const wat_action = require('wat-action');

class NightmareFactory{

    toNightmare(test_case) {
        return new Promise((resolve, reject) => {
            try {
                const scenario = new wat_action.Scenario();
                test_case.test_case_actions.forEach((action) => readAction(scenario, action));
                resolve(scenario);
            }
            catch(error) {
                reject(error);
            }
        });
    }
}

function readAction(scenario, action) {
    let nightmare_action = null;
    switch(action.name) {
        case 'type':
            nightmare_action = new wat_action.TypeAction('#' + action.target, action.content);
            break;
        case 'go_to':
            nightmare_action = new wat_action.GotoAction(action.url);
            break;
        case 'click':
            nightmare_action = new wat_action.ClickAction('#' + action.target);
            break;
        default :
            throw new Error("name : " + action.name + " is not supported");
    }
    scenario.addAction(nightmare_action);
}

module.exports = NightmareFactory;