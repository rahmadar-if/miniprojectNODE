const express = require('express')
const fs = require('fs')
const router = express.Router()
const controllerMerchant = require('../controllers/merchantControl')


    // CREATE (FOR DB)
    router.post('/add', controllerMerchant.addMerchant)
    
    // READ (FROM DB)
    router.get('/', controllerMerchant.selectMerchant)
    
    // UPDATE (FOR DB)
    router.put('/:id', controllerMerchant.updateMerchant)
    
    // DELETE (FOR DB)
    router.delete('/delete/:id', controllerMerchant.deleteMerchant)

    router.post('/login', controllerMerchant.login);

    // router.get('/login', middleware.validate, (req, res) => {
    //     res.status(200).json({ message: 'welcome' })
    // });
    
    
    module.exports = router

    // login authentification
    // set FK di DB
    // akses product hanya ke beberapa Merchant  yg memiliki akses