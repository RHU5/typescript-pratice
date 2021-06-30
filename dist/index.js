"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// primitive
const name = 'RHU5', age = 24, gender = 'male';
const sayHi = (name, age, gender) => {
    console.log(`Hi ${name}, you are ${age}, you are a ${gender}`);
};
const sayBye = (name, age, gender) => {
    return `Bye ${name}, you are ${age}, you are a ${gender}`;
};
const person = {
    name: 'Tom',
    age: 27,
    gender: 'female',
};
const sayHello = (person) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
// class
class CHuman {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const James = new CHuman('James', 30, 'male');
const sayWow = (person) => {
    console.log(`Wow ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
sayHi(name, age, gender);
console.log(sayBye(name, age, gender));
sayHello(person);
sayWow(James);
//# sourceMappingURL=index.js.map