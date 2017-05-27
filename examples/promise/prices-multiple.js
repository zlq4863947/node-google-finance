var util = require('util');
var _ = require('lodash');

require('colors');

var googleFinance = require('../..');

var SYMBOL = 'TYO:6664'; //'NASDAQ:AAPL';// 

var SYMBOLS = [
  'SHA:600519',
  'TYO:6664'
];
var FROM = '2017-05-01';
var TO = '2017-12-31';

googleFinance.prices({
  //symbols: SYMBOLS,
  symbol: SYMBOL,
  interval: 300,
  period: '1d'
}).then(function(result) {
  var isMulti = false;
  var showData = function(quotes, symbol) {
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
  }
  if (isMulti) {
    _.each(result, function(quotes, symbol) {
      showData(quotes, symbol);
    });
  } else {
    showData(result, SYMBOL);
  }
});