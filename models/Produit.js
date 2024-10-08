// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    produit_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lien_achat: {
        type: DataTypes.STRING,
    },
    date_installation: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_derniere_verif: {
        type: DataTypes.DATE,
    },
});

module.exports = Product;
