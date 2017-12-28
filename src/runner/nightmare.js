const Nightmare = require('nightmare');
const nightmare = new Nightmare({show:true});
const Parser = require('../parser/parser');
const TestCaseFactory = require('../test_case_factory/test_case_factory');
const NightmareFactory = require('../nightmare_factory/nightmare_factory');

module.exports = {
    run : (inputFile) => {
        Parser.parseFile(inputFile)
            .then((spec) =>
                TestCaseFactory.createFromSpec(spec))
            .then((test_cases) =>
                Promise.all(test_cases.map((test_case) => {
                    return  new NightmareFactory().toNightmare(test_case);
                })))
            .then((scenarii) => {
                const scenario = scenarii[0];
                return scenario.attachTo(nightmare).evaluate(function () {
                    return document;
                })
            })
            .then((doc) => {
                console.log(doc);
            })
            .catch((error) => console.error(error));
    }
};

