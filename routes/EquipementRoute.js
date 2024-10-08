// routes/equipmentRoutes.js
const express = require('express');
const { addEquipment, getEquipments, getEquipmentById, updateEquipment, deleteEquipment } = require('../controllers/equipmentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Ajouter un �quipement
router.post('/', authMiddleware, addEquipment);

// Obtenir tous les �quipements
router.get('/', authMiddleware, getEquipments);

// Obtenir un �quipement par ID
router.get('/:id', authMiddleware, getEquipmentById);

// Mettre � jour un �quipement
router.put('/:id', authMiddleware, updateEquipment);

// Supprimer un �quipement
router.delete('/:id', authMiddleware, deleteEquipment);

module.exports = router;
