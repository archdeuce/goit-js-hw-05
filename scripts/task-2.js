class User {
  // Аналог функции-конструктора
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  // Аналог Guest.prototype.getFullInfo
  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }
}

// 'function'
console.log(typeof User);

const mango = new User("Mango", 2, 20);
console.log(mango.getInfo()); // 'User Mango is 2 years old and has 20 followers'

// 'function'
console.log(typeof mango.getInfo);

const poly = new User("Poly", 3, 17);
console.log(poly.getInfo()); // 'User Poly is 3 years old and has 17 followers'
