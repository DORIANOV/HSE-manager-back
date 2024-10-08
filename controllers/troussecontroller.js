// controllers/trousseController.js
const Trousse = require('../models/Trousse');
const Contient = require('../models/Contient');

// Ajouter une trousse
exports.addTrousse = async (req, res) => {
    const { entreprise_id, nom } = req.body;
    try {
        const trousse = await Trousse.create({ entreprise_id, nom });
        res.status(201).json(trousse);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout de la trousse', error });
    }
};

// Obtenir toutes les trousses
exports.getTrousse = async (req, res) => {
    try {
        const trousses = await Trousse.findAll();
        res.json(trousses);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la r�cup�ration des trousses', error });
    }
};

// Obtenir une trousse par ID
exports.getTrousseById = async (req, res) => {
    const { id } = req.params;
    try {
        const trousse = await Trousse.findByPk(id);
        if (!trousse) {
            return res.status(404).json({ message: 'Trousse non trouv�e' });
        }
        res.json(trousse);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la r�cup�ration de la trousse', error });
    }
};

// Mettre � jour une trousse
exports.updateTrousse = async (req, res) => {
    const { id } = req.params;
    const { nom } = req.body;
    try {
        const trousse = await Trousse.findByPk(id);
        if (!trousse) {
            return res.status(404).json({ message: 'Trousse non trouv�e' });
        }

