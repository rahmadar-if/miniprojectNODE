const jwt = require('jsonwebtoken');

class Auth {

    // LOGIN dan req JWT
    static login(req, res) {

        const body = req.body;

        if (body.password === '1111') { //Merchant SPV hanya yg memiliki passwaord 1111

            const token = jwt.sign({
                id: body.id
            }, process.env.SECRETKEY)

            res.status(200).json({ token });

        } else {
            res.status(401).json({ message: 'wrong password' }) //TASK 3
        }
        
    }
    
    static validate(req, res, next) {

        const validate = jwt.verify(req.headers.token, process.env.SECRETKEY)

        if (validate) {
            next()
        } else {
            res.status(401).json({ message: 'un-authorized' })
        }
    }

}

module.exports = Auth;