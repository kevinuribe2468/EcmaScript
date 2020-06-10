function registrarUsuario(nombre, pais, correo, numero = 'No especificado'){
    return `Nombre: ${nombre}, País: ${pais}, Correo: ${correo}, Numero: ${numero}`
}
const numero = undefined;
console.log(registrarUsuario('Kevin Uribe', 'Colombia', 'correo@correo.com',numero));