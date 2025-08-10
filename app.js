const express = require('express');
const dbconnect = require('./config/db');
const productosRoutes = require('./routes/productos');

const app = express();
app.use(express.json());

app.use('/productos', productosRoutes);

// Conexión a BD y arranque del servidor
dbconnect().then(() => {
    app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
});