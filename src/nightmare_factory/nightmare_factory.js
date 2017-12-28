const wat_action = require('wat-action');

class NightmareFactory{

    toNightmare(test_case) {
        return new Promise((resolve, reject) => {
            try {
                const scenario = new wat_action.Scenario();
                test_case.action_list.forEach((action) => readAction(scenario, action));
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
    switch(action.nature) {
        case 'type':
            nightmare_action = new wat_action.TypeAction('#' + action.target, action.content);
            break;
        case 'submit':
            nightmare_action = new wat_action.ClickAction('#submit');
            break;
        default :
            throw new Error("nature : " + action.nature + " is not supported");
    }
    scenario.addAction(nightmare_action);
}

module.exports = NightmareFactory;