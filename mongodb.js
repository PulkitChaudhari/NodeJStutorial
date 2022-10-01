module.exports = dbConnection;

const { response } = require('express');
const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const database = 'e-comm'
const client = new MongoClient(url);

async function dbConnection(){
    let res = await client.connect();
    db = res.db(database);
    return db.collection('products');
}