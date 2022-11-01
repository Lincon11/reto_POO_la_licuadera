var scanf = require('scanf');
var Blender = require('./src/classBlender');


var superMixer = new Blender('Oster');

console.log("La licuadora\n");
console.log("-----------------------------------");
console.log(" Utiliza la nueva licuadora SuperMixer");
console.log("-1 Encenderla");
console.log("-2 Licuar");
console.log("-3 Mostrar marca");
console.log("-4 Apagar");
console.log("-5 Salir\n");

let salir;

do {

    console.log("Escoje tu opción:");
    let opcionSelecionada = scanf("%d");
    console.log("");
    console.log(superMixer.isOn);
    salir = opcionSelecionada;

    switch (opcionSelecionada) {
        case 1:
            if (superMixer.isOn) {
                console.log('La licuadora ya esta encendida');
            } else {
                superMixer.turnOn();
            }
            break;
        case 2:
            console.log("Ingrese La velocidad entre 1-4 opciones posibles");
            let speed = scanf("%d");
            try {
                superMixer.liquefy(speed);
            } catch (error) {
                error.showMessaError()
            }
            break;
        case 3:
            console.log(superMixer.showBrand())
            break;
        case 4:
            if (!superMixer.isOn) {
                console.log('La licuadora ya esta apagada');
            } else {
                superMixer.turnOff();
            }
            break;

        default:
            break;
    }

} while (salir !== 5);


