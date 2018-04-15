var request = require('request');

var base_url = 'https://api.binance.com/api/v3/ticker/';

function get_summary(coin, exchange, cb) {
  var req_url = base_url + '/price?symbol=PIVXBTC';
  request({uri: req_url, json: true}, function (error, response, body) {
    if (error) {
      return cb(error, null);
    } else {
      if (body.message) {
        return cb(body.message, null)
      } else {
        body.result[0].price = body.result[0].price;
        return cb (null, body.result[0]);
      }
    }
  });
}
