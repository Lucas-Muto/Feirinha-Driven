import httpStatus from 'http-status';
import { errorResponse } from '../utils/response.utils.js';

// Middleware para validar a criação de um novo item
export function validateItemCreation(req, res, next) {
  const { name, quantity, type } = req.body;
  
  // Validar se todos os campos obrigatórios estão presentes
  if (!name || quantity === undefined || !type) {
    return errorResponse(
      res, 
      'Todos os campos são obrigatórios: name, quantity e type', 
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
  
  // Validar se o tipo de quantidade é número
  if (typeof quantity !== 'number') {
    return errorResponse(
      res, 
      'O campo quantity deve ser um número', 
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
  
  // Se tudo estiver correto, prosseguir
  next();
}

// Middleware para validar ID numérico
export function validateItemId(req, res, next) {
  const { id } = req.params;
  const numericId = Number(id);
  
  // Verificar se o ID é um número positivo
  if (!numericId || numericId <= 0 || isNaN(numericId)) {
    return errorResponse(
      res, 
      'ID inválido. O ID deve ser um número positivo.', 
      httpStatus.BAD_REQUEST
    );
  }
  
  // Se tudo estiver correto, prosseguir
  next();
} 