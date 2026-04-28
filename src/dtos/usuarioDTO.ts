// Interfaces DTO de Usuario

export interface CreateUsuarioDTO {
    nome: string
    email: string
    senha: string
}

export interface UpdateUsuarioDTO {
    nome?: string
    email?: string
    senha?: string
}

export interface UsuarioResponseDTO {
    id: string
    nome: string
    email: string
    criadoEm: Date
}