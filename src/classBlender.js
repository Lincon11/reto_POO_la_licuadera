class Blender {

    isOn = false;
    currentSpeed = 0;
    blenderSpeeds = [0, 1, 2, 3, 4];

    constructor(brand) {
        this.brand = brand;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    showBrand() {
        return this.brand;
    }

    validateIsOn() {
        return this.isOn;
    }

    liquefy() {
        if (!this.isOn)
            return false;

        return this.isOn;
    }

    setSpeed(speed) {
        if (!this.validateSpeed(speed))
            return 0;

        this.currentSpeed = speed;
    }

    validateSpeed(speed) {
        return this.blenderSpeeds.includes(speed);
    }

}

module.exports = Blender