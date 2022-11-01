var scanf = require('scanf');
var Blender = require('./src/classBlender');


let superMixer = new Blender('Oster');
superMixer.showBrand();
superMixer.turnOff();
superMixer.turnOn();
superMixer.turnOff();

console.log("La licuadora\n");
console.log("-----------------------------------");
console.log("1. Crear una nueva licuadora");
console.log("2. Listar licuadoras");
console.log("3. Utilizar Licuadora");
console.log("-----3.1 Encenderla");
console.log("-----3.2 Licuar");
console.log("-----3.3 Mostrar marca");
console.log("-----3.4 Apagar");
console.log("4. Actualizar");
console.log("5. Salir\n");


var listaDeLicuadoras = [];
let salir;

do {

    console.log("Escoje tu opción:");
    let opcionSelecionada = scanf("%d");
    console.log("");
    salir = opcionSelecionada;

    switch (opcionSelecionada) {
        case 1:
            console.log("Ingresa el nombre de la nueva Licuadora:");
            let nombreLicuadora = scanf("%S");
            console.log("Ingresa la marca de la nueva Licuadora:");
            let brand = scanf("%S");

            nombreLicuadora = new Blender(brand);

            if (listaDeLicuadoras.find((i) => i.name == nombreLicuadora)) {
                console.log("Esta Licuadora ya existe, por favor ingresa otra");
            } else {
                listaDeLicuadoras.push(nombreLicuadora);
            }
            console.log("Licuadora guardada exitosamente..!");
            break;
        case 2:
            listaDeLicuadoras.forEach(function (licuadoraActual, i) {
                let indice = i + 1;
                console.log(`${indice}. Nombre: ${licuadoraActual.name}`);
            });
            break;
        case 3:
            listaDeLicuadoras.forEach(function (licuadoraActual, i) {
                let indice = i + 1;
                console.log(`${indice}. Nombre: ${licuadoraActual.name}`);
            });

            console.log("Ingrese el numero de la Licuadora a utilizar: ");
            let indiceLicuadora = scanf("%d") - 1;
            console.log("Que deseas hacer con la licuadora?: \n1. Encenderla\n2. Licuar\n3.Mostrar marca\n4. Apagar");
            let eleccion = scanf("%d");
            switch (eleccion) {
                case 1:
                    if (indiceLicuadora.turnOn) {
                        console.log('La licuadora ya esta encendida');
                    } else {
                        listaDeLicuadoras[indiceLicuadora].turnOn();
                    }
                    break;
                case 2:
                    console.log("Ingrese La velocidad entre 1-4 opciones posibles");
                    let speed = scanf("%d");
                    try {
                        listaDeLicuadoras[indiceLicuadora].liquefy(speed);
                    } catch (error) {
                        error.showMessaError()
                    }
                    break;
                case 3:
                    listaDeLicuadoras[indiceLicuadora].showBrand();
                    break;
                case 4:
                    if (indiceLicuadora.turnOn) {
                        console.log('La licuadora ya esta apagada');
                    } else {
                        listaDeLicuadoras[indiceLicuadora].turnOff();
                    }
                    break;
                default:
                    console.log("Error: no existe esa opción");
                    break;
            }
            break;
        case 4:
            console.log('sin terminar');
            break
        default:
            console.log("Error: no existe esa opción");
            break;

    }
} while (salir !== 5);

