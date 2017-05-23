var util = require('util');
var _ = require('lodash');

require('colors');

var googleFinance = require('../..');

var SYMBOL = 'TYO:5341'; //'NASDAQ:AAPL';// 

var SYMBOLS = [
  'NASDAQ:AAPL',
  'TYO:5341'
];
var FROM = '2017-05-01';
var TO = '2017-12-31';

googleFinance.prices({
  symbols: SYMBOLS,
  from: FROM,
  to: TO
}).then(function(result) {
  _.each(result, function(quotes, symbol) {
    console.log(util.format(
      '=== %s (%d) ===',
      symbol,
      quotes.length
    ).cyan);
    if (quotes[0]) {
      console.log(
        '%s\n...\n%s',
        JSON.stringify(quotes[0], null, 2),
        JSON.stringify(quotes[quotes.length - 1], null, 2)
      );
    } else {
      console.log('N/A');
    }
  });
});