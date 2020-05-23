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
    category INT,
    CONSTRAINT fk_categoryInfo_category FOREIGN KEY (category) 
    REFERENCES categoryInfo(categoryId)
) ENGINE=INNODB;

INSERT INTO categoryInfo(categoryName) VALUES ('test');
INSERT INTO productInfo(productName, productPrice, dateCreated, dateModified, productImageURL) 
    VALUES ("test1", 20, "2019-01-01", "2019-01-03", "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/2654f10f58e045c2a029ab7d00db4040_9366/FV2808_00_plp_standard.jpg");