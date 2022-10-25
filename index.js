var scanf = require('scanf');
var Blender = require('./src/classBlender');


let superMixer = new Blender('Oster');
superMixer.showBrand();
superMixer.turnOff();
superMixer.turnOn(7);
superMixer.showCurrentSpeed();
superMixer.turnOff();

