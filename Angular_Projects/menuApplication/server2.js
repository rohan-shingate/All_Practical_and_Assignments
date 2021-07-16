const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const https = require('https');
const mongo = require('mongoose');

var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err, response) {
    if (err) { console.log(err); } else { console.log('Connected to ' + db, ' + ', response); }
});
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var Schema = mongo.Schema;
var ItemSchema = new Schema({
    name: { type: String },
    price: { type: Number },
}, {
    versionKey: false
});
var model = mongo.model('items', ItemSchema, 'items');
app.post("/api/menu", function(req, res) { //add item
    var mod = new model(req.body);

    mod.save(function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: "Item has been inserted!" });
        }
    });
})
app.post("api/updateItem", function(req, res) { //update item
    model.findByIdAndUpdate(req.body.id, { name: req.body.name, price: req.body.price },
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: "Item has been updated!" });
            }
        });
})
app.post("api/deleteItem/:id", function(req, res) { //delete item
    model.remove({ _id: req.body.id }, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: "Item has been deleted!" });
        }
    });
})
app.get("api/menu", function(req, res) { //find all
    model.find({}, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})
app.post("api/findItem/:id", function(req, res) { //find one
    model.find({ _id: req.body.id }, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})
app.listen(3000, function() {
    console.log('Server is listening on port 3000!')
})
