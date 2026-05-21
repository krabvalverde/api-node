import { prisma } from "../lib/prisma.js";
import type { Produto } from "../models/Produto.js"

export const produtoRepository = {
    async buscarProduto(codigoBarras: string): Promise<Produto | null> {
        return await prisma.produto.findUnique({
            where: { codigoBarras },
        })
    },

    async criarProduto(dados: Omit<Produto, 'id'> ): Promise<Produto> {
        return await prisma.produto.create({
            data: dados,
        })
    },

    async listarTodos(): Promise<Produto[]> {
        return await prisma.produto.findMany({
            orderBy: { codigoBarras: 'desc' },
        })
    },

    async deletar(codigoBarras: string): Promise<Produto> {
        return await prisma.produto.delete({
            where: { codigoBarras },
        })
    },

    async buscarProdutoPorID(id: number): Promise<Produto | null> {
        return await prisma.produto.findUnique({
            where: { id },
        })
    },

    async update(dados: Partial<Omit<Produto, 'id'>>, id: number): Promise<Produto> {
        return await prisma.produto.update({
            data: dados,
            where: { id },
        })
    } 
 }
