//const { Web3 } = require('web3');
const Web3 = require('web3');
// replace with Infura API key generated
const infuraUrl = 'https://mainnet.infura.io/v3/INFURA_KEY';

// Initializing Web3 with the Infura provider
const web3 = new Web3(infuraUrl);

// Ethereum addresses to check ( you can add multiple addresses here)
const addresses = ['0x76a6A1039d0ba9c30dF125502550270E53fDeBd4', 
'0xF7830371B649c6f19eb02539Bc6C1A883E5de58f',
// ... add the addresses here
'0x982e3CE09A1fF4718A4f183010eF2EE53C990f9A' ];

// Function to get the balance of an address
async function getBalance(address) {
    try {
        const balanceWei = await web3.eth.getBalance(address);
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        console.log(`Balance of ${address}: ${balanceEth} ETH`);
    } catch (error) {
        console.error(`Error getting balance for ${address}: ${error.message}`);
    }
}

// Fetch balances for each address
addresses.forEach((address) => {
    getBalance(address);
});
