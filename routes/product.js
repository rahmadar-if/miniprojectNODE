const express = require('express')
const fs = require('fs')
const router = express.Router()
const controllerProduct = require('../controllers/productControl')


    // CREATE (FOR DB)
    router.post('/add', controllerProduct.addProduct)
    
    // READ (FROM DB)
    router.get('/', controllerProduct.selectProduct)
    
    // UPDATE (FOR DB)
    router.put('/:id_product', controllerProduct.updateProduct)
    
    // DELETE (FOR DB)
    router.delete('/delete/:id',controllerProduct.deleteProduct)
    
    module.exports = router