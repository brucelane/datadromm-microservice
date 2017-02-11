var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config.js');
var app = express();

var port = process.env.port || 8080;
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());
if(config.environment === "dev") app.use(morgan('dev'));

app.listen(port, function(){
    console.log('app initialized');
});
