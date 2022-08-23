CREATE DATABASE ecommerceapi;

CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255), 
    passwordhash VARCHAR(255),
    order_id VARCHAR (255)    
);