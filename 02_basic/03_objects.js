// singleton

// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "smit",
  "full name": "smit patel",
  age: 25,
  mySym: "mySym1",
  location: "mumbai",
  email: "smit@gmail.com",
  isLoggedIn: true,
  lastLoginDay: ["Monday", "Truesday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]); //  strig ma leva ni key
// console.log(JsUser["full name"]);
// console.log(typeof mySym);

JsUser.email = "smit@gpt.com";
// Object.freeze(JsUser); // onject freez kari lese je thi koi change nahi thay value ma
JsUser.email = "smit@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello Js USer");
};

JsUser.greetingTwo = function () {
  console.log(`hello Js USer, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
