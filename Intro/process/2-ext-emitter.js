var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function () {
  console.log("I've started!");
});

r.on('data', function (d) {
  console.log("I've received data -> " + d);
});

r.on('end', function (c) {
  console.log("Event end after " + c + " events");
});