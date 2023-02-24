let favorit = require('../utils/favs');

const deleteFavorit = async (req, res) => {
    const { id } = req.params;
    
    if (id) {
        const filteredFavorit = favorit.filter(f => f.id != id);
        favorit.splice(0, favorit.length);
        favorit.push(...filteredFavorit);
        res.status(200).json({ message: `Favorite with ID ${id} was deleted` });
    } else {
        res.status(400).json({ message: 'Invalid ID' });
    }
}

module.exports = deleteFavorit;

