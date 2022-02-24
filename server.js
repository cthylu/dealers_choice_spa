const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/', require('./routes/pokemon'));

app.listen(port, function() {
    console.log(`listening on port ${port}!`);
});