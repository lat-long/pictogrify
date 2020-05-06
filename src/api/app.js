require('dotenv').config()

var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.API_PORT || 3000;
  
routes(app);

var server = app.listen(PORT, function () {
    console.log("app running on port.", server.address().port);
});