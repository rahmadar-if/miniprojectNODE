const jwt = require('jsonwebtoken');

class Auth {

        // LOGIN dan req JWT
        static login(req, res) {

            const body = req.body;
    
            if (body.password === '1111' || '2222') { //Merchant SPV hanya yg memiliki passwaord 1111 dan 2222
    
                const token = jwt.sign({
                    id: body.id 
                }, 'miniproject')
    
                res.status(200).json({ token });
    
            } else {
                res.status(401).json({ message: 'wrong password' })
            }
    
        }
    

    static validate(req, res, next) {

        console.log(req.headers)

        const validate = jwt.verify(req.headers.token, 'miniproject')

        if (validate) {
            next()
        } else {
            res.status(401)
        }

        // res.status(401).json({ message: 'unauthorized' })
    }
}

module.exports = Auth;