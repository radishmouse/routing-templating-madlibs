// gimme the http module
const http = require('http');
const chuck = require('./chuck');

const server = http.createServer((req, res) => {
    console.log(req.url);
    // get a joke
    chuck.getJoke();
    // chuck.getDadJoke();
    // console log it
    res.write(req.url);
    res.end();
    // res.end('yeah it works');
});

server.listen(3000);