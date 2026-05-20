import type { CreateProdutoDTO, ProdutoResponseDTO } from "../dtos/produtoDTO.js"
import { produtoRepository } from "../repositories/produtoRepository.js";

export const produtoService = {
    async criarProduto(dados: CreateProdutoDTO): Promise<ProdutoResponseDTO>{
        const produtoExiste = await produtoRepository.buscarProduto(dados.codigoBarras);
        if(produtoExiste){
            throw new Error("Produto com mesmo código de barras já cadastrado!");
        }
        
        const novoProduto = await produtoRepository.criarProduto({
            codigoBarras: dados.codigoBarras,
            descricao: dados.descricao,
            unidade: dados.unidade
        });

        return {
            id: novoProduto.id,
            codigoBarras: novoProduto.codigoBarras,
            descricao: novoProduto.descricao,
            unidade: novoProduto.unidade
        }
    },

    async listarTodos(): Promise<ProdutoResponseDTO[]> {
        const produtos = await produtoRepository.listarTodos();
        return produtos.map(p => ({
            id: p.id,
            codigoBarras: p.codigoBarras,
            descricao: p.descricao,
            unidade: p.unidade,
        }));
    },

    async listar(id: string): Promise<ProdutoResponseDTO> {
        const produto = await produtoRepository.buscarProduto(id);
        if(!produto){   
            throw new Error("Produto não encontrado!");
        }

        return {
            id: produto.id,
            codigoBarras: produto.codigoBarras,
            descricao: produto.descricao,
            unidade: produto.unidade
        }
    }
}