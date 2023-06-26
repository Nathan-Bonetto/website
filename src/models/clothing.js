const { Schema, model } = require('mongoose');

const clotheSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true },
  fit: { type: String, required: true },
  size: { type: String, required: true },
  theme: { type: String, required: true },
  photoRes: { type: String, required: true },
  url: { type: String }
}, { timestamps: true });

const ClotheModel = model('Clothing', clotheSchema);

module.exports = ClotheModel;
