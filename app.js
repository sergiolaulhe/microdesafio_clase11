const express = require('express');

const path = require('path');

const app = express();

app.listen(3000, () =>
    console.log('Servidor en linea en puerto 3000'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
