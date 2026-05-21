import type { Request, Response } from 'express'
import type { CreateUsuarioDTO } from '../dtos/usuarioDTO.js'
import { usuarioService } from '../services/usuarioService.js'

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

    async listar(req: Request<{ id: string }>, res: Response) {
        try {
            const id = Number(req.params.id)
            if (!Number.isInteger(id) || id <= 0) {
                throw new Error('ID invalido')
            }

            const usuario = await usuarioService.listar(id)
            return res.json(usuario)
        } catch (erro) {
            if (erro instanceof Error) {
                return res.status(404).json({ erro: erro.message })
            }
            return res.status(500).json({ erro: 'Internal server error' })
        }
    },

    async listarUsuarios(req: Request, res: Response) {
        const usuarios = await usuarioService.listarTodos()
        return res.json(usuarios)
    }
}
