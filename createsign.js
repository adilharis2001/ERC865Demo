

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
//var oracledb = require('oracledb');
//oracledb.maxRows = 50000;
//var dbConfig = require('./dbconfig.js');
//require( "console-stamp" )( console, { pattern : "dd/mm/yyyy HH:MM:ss.l" } );

var fs = require('fs')
var app = express();

var d = new Date();		
var datm = d.toLocaleString();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/index.html'));
	res.sendFile(path.join(__dirname + '/CreateSignature.html'));
});


var server = app.listen(8337, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Mulitichain listening at port 8337, host, port");
})
