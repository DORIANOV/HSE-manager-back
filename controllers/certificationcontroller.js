// controllers/certificationController.js
const Certification = require('../models/Certification');

// Ajouter une certification
exports.addCertification = async (req, res) => {
    const { entreprise_id, nom_prenom_employe, date_certification, organisme_de_delivrance } = req.body;
    try {
        const certification = await Certification.create({ entreprise_id, nom_prenom_employe, date_certification, organisme_de_delivrance });
        res.status(201).json(certification);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout de la certification', error });
    }
};

// Obtenir toutes les certifications
exports.getCertifications = async (req, res) => {
    try {
        const certifications = await Certification.findAll();
        res.json(certifications);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des certifications', error });
    }
};

// Obtenir une certification par ID
exports.getCertificationById = async (req, res) => {
    const { id } = req.params;
    try {
        const certification = await Certification.findByPk(id);
        if (!certification) {
            return res.status(404).json({ message: 'Certification non trouvée' });
        }
        res.json(certification);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la certification', error });
    }
};

// Mettre à jour une certification
exports.updateCertification = async (req, res) => {
    const { id } = req.params;
    const { nom_prenom_employe, date_certification, organisme_de_delivrance } = req.body;
    try {
        const certification = await Certification.findByPk(id);
        if (!certification) {
            return res.status(404).json({ message: 'Certification non trouvée' });
        }
        await certification.update({ nom_prenom_employe, date_certification, organisme_de_delivrance });
        res.json(certification);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la certification', error });
    }
};

// Supprimer une certification
exports.deleteCertification = async (req, res) => {
    const { id } = req.params;
    try {
        const certification = await Certification.findByPk(id);
        if (!certification) {
            return res.status(404).json({ message: 'Certification non trouvée' });
        }
        await certification.destroy();
        res.json({ message: 'Certification supprimée' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la certification', error });
    }
};
