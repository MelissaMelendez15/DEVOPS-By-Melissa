require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

//Rutas
const mensajesRouter = require('./routes/mensajes');
app.use('/api/mensajes', mensajesRouter);

//Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('💾 Conectado a MongoDB'))
  .catch((err) => console.error(err));
  
  // Puerto
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
  });