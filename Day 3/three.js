// Activity 1
function numberType(num) {
  if (num > 0) return "Postive";
  else if (num == 0) return "Zero";
  else return "Negative";
}

console.log(numberType(0));
console.log(numberType(2));
console.log(numberType(-2));

function eligibleVoter(age) {
  if (age >= 18) return "Eligible";
  return "Not Eligible";
}

console.log(eligibleVoter(5));
console.log(eligibleVoter(18));
console.log(eligibleVoter(20));

// Activity 2
function largestOfThree(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    } else {
      return num3;
    }
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(largestOfThree(1, 2, 3));
console.log(largestOfThree(32, 21, 0));
console.log(largestOfThree(2, 5, 1));

// Activity 3
let day = 1;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Not Applicable. Please Enter between 1-7");
    break;
}

let marks = 85;
switch (true) {
  case marks <= 20:
    console.log("F");
    break;
  case marks <= 40:
    console.log("D");
    break;
  case marks <= 60:
    console.log("C");
    break;
  case marks <= 80:
    console.log("B");
    break;
  case marks <= 100:
    console.log("A");
    break;
  default:
    console.log("Invalid marks");
    break;
}

// Activity 4
function evenOdd(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

console.log(evenOdd(80));
console.log(evenOdd(33));

// Activity 5
function leapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    return console.log(`${year} is a leap year`);
  }
  return console.log(`${year} is not a leap year`);
}

leapYear(2000);
leapYear(2019);
leapYear(2024);
