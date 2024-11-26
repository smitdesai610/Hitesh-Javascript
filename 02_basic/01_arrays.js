// array

const myArray = [0, [132, 1321, 213214], 2321, 323, 245, 55];
const myHeros = [
  "iron man",
  "thor",
  "captain america",
  "black panther",
  "hulk",
  "spider man",
];
const myArray2 = new Array(101, 202, 303, 404, 505);

// console.log(myArray[1][2], myArray[3]);
// console.log(myHeros[1]);
// console.log(myArray2[0]);

// Array methods

myArray.push("smit", true, 7676); /// koi pn value add kre che push method
// myArray.push("fenil"); // koi pn value add kre che push method
// myArray.pop(); // last element remove kre che pop method

myArray.unshift(2321); // koi pn value 0 index par add kre che unshift method
myArray.shift(); // je value 1st index par hai to ane remove kre che shift method

// console.log(myArray.includes(true)); // true or false return kre che matalab k a jove che k aa value array ma che k ny includes method
// console.log(myArray.indexOf(9)); // je value nakhavi ani index batave

const newArray = myArray.join(); // array ne string ma convert kare

// console.log(myArray);
// console.log(newArray);

// slice, splice

const rollNum = [101, 102, 103, 104, 105, 106];
rollNum.push(107, 108, 109, 110);
console.log("A" + rollNum);

// const rollNum2 = rollNum.slice(2, 5); // 2 thi 4 value print kre but 5 index  ni ny kare
console.log("B" + rollNum);
// console.log(rollNum2);

const rollNum3 = rollNum.splice(2, 5); // 2 to 5 index par value remove kare and print karave new array ma
console.log("c" + rollNum);
console.log(rollNum3);
