var express = require("express");
var path = require("path"); // <-- add this
var bodyParser = require("body-parser");
var app = express();
var views = path.join(process.cwd(), "views");
var urls = {};

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    var homePath = path.join(views, "home.html");
    res.sendFile(homePath);
});

app.post("/urls", function (req, res) {
    var newUrl = req.body.url;
    urls.push(newUrl);
    var index = urls.length - 1;
    res.send("View your url at localhost:3000/urls/" + index);
});

app.get("/urls/:index", function (req, res) {
    var url = urls[req.params.index];
    res.redirect(url);
});

app.listen(3000, function (req, res) {
    console.log("WORKING!!");
});