var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://Nikita:0000@cluster0-xeokh.mongodb.net/test";

app.get('/', function (req, res) {
	MongoClient.connect(uri, function(err, client){
		const collection = client.db("test").collection("devices");
		collection.find().toArray(function(err, results){
			res.send(results);
		});		
		client.close();    
	});	
});

app.listen(3000, function () {
  console.log('Server run on 3000 port');
});