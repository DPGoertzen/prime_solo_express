var mod1 = require('./mod1.js');
var mod2 = require('./mod2.js');

module.exports = {
makeAccountBalance : makeAccountBalance,
accountHeader : accountHeader,
};


function makeAccountBalance(){
  return(mod2.toUSCurrency(mod1.randomNum(100, 1000000)));
}

function accountHeader(){
  return "Account balance:\n";
}
