// gimme the http module
const http = require('http');
const chuck = require('./chuck');
let text;
const server = http.createServer((req, res) => {
    console.log(req.url);
    // get a joke

    if (req.url.startsWith('/joke')) {
        // slice it! /joke/
        // || is also known as the "guard operator"
        const name = req.url.slice(6) || "Arya Stark";
        console.log(`the name is ${name}`);
        chuck.getJoke()
            .then((jokeText) => {
                // console.log('I got the joke text!');
                text = jokeText.replace('Chuck Norris', name);
                // chuck.getDadJoke();
                // console log it
                res.write(text);
                res.end();
            })
            .then(() => {
                // console.log('another .then')
                console.log(text);
            })
    } else {
        res.end('no joke for you');
    }


    // console.log('after chuck.getJoke()')
    // console.log(text);
    // res.end('yeah it works');
});

server.listen(3000);