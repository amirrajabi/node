require('./configs/config');

const express = require('express');
const app = express();

console.log(process.env.MONGOURI);

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('YOLO');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

/*
console.log(process.env.USER);
console.log(process.platform);
console.log(process.version);
*/