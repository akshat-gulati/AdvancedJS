// let user = { name: "John" };
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(descriptor);


// Defining Property Descriptors
// The Object.defineProperty method allows you to define or modify a property with specific descriptors:

let user = {};
Object.defineProperty(user, "name", {
  value: "John",
  writable: false,
  enumerable: false,
  configurable: false
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);
/* Output:
{
  value: "John",
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// Effects of Property Flags


// Non-writable:
let user1 = { name: "John" };
Object.defineProperty(user1, "name", { writable: false });
user1.name = "Pete"; // Error in strict mode


// Non-enumerable:
let user2 = { name: "John", age: 30 };
Object.defineProperty(user2, "age", { enumerable: false });
for (let key in user2) {
  console.log(key); // "name"
}


// Non-configurable:
let user3 = { name: "John" };
Object.defineProperty(user3, "name", { configurable: false });
delete user3.name; // Error in strict mode