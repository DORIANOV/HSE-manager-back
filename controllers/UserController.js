const User = require('../models/User');

// Obtenir tous les utilisateurs
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
};

// Créer un nouvel utilisateur
const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await User.create({ name, email, password });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
};

module.exports = {
    getUsers,
    createUser,
};
