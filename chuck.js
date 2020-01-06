const axios = require('axios');
function getJoke() {
    const jokeURL = `https://api.chucknorris.io/jokes/random?category=dev`;
    // console.log('about to return the Promise Chain');
    return axios.get(jokeURL).then(response => {
        // console.log('About to return the joke text'); 
        return response.data.value;
    });
    console.log('you will not see this print');
}
module.exports = {
    getJoke
};