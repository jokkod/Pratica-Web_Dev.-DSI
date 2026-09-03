import 'dotenv/config';
import express from 'express';
import routes from './routes';

const app = express();
routes(app);

const porta = process.env.PORTA;
const end = process.env.END;

app.listen(porta, () => console.log(`Servidor no end: ${end}: ${porta}`));