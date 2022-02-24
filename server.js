const express = require('express');
const app = express();
const port = 3000;

app.use('/', require('./routes/pokemon'));

app.listen(port, function() {
    console.log(`listening on port ${port}!`);
});