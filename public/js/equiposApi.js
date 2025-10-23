const url = 'http://localhost:8000/equipo'


export async function obtenerDatos() {
    try {
        const res = await fetch(url)

        if (!res.ok)
            throw new Error(`Error http ${res.status}`)
        return await res.json()

    } catch (error) {
        console.log('Error al listar los equipos', error.message)
    }
}
