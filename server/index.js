require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const app = express();
const PORT = 3002;

const {getAll, addProd} = require('./controllers/products.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));

//product route
app.get('/products/:id', getAll);

app.post('/products', addProd);

app.listen(PORT, () => {
    console.log(`Web server running on: http://localhost:${PORT}`);
});