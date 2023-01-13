class Resistor {
    r: number = 0;
    maxPower: number = 0;
    constructor(r: number, maxPower: number) {
      this.r = r;
      this.maxPower = maxPower;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
    getPower(u: number): number {
      const current = this.getCurrent(u);
      return u * current;
    }
    checkVoltage(u: number): boolean {
      return this.getPower(u) <= this.maxPower;
    }
  }
  
  let resistors: Resistor[] = [
    new Resistor(220, 1),
    new Resistor(4700, 2),
    new Resistor(110, 0.5)
  ];
  
  function filterResistorsByVoltage(voltage: number): Resistor[] {
    return resistors.filter((resistor) => {
      return resistor.checkVoltage(voltage);
    });
  }
  
  let filteredResistors = filterResistorsByVoltage(5);
  console.log(filteredResistors);
