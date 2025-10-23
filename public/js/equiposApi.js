
const url = 'http://localhost:8000/equipo'


export async function DatosHtml() {
    try {
        const res = await fetch(url)

        if (!res.ok)
            throw new Error(`Error http ${res.status}`)
        return await res.json()

    } catch (error) {
        console.log('Error al listar los equipos', error.message)
    }
}



export async function eliminarDato(activo){
    try{
        const res = await fetch(`${url}/${activo}`,{
            method: "DELETE"                 
        })

        if(!res.ok)
            throw new Error(`Error http ${res.status}`)

        console.log('El equipo fue eliminado')

    }catch(error){
        console.log('No se pudo elimnar equipo de la base de datos', error.message)
    }
}

export async function agregarEquipo(datos){
    try{
        const res = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(datos)
        })

        if(!res.ok)
            throw new Error(`Error http ${res.status}`)

        console.log('El equipo se agrego correctamente')

    }catch(error){
        console.log('No se pudo agregar equipo de la base de datos', error.message)
    }
}