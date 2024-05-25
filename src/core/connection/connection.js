import mongoose from "mongoose"
import dotenv from 'dotenv/config'
// let dotenv = require('dotenv').config()


export class Dbconnection {
    
    async databaseConnect () {
        try {
            await mongoose.connect(
                process.env.DB_CONNECTION_URL 
                ,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            );
            console.log("server connected to mongo db ")
        } catch (error) {
            console.log("error connecting mongodb")
            console.log(error)

        }

    }

}