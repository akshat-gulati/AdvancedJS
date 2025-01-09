
// ### What is a Class?
// A class in JavaScript is a blueprint for creating objects with predefined properties and methods. It encapsulates data and functions that operate on that data.

// ### Defining a Class
// You can define a class using the `class` keyword. Here's the basic syntax:
class ClassName {
    constructor(parameter1, parameter2) {
        this.property1 = parameter1;
        this.property2 = parameter2;
    }

    method1() {
        // code for method1
    }

    method2() {
        // code for method2
    }
}

// ### Example
// Let's create a simple `Car` class:
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return `${this.make} ${this.model} (${this.year})`;
    }
}

const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.displayInfo()); // Output: Toyota Corolla (2020)

// ### Constructor Method
// The `constructor` method is a special method for creating and initializing objects created with a class. It is called automatically when a new instance of the class is created.

// ### Class Methods
// Methods are functions defined within a class. They can be called on instances of the class:
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.getArea()); // Output: 50

// Inheritance
// Classes can inherit from other classes using the `extends` keyword. This allows you to create a new class based on an existing class:
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

const myDog = new Dog('Rex');
myDog.speak(); // Output: Rex barks.

class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3)); // Output: 8

// ### Private Fields
// Private fields are declared with a `#` prefix and are only accessible within the class:
class Person {
    #ssn;

    constructor(name, ssn) {
        this.name = name;
        this.#ssn = ssn;
    }

    getSSN() {
        return this.#ssn;
    }
}

const person = new Person('John Doe', '123-45-6789');
console.log(person.getSSN()); // Output: 123-45-6789
