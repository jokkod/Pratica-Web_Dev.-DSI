import express from 'express';
import UserController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

const routesUser = express.Router();

routesUser.get('/user', UserController.findUsers);
routesUser.get('/users/auth/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    return res.json({message: 'Você é administrador!'})
})
routesUser.get('/user/auth', authMiddleware, 
    UserController.userAuthenticator);
routesUser.post('/user/register', UserController.userRegister);
routesUser.post('/user/auth/login', UserController.userLogin);


export default routesUser;