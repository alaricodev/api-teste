const http = require('http');
const app = require('./app'); //bus
const port = process.env.PORT || 3000;

const server =  http.createServer(app); // posso todo conteúdo das rotas para o server
server.listen(port);
