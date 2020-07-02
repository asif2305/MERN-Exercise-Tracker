const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();

const app= express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// create db connection
const password=encodeURIComponent('yGRz7LjqCo1havKU');
const uri=`mongodb+srv://asif:${password}@cluster0-u4yna.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDb database conenction established successfully... ');
})

// adding routing
const exerciseRouter=require('./routes/exercise');
const usersRouter=require('./routes/user');

app.use('/exercises',exerciseRouter);
app.use('/users',usersRouter);



app.listen(port,()=>{
    console.log(`Server is running on ports : ${port}`);
})
