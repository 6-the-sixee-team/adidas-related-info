const Product = require('../../database/models/Product.js');

exports.getAll = (req, res) => {
    Product.getProducts(req.params.id)
        .then(products => res.status(200).send(products))
        .catch(err => { 
            res.status(400);
            res.end();
        });
},

exports.addProd = (req, res) => {
    //console.log('addProd called');
    //console.log(req.body);
    Product.addProduct(req.body)
        .then(results => {
            //console.log(results)
            res.status(201);
            res.end();
        })
        .catch(err => { 
            res.status(400);
            res.end();
        });
}