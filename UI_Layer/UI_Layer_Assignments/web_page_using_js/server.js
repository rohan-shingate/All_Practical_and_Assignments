

const http=require('http');
const fs=require('fs');
const port=2500;




function onRequest(request,response) {
    // console.log("request received .");
    // console.log("request received .");
    // const file_name=req.url;


    console.log("Response send successfully !");
    const file_name=request.url;
    switch(file_name){
        case "/":
        case "/index.html":
            fs.readFile('./index.html',function(err,data){
                if(err){
                    console.log(err);
                }
                console.log("request.url: "+request.url);
                response.write(data);
                response.end();
            })
            break;
            case "/css/style.css":
                fs.readFile('./css/style.css',function(err,data){
                    if(err){
                        console.log(err);
                    }                
                    response.write(data);
                    response.end();
                })
              
                break;
                case "/profile.html":
                    fs.readFile('./profile.html',function(err,data){
                        if(err){
                            console.log(err);
                        }
                        console.log("request.url: "+request.url);
                        response.write(data);
                        response.end();
                    })
                    break;
                default :
                console.log("No file found!");
        }
     
    }





http.createServer(onRequest).listen(port,function(){
    console.log("started...");
})