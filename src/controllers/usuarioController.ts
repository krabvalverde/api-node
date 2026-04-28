import type { Request, Response } from 'express'
import type { CreateUsuarioDTO } from '../dtos/usuarioDTO'
import { usuarioService } from '../services/usuarioService'

export const usuarioController = {
    async criarUsuario(req: Request, res: Response) {
        try {
            const dados: CreateUsuarioDTO = req.body
            const usuario = await usuarioService.criarUsuario(dados)
            return res.status(201).json(usuario)
        } catch (erro) {
            if (erro instanceof Error) {
                return res.status(400).json({ erro: erro.message })
            }
            return res.status(500).json({ erro: 'Internal server error' })
        }
    },

    async listarUsuarios(req: Request, res: Response) {
        const usuarios = await usuarioService.listar()
        return res.json(usuarios)
    }
}