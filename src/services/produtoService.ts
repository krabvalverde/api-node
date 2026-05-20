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
    }
}