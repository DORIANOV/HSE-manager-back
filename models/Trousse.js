// models/Trousse.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Entreprise = require('./Entreprise');

const Trousse = sequelize.define('Trousse', {
    trousse_id: {
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
});

module.exports = Trousse;
