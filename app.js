import { conexionDB } from "./src/config/db.js";
import express from 'express'
import {config} from 'dotenv'
import equipoRouter from "./src/routes/equiposRoutes.js";
import usuarioRouter from "./src/routes/usuariosRoutes.js";
import cors from 'cors'
import bodyParser from "body-parser";
import { iniciarServer } from "./src/config/server.js";

config()

const opciones = {
    port:process.env.PORT || 5000,
    publicPath: process.env.PUBLIC_PATH
}

const app = express()
app.use(cors())
app.use(bodyParser.json())

conexionDB()

app.use('/equipo', equipoRouter)
app.use('/user', usuarioRouter)

iniciarServer(app, opciones )

