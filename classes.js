class Usuario {
    constructor(nombre, edad, correo){
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
    mostrarSaludo(msj){
        return console.log(msj);
    }
    mostrarInfo(){
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nCorreo: ${this.correo}`
    }
}




const objUsu1 = new Usuario('Kevin Uribe Villa', 21, 'correo@correo.com');
console.log(objUsu1.mostrarInfo());

class Estudiante extends Usuario{
    constructor(nombre, edad, correo, carrera){
        super(nombre, edad, correo)
        this.carrera = carrera;
    }
    mostrarInfo(){
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nCorreo: ${this.correo}\nCarrera: ${this.carrera}`
    }
}

const objUsu2 = new Estudiante('Maria Patricia Villa', 46, 'correo@correo.com', 'Desarrollador Backend');
console.log(objUsu2.mostrarInfo());