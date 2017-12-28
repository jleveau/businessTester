const chai = require('chai');
const expect = chai.expect; //

describe('Testing BuisinessTester', function() {
    describe('Parser', function () {
        require('./parser')()
    });
    describe('Tests Cases', function () {
        require('./test_cases')()
    });
    describe('Nightmare', function () {
        require('./nightmare')()
    });
});