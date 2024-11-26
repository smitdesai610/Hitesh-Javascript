// Dates

const myDate = new Date();
// const year = myDate.getFullYear();
// const month = myDate.getMonth() + 1;
// const day = myDate.getDate();
// const hours = myDate.getHours();
// const minutes = myDate.getMinutes();
// const seconds = myDate.getSeconds();

// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

const myCreatedDate = new Date(2023, 0, 26);
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date("05-12-2023");
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} how are you this time`);

// const weekday = newDate.toLocaleString("default", {
//   weekday: "long",
// });

// console.log(weekday);

const currentTime = new Date();
console.log(currentTime.toLocaleTimeString());
