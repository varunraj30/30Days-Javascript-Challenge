// Activity 1
function throwError() {
  const a = true;
  try {
    a = false;
  } catch (error) {
    console.log("Error is ", error.message);
  }
}

throwError();

function divideTwo(num1, num2) {
  try {
    if (num2 !== 0) return num1 / num2;
    else {
      throw new Error("Denominator is zero");
    }
  } catch (error) {
    console.log("Error is ", error.message);
  }
}

divideTwo(5, 5);
divideTwo(5, 0);

// Activity 2
try {
  console.log("In try block");
  throw new Error("");
} catch (error) {
  console.log("In error block");
} finally {
  console.log("In finally block");
}

// Activity 3
class customError extends Error {
  constructor(message = "Custom Error is working fine") {
    super(message);
  }
}

function callCustom() {
  throw new customError();
}

try {
  callCustom();
} catch (error) {
  console.log("In err block ", error.message);
}

class customError extends Error {
  constructor(message = "Given String is Empty") {
    super(message);
  }
}

function checkString(string) {
  if (string.trim().length == 0) {
    throw new customError();
  }
}

try {
  checkString("  ");
} catch (error) {
  console.log("In err block ", error.message);
}

// Activity 4
const promiseOne = new Promise((resolve, reject) => {
  const randomNumber = Math.random().toFixed(2);
  if (randomNumber > 0.5) {
    resolve(randomNumber);
  } else {
    reject(new Error("Less than 0.5"));
  }
});

promiseOne
  .then((data) => console.log(data))
  .catch((e) => console.log("Error is ", e));

async function promiseHandler(promise) {
  try {
    const data = await promise;
    console.log(data);
  } catch (error) {
    console.log("Inside catch block ", error.message);
  }
}

promiseHandler(promiseOne);

// Activity 5
fetch("https://invalid-url")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e.message));

(async () => {
  try {
    const fetchData = await fetch("https://invalid-url");
    const data = await fetchData.json();
    console.log(data);
  } catch (error) {
    console.log("Inside catch block ", error.message);
  }
})();
