const express = require('express')
const fs = require('fs')
const router = express.Router()
const controllerProduct = require('../controllers/productControl')
const middleware = require('../middleware/auth')

    // CREATE (FOR DB)
    // router.post('/add', controllerProduct.addProduct)
    router.post('/add', middleware.validate, controllerProduct.addProduct)
    
    // READ (FROM DB)
    // router.get('/', controllerProduct.selectProduct)
    router.get('/', middleware.validate, controllerProduct.selectProduct)
    
    // UPDATE (FOR DB)
    // router.put('/:id_product', controllerProduct.updateProduct)
    router.put('/:id_product', middleware.validate, controllerProduct.updateProduct)
    
    // DELETE (FOR DB)
    // router.delete('/delete/:id', controllerProduct.deleteProduct)
    router.delete('/delete/:id', middleware.validate, controllerProduct.deleteProduct)
    
    module.exports = router