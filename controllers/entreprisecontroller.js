// controllers/entrepriseController.js
const Entreprise = require('../models/Entreprise');

// Obtenir toutes les entreprises
exports.getAllEntreprises = async (req, res) => {
  try {
    const entreprises = await Entreprise.findAll();
    res.json(entreprises);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la r�cup�ration des entreprises', error });
  }
};

// Obtenir une entreprise par ID
exports.getEntrepriseById = async (req, res) => {
  const { id } = req.params;
  try {
    const entreprise = await Entreprise.findByPk(id);
    if (!entreprise) {
      return res.status(404).json({ message: 'Entreprise non trouv�e' });
    }
    res.json(entreprise);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la r�cup�ration de l\'entreprise', error });
  }
};

// Mettre � jour une entreprise
exports.updateEntreprise = async (req, res) => {
  const { id } = req.params;
  const { nb_employe, entreprise_nom, email } = req.body;
  try {
    const entreprise = await Entreprise.findByPk(id);
    if (!entreprise) {
      return res.status(404).json({ message: 'Entreprise non trouv�e' });
    }
    await entreprise.update({ nb_employe, entreprise_nom, email });
    res.json(entreprise);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise � jour de l\'entreprise', error });
  }
};

// Supprimer une entreprise
exports.deleteEntreprise = async (req, res) => {
  const { id } = req.params;
  try {
    const entreprise = await Entreprise.findByPk(id);
    if (!entreprise) {
      return res.status(404).json({ message: 'Entreprise non trouv�e' });
    }
    await entreprise.destroy();
    res.json({ message: 'Entreprise supprim�e' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'entreprise', error });
  }
};
