// primitive
const name = 'RHU5',
  age = 24,
  gender = 'male';

const sayHi = (name: string, age: number, gender: string): void => {
  console.log(`Hi ${name}, you are ${age}, you are a ${gender}`);
};

const sayBye = (name: string, age: number, gender: string): string => {
  return `Bye ${name}, you are ${age}, you are a ${gender}`;
};

// interface
interface IHuman {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'Tom',
  age: 27,
  gender: 'female',
};

const sayHello = (person: IHuman): void => {
  console.log(
    `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`,
  );
};

// class
class CHuman {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const James = new CHuman('James', 30, 'male');

const sayWow = (person: CHuman): void => {
  console.log(
    `Wow ${person.name}, you are ${person.age}, you are a ${person.gender}`,
  );
};

sayHi(name, age, gender);
console.log(sayBye(name, age, gender));
sayHello(person);
sayWow(James);

export {};
