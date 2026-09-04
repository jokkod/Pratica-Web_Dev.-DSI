import express from 'express';
import routesPensamentos from './PensamentosRoutes';
const routes = (app) => {
    app.route('/').get((req, res)=>{
        let message = 'Bem-vindo, servidor funcionando a todo vapor!';
        res.status(200).send(message);
    });

    app.use(express.json(), routesPensamentos);
}

export default routes;