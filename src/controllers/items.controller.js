import httpStatus from 'http-status';
import { createItem, getAllItems, getItemsByType, getItemById } from '../models/items.model.js';

// Controlador para gerenciar operações relacionadas aos itens
const itemsController = {
  // Criar um novo item
  create: (req, res) => {
    const { name, quantity, type } = req.body;
    
    // Criar o item usando o modelo
    const result = createItem({ name, quantity, type });
    
    if (!result.success) {
      if (result.error === 'conflict') {
        return res.status(httpStatus.CONFLICT).json({
          message: result.message
        });
      }
      
      return res.status(httpStatus.BAD_REQUEST).json({
        message: result.message
      });
    }
    
    return res.status(httpStatus.CREATED).json(result.item);
  },
  
  // Listar todos os itens, com filtragem opcional por tipo
  getAll: (req, res) => {
    const { type } = req.query;
    
    // Se houver parâmetro 'type', filtrar por tipo
    const items = type ? getItemsByType(type) : getAllItems();
    
    return res.status(httpStatus.OK).json(items);
  },
  
  // Buscar um item específico por ID
  getById: (req, res) => {
    const { id } = req.params;
    
    const result = getItemById(id);
    
    if (!result.success) {
      if (result.error === 'not_found') {
        return res.status(httpStatus.NOT_FOUND).json({
          message: result.message
        });
      }
      
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro ao buscar item'
      });
    }
    
    return res.status(httpStatus.OK).json(result.item);
  }
};

export default itemsController; 