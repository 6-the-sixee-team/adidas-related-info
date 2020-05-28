const fs = require('fs');
const path = require('path');

const CATEGORY_PRODUCT_FILE = path.join(__dirname, 'insert_data.sql');

const catNames = [
    'category1',
    'category2',
    'category3',
    'category4',
    'category5',
    'category6',
    'category7',
    'category8',
    'category9',
    'category10'
];

const productNames = [
    'product1',
    'product2',
    'product3',
    'product4',
    'product5',
    'product6',
    'product7',
    'product8',
    'product9',
    'product10'
];

const productPrices = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];

const createdDates = [
    '2019-01-01',
    '2019-01-02',
    '2019-01-03',
    '2019-01-04',
    '2019-01-05',
    '2019-01-06',
    '2019-01-07',
    '2019-01-08',
    '2019-01-09',
    '2019-01-10'
];

const modifiedDates = [
    '2019-02-01',
    '2019-02-02',
    '2019-02-03',
    '2019-02-04',
    '2019-02-05',
    '2019-02-06',
    '2019-02-07',
    '2019-02-08',
    '2019-02-09',
    '2019-02-10',
];

const productImages = [
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/d699a097bfb846298334aad80120f0f2_9366/EG4957_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/2654f10f58e045c2a029ab7d00db4040_9366/FV2808_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/d699a097bfb846298334aad80120f0f2_9366/EG4957_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/2654f10f58e045c2a029ab7d00db4040_9366/FV2808_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/71d8a38f532442a6a31faae700d3e37c_9366/EG4960_00_plp_standard.jpg",
    "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/d699a097bfb846298334aad80120f0f2_9366/EG4957_00_plp_standard.jpg"
];

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const insertCategoryInfo = 'INSERT INTO categoryInfo(categoryName) VALUES ('
const insertProductInfo = 'INSERT INTO productInfo(productName, productPrice, dateCreated, dateModified, productImageURL, category) VALUES (';
const querySuffix = '); \n';

const getRandomInt = (max) =>  {
    return Math.floor(Math.random() * Math.floor(max));
}

function writeOneMillionTimes(writer) {
    var i = 10000000;
    
    writer.write("USE adidas;\n");
    
    function write() {
      var ok = true;
      do {
        i -= 1;
        const randomIdx = getRandomInt(10);

        let categoryInfo = insertCategoryInfo;
        let productInfo = insertProductInfo;
        categoryInfo += '"'+ catNames[randomIdx]+ '"' + querySuffix;

        productInfo += '"'+ productNames[randomIdx] + '"' + ', '
                    +  productPrices[randomIdx] + ', '
                    +  '"'+ createdDates[randomIdx] + '"' + ', '
                    +  '"'+ modifiedDates[randomIdx] + '"' + ', '
                    +  '"'+ productImages[randomIdx] + '"' + ', '
                    +  categories[randomIdx]
                    +  querySuffix;

        const data = categoryInfo + productInfo;                    
        if (i === 0) {
          // last time!
          writer.write(data);
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
  
// usage
const makeSeed = () => {
    const write_stream = fs.createWriteStream(CATEGORY_PRODUCT_FILE);
    writeOneMillionTimes(write_stream);
}

makeSeed();