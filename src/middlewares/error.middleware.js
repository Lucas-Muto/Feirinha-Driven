import httpStatus from 'http-status';

// Middleware para tratamento global de erros
export function errorHandler(err, req, res, next) {
  console.error('Erro:', err);
  
  // Se o erro já tiver um status definido, usar esse status
  const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Ocorreu um erro interno no servidor';
  
  return res.status(statusCode).json({ message });
}

// Middleware para lidar com rotas não encontradas
export function notFoundHandler(req, res, next) {
  return res.status(httpStatus.NOT_FOUND).json({ 
    message: 'Recurso não encontrado' 
  });
} 