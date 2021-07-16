
const express=require("express");

const app=express();

const cors = require("cors");

const bodyParser=require('body-parser');



var corsOptions = {
    origin: "http://localhost:4200"
  };

  app.use(cors(corsOptions));

const port=2500;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const productController=require("./controller.product");
const router=require("express").Router();

//FindAll
// app.get('/',productController.findAll);

app.get('/api/products',productController.findAll);
//FindOne by ID
app.get('/api/products/id/:id',productController.findOne);
//Create new product
app.post('/api/products/create',productController.create);
//Update by ID
app.put('/api/products/update/:id',productController.update);
//Delete by ID
app.delete('/api/products/delete/:id',productController.delete);


app.use('/',router);

app.listen(port,()=>{
    console.log("Server Running at http://localhost:2500 .")
})

