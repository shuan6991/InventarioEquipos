import { DatosHtml } from "./equiposApi.js"
import { tablaDatos, formDatosEquipos} from "./ui.js"

document.addEventListener('DOMContentLoaded', async () => {
    const equipos = await DatosHtml()
    formDatosEquipos() 
    if (equipos)
        tablaDatos(equipos)

    

})
