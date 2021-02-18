const express = require('express');

const app = express();
//Call back function is called route handler
app.get('/', (req, res) => {
    res.send('Hello World Asad');


});

app.get('/api/courses', (req, res) => {

    res.send([1, 2, 3, 4, 5 ]);


});


//PORT is an environment variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}.....`));
