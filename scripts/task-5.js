class Car {
  _speed = 0;
  _price = 0;
  _maxSpeed = 0;
  _isOn = false;
  _distance = 0;

  constructor({ speed, price, maxSpeed, isOn, distance }) {
    if (speed !== undefined) this._speed = speed;
    if (price !== undefined) this._price = price;
    if (maxSpeed !== undefined) this._maxSpeed = maxSpeed;
    if (isOn !== undefined) this._isOn = isOn;
    if (distance !== undefined) this._distance = distance;
  }

  get speed() {
    return this._speed;
  }

  set price(value) {
    this.speed = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  set maxSpeed(value) {
    this._maxSpeed = value;
  }

  get isOn() {
    return this._isOn;
  }

  set isOn(value) {
    this._isOn = value;
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  }

  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
    );
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    const resultSpeed = this._speed + value;

    if (resultSpeed <= this._maxSpeed) {
      this._speed = resultSpeed;
    }
  }

  decelerate(value) {
    const resultSpeed = this._speed - value;

    if (resultSpeed >= 0) {
      this._speed = resultSpeed;
    }
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log("mustang", mustang);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000

mustang.price = 4000;
console.log(mustang.price); // 4000
