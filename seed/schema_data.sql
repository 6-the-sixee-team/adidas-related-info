DROP DATABASE IF EXISTS adidas;

CREATE DATABASE adidas;

USE adidas;

CREATE TABLE categoryInfo(
    categoryId INT AUTO_INCREMENT PRIMARY KEY,
    categoryName VARCHAR(255)
) ENGINE=INNODB;

CREATE TABLE productInfo(
    productId INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255),
    productPrice INT,
    dateCreated DATE,
    dateModified DATE,
    productImageURL VARCHAR(255),
    category INT
) ENGINE=INNODB;

