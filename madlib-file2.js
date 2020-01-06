const http = require('http');
const fs = require('fs');


// Alternatively, we could have used `readFileSync` to read the file contents
// before we create and start the server.
fs.readFile('templates/madlib2.html', (err, data) => {
    const madlibHTML = data.toString();
    const server = http.createServer((req, res) => {
        const parts = req.url.split('/'); // grabs the parts separated by '/'
        let updatedHTML = madlibHTML.replace('***NAME***', parts[1]);
        updatedHTML = updatedHTML.replace('***PLACE***', parts[2]);

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(updatedHTML);
    });
    
    server.listen(3000);
});

