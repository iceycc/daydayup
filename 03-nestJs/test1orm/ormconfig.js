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
    "type": "mysql",
    "host": DB_HOST,
    "port": "3306",
    "username": "amis",
    "password": DB_PASSWORD,
    "database": "ormdb",
    "timezone": "+8",
    "entityPrefix": "",
    "synchronize":isInit,
    "dropSchema": false, //utf8mb4 
    "logging": false,
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