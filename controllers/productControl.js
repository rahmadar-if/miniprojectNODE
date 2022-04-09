const Product = require('../model/productModel')
const db = require('../config/db')

class controllerProduct {

   // ADD Product to DB
    static addProduct(req, res) {
        let values=[req.body.id_product,
            req.body.name,
            req.body.quantity,
            req.body.price,
            req.body.id_merchant];
        

        db.query(Product.addProduct(),[values],(err)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            const data = req.body
                res.status(201)
                res.send(data)
        })
    }

    // GET Product from DB
    static selectProduct(req, res) {
        db.query(Product.selectProduct(),(err,result)=>{
            if(err) throw err;
            res.status(200)
            res.send(result)
        })
    }
    
    // // UPDATE Product to DB
    static updateProduct(req,res){
        const id_product = req.params.id_product;
        const name = req.body.name;
        const quantity = req.body.quantity;
        const price = req.body.price;
        // const id_merchant = req.body.id_merchant;

        db.query(Product.updateProduct(), [name,quantity,price,id_product], function (err) {
            if(err){res.status(400).json(err)
                return
            }
            if(req.body.id_product!=id_product){
                res.send("update product error")
                return
            }
            res.status(201)
            res.send(req.body)
        });
    }

    // DELETE Product from DB
    static deleteProduct(req,res){
        const id = req.params.id  
        db.query(Product.deleteProduct(),[id],(err, result)=> {  
            if(err){res.status(400).json(err)
                return
            }
            
        const name = req.params.id
        result = ("product " + name + " : deleted success")
        res.status(200)
        res.send(result)
        });  
    }


}

module.exports = controllerProduct