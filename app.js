var events = require('events');
var util = require('util');
var fs = require('fs');

var Person = function (name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('Mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function (person) {
  person.on('speak', function (msg) {
    console.log(person.name + ' said : ' + msg);
  })
})

//james.emit('speak', 'hey dudes');
//console.log(james);

// fs.readFile('readme.txt', 'utf8', function (err, data) {
//   fs.writeFile('writeme.txt', data);
// })

var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');

myReadStream.on('data', function (chunk) {
  console.log('new chunk received :');
  console.log(chunk);
});