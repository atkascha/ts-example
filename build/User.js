"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
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
exports.default = User;
