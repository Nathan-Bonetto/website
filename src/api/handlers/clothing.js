const Model = require('../../models/clothing');

exports.fetchClothing = async function(req, h) {
  const clothing = await Model.find(req.query);

  return clothing;
}