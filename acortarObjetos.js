const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo: () =>{
            return `Nombre: ${nombre}\nEdad: ${edad}`;
        }
    }
}

console.log(crearObjeto("Kevin Uribe", 21).mostrarInfo());