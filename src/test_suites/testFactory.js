const BasicTestCaseFactory = require('./test_cases/basicTestCaseFactory');
const Test = require('./test');
const test_cases_factories = [BasicTestCaseFactory];

class TestFactory {
    create(spec) {
        return new Promise((resolve, reject) => {
            try {
                const test = new Test(test_cases_factories.map(
                    (test_case_factory) =>
                        test_case_factory.create(spec)
                ));
                resolve(test);
            }
            catch(error) {
                reject(error);
            }
        });
    }
}

module.exports = TestFactory;
