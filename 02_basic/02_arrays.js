const indPlayers = ["virat", "bumrah", "rohit", "gill"];
const ausPlayers = ["head", "warner", "cummins", "starcs"];

// indPlayers.push(ausPlayers);
// console.log(indPlayers); //["virat", "bumrah", "rohit", "gill", ["head", "warner", "cummins", "starcs"]];
// console.log(indPlayers[4][2]); // Output: cummins

const allPlayers = indPlayers.concat(ausPlayers); // Concatenates two arrays
// console.log(allPlayers);

const all_New_Players = [...indPlayers, ...ausPlayers];
// console.log(all_New_Players); // same work as concat but more efficient karan ke  aama vadhare array nakhi shakavi

const company = [1, 2, 3, [4, 5], 6, 7, [8, 9, 10, [4, 5, 6]]];
const cxnc = company.flat(Infinity); // removes all nested arrays and move in 1 array
// console.log(cxnc);

// console.log(Array.isArray(cxnc));
// console.log(Array.from("cxnc"));
// console.log(Array.from({ name: "cxnc" })); // converts object to array !imp

let score = 100;
let player = "virat";
let country = "india";

// console.log(Array.of(score, player, country));

let player1 = [
  {
    name: "virat",
    age: 30,
    country: "india",
  },
];
// console.table(player1);
// console.log(player1);
