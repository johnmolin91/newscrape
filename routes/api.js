var path = require("path");
var info = require("../models/index.js");

module.exports = function(app) {

	app.get('/', function(req, res) {
		info.all(function(data) {
			var articlesObject = {
				info: data
			};
			console.log(articlesObject);
		})
		res.render("home", articlesObject);
	  });
};