class Thermostat {
  constructor(thermostat) {
    this._thermostat = thermostat;
  }
  get temperature() {
    return ( 5/9 ) * (this._thermostat - 32)
  }
  set temperature(updatedTemperature) {
    this._thermostat = (updatedTemperature * 9/5) + 32
  }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp)