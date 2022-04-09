const jwt = require('jsonwebtoken'); //npm i jsonwebtoken

const Merchant = require('../model/merchantModel')
const db = require('../config/db')

class controllerMerchant {

   // ADD merchant to DB
    static addMerchant(req, res) {
        let values=[req.body.id,
            req.body.password,
            req.body.name,
            req.body.address,
            req.body.phone_number];
        

        db.query(   Merchant.addMerchant(),[values],(err)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            const data = req.body
                res.status(201)
                res.send(data)
        })
    }

    // GET merchant from DB
    static selectMerchant(req, res) {
        db.query(Merchant.selectMerchant(),(err,result)=>{
            if(err) throw err;
            res.status(200)
            res.send(result)
        })
    }
    
    // // UPDATE merchant to DB
    static updateMerchant(req,res){
        const id = req.params.id;
        const name = req.body.name;
        const address = req.body.address;
        const phone_number = req.body.phone_number;

        db.query(Merchant.updateMerchant(), [name,address,phone_number,id], function (err) {
            if(err){res.status(400).json(err)
                return
            }
            if(req.body.id!=id){
                res.send("update error")
                return
            }
            res.status(201)
            res.send(req.body)
        });
    }

    // DELETE merchant from DB
    static deleteMerchant(req,res){
        const id = req.params.id  
        db.query(Merchant.deleteMerchant(),[id],(err, result)=> {  
            if(err){res.status(400).json(err)
                return
            }
        result = ("id " + id + " : deleted success")
        res.status(200)
        res.send(result)
        });  
    }

    // LOGIN dan req JWT
    static login(req, res) {

        const data = req.body;

        if (data.password === '1111') {

            const token = jwt.sign({
                id: data.id 
            }, 'miniproject')

            res.status(200).json({ token });

        } else {
            res.status(401).json({ message: 'wrong password' })
        }

    }


}

module.exports = controllerMerchant