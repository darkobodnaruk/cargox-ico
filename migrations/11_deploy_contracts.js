/* Libraries */
const BigNumber = require('bignumber.js')
const Web3 = require('web3')
const web3 = new Web3()
const config = require('../config.js')

/* Contracts */
const TokenVault = artifacts.require('TokenVault.sol')
const MultiSigWallet = artifacts.require('MultiSigWallet.sol')
const CargoXToken = artifacts.require('CargoXToken.sol')
const SafeMathLib = artifacts.require('SafeMathLib.sol')

module.exports = deployer => {
  deployer.link(SafeMathLib, [TokenVault])

  deployer.deploy(TokenVault,
    config.CX_OWNER,
    config.CX_Q1_VESTING_PERIOD_END,
    CargoXToken.address,
    config.CX_CXO_CARGOX_QUATERLY_TEAM_BONUS.toString(10)
  )

}
