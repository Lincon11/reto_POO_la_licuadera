var scanf = require('scanf');
var Blender = require('./src/classBlender');


let superMixer = new Blender('Oster');
superMixer.showBrand();
superMixer.turnOn(3);
superMixer.turnOff();
superMixer.turnOn(7);
superMixer.turnOn(0);
superMixer.showCurrentSpeed();
superMixer.turnOff();

