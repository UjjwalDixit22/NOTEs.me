const mongoose = require('mongoose');

MONGODB_URI= "mongodb+srv://shivangagrawal139:root@cluster0.ciizs6l.mongodb.net"

mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
} ).then(()=>{
    console.log("Connected with MONGODB");
}).catch((error)=> console.log("Error connecting to database"));