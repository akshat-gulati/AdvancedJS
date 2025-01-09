
// Objects
let user = {
  name: "John",
  age: 30
};
console.log(user.name); // John

// --------------------------------------------------------------
// Classes
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, ${this.name}!`);
  }
}
let user = new User("John");
user.sayHi(); // Hi, John!

// Object References and Copying
let user = { name: "John" };
let admin = user; // reference
admin.name = "Pete";
console.log(user.name); // Pete


// --------------------------------------------------------------
// Garbage Collection
// JavaScript automatically handles memory management, so you don't need to manually free memory.

// --------------------------------------------------------------

// Object Methods and "this"
let user = {
  name: "John",
  sayHi() {
    console.log(this.name);
  }
};
user.sayHi(); // John

// --------------------------------------------------------------

// Constructor and "new" Operator
function User(name) {
  this.name = name;
}
let user = new User("John");
console.log(user.name); // John

// --------------------------------------------------------------

// Optional Chaining '?.'
let user = {};
console.log(user?.address?.street); // undefined

// Object to Primitive Conversion
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};
console.log(user + ""); // John

// --------------------------------------------------------------

// Property Flags and Descriptors
let user = {};
Object.defineProperty(user, "name", {
  value: "John",
  writable: false
});
user.name = "Pete"; // Error in strict mode
console.log(user.name); // John

// --------------------------------------------------------------

// Property Getters and Setters
let user = {
  name: "John",
  get fullName() {
    return `${this.name} Doe`;
  }
};
console.log(user.fullName); // John Doe

// --------------------------------------------------------------

// Prototypes and Inheritance
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;
console.log(rabbit.eats); // true

// --------------------------------------------------------------

// Native Prototypes
console.log(Array.prototype); // Array methods

// --------------------------------------------------------------

// Objects Without __proto__
let obj = Object.create(null);
console.log(obj); // {}

// --------------------------------------------------------------

// Class Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
let dog = new Dog("Rex");
dog.speak(); // Rex barks.

// --------------------------------------------------------------

// Extending Built-in Classes
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}
let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

// --------------------------------------------------------------

// Promises Chaining
new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
}).then((result) => {
  console.log(result); // 1
  return result * 2;
}).then((result) => {
  console.log(result); // 2
  return result * 2;
});

// --------------------------------------------------------------

// Promises
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000);
});
promise.then((result) => {
  console.log(result); // done!
});

// --------------------------------------------------------------

// Promise API
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then((results) => {
  console.log(results); // [1, 2, 3]
});

// --------------------------------------------------------------

// Error Handling with Promises
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch((error) => {
  console.log(error.message); // Whoops!
});

// --------------------------------------------------------------

// Custom Errors, Extending Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
throw new ValidationError("Invalid data");

// --------------------------------------------------------------

// Promisification
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}
let loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
      loadScript(src, (err, script) => {
        if (err) reject(err);
        else resolve(script);
      });
    });
  };
// --------------------------------------------------------------


// Async/Await
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}
fetchData();

// --------------------------------------------------------------

// Async Iteration and Generators
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield new Promise((resolve) => setTimeout(() => resolve(i++), 1000));
  }
}
(async () => {
  for await (let num of asyncGenerator()) {
    console.log(num); // 0, 1, 2
  }
})();

// --------------------------------------------------------------

// Currying
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
function sum(a, b) {
  return a + b;
}
let curriedSum = curry(sum);
console.log(curriedSum(1)(2)); // 3

// Hoisting
console.log(hoistedVar); // undefined
var hoistedVar = 5;

// --------------------------------------------------------------

// Callbacks
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}
loadScript('path/to/script.js', (err, script) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Script loaded:', script.src);
  }
});

// --------------------------------------------------------------

// Microtasks
Promise.resolve().then(() => console.log("Microtask 1"));
console.log("Regular task");
Promise.resolve().then(() => console.log("Microtask 2"));

