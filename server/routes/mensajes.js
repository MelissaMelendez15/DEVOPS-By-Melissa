const express = require('express');
const router = express.Router();
const Mensaje = require('../models/Mensaje');

router.get('/', async(req, res) => {
    const mensajes = await Mensaje.find();
    res.json(mensajes);
});

router.post('/', async (req, res) => {
const { texto } = req.body;

if (!texto) {
    return res.status(400).json({ error: 'El campo del texto es obligatorio'});
 }

 const nuevoMensaje = new Mensaje({ texto });
 await nuevoMensaje.save();

 res.status(201).json(nuevoMensaje);
});

module.exports = router;