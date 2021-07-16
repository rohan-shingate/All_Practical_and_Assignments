const express = require("express");
const bodyParser = require("body-parser");
const Item = require("./models/item");
const mongoose = require('mongoose');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect("mongodb://localhost:27017/Angular")
    .then(() => { console.log("connected to db") }).catch(() => { console.log("connection failed") });
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT, FETCH"
    );
    next();
});

app.post("/api/menu", (req, res, next) => { //add new item
    const item = new Item({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    });
    item.save().then(createdItem => {
        res.status(201).json({
            message: "Item added successfully",
            itemId: createdItem._id
        });
    });
});

app.get("/api/menu", (req, res, next) => { //get items
    Item.find().then(documents => {
        res.status(200).json(
            //message: "Item fetched successfully!",
            documents
        );
    });
});

app.get("/api/detail/:id", (req, res, next) => { //get single item
    var key = "id";
    var i = parseInt(req.params.id);
    // var filter = {};
    // filter[key] = i;
    // console.log(filter);
    // Item.find(filter).then(document => {
    //     console.log(document);
    //     res.status(200).json(
    //         //  message: "Item fetched successfully!",
    //         document[0]
    //     );

    // });
    Item.findOne({ id: i })
        .then(document => {
            console.log(document);
            res.status(200).json(
                //  message: "Item fetched successfully!",
                document
            );

        });

});

app.put("/api/detail/:id", (req, res, next) => { //update single items
    const updated_item = {
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    };
    console.log("updated item " + updated_item);
    //findItemBy id
    Item.findOneAndUpdate({ id: updated_item.id }, { $set: updated_item })
        .then(document => {
            console.log("updated document " + document);
            res.status(200).json({
                // message: "Item fetched successfully!",
                document
            });
            console.log("updated document after" + document);

            // Item.updateOne({ id: updated_item.id }, updated_item) //id: req.body.id,
            //     .then(document => {
            //         res.status(200).json({
            //             // message: "Item fetched successfully!",
            //             document
            //         });
            //     });

        });
});
app.delete("/api/menu/:id", (req, res, next) => { //delete item
    var i = parseInt(req.params.id);
    Item.findOneAndDelete({ id: i }).then(result => {
        console.log(result);
        console.log(i);
        res.status(200).json({ message: "Item deleted!" });
    });
});


module.exports = app;