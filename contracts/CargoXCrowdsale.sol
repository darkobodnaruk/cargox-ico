/**
 * Copyright 2018 CargoX.io (https://cargox.io)
 *
 */
pragma solidity ^0.4.8;

import "./MintedEthCappedCrowdsale.sol";

/**
 * CargoX specific extensions.
 *
 * - Support for whitelisted addresses in ICO (for server side KYC).
 * - Abillity to set cap in pre funding stage.
 * - Abillity to set start in pre funding stage.
 */
contract CargoXCrowdsale is MintedEthCappedCrowdsale {

  function CargoXCrowdsale(address _token, PricingStrategy _pricingStrategy, address _multisigWallet, uint _start, uint _end, uint _minimumFundingGoal, uint _weiCap, uint _maxInvestment) MintedEthCappedCrowdsale(_token, _pricingStrategy, _multisigWallet, _start, _end, _minimumFundingGoal, _weiCap, _maxInvestment) {

  }

  // Crowdsale minimum funding goal changed
  event MaximalInvestmentChanged(uint maximalInvestment);

  // Crowdsale minimum funding goal changed
  event MinimumFundingGoalChanged(uint newMinimumFundingGoal);

  // Crowdsale cap has been changed
  event WeiCapChanged(uint newWeiCap);

  // Crowdsale start time has been changed
  event StartsAtChanged(uint newEndsAt);

  /**
   * Allow crowdsale owner to change hard cap in pre funding stage.
   *
   */
  function setWeiCap(uint _weiCap) onlyOwner inState(State.PreFunding) {
    weiCap = _weiCap;
    WeiCapChanged(weiCap);
  }

  /**
   * Allow crowdsale owner to change minimum funding goal in pre funding stage.
   *
   */
  function setMinimumFundingGoal(uint _minimumFundingGoal) onlyOwner inState(State.PreFunding) {
    minimumFundingGoal = _minimumFundingGoal;
    MinimumFundingGoalChanged(minimumFundingGoal);
  }

  /**
   * Allow crowdsale owner to change minimum funding goal in pre funding stage.
   *
   */
  function setMaximalInvestment(uint _maxInvestment) onlyOwner inState(State.PreFunding) {
    maximalInvestment = _maxInvestment;
    MaximalInvestmentChanged(maximalInvestment);
  }

  /**
   * Allow crowdsale owner to change starts at in pre funding phase.
   *
   */
  function setStartsAt(uint time) onlyOwner inState(State.PreFunding) {

    if(now > time) {
      throw; // Don't change past
    }

    startsAt = time;
    StartsAtChanged(startsAt);
  }
}
