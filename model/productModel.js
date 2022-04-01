const fs = require('fs')
const db = require('../config/db')

class Product {

    static addProduct() {
        let sql = `INSERT INTO Product (id_product,name,quantity,price) VALUES (?)`;
        return sql;
        
    }

    static selectProduct() {
        let selectQuery = `SELECT * FROM Product`;
        return selectQuery;
    }

    static updateProduct(){
        let updateQuery = `UPDATE Product SET name = ?, quantity = ?, price = ? WHERE id_product = ?` ;
        return updateQuery;

    }

    static deleteProduct(){
        let deleteQuery = `DELETE FROM Product WHERE id_product =?`;
            return deleteQuery;
    
    }


}

module.exports = Product