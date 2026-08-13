import express from 'express';
import PensamentosController from '../controller/pensamentoController';

const routesPensamentos = express.Router();

routesPensamentos.get('/thought', PensamentoController.listThought);
routesPensamentos.get('/find/thought/:id', PensamentoController.findThought)
routesPensamentos.post('/register/thought', PensamentoController.createThought)
routesPensamentos.put('/thought/update/:id', PensamentoController.editThought)
routesPensamentos.delete('/thought/:id', PensamentoController.deleteThought)

export default routesPensamentos;