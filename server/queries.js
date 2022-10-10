



class usersQueries{
    insertLogin = "INSERT INTO users(email, passwordhash) VALUES ($1, $2)";
    checkEmailExists = "SELECT email FROM users WHERE users.email = $1";
    
}

class productsQueries{
    getProductsData = "SELECT * FROM products";
    productData = "SELECT * FROM products WHERE products.product_name = $1";
    productId = "SELECT products.id FROM products WHERE products.product_name = $1";
}

class usersProductsQueries{
    checkExists = "SELECT * FROM user_products WHERE user_products.product_id = $1";
    addOne = "UPDATE user_products SET quantity = $1";
}


class sessionQueries{
    checkSession = "SELECT * FROM session";
}

const sessionQueries= new sessQueries();
const usersProductsQueries = new usersProductsQueries();
const usersQueries= new usersQueries();





module.exports = {
   sessionQueries,
    usersProductsQueries,
    usersQueries
}
