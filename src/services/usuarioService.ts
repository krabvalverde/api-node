import type { CreateUsuarioDTO, UsuarioResponseDTO } from "../dtos/usuarioDTO";
import { usuarioRepository } from "../repositories/usuarioRepository";

export const usuarioService = {
    async criarUsuario(dados: CreateUsuarioDTO): Promise<UsuarioResponseDTO> {
        const jaExiste = await usuarioRepository.buscaPorEmail(dados.email)
        if (jaExiste) {
            throw new Error('Email já cadastrado')
        }

        const novoUsuario = await usuarioRepository.criarUsuario({
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha
        })

        return {
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            criadoEm: novoUsuario.criadoEm
        }
    },

    async listarTodos(): Promise<UsuarioResponseDTO[]> {
        const usuarios = await usuarioRepository.listarTodos()
        return usuarios.map(u => ({
            id: u.id,
            nome: u.nome,
            email: u.email,
            criadoEm: u.criadoEm
        }))
    },

    async listar(id: string): Promise<UsuarioResponseDTO> {
        const usuario = await usuarioRepository.buscarPorID(id)
        if (!usuario) {
            throw new Error('Usuário não encontrado')
        }

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            criadoEm: usuario.criadoEm
        }
    }
}