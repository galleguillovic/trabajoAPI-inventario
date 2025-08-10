const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Crear producto
router.post('/', async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
});

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

// Obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

// Actualizar un producto
router.put('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
        res.json(producto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
        res.json({ mensaje: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

// Endpoint de negocio: productos con stock bajo (<5)
router.get('/negocio/stock-bajo', async (req, res) => {
    try {
        const productos = await Producto.find({ stock: { $lt: 5 } });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

module.exports = router;