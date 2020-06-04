const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: Number,
    productName:String,
    productPrice: Number,
    productImageURL: String,
    datecreated: Date,
    dateModified: Date,
    categoryName: String,
    categories: Array
});


const Product = mongoose.model('Schedule', productSchema);

module.exports.productSchema = productSchema;
module.exports.Product = Product;