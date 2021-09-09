const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'water ordinary off weekend broccoli human loan rely ethics pumpkin inject render', 
    'https://rinkeby.infura.io/v3/8c03d48c479344d0bd230226aac73d0d'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attepmpting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
};
deploy();