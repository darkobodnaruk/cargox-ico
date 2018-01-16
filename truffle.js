var HDWalletProvider = require("truffle-hdwallet-provider");

// USE THIS HD PATH in myetherwallet.com: m/44'/60'/0'/0
// For testing on Ropsten network and local network.
var mnemonic = 'steel caught blur reopen vital agent same enrich future accuse absorb pass'

module.exports = {
  networks: {
    development: {
      network_id: "*", // Match any network id
      host: "127.0.0.1",
      port: 7545,
      gas: 4700000,
      //provider: function() {
      //  return new HDWalletProvider(mnemonic, "http://localhost:8545")
      //},
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/wBLWLKZB4cMRI44jyIju")
      },
      gas: 4700000,
      network_id: 3
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
