const Personnel = require("../../model/Personnel");

const deletePersonnel = async (req, res) => {
  const personnelId = req.params.id;

  try {
    await Personnel.findByIdAndDelete(personnelId);
    res.send("Le personnel a été supprimé avec succès.");
  } catch (error) {
    res
      .status(500)
      .send("Une erreur s'est produite lors de la suppression du personnel.");
  }
};

module.exports = deletePersonnel;
