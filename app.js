//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));
//app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
//  let cityName = req.body.cName;
  let cId = req.body.id;

  let options = {
    url: "http://api.openweathermap.org/data/2.5/forecast",
    method: "GET",
    qs: {
      id: cId,
      appid: "6ed27dba0d0105677f43bd392e5a1e7d",

    }
  };

  request(options, function(error, response, body){
//   res.send(response);

//let data = JSON.parse(response);
//let weather = data.body;

let data = body;
let weather = data.city;

res.send(" the weather is " + weather);




//    let weather = data.weather[0].description;

//    console.log(weather);

  //  res.send(weather);


  });

});

app.listen("3000", function(){
  console.log("The server is running on Port 3000");
});

//api key
//6ed27dba0d0105677f43bd392e5a1e7d
