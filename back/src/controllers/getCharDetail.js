
const axios = require('axios');

const getCharDetail = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const obj = {
        id: response.data.id,
        image: response.data.image,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        status: response.data.status,
        origin: response.data.origin 
      };
      console.log(obj);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(obj));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharDetail;
