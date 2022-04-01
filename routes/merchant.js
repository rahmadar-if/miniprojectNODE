const express = require('express')
const fs = require('fs')
const router = express.Router()
const controllerMerchant = require('../controllers/merchantControl')


    // CREATE (FOR DB)
    router.post('/add-pet', controllerMerchant.addMerchant)
    
    // // READ (FROM DB)
    // router.get('/get-pet', controllerMerchant.selectMerchant)
    
    // // UPDATE (FOR DB)
    // router.put('/update/:id', controllerMerchant.updateMerchant)
    
    // // DELETE (FOR DB)
    // router.delete('/drop/:id',controllerMerchant.deleteMerchant)
    
    module.exports = router