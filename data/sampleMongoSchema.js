const mongoose = require('mongoose');

const productInfoSchema = new mongoose.Schema({
    productId: Number,
    productName:String,
    productPrice: Number,
    productImageURL: String,
    productSizesAvailable: String,
    productAvailability: Boolean,
    productCategory: Array
});


const productInfo = mongoose.model('Schedule', productInfoSchema);
const productCategory = mongoose.model('Schedule', productCategorySchema);

module.exports.productInfoSchema = productInfoSchema;
module.exports.productCategorySchema = productCategorySchema;
module.exports.productInfo = productInfo;
module.exports.productCategory = productCategory;