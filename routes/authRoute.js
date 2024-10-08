// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Inscription d'une entreprise
router.post('/register', register);

// Connexion d'une entreprise
router.post('/login', login);

module.exports = router;
