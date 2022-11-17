import { MongoClient } from "mongodb";
import dotenv from "dotenv"
dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI)

try{
    await mongoClient.connect()
    console.log("MongoDB connected!")
}catch (error){
    console.error(error)
}

export const db = mongoClient.db('mywallet-api')
export const clients = db.collection('clients')
export const bankStatement = db.collection('bank-statement')
export const sessions = db.collection('sessions')
