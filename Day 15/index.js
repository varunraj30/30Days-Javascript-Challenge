// Activity 1
function outerFunction() {
  let outer = "Outer Scope";
  return function innerFunction() {
    return outer;
  };
}

const outer = outerFunction();
console.log(outer());

function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}

let count = counter();
console.log(count.getValue());
count.increment();
count.increment();
console.log(count.getValue());

// Activity 2
function generateUnique() {
  let number = 0;
  return function () {
    number++;
    return number;
  };
}

const getNumber = generateUnique();
console.log(getNumber());
console.log(getNumber());

function greetings(username) {
  return function () {
    return `Greetings! ${username}`;
  };
}

const greet = greetings("Varun");
console.log(greet());

// Activity 3
const functions = [];

for (let i = 0; i < 5; i++) {
  functions[i] = (function (index) {
    return function () {
      return index;
    };
  })(i);
}

console.log(functions[0]());
console.log(functions[1]());

// Activity 4
function itemManager() {
  let items = [];
  return {
    add: function (item) {
      items.push(item);
    },
    remove: function (deleteitem) {
      items = items.filter((i) => i !== deleteitem);
    },
    list: function () {
      return items;
    },
  };
}

const items = itemManager();
items.add("Itachi");
items.add("Varun");
items.add("Naruto");
console.log(items.list());
items.remove("Varun");
console.log(items.list());

// Activity 5
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    // console.log(key);
    if (!(key in cache)) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
