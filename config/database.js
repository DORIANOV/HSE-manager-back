const { Sequelize } = require('sequelize');
require('dotenv').config(); // Pour charger les variables d'environnement

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // ou 'postgres', 'sqlite' selon ta base de donn�es
});

// V�rification de la connexion
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion � la base de donn�es SQL r�ussie');
    } catch (error) {
        console.error('Erreur de connexion � la base de donn�es :', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
