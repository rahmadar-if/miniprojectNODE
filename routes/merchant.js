const express = require('express')
const router = express.Router()
const controllerMerchant = require('../controllers/merchantControl')
const middleware = require('../middleware/auth')

    // LOGIN , GET  JWT TOKEN , VALIDATE JWT
    router.post('/login', middleware.login);

    router.get('/login', middleware.validate, (req, res) => {
        res.status(200).json({ message: 'Password Match' })
    });

    // CREATE (FOR DB)
    // router.post('/add', controllerMerchant.addMerchant)
    router.post('/add', middleware.validate, controllerMerchant.addMerchant) //validate JWT
    
    // READ (FROM DB)
    // router.get('/', controllerMerchant.selectMerchant)
    router.get('/', middleware.validate, controllerMerchant.selectMerchant) //validate JWT
    
    // UPDATE (FOR DB)
    // router.put('/:id', controllerMerchant.updateMerchant)
    router.put('/:id', middleware.validate, controllerMerchant.updateMerchant) //validate JWT
    
    // DELETE (FOR DB)
    // router.delete('/delete/:id', controllerMerchant.deleteMerchant)
    router.delete('/delete/:id', middleware.validate, controllerMerchant.deleteMerchant) //validate JWT

    
    
    module.exports = router