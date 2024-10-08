// controllers/productController.js
const Product = require('../models/Product');

// Ajouter un produit
exports.addProduct = async (req, res) => {
    const { nom, lien_achat, date_installation, date_derniere_verif } = req.body;
    try {
        const product = await Product.create({ nom, lien_achat, date_installation, date_derniere_verif });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout du produit', error });
    }
};

// Obtenir tous les produits
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la r�cup�ration des produits', error });
    }
};

// Obtenir un produit par ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouv�' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la r�cup�ration du produit', error });
    }
};

// Mettre � jour un produit
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nom, lien_achat, date_installation, date_derniere_verif } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouv�' });
        }
        await product.update({ nom, lien_achat, date_installation, date_derniere_verif });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise � jour du produit', error });
    }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouv�' });
        }
        await product.destroy();
        res.json({ message: 'Produit supprim�' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du produit', error });
    }
};
