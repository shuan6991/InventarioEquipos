import { usuario } from '../models/usuarios.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

const generarToken = (user) => {
    return jwt.sign(
        { usuario: user._id, email: user.correo },
        process.env.JWT_SECRET,
        { expiresIn: '10m' }
    )
}

export const registrarUsuario = async (req, res) => {
    try {
        const { nombreCompleto, correo, password } = req.body
        if (!nombreCompleto || !correo || !password) return res.status(400).json({ message: 'Todos los campos son obligatorios' })

        const nuevoUsuario = new usuario({
            nombreCompleto, correo, password
        })

        await nuevoUsuario.save()
        return res.status(201).json({ message: 'Usuario creado', nuevoUsuario })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const listarUsuario = async (req, res) => {
    try {
        const usuarios = await usuario.find()

        if (usuarios.length === 0) return res.status(404).json({ message: 'No se encontraron usuarios en la base de datos' })

        return res.status(200).json(usuarios)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const login = async (req, res) => {
    try {
        const { correo, password } = req.body

        if (!correo || !password) return res.status(400).json({ message: 'Los campos estan vacios' })

        const usuarioExiste = await usuario.findOne({ correo })
        if (!usuarioExiste) return res.status(400).json({ message: 'El usuario no existe en la base de datos' })

        const contraseña = await bcrypt.compare(password, usuario.password)
        if (!contraseña) return res.status(401).json({ messge: 'La contraseña es incorrecta' })

        generarToken(usuario)

        return res.status(201).json({ message: 'Inicio de sesion exitoso', token })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const actualizarUsuario = async(req, res)=>{
    try{
        const {correo} = req.body

        if(!correo)
            return res.satatus(400).json({message: 'El campo del correo es obligatorio'})

        const usuarioActualizado =req.body

        const actualizar = await usuario.findOneAndUpdate({correo}, usuarioActualizado, {new:true})
        if(!actualizar)
            return res.status().json({message: `No se encontro el usuario con el correo ${correo}`})

        return res.status(201).json({messsage: 'Se actualizo el usuario correctamente'})

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const eliminarUsuario = async (req, res) => {
    try {
        
        const eliminarUser = await usuario.findOneAndDelete(req.params.correo)
        if (!eliminarUser)
            return res.status(404).json({ message: `No se encontro el usuario con el correo ${correo}` })

        return res.status(201).json({ message: 'Se elimino el usuario correctamente', usuario: eliminarUser })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}