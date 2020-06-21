const promesa = new Promise((resolve, reject)=>{

    setTimeout(() => {
        const con = true;
        if(con){
            resolve("Se ejecuto con exito");
        }else{
            reject("No se ejecuto con exito");
        }
    }, 4000);

});



promesa.then((msg) => {
    alert(msg);
});
promesa.catch((msg) => {
    alert(msg);
});