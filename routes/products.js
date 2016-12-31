var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var app = require('express')();
var url = require('./config/mongo-server-config').url;

app.get('/product/:id', function(req, res) {
	mongoClient.connect(url, function(err, db) {
		if(err) {
			console.log(err);
			res.status(500).send();
		}

		var collection = db.collection('Products');

		collection.find({}).toArray(function(err, data) {
			res.json(data);

			db.close();
		});
	});
});

module.exports = app;