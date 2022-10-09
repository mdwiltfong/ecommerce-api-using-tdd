const insertLogin = "INSERT INTO users(email, passwordhash) VALUES ($1, $2)";
const checkEmailExists = "SELECT email FROM users WHERE users.email = $1";
const getProductsData = "SELECT * FROM products";
const productData = "SELECT * FROM products WHERE products.product_name = $1";
const productId = "SELECT products.id FROM products WHERE products.product_name = $1";
const checkExists = "SELECT * FROM user_products WHERE user_products.product_id = $1";
const addOne = "UPDATE user_products SET quantity = ";
const checkSession = "SELECT * FROM session";

module.exports = {
    insertLogin,
    checkEmailExists,
    getProductsData,
    productData,
    productId,
    checkExists,
    addOne,
    checkSession
}