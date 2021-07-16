module.exports=app=>{
const BikeController=require('../controller/controller.bike');
const express=require('express');
const router=express();

router.get('/bikes/',BikeController.findAll);
router.get('/bikes/:id',BikeController.findByPK);
router.post('/bikes/',BikeController.insert);
router.put('/bikes/',BikeController.update);
router.delete('/bikes/:id',BikeController.delete);

app.use('/api/',router);
}