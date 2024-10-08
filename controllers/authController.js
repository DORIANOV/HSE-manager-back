// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Entreprise = require('../models/Entreprise');

// Inscription d'une entreprise
exports.register = async (req, res) => {
    const { nb_employe, entreprise_nom, email, mot_de_passe } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
        const entreprise = await Entreprise.create({
            nb_employe,
            entreprise_nom,
            email,
            mot_de_passe: hashedPassword,
        });
        res.status(201).json({ id: entreprise.entreprise_id, entreprise_nom: entreprise.entreprise_nom });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'inscription', error });
    }
};

// Connexion d'une entreprise
exports.login = async (req, res) => {
    const { email, mot_de_passe } = req.body;
    try {
        const entreprise = await Entreprise.findOne({ where: { email } });
        if (!entreprise) {
            return res.status(404).json({ message: 'Entreprise non trouvée' });
        }
        const isMatch = await bcrypt.compare(mot_de_passe, entreprise.mot_de_passe);
        if (!isMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
        const token = jwt.sign({ id: entreprise.entreprise_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, entreprise_nom: entreprise.entreprise_nom });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error });
    }
};
