var Resistor = /** @class */ (function () {
    function Resistor(resistance) {
        this.resistance = resistance;
    }
    Resistor.prototype.getCurrent = function (voltage) {
        return voltage / this.resistance;
    };
    return Resistor;
}());
var resistors = [new Resistor(110), new Resistor(220), new Resistor(4700)];
var totalCurrent = 0;
var voltage = 5;
for (var _i = 0, resistors_1 = resistors; _i < resistors_1.length; _i++) {
    var resistor = resistors_1[_i];
    totalCurrent += resistor.getCurrent(voltage);
}
console.log(totalCurrent);
