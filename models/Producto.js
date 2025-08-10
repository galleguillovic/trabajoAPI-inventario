const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoria: { type: String, required: true },
    fechaIngreso: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', productoSchema);