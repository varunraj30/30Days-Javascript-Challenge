// Activity 1
const myArr = [1, 2, 3, 4, 5];

console.log(myArr);

console.log(myArr[0], myArr[myArr.length - 1]);

// Activity 2
// Push -> addes at the last , pop -> removes from the last
console.log(myArr.push(6));
console.log(myArr);
console.log(myArr.pop());
console.log(myArr);
// Shift -> removes from the 1st unshift -> adds from the 1st
console.log(myArr.shift());
console.log(myArr);
console.log(myArr.unshift(10));
console.log(myArr);

// Activity 3
doubArr = [];
myArr.map((e) => doubArr.push(e * 2));
console.log(doubArr);

let newArr = myArr.filter((e) => e % 2 == 0);
console.log(newArr);

let newArrReduce = myArr.reduce((acc, first) => acc + first, 0);
console.log(newArrReduce);

// Activity 4
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

myArr.forEach((element) => {
  console.log(element);
});

// Activity 5
const twoArray = [
  [1, 2],
  [3, 4],
];
console.log(twoArray);
console.log(twoArray[0][0]);
console.log(twoArray[0][1]);
console.log(twoArray[1][0]);
console.log(twoArray[1][1]);
