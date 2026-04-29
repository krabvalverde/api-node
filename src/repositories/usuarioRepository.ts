import { prisma } from "../lib/prisma";
import type { Usuario } from "../models/Usuario";

export const usuarioRepository = {
    async criarUsuario(dados: Omit<Usuario, 'id' | 'criadoEm'>): Promise<Usuario> {
        return await prisma.usuario.create({
            data: dados,
        })
    },

    async buscaPorEmail(email: string): Promise<Usuario | null> {
       return await prisma.usuario.findUnique({
        where: { email },
       }) 
    },

    async buscarPorID(id: string): Promise<Usuario | null> {
        return await prisma.usuario.findUnique({
            where: { id },
        })
    },

    async listarTodos(): Promise<Usuario[]> {
        return await prisma.usuario.findMany({
            orderBy: { criadoEm: 'desc' }
        })
    }
}