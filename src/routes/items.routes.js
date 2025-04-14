import express from 'express';
import itemsController from '../controllers/items.controller.js';

const router = express.Router();

// POST /items - Criar um novo item
router.post('/', itemsController.create);

// GET /items - Listar todos os itens, com filtro opcional por tipo
router.get('/', itemsController.getAll);

// GET /items/:id - Buscar um item específico por ID
router.get('/:id', itemsController.getById);

export default router; 