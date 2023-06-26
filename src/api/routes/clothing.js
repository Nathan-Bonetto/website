const handlers = require('../handlers/clothing');

module.exports = [
  {
    method: 'GET',
    path: '/api/clothing',
    handler: handlers.fetchClothing
  }
];
