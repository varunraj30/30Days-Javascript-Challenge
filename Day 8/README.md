# Day 8 of Javascript Challenge

## 1.ES6+ Features

```Javascript
// Activity 1
const perName = "Varun";
const perAge = 16;
console.log(`Person name is ${perName} and the age is sweet is ${perAge}`);

// Activity 2
const myArr = [1, 2, 3];
const [first, second] = myArr;

console.log(first, second);

const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  year: "2000",
};

const { title, author } = book;
console.log(title, author);

// Activity 3

function addAll(arr, ...num1) {
  const newArr = [...arr];
  num1.forEach((ele) => newArr.push(ele));
  console.log(newArr);
}

addAll(myArr, 10, 20, 69, 96);

function sumThemAll(...num1) {
  let sum = num1.reduce((acc, firstval) => {
    return acc + firstval;
  }, 0);
  console.log(sum);
}

sumThemAll(10, 20, 30);

// Activity 4
function prod(num1, num2 = 1) {
  return num1 * num2;
}

console.log(prod(10, 2));
console.log(prod(10));

// Activity 5
const property1 = "firstName";
const property2 = "secondName";
const personalDetails = {
  [property1]: "Varunraj",
  [property2]: "Goud",
  FavLanguage: "Javascript",
};
console.log(personalDetails);
```

## Lessons Learned

Got to know about ES6+ Features with various examples.
