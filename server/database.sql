CREATE DATABASE ecommerceapi;

CREATE TABLE [IF NOT EXISTS] user(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255), 
    passwordhash VARCHAR(255),
    order_id VARCHAR (255)    
);

CREATE TABLE [IF NOT EXISTS] products(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255),
    product_description VARCHAR(255),
    unit_price numeric,
    quantity_small numeric,
    quantity_med numeric,
    quantity_large numeric,
    image1 VARCHAR(255),
    image2 VARCHAR(255)
);

INSERT INTO products(product_name, unit_price, quantity_small, quantity_med, quantity_large, image1, image2)
VALUES ('T-Shirt', 35.00, 25, 25, 25, '../src/images/Tshirt.jpg', '../src/images/Greytshirt.png');
       ('Hoodie', 49.00, 25, 25, 25, '../src/images/Hoodie.jpg', '../src/images/Greyhoodie.png');   

INSERT INTO products(product_description)
VALUES ('So classy it hurts', '100% combed ring-spun cotton', 'Printed on Next Level garment', 'Pre-shrunk', 'Tear-away label');
       ('Comfy. Cozy. Collective Podcast', '100% California fleece cotton', 'Super sweet drawstrings', 'Raglan sleeves', 'Front pouch pocket');