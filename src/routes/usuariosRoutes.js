import express from 'express'
import {registrarUsuario, listarUsuario, eliminarUsuario, actualizarUsuario} from '../controllers/usuariosController.js'
import {passwordHash} from '../middleware/auth.js'


const usuarioRouter = express.Router()

usuarioRouter.get('/', listarUsuario)
usuarioRouter.post('/', passwordHash, registrarUsuario)
usuarioRouter.delete('/:correo', eliminarUsuario)
usuarioRouter.put('/:correo', actualizarUsuario)


export default usuarioRouter