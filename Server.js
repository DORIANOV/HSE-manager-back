


const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/database');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion � la base de donn�es
connectDB();

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// D�marrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur lanc� sur le port ${PORT}`);
});
