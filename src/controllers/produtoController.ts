import type { CreateProdutoDTO, UpdateProdutoDTO } from "../dtos/produtoDTO.js";
import type { Request, Response } from "express";
import { produtoService } from "../services/produtoService.js";

export const produtoController = {
    async criarProduto(req: Request, res: Response) {
        try {
            const dados: CreateProdutoDTO = req.body;
            const produto = await produtoService.criarProduto(dados);
            return res.status(201).json(produto);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ erro: error.message })
            }
            return res.status(500).json({ erro: 'Internal server error' })
        }
    },

    async listarProdutos(req: Request, res: Response) {
        const produtos = await produtoService.listarTodos();
        return res.status(200).json(produtos);
    },

    async listar(req: Request<{ id: string }>, res: Response) { 
        try {
            const { id } = req.params;
            const produto = await produtoService.listar(id); 
            return res.status(200).json(produto);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(404).json({ erro: error.message })
            }
            return res.status(500).json({ erro: 'Internal server error' })      
        }
    },

    async deletar(req: Request<{ codigoBarras: string }>, res: Response) {
        try {
            const { codigoBarras } = req.params;
            const produtoDeletado = await produtoService.deletar(codigoBarras);
            return res.status(200).json(produtoDeletado);
        } catch (error) {
            if(error instanceof Error){
                return res.status(404).json({ erro: error.message });
            }
            return res.status(500).json({ erro: 'Internal server error' });
        }
    },

    async update(req: Request<{ id: string }>, res: Response) {
        try {
            const id = Number(req.params.id);
            if (!Number.isInteger(id) || id <= 0) {
                throw new Error('ID invalido');
            }

            const produto: UpdateProdutoDTO = req.body;
            const produtoAtualizado = await produtoService.update(produto, id);
            return res.status(200).json(produtoAtualizado);
        } catch (error) {
            if(error instanceof Error){
                return res.status(404).json({ erro: error.message });
            }
            return res.status(500).json({ erro: 'Internal server error' });
        }
    }
}
