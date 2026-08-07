import express from 'express';

const routes = (app) => {
    app.route('/').get((req, res)=>{
        let message = 'Bem-vindo, servidor funcionando a todo vapor!';
        res.status(200).send(message);
    });

    app.use(express.json());
}

export default routes;