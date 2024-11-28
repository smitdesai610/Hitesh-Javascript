function myName() {
  console.log("S");
  console.log("m");
  console.log("i");
  console.log("");
  console.log("t");
  console.log("D");
  console.log("e");
  console.log("s");
  console.log("a");
  console.log("i");
}

// myName(); // only myName (key) lakhelu hoi e refference kevay
// () pachal aa karvi ano meaning execution kevay

function addTwoNumber(number1, number2) {
  //   console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
}
const result = addTwoNumbers(10, 20);

// console.log("Result: ", result); // output: Result 30

// addTwoNumber(3, null);

function logInUserMessage(username) {
  if (username === undefined) {
    // console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(logInUserMessage("hitesh"));
// console.log(logInUserMessage());

function calculateCartPrice(val1, val2, ...numb1) {
  return `${numb1} is cart items`;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 6000, 324));

const user = {
  name: "hitesh",
  age: 25,
};

function handleObject(anyobject) {
  // console.log(`Username is ${anyobject.name} and age is ${anyobject.age}.`);
}

// handleObject(user);
handleObject({
  name: "jsajda",
  age: 25,
});

const myNewArray = [101, 102, 103, 104, 105];

function returnSecoundValue(getArray) {
  return getArray[5];
}

// console.log(returnSecoundValue(myNewArray));

const movie = ["Jumanji", 1995];
function movieInfo(title, year) {
  // return console.log(`The  movie ${title} was released in ${year}`);
}
// movieInfo(...movie);
// movieInfo(movie);
