import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function authMiddleware(req, res, next) {
    // => Chamar o autherization
    // [bearer, token]
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(400).json({
            message: 'Token Inválido'
        })
    }
    try {
        const token = authorization.split(" ")[1]

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.user = payload
        next()
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            message: 'Token Inválido'
        }); 
    }
}

export default authMiddleware;