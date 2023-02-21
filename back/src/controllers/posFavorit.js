const favorit = require('../utils/favs');

const posFavorit = async (req, res) => {

  const  character = req.body;

  if (character) {
  //  console.log(JSON.stringify(req.body));
    favorit.push(character);
  }

  try {
    //res.body = JSON.parse(req.body);
    res.status(200).send(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = posFavorit;
