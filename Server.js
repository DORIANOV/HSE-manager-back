


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
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const entrepriseRoutes = require('./routes/entrepriseRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const certificationRoutes = require('./routes/certificationRoutes');
const productRoutes = require('./routes/productRoutes');
const trousseRoutes = require('./routes/trousseRoutes');
const db = require('./models'); // Assurez-vous que votre modèle de base de données est correctement configuré

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/entreprises', entrepriseRoutes);
app.use('/api/equipements', equipmentRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/produits', productRoutes);
app.use('/api/trousses', trousseRoutes);

// Synchroniser les modèles et démarrer le serveur
const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
