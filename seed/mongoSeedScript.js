const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/adidas';
const faker = require("faker");

mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

let productInfoSchema = mongoose.Schema({
  productName: String,
  productPrice: Number,
  productImageURL: String,
  dateCreated: Date,
  categoryName: String
});

let Product = mongoose.model("roductInfo", productInfoSchema);

async function seed() {
  for (let i = 0; i < 10000000; i++) {
    let name = faker.commerce.productName();
    let image = faker.image.imageUrl();
    let price = faker.commerce.price();
    let dateCreated = faker.date.past();
    let categoryName = faker.random.word();

    let item = new Product({
      productName: `${name}`,
      productPrice: `${price}`,
      productImageURL: `${image}`,
      dateCreated: `${dateCreated}`,
      categoryName: `${categoryName}`
    });

    await item
      .save()
      .then(success => {})
      .catch(err => {console.log(err)});
  }
}
seed();