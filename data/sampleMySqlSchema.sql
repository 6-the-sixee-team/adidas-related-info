DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE productInfo(
    productId INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    productName VARCHAR(255),
    productPrice INTEGER,
    datecreated DATE,
    dateModified Date,
    productImageURL VARCHAR(255),
    categoryName VARCHAR(100),
    category: INTEGER,
    FOREIGN KEY (category) REFERENCES categoryInfo(categoryId)
);

CREATE TABLE categoryInfo(
    categoryId INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    categoryName VARCHAR(255)
);

/* Join the above two tables to produce this one  */

CREATE TABLE productCategory(
    categoryId INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    categoryName VARCHAR(255),
    productId INTEGER
    productName VARCHAR(255),
    productPrice INTEGER,
    productImageURL VARCHAR(255),
    dateCreated DATE,
    dateModified DATE,
    category: INTEGER
);