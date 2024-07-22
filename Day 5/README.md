# Day 5 of Javascript Challenge

## 1.Functions

```Javascript
// Activity 1
function evenOdd(num) {
  if (num % 2 == 0) return "Even";
  return "Odd";
}

console.log(evenOdd(15));
console.log(evenOdd(12));

function square(num) {
  return num * num;
}

console.log(square(12));
console.log(square(19));

// Activity 2
function maxTwo(num1, num2) {
  if (num1 > num2) return num1;
  return num2;
}

console.log(maxTwo(10, 20));
console.log(maxTwo(30, 20));

function addString(str1, str2) {
  return str1 + str2;
}

console.log(addString("Var", "un"));

// Activity 3
const sumTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(sumTwo(15, 16));

const checkString = (str1, str) => {
  return str1.includes(str);
};

console.log(checkString("Varun", "w"));

// Activity 4
function product(num1, num2 = 5) {
  return num1 * num2;
}

console.log(product(5));

function greeting(name, age = 20) {
  return `Welcome ${name}, your age is ${age} `;
}

console.log(greeting("Varun"));

// Activity 5
function hello() {
  console.log("Hello");
}

function higherOrder(func, num) {
  while (num > 0) {
    num--;
    func();
  }
}

higherOrder(hello, 5);

function higherOrderTwo(func1, func2, val) {
  const result = func1(val);
  const resultTwo = func2(result);
  return resultTwo;
}

function add(num1) {
  return num1 + 2;
}
function mul(num2) {
  return num2 * 5;
}

console.log(higherOrderTwo(add, mul, 5));
```

## Lessons Learned

Got to know about functions,arrow functions and higher order functions with various examples.
