# API Node

API REST desenvolvida com Node.js, TypeScript, Express e Prisma ORM para fins de estudo. O projeto nao possui fins lucrativos e foi criado como pratica de estruturacao de uma API com camadas separadas, banco relacional e regras basicas de negocio.

> Status: em desenvolvimento. A containerizacao com Docker esta planejada para uma proxima etapa.

## Sobre o projeto

Esta API simula um backend simples para gerenciamento de usuarios e produtos. A ideia principal e estudar conceitos como rotas, controllers, services, repositories, DTOs, Prisma ORM, PostgreSQL e separacao de responsabilidades em uma aplicacao Node.js.

## Funcionalidades atuais

### Usuarios

- Criar usuario.
- Listar todos os usuarios.
- Buscar usuario por ID.
- Validar email unico no cadastro.
- Salvar senha com hash usando `bcrypt`.
- Retornar dados do usuario sem expor a senha.

### Produtos

- Criar produto.
- Listar todos os produtos.
- Buscar produto por codigo de barras.
- Validar codigo de barras unico.

## Stack utilizada

- **Node.js**: runtime JavaScript.
- **TypeScript**: tipagem estatica e melhor organizacao do codigo.
- **Express**: criacao das rotas HTTP.
- **Prisma ORM**: acesso ao banco de dados e modelagem das entidades.
- **PostgreSQL**: banco de dados relacional.
- **bcrypt**: geracao de hash para senhas.
- **dotenv**: gerenciamento de variaveis de ambiente.
- **tsx**: execucao do projeto em modo desenvolvimento.
- **Docker**: planejado para containerizacao futura da API e do ambiente.

## Estrutura do projeto

```text
src/
  controllers/   # Entrada das requisicoes e respostas HTTP
  dtos/          # Contratos de entrada e saida de dados
  lib/           # Configuracoes compartilhadas, como Prisma Client
  models/        # Tipos baseados nos models do Prisma
  repositories/  # Comunicacao com o banco de dados
  routes/        # Definicao das rotas da API
  services/      # Regras de negocio
  app.ts         # Configuracao do Express
  server.ts      # Inicializacao do servidor

prisma/
  schema.prisma  # Models e configuracao do banco
  migrations/    # Historico de migrations
```

## Rotas da API

### Usuarios

| Metodo | Rota | Descricao |
| --- | --- | --- |
| `POST` | `/usuarios` | Cria um novo usuario |
| `GET` | `/usuarios` | Lista todos os usuarios |
| `GET` | `/usuarios/:id` | Busca um usuario pelo ID |

Exemplo de criacao de usuario:

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "senha": "123456"
}
```

### Produtos

| Metodo | Rota | Descricao |
| --- | --- | --- |
| `POST` | `/produtos` | Cria um novo produto |
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:codigoBarras` | Busca um produto pelo codigo de barras |

Exemplo de criacao de produto:

```json
{
  "codigoBarras": "7891234567890",
  "descricao": "Produto de exemplo",
  "unidade": "UN"
}
```

## Como executar localmente

### 1. Clone o repositorio

```bash
git clone <url-do-repositorio>
cd api-node
```

### 2. Instale as dependencias

```bash
npm install
```

### 3. Configure as variaveis de ambiente

Crie um arquivo `.env` na raiz do projeto com a URL de conexao do PostgreSQL:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
PORT=3333
```

### 4. Execute as migrations

```bash
npm run prisma:migrate
```

### 5. Inicie em modo desenvolvimento

```bash
npm run dev
```

A API ficara disponivel em:

```text
http://localhost:3333
```

## Scripts disponiveis

| Script | Descricao |
| --- | --- |
| `npm run dev` | Inicia o servidor em desenvolvimento com watch |
| `npm run build` | Compila o TypeScript para JavaScript |
| `npm start` | Executa a versao compilada em `dist/` |
| `npm run prisma:migrate` | Executa migrations do Prisma |
| `npm run prisma:studio` | Abre o Prisma Studio |

## Docker

O projeto ainda nao esta containerizado, mas o uso de Docker ja esta previsto no roadmap. A ideia e adicionar futuramente:

- `Dockerfile` para a API.
- `docker-compose.yml` para subir API e PostgreSQL juntos.
- Variaveis de ambiente preparadas para execucao em container.

## Objetivo educacional

Este projeto foi desenvolvido exclusivamente para estudo e pratica. Ele nao possui fins lucrativos e pode evoluir conforme novos conceitos forem sendo aplicados, como autenticacao, validacao de dados, testes automatizados, documentacao com Swagger e containerizacao com Docker.

## Licenca

Projeto sem fins lucrativos, criado para fins educacionais.
