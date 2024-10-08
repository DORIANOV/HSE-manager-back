// models/Contient.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Trousse = require('./Trousse');
const Product = require('./Product');

const Contient = sequelize.define('Contient', {
    trousse_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Trousse,
            key: 'trousse_id',
        },
    },
    produit_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'produit_id',
        },
    },
    date_maj: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    quantite: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
});

module.exports = Contient;
