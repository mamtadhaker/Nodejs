const express = require('express')
const app = express()
var path = require('path')
var bodyParser = require('body-parser')

var cookieParser = require('cookie-parser')

app.use(cookieParser());

app.use(function (req, res, next) {
  console.log('request: ', req, req._body, typeof req.body);
  next();
})

app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('request: ', req);
  next();
})

app.use(function (req, res, next) {
  console.log("cookies:", req.cookies);
  next();
})

// var corsOptions = {
//   origin: "*",
//   methods: "GET,PUT,POST"
// }

// app.ues(cors(corsOptions));

var myLogger = function (req, res, next) {
  console.log('LOGGED {$req.method}')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})
//Respond to a PUT request to the / user route:

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

//app.use("/static", express.static("public"))
//app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname + '/public')));
app.use("/static", express.static(path.join(__dirname + '/images')));

app.all("/secret", function (req, res, next) {
  console.log('Accessing the secret section...')
  res.send('got a secret request')
  next() // pass control to the next handler
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('something broke');
})
