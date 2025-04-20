require('dotenv').config();
const mongoose = require('mongoose');
const Mensaje = require('./models/Mensaje');

const mensajes = [
    { texto: "Soy una bestia silenciosa que está despertando." },
    { texto: "El cielo no es el límite, es solo el comienzo." },
    { texto: "Los rugidos más poderosos nacen en el silencio." },
    { texto: "Confía en tu código... y en tu magia interior." },
    { texto: "Cada despliegue es un salto de fe con alas de león." },

];

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log("🌱 Conectado a Mongo, sembrando mensajes...");

    await Mensaje.deleteMany();
    await Mensaje.insertMany(mensajes);

    console.log("✅ Mensajes sembrados con éxito");
    mongoose.disconnect();

})
.catch((err) => {
   console.error("❌ Error sembrando mensajes:", err);
});