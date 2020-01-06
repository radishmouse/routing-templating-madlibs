const http = require('http');
const faker = require('faker');

const server = http.createServer((req, res) => {
    const parts = req.url.split('/'); // grabs the parts separated by '/'
    let result = '';

    for (let part of parts) {        
        if (part === 'adjective') {
            result += faker.hacker.adjective();
        }
        if (part === 'noun') {
            result += faker.hacker.noun();
        }
        if (part === 'verb') {
            result += faker.hacker.verb();
        }
        if (part === 'abbreviation') {
            result += faker.hacker.abbreviation();
        }
        if (part === 'ingverb') {
            result += faker.hacker.ingverb();
        }
        if (part === 'phrase') {
            result += faker.hacker.phrase();
        }

        result += ' '
    }


    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(result);
});

server.listen(3000);
