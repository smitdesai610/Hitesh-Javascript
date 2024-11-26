// 1. Primitive

// 7 type : string, Number, Boolean, Null, Undefined, Symbol, BigInt

let id = Symbol("123");
let anotherId = Symbol("123");

// console.log(id === anotherId); // false

const bigInt = 1234567890123456789012345678901234567890n;

// console.log(bigInt);

// 2.Reference(Non-promitive)

// Object, Array, Function

const players = ["virat", "rohit", "bumrah", "hardik"];
let myObj = {
  name: "virat",
  age: 30,
};

const myFunction = function () {
  console.log("Hello world");
};

// **********************

// stack(Primitive),Heap(Non-primitive)

// const name = "smit Desai";
// let newName = name;
// name = "smit Desai 2";

// console.log(newName);
// console.log(name);

let persone1 = {
  name: "smit Desai",
  email: "smit@gmail.com",
  age: 30,
};

// let persone2 = {
//   name: "fenil dholaria",
//   email: "smit@gmail.com",
//   age: 30,
// };

let persone2 = {
  name: "Fenil dholatria",
  email: persone1.email,
};

// console.log(persone2);

city = "surat";

console.log(city);
