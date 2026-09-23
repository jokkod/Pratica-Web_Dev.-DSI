import express from 'express';
import UserController from '../controllers/userController.js';
import authMiddleWare from '../config/authenticaton';

const routesUser = express.Router();

routesUser.get('/user', UserController.findUsers);
routesUser.post('/user/register', UserController.userRegistry);
routesUser.post('/user/auth/login', UserController.userLogin);
routesUser.get('/user/auth', authMiddleWare, UserController.userAuthenticator);

export default routesUser;