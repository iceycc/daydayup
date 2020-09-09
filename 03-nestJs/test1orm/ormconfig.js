const fs = require('fs')
const {
    CODE_ENV
} = process.env;
console.log('---', CODE_ENV)
let envPath = `${__dirname}/.env.${CODE_ENV}`
try {
    fs.accessSync(envPath + '.local', fs.constants.R_OK | fs.constants.W_OK);
    envPath = envPath + '.local'
} catch (err) {
    console.error('no access!');
}

console.log(envPath)
require('dotenv').config({
    path: envPath
});
const DB_HOST = process.env.DB_HOST
const DB_PASSWORD = process.env.DB_PASSWORD
const isInit = false
module.exports = {
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "timezone": "+8",
    "entityPrefix": "",
    "synchronize":isInit,
    "dropSchema": false, //utf8mb4 
    "logging": process.env.DB_LOGGING,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}