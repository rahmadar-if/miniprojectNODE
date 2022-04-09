const fs = require('fs')
const db = require('../config/db')

class Product {

    static addProduct() {
        let sql = `INSERT INTO product (id_product,name,quantity,price,id_merchant) VALUES (?)`;
        return sql;
        
    }

    static selectProduct() {
        let selectQuery = `SELECT * FROM product`;
        return selectQuery;
    }

    static updateProduct(){
        let updateQuery = `UPDATE product SET name = ?, quantity = ?, price = ? WHERE id_product = ?` ;
        return updateQuery;

    }

    static deleteProduct(){
        let deleteQuery = `DELETE FROM product WHERE id_product =?`;
            return deleteQuery;
    
    }


}

module.exports = Product