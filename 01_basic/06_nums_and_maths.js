const score = 400;
// console.log(typeof score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // value ni pachal .000 jetla number joi a a parameter ma lakhva na

const otherNumber = 123.8965;

// console.log(otherNumber.toPrecision(6)); // parameter ma je value lakhvi ne tya sudhi ni value aape che

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); // aa method ma value ma coma (,) lage che

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4098)); // nagative value ne positive value ma convert kare che
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 9));

// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 34;
const max = 57;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
