var util = require('util');

require('colors');

var _ = require('lodash');
var googleFinance = require('../..');

var SYMBOL = 'TYO:5341';

googleFinance.companyNews({
  symbol: SYMBOL,
  lang: 'cn'
}).then(function(news) {
  console.log(util.format(
    '=== %s (%d) ===',
    SYMBOL,
    news.length
  ).cyan);
  if (news[0]) {
    console.log(
      '%s\n...\n%s',
      JSON.stringify(news[0], null, 2),
      JSON.stringify(news[news.length - 1], null, 2)
    );
  } else {
    console.log('N/A');
  }
});