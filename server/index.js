require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const app = express()

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie : {maxAge: 1000 * 60 * 60 * 24 * 14 }
    })
)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then( dbInstance => {
        app.set( 'db', dbInstance )
        app.listen( SERVER_PORT, () => console.log(`DB and SERVER running in ${SERVER_PORT}`) )
    } )
