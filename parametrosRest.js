const mostrarDatos = (...datos) => {
    return datos;
}
const arr = [1,2,3,4,5,6];
console.log(mostrarDatos('kevin uribe', 21, 'correo@correo.com', 'Científico de Datos'));
console.log(mostrarDatos(...arr));