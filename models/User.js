// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// D�finir le mod�le "User"
const User = sequelize.define('User', {
    // D�finition des champs
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

// Synchroniser avec la base de donn�es (cela cr�era la table si elle n'existe pas)
User.sync();

module.exports = User;
