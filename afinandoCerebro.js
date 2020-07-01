

const promesa = new Promise( (resolve, reject) => {
    const info = ['kevin uribe villa', 21, 'correo@correo.com', 'Colombia', 'Medellín'];
    const [nombre,edad,correo,pais,ciudad, pasaporte] = info;
    const bandera = validar(nombre,edad,pais,ciudad);
    if(pasaporte === undefined & bandera){
        
        resolve(info);
    }else{
        reject(info);
    }
});


promesa.then( (info) => {
    let [nombre,edad,,pais,ciudad,] = info;
    console.log(nombre+edad+pais+ciudad);
    let objExtranjero = new extranjero(nombre, edad,pais,ciudad);
});

promesa.catch( (informacion) => {
    let [nombre,edad,,pais,ciudad,] = informacion;
    let objPersona = new persona(nombre, edad,pais,ciudad);
});


function validar(...datos){
    const [nombre,edad,pais,ciudad] = datos;
    if(nombre != "" & edad > 18 & pais != "" & ciudad != ""){
        return true;
    }else{
        return false;
    }

}
class persona{
    constructor(nombre, edad, pais, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.ciudad = ciudad;
    }
}

class extranjero extends persona{
    constructor(nombre, edad, pais, ciudad,correo = 'No especificado'){
        super(nombre, edad, pais, ciudad);
        this.correo = correo;
    
        if(pais.includes("C")){
            pais = "COLOMBIA";
        }
        console.log(`El pasajero ${nombre} y tiene años ${edad} de edad, su correo es ${correo}, por ultimo vive en ${pais}/${ciudad}`);
    }
}






