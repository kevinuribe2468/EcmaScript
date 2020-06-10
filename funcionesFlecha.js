const nombres = ['Kevin', 'Alejandro', 'Wilson', 'Patricia'];
//nombres.map(function (nombre) {
//    console.log(`${nombre} tiene ${nombre.length} caracteres`)
//});
const numero_caracteres = nombres.map( nombre => `${nombre} tiene ${nombre.length} caracteres`);

console.log(numero_caracteres);
