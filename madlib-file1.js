const http = require('http');
const fs = require('fs');


// Alternatively, we could have used `readFileSync` to read the file contents
// before we create and start the server.
fs.readFile('templates/madlib.html', (err, data) => {
    const madlibHTML = data.toString();
    const server = http.createServer((req, res) => {
        const justTheName = req.url.slice(1); // Everything after the '/'
        const updatedHTML = madlibHTML.replace('***NAME***', justTheName);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(updatedHTML);
    });
    
    server.listen(3000);
});

