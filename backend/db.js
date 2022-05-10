const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/iNotebook?directConnection=true"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connect to mongo successfully")
    })
}

module.exports = connectToMongo;