import type { Usuario } from "@prisma/client";
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
    }
 }