import mongoose from "mongoose";
import {config} from "dotenv"

config()

export const conexionDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conexion a la base de datos establecida')
    }catch(error){
        console.log(`Error al conectar a la base de datos ${error.message}`)
    }
}