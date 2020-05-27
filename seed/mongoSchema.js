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

const productInfoSchema = new mongoose.Schema({
    id: Number,
    productName:String,
    productPrice: Number,
    productImageURL: String,
    dateCreated: Date,
    dateModified: Date,
    categoryName: String
});

const productInfo = mongoose.model('Schedule', productInfoSchema);

module.exports.productInfoSchema = productInfoSchema;
module.exports = db;
