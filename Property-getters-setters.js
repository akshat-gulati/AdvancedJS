// Getters

let user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.fullName); // "John Doe"


// Setters


let user1 = {
  firstName: "John",
  lastName: "Doe",
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

user1.fullName = "Jane Smith";
console.log(user1.firstName); // "Jane"
console.log(user1.lastName); // "Smith"