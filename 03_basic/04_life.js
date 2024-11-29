// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  console.log("DB CONNECTED");
})();

(function arecode() {
  console.log(`DB CONNECTED TWO`);
})();

// or

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("smit");
