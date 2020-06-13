const ano = 2020; 
const usuario = {
    nombre: 'Kevin Uribe',
    correo: 'correo@correo.com',
    nacimiento: 1999,
    pais: 'Colombia',
    profesion: 'Desarrollador Backend',
    funcion : 
        function calcularEdad({nacimiento}) {
            return ano - nacimiento;
    }
}
const {nombre,funcion} = usuario
console.log(`${nombre} tiene ${funcion(usuario)}`); 