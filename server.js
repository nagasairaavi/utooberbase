const { response } = require('express');
var  exp=require('express');
const { request } = require('http');
const app=exp();
const mc=require('mongodb').MongoClient;
var dbo;
const path=require('path');
app.use(exp.static(path.join(__dirname,'./dist/project2')));
const dburl="mongodb://nagSS:nagSS@cluster0-shard-00-00-w71gd.mongodb.net:27017,cluster0-shard-00-01-w71gd.mongodb.net:27017,cluster0-shard-00-02-w71gd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},
    (error,client)=>{
        if(error){
            console.log("error in db connection",error);
        }else{
            dbo=client.db("sampledatabase");
            console.log("connected to db")
        }
    })

//to upload one
app.use(exp.json());
app.post('/upload',(request,response)=>{
    dbo.collection("youtubercollection").insertOne(request.body,(error,success)=>{
        if(error){
            console.log("err in save",error);
        }
        else{
            response.send({message:"success"})
        }
    })
})

//to get all youtubers

app.get('/youtubers',(request,response)=>{
    console.log("c");
    dbo.collection("youtubercollection").find().toArray((error,data)=>{
        console.log("d");
        console.log(data);
        if(error){
            console.log("err in read",error);
        }
        else if(data===null){
            response.send("No youtubers data")
        }
        else{
            console.log("data array is",data);
            response.send({message:data})
        }
    })
})


//upload sheet
//import require modules
const multer = require('multer');
const xlsxtojson=require("xlsx-to-json-lc");
const xlstojson=require("xls-to-json-lc");
//multers disk storage settings
var storagemarks = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, `${new Date().getTime()}_${file.originalname}`)
    }
   });
   // upload middleware
   const uploadmarks = multer({ storage:storagemarks});
   // convert excel to json route
   app.post("/uploadsheet",uploadmarks.single('excel'),(req,res)=>{
    if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
    exceltojson = xlsxtojson;
    } else {
    exceltojson = xlstojson;
    }
    try {
    exceltojson({
    input: req.file.path, //the same path where we uploaded our file
    output: null, //since we don't need output.json
    lowerCaseHeaders:true
    }, function(err,result){
    if(err) {
    return res.json({error_code:1,err_desc:err, data: null});
    }
    dbo.collection("youtubercollection").insertMany(result, (err, data) => {
    console.log(data);
    res.json({error_code:0,err_desc:null, data:
   data["ops"],"message":"Sheet uploaded successfully"});
    });
   
    });
    } catch (e){
    res.json({error_code:1,err_desc:"Corrupted excel file"});
    }
    });
































































    app.listen(process.env.PORT || 1000 ,()=>{
        console.log("server started")
    })