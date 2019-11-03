let promise = new Promise((resolve, reject) => {
    let str = 'Amir';

    if (str === 'amir') {
        resolve(str);
    } else {
        reject(Error('Something is wrong!'))
    }
});

promise.then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
})
