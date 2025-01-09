// 1. Object Literal
const p1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue"
};

// 2. new Object()
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.eyeColor = "blue";

// 3. Using a Constructor Function
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}
const person1 = new Person("John", "Doe", 30, "blue");
const person2 = new Person("Jane", "Doe", 25, "green");

// Accessing Object Properties
// Dot Notation:
console.log(person.firstName); 

// Bracket Notation:
console.log(person["lastName"]);

// Adding and Modifying Properties
person.nationality = "American"; // Adding a new property
person.age = 31; // Modifying an existing property

// Deleting Properties
delete person.eyeColor;
console.log(person);

// Methods in Objects
const p2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(p2.fullName()); // Output: John Doe

// Nested Objects
const p3 = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};
console.log(p3.address.city); // Output: New York

// Object References
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 now references the same object as obj1
obj2.name = "Bob";
console.log(obj1.name); // Output: Bob

// Shallow Copy
let original1 = { name: "Alice", details: { age: 25 } };
let copy1 = Object.assign({}, original1);
copy1.details.age = 30;
console.log(original1.details.age); // Output: 30 (shared reference)

let original2 = { name: "Alice", details: { age: 25 } };
let copy2 = { ...original2 };
copy2.details.age = 30;
console.log(original2.details.age); // Output: 30 (shared reference)

// Deep Copy
let original3 = { name: "Alice", details: { age: 25 } };
let copy3 = JSON.parse(JSON.stringify(original3));
copy3.details.age = 30;
console.log(original3.details.age); // Output: 25

let original4 = { name: "Alice", details: { age: 25 } };
let copy4 = structuredClone(original4);
copy4.details.age = 30;
console.log(original4.details.age); // Output: 25

// Using lodash for deep copy
import cloneDeep from "lodash/cloneDeep.js";
let original5 = { name: "Alice", details: { age: 25 } };
let copy5 = cloneDeep(original5);
copy5.details.age = 30;
console.log(original5.details.age); // Output: 25

// Built-in methods to work with objects

// 1. Object.assign()
// This method copies properties from one or more source objects to a target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

// 2. Object.create()
// Creates a new object with the specified prototype object and properties.

const personProto = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(personProto);
me.name = 'Matthew';
me.isHuman = true;

me.printIntroduction(); // My name is Matthew. Am I human? true

// 3. Object.entries()
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

const obj3 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj3)); // [ ['foo', 'bar'], ['baz', 42] ]

// 4. Object.fromEntries()
// Transforms a list of key-value pairs into an object.

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj4 = Object.fromEntries(entries);
console.log(obj4); // { foo: 'bar', baz: 42 }

// 5. Object.keys()
// Returns an array of a given object's own enumerable property names.

const obj5 = { foo: 'bar', baz: 42 };
console.log(Object.keys(obj5)); // ['foo', 'baz']

// 6. Object.values()
// Returns an array of a given object's own enumerable property values.

const obj6 = { foo: 'bar', baz: 42 };
console.log(Object.values(obj6)); // ['bar', 42]

// 7. Object.defineProperty()
// Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

const obj7 = {};
Object.defineProperty(obj7, 'property1', {
  value: 42,
  writable: false
});

obj7.property1 = 77; // Throws an error in strict mode
console.log(obj7.property1); // 42

// 8. Object.getOwnPropertyDescriptor()
// Returns a property descriptor for a named property on an object.

const obj8 = { property1: 42 };
const descriptor = Object.getOwnPropertyDescriptor(obj8, 'property1');

console.log(descriptor);
// { value: 42, writable: true, enumerable: true, configurable: true }

// 9. Object.getPrototypeOf()
// Returns the prototype (i.e., the value of the internal [[Prototype]] property) of the specified object.

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1); // true

// 10. Object.setPrototypeOf()
// Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

const obj9 = {};
const proto = { foo: 'bar' };

Object.setPrototypeOf(obj9, proto);
console.log(obj9.foo); // 'bar'

// How Optional Chaining Works

const user = {
    address: {
      street: '123 Main St'
    }
  };
  
  const street = user && user.address && user.address.street;
  console.log(street); // '123 Main St'


  // Conversion of object to primitive value

// 1. toString Method:

let obj = {
  toString() {
    return "Hello";
  }
};

console.log(String(obj)); // "Hello"


// 2. valueOf Method:

let obj2 = {
  valueOf() {
    return 42;
  }
};

console.log(Number(obj2)); // 42

// 3. Symbol.toPrimitive Method:

const obj7 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return "Hello";
    }
    if (hint === "number") {
      return 42;
    }
    return null;
  }
};

console.log(String(obj)); // "Hello"
console.log(Number(obj)); // 42
console.log(obj + ""); // "null"