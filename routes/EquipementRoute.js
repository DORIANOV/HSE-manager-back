// routes/equipmentRoutes.js
const express = require('express');
const { addEquipment, getEquipments, getEquipmentById, updateEquipment, deleteEquipment } = require('../controllers/equipmentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Ajouter un équipement
router.post('/', authMiddleware, addEquipment);

// Obtenir tous les équipements
router.get('/', authMiddleware, getEquipments);

// Obtenir un équipement par ID
router.get('/:id', authMiddleware, getEquipmentById);

// Mettre à jour un équipement
router.put('/:id', authMiddleware, updateEquipment);

// Supprimer un équipement
router.delete('/:id', authMiddleware, deleteEquipment);

module.exports = router;
