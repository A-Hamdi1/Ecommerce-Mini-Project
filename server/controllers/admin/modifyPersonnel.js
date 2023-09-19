const Personnel = require('../../model/Personnel');

const modifyPersonnel = async (req, res) => {
  try {
    const personnelId = req.params.id;
    const updatedPersonnelData = req.body;

    const updatedPersonnel = await Personnel.findByIdAndUpdate(
      personnelId,
      updatedPersonnelData,
      { new: true }
    );

    if (!updatedPersonnel) {
      return res.status(404).json({ error: 'Personnel not found' });
    }

    res.json(updatedPersonnel);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = modifyPersonnel;
