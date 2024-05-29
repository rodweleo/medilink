import winston from "winston";

const { format, transports } = winston
const { combine, timestamp, label, colorize, printf, prettyPrint} = format
const customFormat =printf(({
    level, message, label, timestamp
}) => {
    return `${timestamp} ${level}: ${message}`
}) 
export const logger = winston.createLogger({
    level: "debug",
    format: combine(
        colorize({
            all: true
        }), timestamp({
        format: "YYYY-MM-DD HH:MM:SS"
    }),
    customFormat
),
    transports: [
        new transports.Console(),
        /*new transports.File({
            filename: "logs/activity.log"
        }),
        new transports.File({
            level: "error",
            filename: "logs/error.log",
          }),*/
    ]
})