const User = require('../models/User');

// Obtenir tous les utilisateurs
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la r�cup�ration des utilisateurs' });
    }
};

// Cr�er un nouvel utilisateur
const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await User.create({ name, email, password });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la cr�ation de l\'utilisateur' });
    }
};

module.exports = {
    getUsers,
    createUser,
};
