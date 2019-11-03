const { mongoose } = require('./db/mongoose');
const { Person } = require('./model/person');
const { ObjectId } = require('mongodb');

let id = '5dbe279c53ae6e5313dd1cae';
let idNew = '5dbe2d6377188055acb7538a';

let idGenerate = new ObjectId();
console.log(idGenerate);

let newPerson = new Person({
    firstName: 'Amir',
    lastName: 'Rajabi',
    age: 39
});

/** CRUD */

/*
// Save data
newPerson.save().then((person) => {
    console.log('Person has been saved.', person);
}, (err) => {
    console.log('Unable to save person to database.', err)
});

// Read data
Person.find({
    _id: id
}).then((person) => {
    console.log(person);
});

Person.findById(id).then((person) => {
    console.log(person);
});

// Update data
Person.findByIdAndUpdate({
    _id: id
}, {
    $set: {
        firstName: 'Abu',
        lastName: 'Ata'
    }
}, {
    useFindAndModify: false
}).then(() => {
    console.log('Person has been update.')
});

Person.updateMany({
    _id: id
}, {
    $set: {
        firstName: 'Abtin',
        lastName: 'Daheshvar'
    }
}).then(() => {
    console.log('Person has been update.')
});

// Delete data
Person.deleteMany({
    _id: id
}).then(() => {
    console.log('Person has been delete forever.')
});

if(!ObjectId.isValid(idNew)) {
    console.log('Person id is not VALID!')
} else {
    Person.findByIdAndRemove(idNew, {
        useFindAndModify: false
    }).then(() => {
        console.log('Person has been delete forever.')
    });
}

*/