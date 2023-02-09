const http = require("http");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const id = req.url.split('/').at(-1);
  if (req.url.includes("onsearch")) {
    getCharById(res, id);
  }
  if (req.url.includes('detail')) {
    getCharDetail(res, id);
  }
});

const port = 3001;
server.listen(port, 'localhost');
