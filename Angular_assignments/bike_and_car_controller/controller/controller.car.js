const car = require('../db/models').Car;

//select * from cars;
exports.findAllCar=(req,resp) => {
    console.log("findAll "+car);
    // resp.send("Reached in findall")
    if(car!==undefined){
        car.findAll()
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "No records found" }));
    }else{
        resp.send("car is undefined");
    }
    
}

//select * from cars where id=?;
exports.findByPK=(req, resp)=>{
    const id=req.params.id;
    car.findByPK(id)
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "No records found" }));

}

//insert into cars(name,brand) values(?,?)
exports.insertCar=(req, resp)=>{
    const new_car={
        name: req.body.name,
        brand: req.body.brand,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    car.create(new_car)
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "Error failed to add record!" }));
}
//update cars set name=? where id=?
exports.updateCar=(req, resp)=>{
    car.udpate({ brand: req.body.brand }, { where: { id: req.body.id } })
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "Error failed to update record!" }));
}
//delete cars where id=?
exports.deleteCar=(req, resp)=>{
    car.destroy({ where: { id: req.params.id } })
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({ message: "Error failed to delete record!" }));
}
