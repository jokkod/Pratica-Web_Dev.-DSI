import express from 'express';
import PensamentosController from '../controller/pensamentoController.js';

const routesPensamentos = express.Router();

routesPensamentos.get('/thought', PensamentosController.listThought);
routesPensamentos.get('/find/thought/:id', PensamentosController.findThought)
routesPensamentos.post('/register/thought', PensamentosController.CreateThought)
routesPensamentos.put('/thought/update/:id', PensamentosController.editThought)
routesPensamentos.delete('/thought/:id', PensamentosController.deleteThought)

export default routesPensamentos;