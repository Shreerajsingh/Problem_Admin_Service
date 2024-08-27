const winston = require('winston');
const {LOG_DB_URL} = require('./server.config');
require('winston-mongodb');

const allowedTransports = [];

allowedTransports.push(new winston.transports.Console());

allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}));

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => 
            `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
        )
    ),
    transports: allowedTransports
});

module.exports = logger;