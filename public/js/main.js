import { obtenerDatos } from "./equiposApi.js"
import { tablaDatos } from "./ui.js"

document.addEventListener('DOMContentLoaded', async () => {
    equipos = await obtenerDatos()
    if (equipos)
        tablaDatos(equipos)
})
