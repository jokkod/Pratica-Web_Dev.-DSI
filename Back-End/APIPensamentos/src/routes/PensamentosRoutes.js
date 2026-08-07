import express from 'express';
import PensamentosController from '../controller/pensamentoController';

const routesPensamentos = express.Router();

routesPensamentos.get('/pensamentos', PensamentosController.listThought);
routesPensamentos.post('/pensamentos', PensamentosController.CreateThought);

export default routesPensamentos;
