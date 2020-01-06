const http = require('http');



function greetingFor(whom) {
    const specialPeople = {
        "Oakley": "How wonderfully splendid it is to be in your presence again!",
        "Chris": "Oh hey...",
        "Milla": "Hello there"
    };

    const greeting = specialPeople[whom] || `Hello, ${whom}!`;

    return greeting;
}

const server = http.createServer((req, res) => {
    const justTheName = req.url.slice(1); // Everything after the '/'

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(greetingFor(justTheName));
});

server.listen(3000);