import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()



export const passwordHash = async (req, res, next) => {
    try {
        const { password } = req.body

        if (!password) return next()

        const salt = await bcrypt.genSalt(10);
        const passwordHasheada = await bcrypt.hash(password, salt);

        req.body.password = passwordHasheada;

        return next()

    } catch (error) {
        return res.status(500).json({ message: 'Error al encriptar la contraseña' });
    }
}



export const validarToken = async (res, req, next) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) return res.status(401).json({ message: 'El token no existe, no se permite acceso' })

    try {
        const decode = await  jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = decode
        next()
    } catch (error) {
        return res.status(500).json({message: 'Token no valido o expirado'})
    }

}