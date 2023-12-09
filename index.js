const express = require('express');

const app = express();

app.post('/', (request, response) => {
    console.log('Method POST')
})

app.listen(3000, () => console.log('Server started at http://localhost:3000'));