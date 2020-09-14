require("dotenv").config();

const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

const privateKeys = [process.env.PRIVATEKEY];

console.log(process.env.INFURA_API_KEY);

module.exports = {
  networks: {
    development: { host: "localhost", port: 7545, network_id: "*" },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          privateKeys,
          "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY
        ),
      network_id: 3,
      gas: 4600000,
    },
    live: {
      provider: () =>
        new HDWalletProvider(
          privateKeys,
          "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY
        ),
      network_id: 1,
      gas: 4600000,
      gasPrice: 120000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.6.12", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
