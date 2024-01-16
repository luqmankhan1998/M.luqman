var createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const rec = require('./Data');
var cookieParser = require('cookie-parser');
//const Header = require('./Header');
//const bodyParser = require('body-parser');
var bodyparser = require("body-parser");
var mysql = require("mysql");
var fileUpload = require("express-fileupload");
var path = require("path");
const Connection = require('mysql/lib/Connection');
const app = express();
// const port = 3000;
app.use(cors());
app.use(bodyparser.json());
//app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(fileUpload());


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Register",
});


db.connect((err)=>{
  if(err)
    console.log("Error in Connection");
  else
    console.log("MySql Db Connected...");
});
app.post("/InputData",function(req,res){
  console.log("Working");
  console.log(req.body);
  const firstname = req.body.f;
  const lastname = req.body.l;
  const email = req.body.e;
  const timage = req.files.i;
  const image = timage.name;

  console.log(timage);
  console.log(image);
  
  console.log(__dirname);
 const fullPath = path.join(__dirname,"../frontend","public","images",image);

  timage.mv(fullPath,(err)=>{
    if(err)
      console.log("File Uploading Error");
    else
    console.log("File has been Uploaded...");

 db.query("insert into data (firstname,lastname,email,image) values(?,?,?,?)",[firstname,lastname,email,image],(err,result)=>{
    
  if(err)
      console.log(err);
   else{
    console.log(result)
   }
  }); 

  console.log(firstname);
  console.log(email);
});
});
app.get("/dynamic",(req,res)=> {
    db.query("select * from data",(err,result)=>{
      if(err)
        console.log(err)
  
        res.send(result);
    });
  });   
  app.delete("/delstd/:id",(req,res)=>{
  const shadow = req.params.id;
  console.log(shadow);
  db.query("delete from data where id=?",shadow,(err,result)=>{
    if(err)
      console.log(err);
  })
});
app.get('/list',(req,res)=>{
  res.json(rec);
});

app.post("/adduser",function(req,res){
  console.log("Working");
  console.log(req.body);
  const first = req.body.f;
  const last = req.body.l;
  const email = req.body.e;
  const password = req.body.p;
  const contact = req.body.c;
  const dob = req.body.d;
  const timage = req.files.i;
  const image = timage.name;

  console.log(timage);
  console.log(image);
  
  console.log(__dirname);
 const fullPath = path.join(__dirname,"../frontend","public","images",image);

  timage.mv(fullPath,(err)=>{
    if(err)
      console.log("File Uploading Error");
    else
    console.log("File has been Uploaded...");

 db.query("insert into login (first,last,email,password,contact,dob,image) values(?,?,?,?,?,?,?)",[first,last,email,password,contact,dob,image],(err,result)=>{
    
  if(err)
      console.log(err);
   else{
    console.log(result)
   }
  }); 

  console.log(first);
  console.log(email);
});
});
 
module.exports = app;
