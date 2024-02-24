const fs = require("fs");
const steem = require('steem');
const request = require("request");

var config = JSON.parse(fs.readFileSync("config.json"));
var rpc_node = process.env.RPC_NODE || config.rpc_nodes ? config.rpc_nodes[0] : (config.rpc_node ? config.rpc_node : 'https://api.steemit.com');
var interval = process.env.INTERVAL || config.interval;
var account = process.env.ACCOUNT || config.account;
var active_key = process.env.ACTIVE_KEY || config.active_key;

// Keep peg_multi as is, without environment variable override
var peg_multi = config.peg_multi || 1;

steem.api.setOptions({ transport: 'http', uri: rpc_node, url: rpc_node });

setInterval(startProcess, interval * 60 * 1000);
startProcess();

// Start The Main Process

  function startProcess() {
      // Load price directly from Binance for STEEM/USDT
      loadPriceBinance(function (price) {
          publishFeed(price, 0);
      }, 0);
  }

  function publishFeed(price, retries) {
      var peg_multi = config.peg_multi ? config.peg_multi : 1;
      var exchange_rate = { base: price.toFixed(3) + ' SBD', quote: (1 / peg_multi).toFixed(3) + ' STEEM' };

      log('Broadcasting feed_publish transaction: ' + JSON.stringify(exchange_rate));

      steem.broadcast.feedPublish(config.active_key, config.account, exchange_rate, function (err, result) {
          if (result && !err) {
              log('Broadcast successful!');
          } else {
              log('Error broadcasting feed_publish transaction: ' + err);

              if (retries < 2)
                  setTimeout(function () { publishFeed(price, retries + 1); }, 10 * 1000);
          }
      });
  }

  function loadPriceBinance(callback, retries) {
      log('Loading STEEM/USDT Price from Binance...');
      request.get('https://api.binance.com/api/v3/ticker/price?symbol=STEEMUSDT', function (e, r, data) {
          try {
              var steem_price = parseFloat(JSON.parse(data).price);
              log('Loaded STEEM/USDT Price from Binance: ' + steem_price);

              if (callback)
                  callback(steem_price);
          } catch (err) {
              log('Error loading STEEM/USDT price from Binance: ' + err);

              if(retries < 2)
                  setTimeout(function () { loadPriceBinance(callback, retries + 1); }, 10 * 1000);
          }
      });
  }

  function log(msg) { console.log(new Date().toString() + ' - ' + msg); }
