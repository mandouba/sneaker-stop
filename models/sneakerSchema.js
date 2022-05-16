const { release } = require('os');

const Schema = require('mongoose').Schema;

const sneakerSchema = new Schema({
  shoe: { type: String, required: true },
  brand: String,
  colorWay: String,
  retailPrice: { type: Number, required: true, default: 0 },
  releaseDate: String,
  description: String
}, {
  timestamps: true
});

module.exports = sneakerSchema;