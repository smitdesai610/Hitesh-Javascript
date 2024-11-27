// const tinderuser = new Object();
const tinderuser = {};

tinderuser.id = "123abc";
tinderuser.name = "John Doe";
tinderuser.isLoggedIn = false;

// console.table(tinderuser);

const regularUSer = {
  email: "john@gmail.com",
  fullName: {
    userFullName: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};

// console.table(regularUSer.fullName.userFullName.lastName);

const obj1 = { 101: "fenil", 102: "shubham" };
const obj2 = { 103: "manish", 104: "dharmik" };
const obj3 = { 105: "karan", 106: "sagar" };

// const obj4 = Object.assign({}, obj1, obj2, obj3); // assin value of obj1 and obj2

// or

const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.table(obj4);

const user = [
  {
    id: 1,
    name: "ramesh",
    email: "ramesh@gmail.com",
    age: 25,
  },
  {
    id: 1,
    name: "ramesh",
    email: "ramesh@gmail.com",
    age: 25,
  },
  {
    id: 1,
    name: "ramesh",
    email: "ramesh@gmail.com",
    age: 25,
  },
  {
    id: 1,
    name: "ramesh",
    email: "ramesh@gmail.com",
    age: 25,
  },
];

user[1].email;

// console.log(tinderuser);
// console.log(Object.keys(tinderuser)); // returns all keys of the object
// console.log(Object.values(tinderuser)); // returns all values of the object
// console.log(Object.entries(tinderuser)); // returns all key value pairs of the object

// console.log(tinderuser.hasOwnProperty("isLoggedIn")); // returns true or false

const player = {
  name: "Rahul",
  runs: 10000,
  centuries: 2,
  harfCenturies: 10,
};
// console.log(player.centuries);

const { runs: intructor } = player; // destructuring
// console.log(intructor); // any name you can give
console.log(runs); // same value print

// API full form is Application Programming Interface
