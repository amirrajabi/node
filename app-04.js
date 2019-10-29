const Logger = require('./logger-04');

let logger = new Logger();

logger.on('MessageLogger', (eventArgs) => {
    console.log(eventArgs.message);
});

logger.log('Hello World!')
