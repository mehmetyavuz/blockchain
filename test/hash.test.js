const BlockChain = require('../block-chain');
const assert = require('assert');
const { describe, it } = require('mocha');

let blockchain = new BlockChain.BlockChain();
blockchain.addBlock([0, 1, 50]);
blockchain.addBlock([1, 2, 80]);
blockchain.addBlock([2, 0, 450]);

describe('Final balance test', () => {
    it('Hash of block 0 should start with 1234', () => {
        assert.equal(blockchain.chain[0].hash.substring(0,4), "1234");
    });
    it('Hash of block 1 should start with 1234', () => {
        assert.equal(blockchain.chain[1].hash.substring(0,4), "1234");
    });
    it('Hash of block 2 should start with 1234', () => {
        assert.equal(blockchain.chain[2].hash.substring(0,4), "1234");
    });
})