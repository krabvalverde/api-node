import type { Usuario } from "../entities/Usuario";

const usuarios: Usuario[] = []

export const usuarioRepository = {
    async criarUsuario(usuario: Usuario): Promise<Usuario> {
        usuarios.push(usuario)
        return usuario
    },

    async buscaPorEmail(email: string): Promise<Usuario | null> {
        const usuario = usuarios.find(u => u.email === email)
        return usuario ?? null
    },

    async listarTodos(): Promise<Usuario[]> {
        return usuarios
    }
}