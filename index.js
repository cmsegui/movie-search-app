var express = require("express");
var app = express();
var request = require("request");


app.get("/results", function(req, res) {
    request("http://omdbapi.com/?s=california&apikey=thewdb", function(error, response, body) {
        if(!error && response.statusCode === 200) {
            var parsedData = JSON.parse(body);
            res.send(body);
        }
    });
});






app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started");
});