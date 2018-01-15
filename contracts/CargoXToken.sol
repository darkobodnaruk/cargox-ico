/**
 * Copyright 2018 CargoX.io (https://cargox.io)
 *
 * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt
 */
 pragma solidity ^0.4.8;

import "./CrowdsaleToken.sol";


/**
 * A CargoX token.
 *
 */
contract CargoXToken is CrowdsaleToken {

  function CargoXToken(string _name, string _symbol, uint _initialSupply, uint _decimals, bool _mintable)
    CrowdsaleToken(_name, _symbol, _initialSupply, _decimals, _mintable) {
  }

}
