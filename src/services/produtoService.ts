import type { CreateProdutoDTO, ProdutoResponseDTO, UpdateProdutoDTO } from "../dtos/produtoDTO.js"
import { produtoRepository } from "../repositories/produtoRepository.js";

export const produtoService = {
    async criarProduto(dados: CreateProdutoDTO): Promise<ProdutoResponseDTO>{
        const produtoExiste = await produtoRepository.buscarProduto(dados.codigoBarras);
        if(produtoExiste){
            throw new Error("Produto com mesmo codigo de barras ja cadastrado!");
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
            throw new Error("Produto nao encontrado!");
        }

        return {
            id: produto.id,
            codigoBarras: produto.codigoBarras,
            descricao: produto.descricao,
            unidade: produto.unidade
        }
    },

    async deletar(codigoBarras: string): Promise<ProdutoResponseDTO> {
        const produto = await produtoRepository.buscarProduto(codigoBarras);
        if(!produto){
            throw new Error('Produto nao encontrado!');
        }
        await produtoRepository.deletar(produto.codigoBarras);

        return {
            id: produto.id,
            codigoBarras: produto.codigoBarras,
            descricao: produto.descricao,
            unidade: produto.unidade
        }
    },

    async update(dados: UpdateProdutoDTO, id: number): Promise<ProdutoResponseDTO> {
        const produto = await produtoRepository.buscarProdutoPorID(id);
        if(!produto){
            throw new Error('Produto nao encontrado!');
        }

        if(dados.codigoBarras !== undefined){
            const produtoMesmoCodigo = await produtoRepository.buscarProduto(dados.codigoBarras);
            if(produtoMesmoCodigo && produtoMesmoCodigo.id !== id){
                throw new Error('Codigo de barras ja cadastrado!');
            }
        }

        const dadosAtualizacao: UpdateProdutoDTO = {};
        if(dados.codigoBarras !== undefined) dadosAtualizacao.codigoBarras = dados.codigoBarras;
        if(dados.descricao !== undefined) dadosAtualizacao.descricao = dados.descricao;
        if(dados.unidade !== undefined) dadosAtualizacao.unidade = dados.unidade;

        if(Object.keys(dadosAtualizacao).length === 0){
            throw new Error('Nenhum dado informado para atualizacao!');
        }

        const produtoAtualizado = await produtoRepository.update(dadosAtualizacao, id);

        return {
            id: produtoAtualizado.id,
            codigoBarras: produtoAtualizado.codigoBarras,
            descricao: produtoAtualizado.descricao,
            unidade: produtoAtualizado.unidade
        }
    }
}
