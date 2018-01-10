var BigNumber = require('bignumber.js')

// This function calculates contract pricebased on the hardcoded base price (3000 ETH/CXO).
function price(base, discount) {
  var p = new BigNumber(base)
  var d = new BigNumber(discount)
  var one = new BigNumber("1")
  var r = p.div(one.minus(d))
  var units_eth = new BigNumber(10**18)
  return units_eth.div(r).round(0)
}

// This function mimics the calculation done in the contract to verify the amount of tokens is correct based on the price
function tokens(value, price) {
  var m = new BigNumber(10 ** 18)
  var v = new BigNumber(value)
  var p = new BigNumber(price)

  return v.times(m).div(p)
}

function calculateWeiPrice(basePrice, discount) {
  var weiAmount = 10**18 // calculate for 1 ETH
  var priceCalc = price(basePrice, discount)
  var tokenAmountWei = tokens(weiAmount, priceCalc)
  var tokenAmount = tokenAmountWei / 10**18
  console.log("1 ETH at discount of " + (100 * discount) + " % gives " + tokenAmount + " CXO (price is " + priceCalc + ")")
}

calculateWeiPrice(10000, 0.15)
calculateWeiPrice(10000, 0.12)
calculateWeiPrice(10000, 0.08)
calculateWeiPrice(10000, 0.04)
calculateWeiPrice(10000, 0)

module.exports = {
  price,
  tokens
}
