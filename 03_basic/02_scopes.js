let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const a = 10;

  function two() {
    let b = 20;
    // console.log(a);
    // console.log(b);
  }
  two();
}

one();

// same aa aapde if condition ma pn kari shakiye

if (true) {
  let name = "Rahul";
  if (name === "Rahul") {
    let email = "rahul@gmail.com";
    // console.log(`my name is ${name} and my email is ${email}.`);
  }
  //   console.log(email); // aa print ny thay km k scope j puro thay gyo ani bahar print no thay error aape
}
// console.log(name); // same here

// yaad rakho :- nano chokro , mota bhai hoi banne pase ice-cream che
// but nano chokro mota bhai pase thi ice-cream magi shake but mota bhai nana chokra pase thi n mangi shake
// a j rite inner scope outer scope access kri shake but outer scope inner scope ne acess no kari shake

//      ============== important ================

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
