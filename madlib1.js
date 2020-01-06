const http = require('http');

const server = http.createServer((req, res) => {
    const justTheName = req.url.slice(1); // Everything after the '/'

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(`Hello ${justTheName}`);
});

server.listen(3000);