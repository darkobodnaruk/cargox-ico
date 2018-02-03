/* Libraries */
const BigNumber = require('bignumber.js')
const Web3 = require('web3')
const web3 = new Web3()
const config = require('../config.js')

/* Contracts */
const TimeVault = artifacts.require('TimeVault.sol')
const MultiSigWallet = artifacts.require('MultiSigWallet.sol')
const CargoXToken = artifacts.require('CargoXToken.sol')

module.exports = deployer => {
  deployer.deploy(TimeVault,
    MultiSigWallet.address,
    CargoXToken.address,
    config.CX_Q4_VESTING_PERIOD_END
  )
}
