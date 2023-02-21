const favorit = require('../utils/favs');

const deleteFavorit = async (req, res) => {
    const {id} = req.params;
    if(id){

        const listFavorit =  favorit.filter( f => f.id != id);
        favorit.splice(listFavorit.indexOf(id), 1);
        res.status(200).json({message: `Favorit with ID ${id} not found`})
    }
}

module.exports = deleteFavorit;
