const Bike=require('../db/models').Bike;

//select * from bikes;
exports.findAll=(req,resp)=>{
    Bike.findAll()
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({message:"Error to find records"}));
}
//select * from bikes where id=?;
exports.findByPK=(req,resp)=>{
    Bike.findByPk(req.params.id)
        .then(data=>resp.send(data))
        .catch(err=>resp.status(500).send({message:"Error to find records"}));
}

//insert into bikes (name,brand) values(?,?);
exports.insert=(req,resp)=>{
    const bike={
        name:req.body.name,
        brand:req.body.brand,
        createdAt:new Date(),
        updatedAt:new Date()
    };
    Bike.create(bike)
    .then(data=>resp.send(data))
    .catch(err=>resp.status(500).send({message:"Error while adding new record"}));
}
//update bikes set name=? where id=?;
exports.update=(req,resp)=>{
    Bike.update({name:req.body.name},{where:{id:req.body.id}})
    .then(data=>resp.send(data))
    .catch(err=>resp.status(500).send({message:"Error while updating record"}));
}
//delete from bikes where id=?
exports.delete=(req,resp)=>{
    Bike.destroy({where:{id:req.params.id}})
    .then(data=>resp.send(data))
    .catch(err=>resp.status(500).send({message:"Error while deleting record"}));
}