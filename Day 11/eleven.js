// Activity 1
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 2000);
});

promise.then((e) => console.log(e));

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error");
  }, 2000);
});

promiseTwo.catch((e) => console.log(e));

// Activity 2
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) resolve({ username: "Varun", password: "123" });
    else reject("Something went wrong");
  }, 2000);
});

const promiseFour = (user) =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve(user.username);
      } else reject("Something went wrong 22");
    }, 2000);
  });

promiseThree
  .then((e) => promiseFour(e))
  .then((username) => console.log(username))
  .catch((err) => console.log(err));

// Activity 3
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    return resolve("Resolved");
  }, 1000);
});

async function funOne() {
  const resolver = await promiseFive;
  console.log(resolver);
}

funOne();

const promiseNew = new Promise(function (resolve, reject) {
  reject("Rejected ");
});

async function funTwo() {
  try {
    const resolver = await promiseNew;
  } catch (error) {
    console.log(error);
  }
}

funTwo();

// Activity 4
const promiseSix = new Promise(function (resolve, reject) {
  resolve(
    fetch("https://api.github.com/users/varunraj30")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
  );
});

promiseSix.then((data) => console.log(data)).catch((err) => console.log(err));
async function fetchUrl(url) {
  const fetchedData = await fetch(url);
  const data = await fetchedData.json();
  console.log("Inside fetchUrl:", data); // Log the data inside the async function
}

fetchUrl("https://api.github.com/users/Varunraj30");

// Activity 5
const promiseSeven = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 7 resolved");
  }, 1000);
});
const promiseEight = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 8 rejected");
  }, 2000);
});

Promise.all([promiseSeven, promiseEight])
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

Promise.race([promiseSeven, promiseEight])
  .then((data) => console.log(data))
  .catch((e) => console.log("error", e));
