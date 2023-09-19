const express = require('express');
const router = express.Router();
const Personnel = require('../../model/Personnel')
router.get('/getPersonnel', async (req, res) => {
  try {
    const personnel = await Personnel.find();
    res.status(200).json(personnel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;