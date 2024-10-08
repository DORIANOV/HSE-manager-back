// routes/entrepriseRoutes.js
const express = require('express');
const { getAllEntreprises, getEntrepriseById, updateEntreprise, deleteEntreprise } = require('../controllers/entrepriseController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Obtenir toutes les entreprises
router.get('/', authMiddleware, getAllEntreprises);

// Obtenir une entreprise par ID
router.get('/:id', authMiddleware, getEntrepriseById);

// Mettre à jour une entreprise
router.put('/:id', authMiddleware, updateEntreprise);

// Supprimer une entreprise
router.delete('/:id', authMiddleware, deleteEntreprise);

module.exports = router;
