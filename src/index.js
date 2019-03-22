const app = require('express')();
const { urlencoded } = require('body-parser');

app.use(urlencoded({ extended: false }));

const getKey = require('./requests/getKey');
const addKey = require('./requests/addKey');

app.get('/:key', getKey);
app.post('/add', addKey);

app.all('*', (req, res) => {
    // TODO: Sending file with webpage
    res.send('<h1>Not found</h1>');
});

app.listen(3000);