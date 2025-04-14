# Feirinha Driven

API de Lista de Compras desenvolvida com Node.js e Express.

## Descrição

Este projeto implementa uma API REST para gerenciar uma lista de compras, permitindo adicionar itens, listar todos os itens ou filtrados por tipo e buscar itens específicos por ID.

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/feirinha-driven.git

# Entrar no diretório
cd feirinha-driven

# Instalar as dependências
npm install

# Iniciar o servidor
npm start
```

## Rotas

- `POST /items` - Adiciona um novo item à lista
- `GET /items` - Lista todos os itens
- `GET /items?type=fruta` - Lista itens por tipo
- `GET /items/:id` - Busca um item específico por ID 