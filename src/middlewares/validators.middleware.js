import httpStatus from 'http-status';

// Middleware para validar a criação de um novo item
export function validateItemCreation(req, res, next) {
  const { name, quantity, type } = req.body;
  
  // Validar se todos os campos obrigatórios estão presentes
  if (!name || quantity === undefined || !type) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
      message: 'Todos os campos são obrigatórios: name, quantity e type'
    });
  }
  
  // Validar se o tipo de quantidade é número
  if (typeof quantity !== 'number') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
      message: 'O campo quantity deve ser um número'
    });
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
    return res.status(httpStatus.BAD_REQUEST).json({
      message: 'ID inválido. O ID deve ser um número positivo.'
    });
  }
  
  // Se tudo estiver correto, prosseguir
  next();
} 