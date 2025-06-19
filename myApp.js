var express = require('express');
require('dotenv').config();
let bodyParser = require('body-parser')
var app = express(); 
console.log(process.env.MESSAGE_STYLE);
//7
app.use((request, response, next) => {
  console.log(request.method + " " + request.path + " - " + request.ip);
  next();
});
//let app = express();
//console.log(process.env//.VARIABLE_ONE)


//app.use('/pics', express.static(__dirname + '/images'));
//console.log("Hello World");
/** app.get("/", (req,res)=>{
  res.send("Hello Express");

});*/

// app.get("/",function(req,res){
  //res.sendFile(__dirname + "/views/index.html");
//});



//serve json on a specific route
//app.get('/json',(request,response)=> {
  //response.json(message);
//});

/**5)use the .env File to configure app*/

app.get("/", function(req, res){
  res.sendFile(__dirname+ '/views/index.html');
app.use(express.static(__dirname + "/public"));
})
//6.use the .env file
let message = { message: "Hello json" };
app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.json({ message: "HELLO JSON" });
  } else {
    response.json(message);
  }
});
//8
app.get('/now', (request, response, next) => {
  request.time = new Date().toString()
  next()
} , (request, response) => {
  response.json({'time' : request.time})
})
module.exports = app;
//9
app.get('/:word/echo', (request, response) => {
  response.json({echo : request.params.word})
})
app.get("/name", (request, response) => {
  let string = request.query.first + " " + request.query.last;
  response.json({ name: string });
});
app.post(
  "/name",
  bodyParser.urlencoded({ extended: false }),
  (request, response) => {
    let string = request.body.first + " " + request.body.last;
    response.json({ name: string });
  })

app.use(bodyParser.urlencoded({ extended: false }))

























