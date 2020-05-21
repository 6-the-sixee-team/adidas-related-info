const mongoose = require('mongoose');

const productInfoSchema = new mongoose.Schema({
    productId: Number,
    productName:String,
    productPrice: Number,
    productImageURL: String,
    datecreated: Date,
    dateModified: Date,
    categoryName: String,
    categories: Array
});


const productInfo = mongoose.model('Schedule', productInfoSchema);

module.exports.productInfoSchema = productInfoSchema;
module.exports.productInfo = productInfo;