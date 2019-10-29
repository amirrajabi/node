const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('MessageLogger', {message: 'Message has been logged.'})
    }
}

module.exports = Logger;