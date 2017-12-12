var request = require('request');
var fs = require('fs');


//var s = request('https://www.npmjs.com/package/mocha-jsdom/');

//s.pipe(process.stdout);
s = request('https://www.npmjs.com/package/mocha-jsdom/').pipe(fs.createWriteStream('npmjs.html'));