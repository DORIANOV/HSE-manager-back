const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// Route pour obtenir tous les utilisateurs
router.get('/', getUsers);

// Route pour créer un nouvel utilisateur
router.post('/', createUser);

module.exports = router;
