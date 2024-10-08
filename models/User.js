// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Définir le modèle "User"
const User = sequelize.define('User', {
    // Définition des champs
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Synchroniser avec la base de données (cela créera la table si elle n'existe pas)
User.sync();

module.exports = User;
