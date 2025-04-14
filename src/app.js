import express from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import itemsRouter from './routes/items.routes.js';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js';
import { successResponse } from './utils/response.utils.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Armazenamento em memória para os itens
global.items = [];
global.itemId = 1;

// Rota de teste
app.get('/health', (req, res) => {
  return successResponse(res, { 
    status: 'OK', 
    message: 'Servidor funcionando!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Rotas da API
app.use('/items', itemsRouter);

// Middleware para rotas não encontradas
app.use(notFoundHandler);

// Middleware para tratamento de erros
app.use(errorHandler);

// Porta definida como 5000 conforme requisito
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 