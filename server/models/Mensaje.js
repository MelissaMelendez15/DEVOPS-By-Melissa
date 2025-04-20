const mongoose = require('mongoose');

const mensajeSchema = new mongoose.Schema({
    texto: String
});

module.exports = mongoose.model('Mensaje', mensajeSchema);