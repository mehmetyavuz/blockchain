const Main = require('../main');
const assert = require('assert');
const { describe, it } = require('mocha');


Main.init([100, 100, 500], [[0, 1, 50], [1, 2, 80], [2, 0, 450]], 2);

describe('Final balance test', () => {

    it('Block 0 should have 500 balance', () => {
        assert.equal(Main.getAccountBalance(0), 500);
    });
    it('Block 1 should have 70 balance', () => {
        assert.equal(Main.getAccountBalance(1), 70);
    });
    it('Block 2 should have 130 balance', () => {
        assert.equal(Main.getAccountBalance(2), 130);
    });
})