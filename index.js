var scanf = require('scanf')

class Blender {
    constructor(brand) {
        this.powerOn = false;
        this.currentSpeed = 0;
        this.blenderSpeeds = [0, 1, 2, 3, 4];
        this.brand = brand;

    }

    turnOn(requiredSpeed) {
        if (this.validatePowerOn()) {
            console.log('The blender is already on');
        } else if (this.validateSpeed(requiredSpeed) && requiredSpeed !== 0) {
            this.powerOn = true;
            this.currentSpeed = requiredSpeed;
            this.liquefy();
        } else {
            console.log('Invalid speed');
        }

    }
    turnOff() {
        if (!this.validatePowerOn()) {
            console.log('The blender is already off');
        } else {
            this.powerOn = false;
            this.currentSpeed = 0;
            console.log('Blender off');
        }

    }
    showBrand() {
        console.log(this.brand);
    }
    validatePowerOn() {
        return this.powerOn;
    }
    liquefy() {
        console.log('liquefying... Speed: ' + this.currentSpeed);

    }
    showCurrentSpeed() {
        console.log(this.currentSpeed);
    }
    validateSpeed(Speed) {
        return this.blenderSpeeds.includes(Speed);
    }

}

let superMixer = new Blender('Oster');
superMixer.showBrand();
superMixer.turnOn(3);
superMixer.turnOff();
superMixer.turnOn(7);
superMixer.turnOn(0);
superMixer.showCurrentSpeed();
superMixer.turnOff();

