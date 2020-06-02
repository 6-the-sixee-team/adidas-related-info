const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    productName:String,
    productPrice: Number,
    productImageURL: String,
    dateCreated: Date,
    dateModified: Date,
    categoryName: String
});

const Product = mongoose.model('product', productSchema);

const getProducts = (name) => {
    //console.log('getProducts is called');
     return Product.find({ categoryName: "Sleek"}).sort({dateCreated : +1}).limit(16);   
};

module.exports = Product;
module.exports.getProducts = getProducts;
