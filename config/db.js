const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/inventario', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Conectado a MongoDB (local)");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = dbconnect;