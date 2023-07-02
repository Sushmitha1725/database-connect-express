var express = require('express');
var server = express();
var routes = require('./route/route');
var mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb://127.0.0.1:27017/pro",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
//local map does not map
//driver->mongoose-->root
//monogodb is another driver that takes more memory
//cros->croos origin resource site can launch in any website
//mvc->model->attribute and collection
//view ->user interface 
//controller->intermediate
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});