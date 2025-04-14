import httpStatus from 'http-status';
import { createItem, getAllItems, getItemsByType, getItemById } from '../models/items.model.js';
import { successResponse, errorResponse, createdResponse, notFoundResponse } from '../utils/response.utils.js';

// Controlador para gerenciar operações relacionadas aos itens
const itemsController = {
  // Criar um novo item
  create: (req, res) => {
    const { name, quantity, type } = req.body;
    
    // Criar o item usando o modelo
    const result = createItem({ name, quantity, type });
    
    if (!result.success) {
      if (result.error === 'conflict') {
        return errorResponse(res, result.message, httpStatus.CONFLICT);
      }
      
      return errorResponse(res, result.message, httpStatus.BAD_REQUEST);
    }
    
    return createdResponse(res, result.item);
  },
  
  // Listar todos os itens, com filtragem opcional por tipo
  getAll: (req, res) => {
    const { type } = req.query;
    
    // Se houver parâmetro 'type', filtrar por tipo
    const items = type ? getItemsByType(type) : getAllItems();
    
    return successResponse(res, items);
  },
  
  // Buscar um item específico por ID
  getById: (req, res) => {
    const { id } = req.params;
    
    const result = getItemById(id);
    
    if (!result.success) {
      if (result.error === 'not_found') {
        return notFoundResponse(res, result.message);
      }
      
      return errorResponse(res, 'Erro ao buscar item');
    }
    
    return successResponse(res, result.item);
  }
};

export default itemsController; 