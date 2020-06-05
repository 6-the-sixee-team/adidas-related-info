const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    productName:String,
    productPrice: Number,
    productImageURL: String,
    dateCreated: Date,
    dateModified: Date,
    categoryName: String,
    categoryId: Number,
});

const Product = mongoose.model('product', productSchema);

const getProducts = (id) => {
    //console.log('getProducts is called');
     return Product.find({ categoryId: id}).sort({dateCreated : +1}).limit(16);   
};

const addProduct = (newProduct, callback) => {
    //console.log('addProduct is called');
    //console.log(newProduct);
    return Product.update(
        {productName: newProduct.productName, 
         productPrice: newProduct.productPrice,
         productImageURL: newProduct.productImageURL,
         dateCreated: newProduct.dateCreated,
         categoryName: newProduct.categoryName,
         categoryId: newProduct.categoryId
        }, { upsert: true, setDefaultsOnInsert: true });
};

module.exports = Product;
module.exports.getProducts = getProducts;
module.exports.addProduct = addProduct;
