# API Node

API REST desenvolvida com Node.js, TypeScript, Express e Prisma ORM para fins de estudo. O projeto não possui fins lucrativos e foi criado como prática de estruturação de uma API com camadas separadas, banco relacional e regras básicas de negócio.

> Status: em desenvolvimento. A containerização com Docker esta planejada para uma próxima etapa.

## Sobre o projeto

Esta API simula um backend simples para gerenciamento de usuários e produtos. A ideia principal é estudar conceitos como rotas, controllers, services, repositories, DTOs, Prisma ORM, PostgreSQL e separação de responsabilidades em uma aplicação Node.js.

## Funcionalidades atuais

### Usuários

- Criar usuário.
- Listar todos os usuários.
- Buscar usuário por ID.
- Validar e-mail unico no cadastro.
- Salvar senha com hash usando `bcrypt`.
- Retornar dados do usuário sem expor a senha.

### Produtos

- Criar produto.
- Listar todos os produtos.
- Buscar produto por código de barras.
- Validar código de barras único.

## Stack utilizada

- **Node.js**: runtime JavaScript.
- **TypeScript**: tipagem estática e melhor organização do código.
- **Express**: criacao das rotas HTTP.
- **Prisma ORM**: acesso ao banco de dados e modelagem das entidades.
- **PostgreSQL**: banco de dados relacional.
- **bcrypt**: geração de hash para senhas.
- **dotenv**: gerenciamento de variáveis de ambiente.
- **tsx**: execução do projeto em modo desenvolvimento.
- **Docker**: planejado para containerização futura da API e do ambiente.

## Estrutura do projeto

```text
src/
  controllers/   # Entrada das requisições e respostas HTTP
  dtos/          # Contratos de entrada e saída de dados
  lib/           # Configurações compartilhadas, como Prisma Client
  models/        # Tipos baseados nos models do Prisma
  repositories/  # Comunicação com o banco de dados
  routes/        # Definição das rotas da API
  services/      # Regras de negócio
  app.ts         # Configuração do Express
  server.ts      # Inicialização do servidor

prisma/
  schema.prisma  # Models e configuração do banco
  migrations/    # Histórico de migrations
```

## Rotas da API

### Usuários

| Metodo | Rota | Descricao |
| --- | --- | --- |
| `POST` | `/usuarios` | Cria um novo usuário |
| `GET` | `/usuarios` | Lista todos os usuários |
| `GET` | `/usuarios/:id` | Busca um usuário pelo ID |

Exemplo de criação de usuário:

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "senha": "123456"
}
```

### Produtos

| Metodo | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/produtos` | Cria um novo produto |
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:codigoBarras` | Busca um produto pelo código de barras |

Exemplo de criação de produto:

```json
{
  "codigoBarras": "7891234567890",
  "descricao": "Produto de exemplo",
  "unidade": "UN"
}
```

## Como executar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/krabvalverde/api-node
cd api-node
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com a URL de conexão do PostgreSQL:

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

A API ficara disponível em:

```text
http://localhost:3333
```

## Scripts disponíveis

| Script | Descricao |
| --- | --- |
| `npm run dev` | Inicia o servidor em desenvolvimento com watch |
| `npm run build` | Compila o TypeScript para JavaScript |
| `npm start` | Executa a versão compilada em `dist/` |
| `npm run prisma:migrate` | Executa migrations do Prisma |
| `npm run prisma:studio` | Abre o Prisma Studio |

## Docker

O projeto ainda não está containerizado, mas o uso de Docker ja está previsto no roadmap. A ideia é adicionar futuramente:

- `Dockerfile` para a API.
- `docker-compose.yml` para subir API e PostgreSQL juntos.
- Variáveis de ambiente preparadas para execução em container.

## Objetivo educacional

Este projeto foi desenvolvido exclusivamente para estudo e prática. Ele não possui fins lucrativos e pode evoluir conforme novos conceitos forem sendo aplicados, como autenticação, validação de dados, testes automatizados, documentação com Swagger e containerização com Docker.

## Licença

Projeto sem fins lucrativos, criado para fins educacionais sob MIT License.
