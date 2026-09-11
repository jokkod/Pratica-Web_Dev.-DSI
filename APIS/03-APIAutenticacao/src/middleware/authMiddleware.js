/* import jws from 'jsonwebtoken'; */
/* import dotenv from 'dotenv.config' */

function authMiddleware (req, res, next){

    const authorization = req.headers.authorization;
    if(!authorization) {
        return res.status(400).json({
            message: 'Token não informado.'
        })
    }

    try {
        const token = authorization.split(" ")[1];
        
        const payload = jwd.verify(
            token, 
            process.env.JWT_SECRET
        )

        req.user = payload;
        next();
    } catch (error) {
        console.error(error)
        return res.status(401).json({
            message: 'Token Inválido.'
        })
    }
}