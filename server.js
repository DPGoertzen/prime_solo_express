var express = require('express');
// var mod1 = require('./modules/mod1.js');
// var mod2 = require('./modules/mod2.js');
var mod3 = require('./modules/mod3.js');
var app = express();

var port;
if(process.env.PORT){
  port = process.env.PORT
} else {
  port = 3000
}


var balanceObject = {};

app.get('/balance', function (req, res) {

  balanceObject.header = mod3.accountHeader();
  balanceObject.balance = mod3.makeAccountBalance();
  console.log(balanceObject);
  res.send(balanceObject);
});

app.use(express.static('public'));


var server = app.listen(port, function () {
  var port = server.address().port;
  console.log('listening on', port);
});
