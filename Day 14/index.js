// Activity 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Greetings! ${this.name}`;
  }
  updateAge(newAge) {
    this.age = newAge;
    return `Updated age is ${this.age}`;
  }
  static staticGreetingMessage() {
    return `Greetings! This method is created using static.`;
  }
}

const newPerson = new Person("Varun", 25);

console.log(newPerson.greeting());
console.log(newPerson.updateAge(16));

// Activity 2
class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount += 1;
  }
  getStudentId() {
    return this.studentId;
  }
  greeting() {
    return `Hello my name is ${this.name} and ID is ${this.studentId}`;
  }
}

const student = new Student("Varun", 16, 69);
console.log(student.getStudentId());
console.log(student.greeting());

// Activity 3
console.log(Person.staticGreetingMessage());

const stud1 = new Student("Varun", 16, 69);
console.log(Student.studentCount);
const stud2 = new Student("Raj", 20, 70);
console.log(Student.studentCount);
const stud3 = new Student("Raj", 20, 70);
console.log(Student.studentCount);

// Activity 4
class PersonTwo {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get FullName() {
    return `Your Full Name is ${this.firstName + " " + this.lastName}`;
  }
  set newFullName(name) {
    // const [firstName, lastName] = name.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

const newPersonTwo = new PersonTwo("Varunraj", "Goud");
console.log(newPersonTwo.FullName);
newPersonTwo.newFullName = ["Itachi", "Uchiha"];
console.log(newPersonTwo.newFullName("Itachi Uchiha"));
console.log(newPersonTwo.FullName);

// Activity 5
class Account {
  #balance;
  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
    return `Deposited amount ${amount} and Balance is ${this.#balance}`;
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrawed amount ${amount} Balance is ${this.#balance}`;
    } else {
      return `Insuffient balance`;
    }
  }
}

const accHolder = new Account();
console.log(accHolder.deposit(1000));
console.log(accHolder.withdraw(5000));
