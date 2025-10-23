const url = 'http://localhost:8000/equipo'

document.addEventListener('DOMContentLoaded', () => {
    listarEquipos()
})


async function listarEquipos() {
    try {
        const res = await fetch(url)

        if (!res.ok)
            throw new Error(`Error http ${res.status}`)
        const datos = await res.json()

    } catch (error) {
        console.log('Error al listar los equipos', error.messages)
    }
}
