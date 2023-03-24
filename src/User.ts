export default class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get details() {
    return `${this.name} is ${this.age} years old`;
  }

  getOlder() {
    this.age++;
  }
}

