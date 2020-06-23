const nombre = 'kevin uribe villa';
const amigos = ['esneider','carlos','luis','hugo'];

console.log(nombre.startsWith('k'));

console.log(amigos.includes('luis'));

console.log(amigos.find(amigo => {
    return amigo == 'hugo';
}));

console.log(amigos.findIndex(amigo => {
    return amigo == 'hugo';
}));