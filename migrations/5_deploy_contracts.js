/* Libraries */
const BigNumber = require('bignumber.js')
const Web3 = require('web3')
const web3 = new Web3()
const config = require('../config.js')

/* Contracts */
const MultiSigWallet = artifacts.require('MultiSigWallet.sol')
const SafeMathLib = artifacts.require('SafeMathLib.sol')
const CargoXToken = artifacts.require('CargoXToken.sol')
const MilestonePricing = artifacts.require('MilestonePricing.sol')
const CargoXCrowdsale = artifacts.require('CargoXCrowdsale.sol')
const BonusFinalizeAgent = artifacts.require('BonusFinalizeAgent.sol')

module.exports = deployer => {
  deployer.link(SafeMathLib, [MilestonePricing)
  deployer.deploy(MilestonePricing, config.CX_MILESTONES)
}
