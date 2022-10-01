const express = require('express');
const dbConnection = require('./mongodb');
const app = express();

// GET METHOD
app.get('/',async (req,resp)=>{
    let data = await dbConnection();
    let result = await data.find().toArray();
    console.log(result);
    resp.send(result);
});

// POST METHOD

app.use(express.json());

app.post('/',async (req,resp)=>{
    console.log(req.body);
    let data = await dbConnection();
    let result = await data.insert(req.body);
    resp.send(result);
});

// PUT METHOD

app.put('/',async (req,resp)=>{
    console.warn(req.body);
    resp.send("result achieved");
    let data = await dbConnection();
    let result = await data.updateOne({
        name:req.body.name 
    },{$set:req.body});
})
 
// Here we can also send the parameter to be changed from the link like localhost:4500/Blackberry
// Code for updating that data will be : 
// app.put('/:name',async (req,resp)=>{
//     console.warn(req.body);
//     resp.send("result achieved");
//     let data = await dbConnection();
//     let result = await data.updateOne({
//         name:req.params.name 
//     },{$set:req.body});
// })

// DELETE API METHOD

const mongodb = require('mongodb');
const { ObjectID } = require('bson');
app.delete('/:id',async (req,resp)=>{
    const data = await dbConnection();
    const result = await data.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    resp.send("done");
})

app.listen(4500);