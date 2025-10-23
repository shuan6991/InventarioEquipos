import { agregarEquipo, listarEquipos, eliminarEquipo, actualizarEquipo } from "../controllers/equiposController.js";
import express from 'express'


const equipoRouter = express.Router()

equipoRouter.post('/', agregarEquipo)
equipoRouter.get('/', listarEquipos)
equipoRouter.delete('/:activo', eliminarEquipo)
equipoRouter.put('/:activo', actualizarEquipo)


export default equipoRouter