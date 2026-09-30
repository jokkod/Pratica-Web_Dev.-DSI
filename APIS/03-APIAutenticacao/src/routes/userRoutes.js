import express from 'express';
import UserController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import upload from '../middleware/uploadsMiddleware.js';

const routesUser = express.Router();

routesUser.get('/user', UserController.findUsers);
routesUser.get('/user/auth', authMiddleware, 
    UserController.userAuthenticator);
routesUser.get('/users/auth/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    return res.json({message: 'Você é administrador!'})
});
routesUser.post('/user/register', UserController.userRegister);
routesUser.post('/user/auth/login', UserController.userLogin);
routesUser.put('/users/:id/imagem', upload.single("imagem"), UserController.imageUpdate);


export default routesUser;