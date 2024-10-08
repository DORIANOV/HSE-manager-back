
const Equipment = require('../models/Equipment');
const Entreprise = require('../models/Entreprise');
// Ajouter un �quipement
exports.addEquipment = async (req, res) => {
    const { entreprise_id, nom, modele, date_installation, date_derniere_verif } = req.body;
    try {
        const equipment = await Equipment.create({ entreprise_id, nom, modele, date_installation, date_derniere_verif });
        res.status(201).json(equipment);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'�quipement', error });
    }
};

// Obtenir tous les �quipements
exports.getEquipments = async(
