import express from 'express';
import UserController from '../controllers/userController.js';

const routesUser = express.Router();

routesUser.get('/users', UserController.findUsers);

export default routesUser;