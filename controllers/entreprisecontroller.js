// controllers/entrepriseController.js
const Entreprise = require('../models/Entreprise');

// Obtenir toutes les entreprises
exports.getAllEntreprises = async (req, res) => {
  try {
    const entreprises = await Entreprise.findAll();
    res.json(entreprises);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des entreprises', error });
  }
};

// Obtenir une entreprise par ID
exports.getEntrepriseById = async (req, res) => {
  const { id } = req.params;
  try {
    const entreprise = await Entreprise.findByPk(id);
    if (!entreprise) {
      return res.status(404).json({ message: 'Entreprise non trouvée' });
    }
    res.json(entreprise);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'entreprise', error });
  }
};

// Mettre à jour une entreprise
exports.updateEntreprise = async (req, res) => {
  const { id } = req.params;
  const { nb_employe, entreprise_nom, email } = req.body;
  try {
    const entreprise = await Entreprise.findByPk(id);
    if (!entreprise) {
      return res.status(404).json({ message: 'Entreprise non trouvée' });
    }
    await entreprise.update({ nb_employe, entreprise_nom, email });
    res.json(entreprise);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'entreprise', error });
  }
};

// Supprimer une entreprise
exports.deleteEntreprise = async (req, res) => {
  const { id } = req.params;
  try {
    const entreprise = await Entreprise.findByPk(id);
    if (!entreprise) {
      return res.status(404).json({ message: 'Entreprise non trouvée' });
    }
    await entreprise.destroy();
    res.json({ message: 'Entreprise supprimée' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'entreprise', error });
  }
};
