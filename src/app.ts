import express from 'express';
import { usuarioRoute } from './routes/usuarioRoute.js';
import { produtoRoute } from './routes/produtoRoute.js';

const app = express();

app.use(express.json());
app.use('/usuarios', usuarioRoute);
app.use('/produtos', produtoRoute);

export { app }