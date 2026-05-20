import { Router } from "express";
import { produtoController } from "../controllers/produtoController.js";

const produtoRoute = Router();

produtoRoute.post('/', produtoController.criarProduto);
produtoRoute.get('/', produtoController.listarProdutos);
produtoRoute.get('/:id', produtoController.listar);

export { produtoRoute }