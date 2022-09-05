const insertLogin = "INSERT INTO users(email, passwordhash) VALUES ($1, $2)";
const checkEmailExists = "SELECT email FROM users WHERE users.email = $1";
const getImages = "SELECT image2 FROM products";

module.exports = {
    insertLogin,
    checkEmailExists,
    getImages
}