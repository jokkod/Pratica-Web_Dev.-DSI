import express from 'express';
import PensamentosController from '../controller/pensamentoController';

const routesPensamentos = express.Router();

routesPensamentos.get('/thought', PensamentosController.listThought);
routesPensamentos.get('/find/thought/:id', PensamentosController.findThought)
routesPensamentos.post('/register/thought/:id', PensamentosController.CreateThought);
routesPensamentos.put('/update/thought/:id', PensamentosController.editThought);

export default routesPensamentos;
