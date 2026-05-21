// Declaração das Interfaces de produo

export interface CreateProdutoDTO {
    codigoBarras: string
    descricao: string
    unidade: string
}

export interface UpdateProdutoDTO {
    codigoBarras?: string
    descricao?: string
    unidade?: string
}

export interface ProdutoResponseDTO {
    id: number
    codigoBarras: string
    descricao: string
    unidade: string
}
