/* Libraries */
const BigNumber = require('bignumber.js')
const Web3 = require('web3')
const web3 = new Web3()
const config = require('../config.js')

/* Contracts */
const Airdropper = artifacts.require('Airdropper.sol')

module.exports = deployer => {
  deployer.deploy(Airdropper)
}
