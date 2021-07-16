module.exports = app => {
    const CarController = require('../controller/controller.car');
    const express = require('express');
    const router = express.Router();
    //// http://localhost:3000/api

    //GET       http://localhost:3000/api/cars/
    router.get('/cars/', CarController.findAllCar);

    //GET       http://localhost:3000/api/cars/:id
    router.get('/cars/:id', CarController.findByPK);

    //POST      http://localhost:3000/api/cars/
    router.post('/cars/', CarController.insertCar);

    //PUT       http://localhost:3000/api/cars/ json{name:,id:}
    router.put('/cars/', CarController.updateCar);

    //DELETE    http://localhost:3000/api/cars/:id
    router.delete('/cars/:id', CarController.deleteCar);

    app.use('/api', router);

}