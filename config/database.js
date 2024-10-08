const { Sequelize } = require('sequelize');
require('dotenv').config(); // Pour charger les variables d'environnement

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // ou 'postgres', 'sqlite' selon ta base de données
});

// Vérification de la connexion
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données SQL réussie');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
