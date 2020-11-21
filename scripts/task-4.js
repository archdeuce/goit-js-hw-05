class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
