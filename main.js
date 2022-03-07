const BlockChain = require('./block-chain');

let myCoin = new BlockChain.BlockChain();
var balances = [];

/*
    To initialize the blockchain.
    initialBalances: An array of integers representing initial account state. 
        For example, [1, 2, 3] where account index 0 has a balance 1. 
            Account index 1 has a balance of 2 ....
    transactions​: An array of arrays of transactions. 
        Each transaction is an array itself in the following form: 
            [fromAddress, toAddress, value]. 
        For example, [[ 0, 3, 6]] 
            where from account 0 transfers 6 value to account 3.
    blockSize​: number of valid transactions in a block.
*/
function init(initialBalances, transactions, blockSize) {
    balances = initialBalances;
    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        let fromBalance = balances[transaction[0]];
        let toBalance = balances[transaction[1]];
        let value = transaction[2];
        if (fromBalance >= value) {
            balances[transaction[0]] = fromBalance - value;
            balances[transaction[1]] = toBalance + value;

            myCoin.addBlock(transaction);
        }
    }
}

/*
    returns the account balance of a specific account.
 */
function getAccountBalance(accountIndex) {
    return balances[accountIndex];
}

init([100, 100, 500], [[0, 1, 50], [1, 2, 80], [2, 0, 450]], 2);
getAccountBalance(1);

module.exports.init = init
module.exports.getAccountBalance = getAccountBalance;