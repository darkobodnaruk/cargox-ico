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
  var cargoXToken;
  var cargoXCrowdsale;

  CargoXToken.deployed().then((instance) => {
    cargoXToken = instance
    /* set CargoXCrowdsale as minting agent */
    return cargoXToken.setMintAgent(CargoXCrowdsale.address, true)
  })
  .then(() => {
    /* set BonusFinalizeAgent as minting agent */
    return cargoXToken.setMintAgent(BonusFinalizeAgent.address, true)
  })
  .then(() => {
    /* set BonusFinalizeAgent as release agent */
    return cargoXToken.setReleaseAgent(BonusFinalizeAgent.address)
  })
  .then(() => {
    return CargoXCrowdsale.deployed()
  })
  .then((instance) => {
    cargoXCrowdsale = instance;
    /* set BonusFinalizeAgent as finalize agent on CargoXCrowdsale */
    return cargoXCrowdsale.setFinalizeAgent(BonusFinalizeAgent.address)
  })
  .then(() => {
    return cargoXCrowdsale.setRequireWhitelistedAddress(true, config.CX_WHITELIST_ADDRESS)
  })
  .then(() => {
    console.log("\n\nSuccesfully setup CargoX TGE.")

    console.log(
      "-- CargoXToken: " + CargoXToken.address + "\n" +
      "-- CargoXCrowdsale: " + CargoXCrowdsale.address + "\n" +
      "\n"
    )
  })
}
