const wat_action = require('wat-action');
const DEFAULT_WAIT_TIME = 1000;

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
    switch(action.name) {
        case 'type':
            scenario.addAction(new wat_action.TypeAction('#' + action.target, action.content));
            break;
        case 'go_to':
            scenario.addAction(new wat_action.GotoAction(action.url));
            scenario.addAction(new wat_action.WaitAction(DEFAULT_WAIT_TIME));
            break;
        case 'click':
            scenario.addAction(new wat_action.ClickAction('#' + action.target));
            scenario.addAction(new wat_action.WaitAction(DEFAULT_WAIT_TIME));
            break;
        default :
            throw new Error("name : " + action.name + " is not supported");
    }
}

module.exports = NightmareFactory;