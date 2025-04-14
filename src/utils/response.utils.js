import httpStatus from 'http-status';

/**
 * Funções utilitárias para padronizar as respostas da API
 */

/**
 * Cria uma resposta de sucesso
 * @param {Object} res - Objeto de resposta do Express
 * @param {Object|Array} data - Dados a serem retornados na resposta
 * @param {number} status - Código de status HTTP (padrão: 200 OK)
 * @returns {Object} Resposta formatada
 */
export function successResponse(res, data, status = httpStatus.OK) {
  return res.status(status).json(data);
}

/**
 * Cria uma resposta de erro
 * @param {Object} res - Objeto de resposta do Express
 * @param {string} message - Mensagem de erro
 * @param {number} status - Código de status HTTP (padrão: 500 Internal Server Error)
 * @returns {Object} Resposta formatada
 */
export function errorResponse(res, message, status = httpStatus.INTERNAL_SERVER_ERROR) {
  return res.status(status).json({ message });
}

/**
 * Cria uma resposta de criação bem-sucedida
 * @param {Object} res - Objeto de resposta do Express
 * @param {Object} data - Dados do recurso criado
 * @returns {Object} Resposta formatada
 */
export function createdResponse(res, data) {
  return successResponse(res, data, httpStatus.CREATED);
}

/**
 * Cria uma resposta para recursos não encontrados
 * @param {Object} res - Objeto de resposta do Express
 * @param {string} message - Mensagem de erro (padrão: "Recurso não encontrado")
 * @returns {Object} Resposta formatada
 */
export function notFoundResponse(res, message = 'Recurso não encontrado') {
  return errorResponse(res, message, httpStatus.NOT_FOUND);
} 