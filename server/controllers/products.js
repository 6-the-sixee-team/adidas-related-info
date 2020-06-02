const Product = require('../../database/models/Product.js');

exports.getAll = (req, res) => {
    //console.log(req);
    //console.log(res);
    //console.log("getall methods called");
    Product.getProducts()
        .then(products => res.status(200).send(products))
        .catch(err => { 
            res.status(400);
            res.end();
        });
}