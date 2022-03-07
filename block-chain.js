const SHA1 = require('crypto-js/sha1');

class Block {
    constructor(index, blockTransactions, prevHash = '0') {
        this.index = index;
        this.blockTransactions = blockTransactions;
        this.prevHash = prevHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        var hash = '0000';
        this.nonce = 0;
        while (hash.substring(0, 4) !== "1234") {
            this.nonce++;
            hash = SHA1(this.prevHash + JSON.stringify(this.blockTransactions) + this.nonce).toString();
        }
        // console.log(`Block ${this.index}: ${hash}`);
        return hash;
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "Genesis Block");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(blockTransactions) {
        let newBlock = new Block(this.getLatestBlock().index + 1, blockTransactions, this.getLatestBlock().hash);
        this.chain.push(newBlock);
    }

    isChainValid() {
        console.log('Validating the chain...');
        for (let i = 1; i < this.chain.length; i++) {
            const currBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if (currBlock.hash !== currBlock.calculateHash()) {
                return false;
            }
            if (currBlock.prevHash !== prevBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

module.exports = BlockChain;