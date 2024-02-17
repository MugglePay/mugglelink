require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const { task } = require("hardhat/config");
const {
  API_URL_SEPOLIA,
  API_URL_MUMBAI,
  API_URL_ARBITRUM,
  API_URL_OPTIMISM,
  PRIVATE_KEY,
} = process.env;

task("account", "returns nonce and balance for specified address on multiple networks")
  .addParam("address")
  .setAction(async address => {
    const web3Sepolia = createAlchemyWeb3(API_URL_SEPOLIA);
    const web3Mumbai = createAlchemyWeb3(API_URL_MUMBAI);
    // const web3Arb = createAlchemyWeb3(API_URL_ARBITRUM);
    // const web3Opt = createAlchemyWeb3(API_URL_OPTIMISM);

    const networkIDArr = ["Ethereum Sepolia:", "Polygon  Mumbai:"]
    const providerArr = [web3Sepolia, web3Mumbai];
    const resultArr = [];
    
    for (let i = 0; i < providerArr.length; i++) {
      const nonce = await providerArr[i].eth.getTransactionCount(address.address, "latest");
      const balance = await providerArr[i].eth.getBalance(address.address)
      resultArr.push([networkIDArr[i], nonce, parseFloat(providerArr[i].utils.fromWei(balance, "ether")).toFixed(2) + "ETH"]);
    }
    resultArr.unshift(["  |NETWORK|   |NONCE|   |BALANCE|  "])
    console.log(resultArr);
  });

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL_SEPOLIA,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mumbai: {
      url: API_URL_MUMBAI,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    arbitrum: {
      url: API_URL_ARBITRUM,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    optimism: {
      url: API_URL_OPTIMISM,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};