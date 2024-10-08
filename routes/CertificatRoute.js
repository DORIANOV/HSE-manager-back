// routes/certificationRoutes.js
const express = require('express');
const { addCertification, getCertifications, getCertificationById, updateCertification, deleteCertification } = require('../controllers/certificationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Ajouter une certification
router.post('/', authMiddleware, addCertification);

// Obtenir toutes les certifications
router.get('/', authMiddleware, getCertifications);

// Obtenir une certification par ID
router.get('/:id', authMiddleware, getCertificationById);

// Mettre à jour une certification
router.put('/:id', authMiddleware, updateCertification);

// Supprimer une certification
router.delete('/:id', authMiddleware, deleteCertification);

module.exports = router;
