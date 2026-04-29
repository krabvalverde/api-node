import { Router } from "express";
import { usuarioController } from "../controllers/usuarioController";

const usuarioRoute = Router()

usuarioRoute.post('/', usuarioController.criarUsuario)
usuarioRoute.get('/', usuarioController.listarUsuarios)
usuarioRoute.get('/:id', usuarioController.listar)

export { usuarioRoute }