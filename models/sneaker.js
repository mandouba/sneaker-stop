const mongoose = require('mongoose');
const sneakerSchema = require('./sneakerSchema');

module.exports = mongoose.model('sneaker', sneakerSchema);