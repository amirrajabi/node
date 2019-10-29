const fs = require('fs');

fs.writeFile('data.json', '{"name": "Amir"}', (err) => {
    if (err) {
        console.log(err);
    }
});

fs.readFile('data.json', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});