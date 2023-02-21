const favorit = require('../utils/favs');

const getFavorit = async (req, res) => {
  try {
    res.status(200).json(favorit)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = getFavorit;
