const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const MONGO_DATA_FILE = path.join(__dirname, 'mongodata.csv');

const faker = require("faker");

function writeOneMillionTimes(writer) {
  let i = 10000000;

  function write() {
    let ok = true;
    do {
      i -= 1;
        
      const name = faker.commerce.productName();
      const image = faker.image.imageUrl();
      const price = faker.commerce.price();
      const dateCreated = faker.date.past();
      const categoryName = faker.random.word();

      const data = {
        productName: `${name}`,
        productPrice: `${price}`,
        productImageURL: `${image}`,
        dateCreated: `${dateCreated}`,
        categoryName: `${categoryName}`
      };

      if (i === 0) {
        // last time!
        writer.write(data);
        writer.end();
        console.log('DONE');
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

const makeMongoSeed = () => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(MONGO_DATA_FILE));
  writeOneMillionTimes(writer);
}

makeMongoSeed();