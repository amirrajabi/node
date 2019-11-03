let doHomeWork = (subject, callback) => {
    console.log(`Starting my ${subject} homework`);
    callback();
};

let finishedHomeWork = () => {
    console.log('Finished my homework.')
}

doHomeWork('Math', finishedHomeWork);