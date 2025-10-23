import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const iniciarServer = (app, opciones)=>{
    
    app.use(express.static(opciones.publicPath))

    app.get('/', (req, res)=>{
        const indexPath = path.join(__dirname,  '../', '../', opciones.publicPath, 'index.html')
        res.sendFile(indexPath)
    })

    app.listen(opciones.port, ()=>{
        console.log(`El servidor esta escuchando por el puerto ${opciones.port}`)
    })
}