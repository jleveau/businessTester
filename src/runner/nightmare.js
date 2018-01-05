const Nightmare = require('nightmare');
const nightmare = new Nightmare({
    show:true,
    typeInterval: 5
});

const Parser = require('../parser/parser');
const TestFactory = require('../test_suites/testFactory');
const NightmareFactory = require('../nightmare_factory/nightmare_factory');

module.exports = {
    run : (inputFile) => {
        Parser.parseFile(inputFile)
            .then((spec) => {
                return new TestFactory().create(spec)
            })
            .then((test) =>
                Promise.all(test.test_cases.map((test_case) => {
                    const builder = new NightmareFactory();
                    return builder.toNightmare(test_case);
                })))
            .then((scenarii) => {
                const scenario = scenarii[0];
                return scenario.attachTo(nightmare)
                    .end()
            })
            .then((doc) => {
            })
            .catch((error) => console.error(error));

    }
};