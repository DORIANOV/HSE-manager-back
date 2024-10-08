// models/Entreprise.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Entreprise = sequelize.define('Entreprise', {
    entreprise_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nb_employe: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    entreprise_nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    mot_de_passe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Entreprise;
