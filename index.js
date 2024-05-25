
import express from 'express'
import { Dbconnection } from './src/core/connection/connection.js'
const db = new Dbconnection()
const app = express()

db.databaseConnect()
const port = 8200

app.listen(port, () => {
    console.log("server is running at ", port)
})