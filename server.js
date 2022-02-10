const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// const res = require('express/lib/response');
// const fs = require('fs');
// const path = require('path');


//parse inomeing string or array data
app.use(express.urlencoded({ extended: true}));
//parse income JSON data
app.use(express.json());
//instructs server to make certain files readily available and to not gate it behind a server endpoint
//this way we don't have to have endpoints for all of our html, css and js files.
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// const { animals } = require('./data/animals.json');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});