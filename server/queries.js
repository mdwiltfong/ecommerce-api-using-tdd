const insertLogin = "INSERT INTO users(email, passwordhash) VALUES ($1, $2)";
const checkEmailExists = "SELECT email FROM users WHERE users.email = $1";

module.exports = {
    insertLogin,
    checkEmailExists
}