const http = require('http');

const specialPeople = ['Oakley', 'Angela'];

function greetNice(whom) {
    return `How wonderfully splendid it is to be in your presence again, ${whom}!. You look magnificent today!`
}

function greetRegular(whom) {
    return `Hello, ${whom}!`
}

const server = http.createServer((req, res) => {
    const justTheName = req.url.slice(1); // Everything after the '/'

    const isSpecial = specialPeople
                        .find(name => name.toLowerCase() === justTheName.toLowerCase());

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    if (isSpecial) {
        res.end(greetNice(justTheName));
    } else {
        res.end(greetRegular(justTheName));
    }
});

server.listen(3000);