# Day 7 of Javascript Challenge

## 1.Objects

```Javascript
// Activity 1
const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  year: "2000",
};
console.log(book);
console.log(book.title, "By", book.author);

// Activity 2
book.bookName = function () {
  return `${this.title}, ${this.author}`;
};

console.log(book.bookName());

book.bookYear = function (year) {
  return `${(this.year = year)}`;
};

console.log(book.bookYear(2020));

// Activity 3
const library = {
  name: "Varun's Library",
  books: [
    {
      title: "Harry Potter",
      author: "JK Rowling",
      year: "2000",
    },
    {
      title: "Harry Potter Chamber of Secrets",
      author: "JK Rowling",
      year: "2069",
    },
  ],
};

console.log(library);
console.log(
  `Library Name is ${library.name} and Title is ${library.books.map(
    (e) => e.title
  )}`
);

// Activity 4
book.printAll = function () {
  console.log(
    `Title is ${this.title} and year is  ${this.year} this output ${this}`
  );
};

book.printAll();

// Activity 5
for (const key in book) {
  console.log(`Key is ${key}, and the property is ${book[key]}`);
}

console.log(Object.keys(book));
console.log(Object.values(book));
```

## Lessons Learned

Got to know about objects in JS and various object methods with various examples.
