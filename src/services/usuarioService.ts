import { randomUUID } from "node:crypto";
import type { CreateUsuarioDTO, UsuarioResponseDTO } from "../dtos/usuarioDTO";
import type { Usuario } from "../entities/Usuario";
import { usuarioRepository } from "../repositories/usuarioRepository";

export const usuarioService = {
    async criarUsuario(dados: CreateUsuarioDTO): Promise<UsuarioResponseDTO> {
        const jaExiste = await usuarioRepository.buscaPorEmail(dados.email)
        if (jaExiste) {
            throw new Error('Email já cadastrado')
        }

        const novoUsuario: Usuario = {
            id: randomUUID(),
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha,
            criadoEm: new Date()
        }

        await usuarioRepository.criarUsuario(novoUsuario)

        return {
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            criadoEm: novoUsuario.criadoEm
        }
    },

    async listar(): Promise<Usuario[]> {
        return usuarioRepository.listarTodos()
    }
}