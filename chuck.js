const axios = require('axios');
function getJoke() {
    const jokeURL = `https://api.chucknorris.io/jokes/random?category=dev`;
    axios.get(jokeURL)
        .then(response => {
            console.log(response.data.value);
        });
}
module.exports = {
    getJoke
};