const fs = require('fs')
const db = require('../config/db')

class Merchant {

    static addMerchant() {
        let sql = `INSERT INTO pet (id,password,name,address,join_date,phone_number) VALUES (?)`;
        return sql;
        
    }

    // static selectPet() {
    //     let selectQuery = `SELECT * FROM pet`;
    //     return selectQuery;
    // }

    // static updatePet(){
    //     let updateQuery = `UPDATE pet SET name = ?, category = ?, status = ? WHERE id = ?` ;
    //     return updateQuery;

    // }

    // static deletePet(){
    //     let deleteQuery = `DELETE FROM pet WHERE id =?`;
    //         return deleteQuery;
    // }


}

module.exports = Merchant