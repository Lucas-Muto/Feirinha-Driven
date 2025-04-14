# Feirinha Driven

API de Lista de Compras desenvolvida com Node.js e Express.

## 📋 Descrição

Este projeto implementa uma API REST para gerenciar uma lista de compras, permitindo adicionar itens, listar todos os itens ou filtrados por tipo e buscar itens específicos por ID.

A API foi desenvolvida como um projeto exclusivamente de back-end utilizando Node.js e Express, seguindo as melhores práticas de desenvolvimento.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para desenvolvimento de APIs
- **HTTP-Status** - Biblioteca para melhorar a semântica dos códigos de status HTTP
- **CORS** - Middleware para habilitar requisições de diferentes origens
- **Nodemon** - Utilitário para reiniciar automaticamente o servidor durante o desenvolvimento

## 🗂️ Estrutura do Projeto

```
/
├── src/                    # Código fonte
│   ├── controllers/        # Controladores da aplicação
│   ├── middlewares/        # Middlewares de validação e tratamento de erros
│   ├── models/             # Modelos de dados
│   ├── routes/             # Rotas da API
│   ├── utils/              # Funções utilitárias
│   └── app.js              # Arquivo principal da aplicação
├── .gitignore              # Arquivos ignorados pelo Git
├── package.json            # Dependências e scripts
├── package-lock.json       # Versões exatas das dependências
└── README.md               # Documentação do projeto
```

## 🚀 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/feirinha-driven.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd feirinha-driven
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor:
   ```bash
   # Modo produção
   npm start
   
   # Modo desenvolvimento (com reinício automático)
   npm run dev
   ```

O servidor será iniciado na porta 5000.

## 📡 Endpoints da API

### 1. Criar um novo item

- **URL**: `/items`
- **Método**: `POST`
- **Corpo da requisição**:
  ```json
  {
    "name": "Maçã",
    "quantity": 2,
    "type": "fruta"
  }
  ```
- **Respostas**:
  - `201 Created` - Item criado com sucesso
  - `409 Conflict` - Item com o mesmo nome já existe
  - `422 Unprocessable Entity` - Dados de entrada inválidos

### 2. Listar todos os itens

- **URL**: `/items`
- **Método**: `GET`
- **Respostas**:
  - `200 OK` - Retorna array com todos os itens

### 3. Listar itens por tipo

- **URL**: `/items?type=fruta`
- **Método**: `GET`
- **Parâmetros de Consulta**: `type` (opcional)
- **Respostas**:
  - `200 OK` - Retorna array com itens do tipo especificado

### 4. Buscar item por ID

- **URL**: `/items/:id`
- **Método**: `GET`
- **Parâmetros de URL**: `id` - ID do item
- **Respostas**:
  - `200 OK` - Item encontrado
  - `400 Bad Request` - ID inválido
  - `404 Not Found` - Item não encontrado

### 5. Verificar status do servidor

- **URL**: `/health`
- **Método**: `GET`
- **Respostas**:
  - `200 OK` - Servidor funcionando corretamente

## 📝 Exemplos de Uso

### Criando um novo item

```bash
curl -X POST http://localhost:5000/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Banana",
    "quantity": 5,
    "type": "fruta"
  }'
```

### Listando todos os itens

```bash
curl http://localhost:5000/items
```

### Filtrando itens por tipo

```bash
curl http://localhost:5000/items?type=fruta
```

### Buscando um item por ID

```bash
curl http://localhost:5000/items/1
```

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido seguindo práticas de versionamento com Git, utilizando commits semânticos para facilitar o entendimento das alterações realizadas. Cada etapa do desenvolvimento está documentada nos commits, desde a inicialização do projeto até a documentação final. 