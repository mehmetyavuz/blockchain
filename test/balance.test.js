const Main = require('../main');
const BlockChain = require('../block-chain');
const assert = require('assert');
const { describe, it } = require('mocha');


describe('Final balance test', () => {
    it('should start with 1234', () => {
        var block = new BlockChain.Block(0, "Genesis Block");
        assert.equal(block.hash.substring(0,4), "1234");
    });

    it('Block 1 should have 70 balance', () => {
        Main.init([100, 100, 500], [[0, 1, 50], [1, 2, 80], [2, 0, 450]], 2);
        assert.equal(Main.getAccountBalance(1), 70);
    });
})