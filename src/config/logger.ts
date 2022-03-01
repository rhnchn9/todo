import { createLogger, transports, format } from 'winston';
import morgan from 'morgan';

export const winstonLogger = createLogger({
    format: format.errors({ stack: true }),
    transports: [
        new transports.File({
            level: 'info',
            filename: '../../logs/all-logs.log',
            format: format.combine(
                format.json(),
                format.timestamp()
            ),
            handleExceptions: true,
            maxsize: 5242880, //5MB,
            maxFiles: 5
        }),
        new transports.Console({
            level: 'debug',
            format: format.combine(
                format.colorize(),
                format.simple()
            ),
            handleExceptions: true
        })
    ],
    exitOnError: false
});

const winstonLoggerStream = {
    write: function (message: string) {
        winstonLogger.info(message);
    }
};

export const appLogger = morgan('combined', {
    stream: winstonLoggerStream
});
