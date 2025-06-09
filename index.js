// en la compu elige un numero del 1 al 16
// con una variable determinar si es igual al numero
// si es igual mostrar un mensaje

const numeroElegido = 7;
const numeroUsuario = parseInt(prompt("elige un numero del 1 al 16"));
if (numeroUsuario === numeroElegido) {
    console.log("¡feliidades! el numero es correcto")
} 
else {
    console.log("el numero es insorrecto, vuelve a intentarlo");
}