import { equipo } from '../models/equipos.js'

export const agregarEquipo = async (req, res) => {
    try {
        const { activo, marca, modelo, serie, caracteristicas: { disco, memoria, procesador }, software: { windows, office } } = req.body

        if (!activo || !marca || !modelo || !serie || !disco || !memoria || !procesador || !windows || !office)
            return res.status(404).json({ message: 'Todos los campos son obligatorios' })

        const equipoNuevo = new equipo({
            activo, marca, modelo, serie, caracteristicas: { disco, memoria, procesador }, software: { windows, office }
        })

        await equipoNuevo.save()
        return res.status(201).json({ message: 'El equipo se creo correctamente', equipoNuevo })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const listarEquipos = async (req, res) => {
    try {
        const equipos = await equipo.find()
        if (equipos.length === 0)
            return res.status(404).json({ message: 'No se encontraron equipos en la base de datos' })

        return res.status(201).json(equipos)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const actualizarEquipo = async (req, res) => {
    try {
        const { activo } = req.body

        if (!activo)
            return res.status(400).json({ message: 'El campo del activo es requerido' })

        const equipoActualizado = req.boy

        const equipoExist = await equipo.findOneAndUpdate({ activo }, equipoActualizado, { new: true })

        if (!equipoExist)
            return res.status(404).json({ message: `No se encontro el equipo con el activo ${activo}` })

        return res.status(200).json({ messge: 'El equipo fue actualizado', equipo: equipoExist })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const eliminarEquipo = async (req, res) => {
    try {
      
        const eliminar = await equipo.findOneAndDelete(req.params.activo)

        if (!eliminar)
            return res.status(404).json({ message: `No se contro el equipo con el activo ${activo}` })

        return res.status(200).json({ message: 'El equipo ha sido eliminado', equipo: eliminar })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}