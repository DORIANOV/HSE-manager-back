


const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/database');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à la base de données
connectDB();

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
