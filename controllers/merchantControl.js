const Merchant = require('../model/merchantModel')
const db = require('../config/db')
const fs = require('fs');

class controllerMerchant {

   // ADD PET to DB
    static addMerchant(req, res) {
        let values=[req.body.id,
            req.body.password,
            req.body.name,
            req.body.address,
            req.body.join_date,
            req.body.phone_number];
        

        db.query(Merchant.addMerchant(),[values],(err)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            const data = req.body
                res.status(201)
                res.send(data)
        })
    }

    // // GET PET from DB
    // static selectPet(req, res) {
    //     db.query(Pet.selectPet(),(err,result)=>{
    //         if(err) throw err;
    //         res.status(200)
    //         res.send(result)
    //     })
    // }
    
    // // UPDATE PET to DB
    // static updatePet(req,res){
    //     const id = req.params.id;
    //     const name = req.body.name;
    //     const category = req.body.category;
    //     const status = req.body.status;

    //     db.query(Pet.updatePet(), [name,category,status,id], function (err) {
    //         if(err){res.status(400).json(err)
    //             return
    //         }
    //         if(req.body.id!=id){
    //             res.send("update error")
    //             return
    //         }
    //         res.status(201)
    //         res.send(req.body)
    //     });
    // }

    // // DELETE PET from DB
    // static deletePet(req,res){
    //     const id = req.params.id  
    //     db.query(Pet.deletePet(),[id],(err, result)=> {  
    //         if(err){res.status(400).json(err)
    //             return
    //         }
    //     result = ("id " + id + " : deleted success")
    //     res.status(200)
    //     res.send(result)
    //     });  
    // }


}

module.exports = controllerMerchant