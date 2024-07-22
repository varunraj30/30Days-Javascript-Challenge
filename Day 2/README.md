# Day 2 of Javascript Challenge

## 1.Operators

```Javascript
// Activity 1
function addTwo(num1, num2) {
  return num1 + num2;
}

function subTwo(num1, num2) {
  return num1 - num2;
}

function mulTwo(num1, num2) {
  return num1 * num2;
}

function divTwo(num1, num2) {
  return num1 / num2;
}

function remTwo(num1, num2) {
  return num1 % num2;
}

console.log(addTwo(1, 2));
console.log(subTwo(2, 3));
console.log(mulTwo(3, 4));
console.log(divTwo(4, 5));
console.log(remTwo(20, 10));

// Task 2
let user = 5;
user += 2;
console.log(user);

let userTwo = 5;
userTwo -= 2;
console.log(userTwo);

// Task 3
function greOrLess(num1, num2) {
  if (num1 > num2) return `${num1} is greater than ${num2}`;
  if (num1 < num2) return `${num2} is greater than ${num1}`;
}

console.log(greOrLess(10, 20));

function greOrLessEqual(num1, num2) {
  if (num1 >= num2) {
    if (num1 == num2) {
      return `${num1} is equal to  ${num2}`;
    }
    return `${num1} is greater than  ${num2}`;
  }
  if (num1 <= num2) return `${num2} is greater than ${num1}`;
}

console.log(greOrLessEqual(10, 10));

function equal(num1, num2) {
  if (num1 == num2) {
    if (num1 === num2) {
      return "Strict Equal and Same Data type";
    }
    return "Just Equal";
  }
}

console.log(equal(10, "10"));

// Activity 4
function logicalAnd(num1, num2) {
  if (num1 == num2 && num1 === num2) return "Both are Equal and has data type";
  return "Both are not Equal and not of same data type";
}

function logicalOr(num1, num2) {
  if (num1 == num2 || num1 === num2) return "Both are Equal but they might be of different data type";
}

function logNot(num1) {
  if (!num1) return "num1 is not provided";
  return num1;
}

console.log(logicalAnd(4, 5));
console.log(logicalOr(5, 5));
console.log(logNot(5));


// Activity 5
function posOrNeg(num1) {
  return num1 > 0 ? "Positive" : "Negative ";
}

console.log(posOrNeg(5));
console.log(posOrNeg(-5));

```

## Lessons Learned

Got to know the various operators in the Javascript
