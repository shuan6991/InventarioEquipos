
import { eliminarDato, agregarEquipo } from './equiposApi.js'

export function tablaDatos(equipos) {
    const tabalaEquiposCuerpo = document.querySelector('.tabla-equipos-cuerpo')

    if (!tabalaEquiposCuerpo) return

    tabalaEquiposCuerpo.innerHTML = ' '

    equipos.forEach(e => {
        const tr = document.createElement('TR')
        tr.classList.add('tabla-fila')

        tr.dataset.activo = e.activo

        tr.innerHTML = `
            <td class='tabla-dato'>${e.activo}</td>
            <td class='tabla-dato'>${e.marca}</td>
            <td class='tabla-dato'>${e.modelo}</td>
            <td class='tabla-dato'>${e.serie}</td>
            <td class='tabla-dato'>${e.caracteristicas.disco}</td>
            <td class='tabla-dato'>${e.caracteristicas.memoria}</td>
            <td class='tabla-dato'>${e.caracteristicas.procesador}</td>
            <td class='tabla-dato'>${e.software.windows}</td>
            <td class='tabla-dato'>${e.software.office}</td>
            <td class='tabla-dato tabla-dato-img'>
             <picture class="tabla-editar">
                     <source srcset="build/img/editar.webp" type="image/webp">
                    <source srcset="build/img/editar.png" type="image/jpeg">
                    <img src="build/img/editar.png" alt="agregar">
                </picture>  
                
                <picture class="tabla-eliminar">
                     <source srcset="build/img/eliminar.webp" type="image/webp">
                    <source srcset="build/img/eliminar.png" type="image/jpeg">
                    <img src="build/img/eliminar.png" alt="agregar">
                </picture>  
            </td>

           
        `

        tabalaEquiposCuerpo.appendChild(tr)

        const eliminar = tr.querySelector(".tabla-eliminar")

        eliminar.onclick = () => {
            eliminarDato(e.activo)
            eliminarEquipo(e.activo)
        }

    });
}

export function eliminarEquipo(activo) {
    const filaEliminar = document.querySelector(`tr[data-activo="${activo}"]`)
    filaEliminar.remove()

}


export function formDatosEquipos() {
    const formularioEquipos = document.querySelector('.formulario-equipos')

    if (!formularioEquipos) return

    formularioEquipos.addEventListener('submit', e => {

        e.preventDefault()

        const formDatos = new FormData(formularioEquipos)

        const datos = Object.fromEntries(formDatos.entries())

        datos.serie = datos.serie.toUpperCase()

        const cuerpo = {
            activo: datos.activo,
            marca: datos.marca,
            modelo: datos.modelo,
            serie: datos.serie,
            caracteristicas: {
                disco: datos.disco,
                memoria: datos.memoria,
                procesador: datos.procesador
            },
            software: {
                windows: datos.windows,
                office: datos.office
            }
        }

        agregarEquipo(cuerpo)

    })



}