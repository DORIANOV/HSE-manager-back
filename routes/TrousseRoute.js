// routes/trousseRoutes.js
const express = require('express');
const { addTrousse, getTrousse, getTrousseById, updateTrousse, deleteTrousse } = require('../controllers/trousseController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Ajouter une trousse
router.post('/', authMiddleware, addTrousse);

// Obtenir toutes les trousses
router.get('/', authMiddleware, getTrousse);

// Obtenir une trousse par ID
router.get('/:id', authMiddleware, getTrousseById);

// Mettre à jour une trousse
router.put('/:id', authMiddleware, updateTrousse);

// Supprimer une trousse
router.delete('/:id', authMiddleware, deleteTrousse);

module.exports = router;
