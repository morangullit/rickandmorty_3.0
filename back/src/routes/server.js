const http = require('http');
const characters = require('../utils/data');

const PORT = 3001;

const server = http.createServer((req, res) => {
  
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('rickandmorty/character')){
        const id = req.url.split('/').at(-1);
        const character = characters.find(char => char.id.toString() === id);
        if(character){
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(character));
        } else {
            res.statusCode = 404;
            res.end('Character not found');
        }
    } else {
        res.statusCode = 404;
        res.end('Routes Not found');
    }

})

server.listen(PORT, 'localhost');