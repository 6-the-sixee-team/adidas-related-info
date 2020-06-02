const express = require('express');
const bodyParser = require('body-parser');
const Products = require('../database/index.js');
const db = require('../database');
const app = express();
const PORT = 3002;

const {getAll} = require('./controllers/products.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));

//product route
app.get('/products', getAll);

app.listen(PORT, () => {
    console.log(`Web server running on: http://localhost:${PORT}`);
});