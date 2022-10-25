class Blender {

    powerOn = false;
    currentSpeed = 0;
    blenderSpeeds = [0, 1, 2, 3, 4];

    constructor(brand) {
        this.brand = brand;
    }

    turnOn() {
        this.powerOn = true;
    }

    turnOff() {
        this.powerOn = false;

    }
    showBrand() {
        return this.brand;
    }
    validatePowerOn() {
        return this.powerOn;
    }
    liquefy() {
        return 'liquefying... Speed: ' + this.currentSpeed;

    }
    showCurrentSpeed() {
        return this.currentSpeed;
    }
    validateSpeed(Speed) {
        return this.blenderSpeeds.includes(Speed);
    }

}

module.exports = Blender