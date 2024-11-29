"use strict";
const user = {
  username: "smit desai",
  price: 1000,

  welcomeMessage: function () {
    // console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// this keyword use to current context access (current value inner function)

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// console.log(this);

// function ne run karta pela ani koi pn key ne change karvi hoi to kari shakiye ne pachi change thay jase ex:- user.username = "sam";

// function chai() {
//   const myName = "smit";
//   console.log(this.myName);
// }

// chai();

const chai = () => {
  const myName = "smit";
  console.log(this);
};

// chai();

function hello() {
  console.log(this);
}

hello();

const hel = () => {
  console.log(this);
};

hel();

// const addTwo = (num1, num2) => {
//   return num1 * num2;
// };

// or

// const addTwo = (num1, num2) => num1 * num2;

//or

// const addTwo = (num1, num2) => (num1 * num2);

// const addTwo = (num1, num2) => (username: "smit"); // undefind
// const addTwo = (num1, num2) => ({username: "smit"}); // username: smit

// console.log(addTwo(4, 8));
