// singleton

// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "smit",
  age: 25,
  location: "mumbai",
  email: "smit@gmail.com",
  isLoggedIn: true,
  lastLoginDay: ["Monday", "Truesday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]); //  strig ma leva ni key
