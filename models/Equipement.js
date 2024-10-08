// models/Equipment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Entreprise = require('./Entreprise');

const Equipment = sequelize.define('Equipment', {
    equipement_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    entreprise_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Entreprise,
            key: 'entreprise_id',
        },
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modele: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_installation: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_derniere_verif: {
        type: DataTypes.DATE,
    },
});

module.exports = Equipment;
