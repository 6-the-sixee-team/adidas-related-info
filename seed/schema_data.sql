DROP DATABASE IF EXISTS adidas;

CREATE DATABASE adidas;

USE adidas;

DROP TABLE IF EXISTS categoryInfo;
CREATE TABLE categoryInfo(
    categoryId INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    categoryName VARCHAR(255)
) ENGINE=INNODB;

DROP TABLE IF EXISTS productInfo;
CREATE TABLE productInfo(
    productId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255),
    productPrice INT,
    dateCreated DATE,
    dateModified DATE,
    productImageURL VARCHAR(255),
    category INT
    /* CONSTRAINT fk_categoryInfo_category FOREIGN KEY (category) 
    REFERENCES categoryInfo(categoryId) */
) ENGINE=INNODB;

