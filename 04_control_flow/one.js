// If

const isUserLoggedIn = true;
const temprature = 30;

if (true) {
  // code to be executed if the condition is true
}

if (false) {
  // code to be executed if the condition is false
}

// if (2 === "2") {
//   console.log("2 is equal to 2");
// } else {
//   console.log("2 is not equal to 3");
// }

// if (temprature > 30) {
//   console.log("todays cool day");
// } else {
//   console.log("temprature is less then 50");
// }

// < less then
// <= less than or equal to
// > greater than
// >= greater than or equal to
// == doble equals (equal to)
// != not equal to
// === strict equal to (value and type )
// !== not strict equal to (value and type )

const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power : ${power} `);
// } else {
//   console.log(`User is not flying`);
// }

const balance = 1000;

// if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less then 500");
// } else if (balance < 740) {
//   console.log("less then 740");
// } else if (balance < 900) {
//   console.log("less then 900");
// } else {
//   console.log("less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const isLoggedInGoogle = false;
const isLoggedInEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("user is logged in and debit card is available");
}

// and condition with strick check

if (isLoggedInGoogle || isLoggedInEmail) {
  console.log("user is logged in");
}

// or condition
