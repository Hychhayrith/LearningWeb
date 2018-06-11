const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res) => {
    //Status means as okay
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Chhayrith.');
});

server.listen(port, hostname, ()=> {
    //The port will combine with the host address
    console.log(`Server running at http://${hostname}:${port}/`);
});
