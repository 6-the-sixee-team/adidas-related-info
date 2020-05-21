DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE productInfo(
    productId INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    productName VARCHAR(255),
    productPrice INTEGER,
    productImageURL VARCHAR(255),
    productSizesAvailable VARCHAR(100),
    productAvailability BOOLEAN,
    productCategory VARCHAR(100)
);

CREATE TABLE productCategory(
    categoryId INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    productId INTEGER
    productName VARCHAR(255),
    productPrice INTEGER,
    productImageURL VARCHAR(255),
    productSizesAvailable VARCHAR(100),
    productAvailability BOOLEAN,
    productCategory VARCHAR(100)
    FOREIGN KEY (productCategory) REFERENCES product_info(productCategory),
);