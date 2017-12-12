var request = require('request');

var s = request('https://www.npmjs.com/package/mocha-jsdom/');

s.on('data', function (chunk) {
  console.log(">>>>Data>>>> " + chunk);
});

s.on('end', function () {
  console.log(">>>>Done>>>>");
});

