DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE product_list (
	item_id INT NOT NULL AUTO_INCREMENT NOT NULL,
	product VARCHAR(50) NULL,
	department VARCHAR(100),
	price FLOAT(10),
    stock INT(5),
	PRIMARY KEY (item_id)
);

INSERT INTO product_list (product ,department, price, stock)
VALUES ("Mouse","Electronics",15.99,50 );

INSERT INTO product_list (product ,department, price, stock)
VALUES ("PS4", "Electronics", 199.99, 15);

INSERT INTO product_list (product ,department, price, stock)
VALUES ("Cereal", "Grocery", 3.25, 23);

INSERT INTO product_list (product ,department, price, stock)
VALUES	("Cookies", "Grocery", 2.17, 27);

INSERT INTO product_list (product ,department, price, stock)
VALUES ("Batteries","Electronics", 3.54, 41);
               
INSERT INTO product_list (product ,department, price, stock)
VALUES ("Shampoo", "Cosmetics", 7.23, 16);

INSERT INTO product_list (product ,department, price, stock)
VALUES ("Almond Milk", "Grocery", 2.48, 7);

INSERT INTO product_list (product ,department, price, stock)
VALUES ("Trash Bag", "Grocery", 4.78, 14);

INSERT INTO product_list (product ,department, price, stock)
VALUES("Socks", "Clothing", 7.99, 28);
                
INSERT INTO product_list (product ,department, price, stock)
VALUES("Halo Top Ice Cream", "Grocery", 5.25, 22);

SELECT * FROM product_list;