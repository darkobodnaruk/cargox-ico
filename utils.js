// This function calculates contract pricebased on the hardcoded base price (3000 ETH/CXO).
function price(discount) {
  var p = new BigNumber("1000")
  var d = new BigNumber(discount)
  var one = new BigNumber("1")
  var r = p.div(one.minus(d))
  var units_eth = new BigNumber(10**18)
  return units_eth.div(r)
}

// This function mimics the calculation done in the contract to verify the amount of tokens is correct based on the price
function tokens(value, price) {
  var m = new BigNumber(10 ** 8)
  var v = new BigNumber(value)
  var p = new BigNumber(price)

  return v.times(m).div(p)
}
