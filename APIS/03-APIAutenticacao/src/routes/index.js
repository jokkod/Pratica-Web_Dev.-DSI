import express from 'express';
import routesUser from "./userRoutes.js";

const routes = (app) => {
    app.routes('/').get((req,res)=>{
        let message = 'Bem-vindo, servidor funcionando a todo vapor!';
        res.status(200).send(message);
    }) 

    app.use(express.json(), routesUser);
}

export default routes;