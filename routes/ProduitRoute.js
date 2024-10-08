// routes/productRoutes.js
const express = require('express');
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Ajouter un produit
router.post('/', authMiddleware, addProduct);

// Obtenir tous les produits
router.get('/', authMiddleware, getProducts);

// Obtenir un produit par ID
router.get('/:id', authMiddleware, getProductById);

// Mettre à jour un produit
router.put('/:id', authMiddleware, updateProduct);

// Supprimer un produit
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;
