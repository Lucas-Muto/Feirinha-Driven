import express from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import itemsRouter from './routes/items.routes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Armazenamento em memória para os itens
global.items = [];
global.itemId = 1;

// Rota de teste
app.get('/health', (req, res) => {
  return res.status(httpStatus.OK).send('OK! Servidor funcionando!');
});

// Rotas da API
app.use('/items', itemsRouter);

// Porta definida como 5000 conforme requisito
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 