import httpStatus from 'http-status';
import { errorResponse, notFoundResponse } from '../utils/response.utils.js';

// Middleware para tratamento global de erros
export function errorHandler(err, req, res, next) {
  console.error('Erro:', err);
  
  // Se o erro já tiver um status definido, usar esse status
  const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Ocorreu um erro interno no servidor';
  
  return errorResponse(res, message, statusCode);
}

// Middleware para lidar com rotas não encontradas
export function notFoundHandler(req, res, next) {
  return notFoundResponse(res);
} 