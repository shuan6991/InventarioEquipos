

export function tablaDatos(equipos) {
    const tabalaEquiposCuerpo = document.querySelector('.tabla-equipos-cuerpo')

    tabalaEquiposCuerpo.innerHTML = ' '

    equipos.forEach(e => {
        const tr = document.createElement('TR')
        console.log(e)
        tr.innerHTML = `
            <td>${e.activo}</td>
            <td>${e.marca}</td>
            <td>${e.modelo}</td>
            <td>${e.serie}</td>
            <td>${e.disco}</td>
            <td>${e.memoria}</td>
            <td>${e.procesador}</td>
            <td>${e.windows}</td>
            <td>${e.office}</td>
           
        `

        tabalaEquiposCuerpo.appendChild(tr)
    });




}