console.log('hello world!');

const axios = require('axios');

const start = async() => {
    try {
        const response = await axios.get('/pokemon');
        const things = response.data;
        const html = things.map(thing => {
            return `<li data-id='${thing.id}'>${thing.name}</li>`
        }).join('');
        document.querySelector('ul').innerHTML = html;
    } catch(err) {
        console.log(err);
    }
}
start();