
const express=require('express');
const app=express();

const port=2500;

app.get('/',(req,res)=>{
    res.send("Welcome to Book Shop !");
})

const bookController=require('./controller.book');
const router=require('express').Router();
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

app.get('/api/books',bookController.findAllBook);
 app.get('/api/books/id/:id',bookController.findBookByID);
app.get('/api/books/name/:bookName',bookController.findBookByName);
 app.post('/api/books/insert',bookController.addNewBook);
app.put('/api/books/update/:id',bookController.updateBookByID);
app.delete('/api/books/delete/:id',bookController.deleteBookByID);


app.use('/api/books',router);
app.listen(port,()=>{
    console.log("Server Running at http://localhost:2500 ");
})