
const book=require('./models').book;

exports.findAllBook=(req,res)=>{

    book.findAll()
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message :"Server Error : 500 "});
    })
};

exports.findBookByID=(req,res)=>{

    const id=req.params.id;

    book.findByPk(id)
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message:"Server Error : 500 "});
    })
};

exports.findBookByName=(req,res)=>{

    // const bookName=req.params.bookName;

    book.findAll({where:{bookName:req.params.bookName}})
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message :"Server Error : 500 "});
    })
};

//insert
exports.addNewBook=(req,res)=>{

const newBook={
    bookName:"Runner",
    authorName:"Sundaram" }

    book.create(newBook)
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message:"Server Error : 500 "});
    })
};

//update
exports.updateBookByID=(req,res)=>{

    // const id=req.params.id;

    book.update({bookName:req.body.bookName},{where:{id:req.body.id}})
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message:"Server Error : 500 "});
    })
};

//delete
exports.deleteBookByID=(req,res)=>{

    // const id=req.params.id;

    book.destroy({where:{id:req.params.id}})
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message:"Server Error : 500 "});
    })
};