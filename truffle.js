var HDWalletProvider = require("truffle-hdwallet-provider");

// USE THIS HD PATH in myetherwallet.com: m/44'/60'/0'/0
// For testing on Ropsten network and local network.
var mnemonic = 'steel caught blur reopen vital agent same enrich future accuse absorb pass'

module.exports = {
  networks: {
    development: {
      network_id: "*", // Match any network id
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://localhost:8545")
      },
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/wBLWLKZB4cMRI44jyIju")
      },
      gas: 4500000,
      network_id: 3
    }
  }
};
