// Funções para manipulação dos dados de itens em memória

// Criar um novo item
function createItem(itemData) {
  const { name, quantity, type } = itemData;
  
  // Verificar se já existe um item com o mesmo nome
  const existingItem = global.items.find(item => item.name === name);
  if (existingItem) {
    return { success: false, error: 'conflict', message: 'Item com esse nome já existe' };
  }
  
  // Criar o novo item com ID gerado automaticamente
  const newItem = {
    id: global.itemId++,
    name,
    quantity,
    type
  };
  
  // Adicionar à lista de itens
  global.items.push(newItem);
  
  return { success: true, item: newItem };
}

// Listar todos os itens
function getAllItems() {
  return global.items;
}

// Filtrar itens por tipo
function getItemsByType(type) {
  return global.items.filter(item => item.type === type);
}

// Buscar item por ID
function getItemById(id) {
  const numericId = Number(id);
  
  // Verificar se o ID é um número positivo
  if (!numericId || numericId <= 0 || isNaN(numericId)) {
    return { success: false, error: 'bad_request', message: 'ID inválido' };
  }
  
  // Buscar o item
  const item = global.items.find(item => item.id === numericId);
  
  if (!item) {
    return { success: false, error: 'not_found', message: 'Item não encontrado' };
  }
  
  return { success: true, item };
}

export { createItem, getAllItems, getItemsByType, getItemById }; 