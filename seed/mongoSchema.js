const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/adidas';

const db = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db
  .then(db => {
      //console.log(db)
      console.log(`connected to ${mongoURI}`)
  })
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

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

module.exports.productSchema = productSchema;
module.exports = db;
