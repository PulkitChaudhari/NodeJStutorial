// In this file we define the schema of the data to be interacted with.
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    category : String
});
module.exports = mongoose.model('products',productSchema);

