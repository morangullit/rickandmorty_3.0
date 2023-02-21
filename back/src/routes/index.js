const { Router } = require('express')
// Controllers
const getChatById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFavorit = require('../controllers/getFavorit');
const postFavorit = require('../controllers/posFavorit');
const deleteFavorit = require('../controllers/deleteFavorit');

const router = Router();

router.get('/onsearch/:id', getChatById);
router.get('/detail/:id', getCharDetail);
router.post('/fav', postFavorit);
router.get('/fav', getFavorit);
router.delete('/fav/:id', deleteFavorit)

module.exports = { router }