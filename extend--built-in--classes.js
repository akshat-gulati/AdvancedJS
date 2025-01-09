// Example: Extending the Array Class
// Let's create a custom array class called PowerArray that extends the built-in Array class and adds a new method isEmpty:

class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  
  let arr = new PowerArray(1, 2, 5, 10, 50);
  console.log(arr.isEmpty()); // false
  
  let filteredArr = arr.filter(item => item >= 10);
  console.log(filteredArr); // [10, 50]
  console.log(filteredArr.isEmpty()); // false
  // In this example, PowerArray inherits all the methods of Array, and we add a custom method isEmpty to check if the array is empty. The built-in methods like filter return new objects of the inherited type PowerArray, allowing us to use the custom methods on the results.
  
  // Using Symbol.species
  // You can customize the behavior of built-in methods like map and filter to return instances of the base class instead of the extended class by using the Symbol.species property:
  
  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  
    // Built-in methods will use this as the constructor
    static get [Symbol.species]() {
      return Array;
    }
  }
  
  let arr2 = new PowerArray(1, 2, 5, 10, 50);
  console.log(arr2.isEmpty()); // false
  
  let filteredArr2 = arr2.filter(item => item >= 10);
  console.log(filteredArr2); // [10, 50]
  console.log(filteredArr2.isEmpty()); // Error: filteredArr2.isEmpty is not a function
  // In this example, the filter method returns a regular Array instead of PowerArray, so the custom method isEmpty is not available on the result.
  
  // Extending Other Built-in Classes
  // You can extend other built-in classes in a similar way. Here are a few examples:
  
  // Extending the Map Class
  class CustomMap extends Map {
    getOrDefault(key, defaultValue) {
      return this.has(key) ? this.get(key) : defaultValue;
    }
  }
  
  let map = new CustomMap();
  map.set('key1', 'value1');
  console.log(map.getOrDefault('key1', 'default')); // "value1"
  console.log(map.getOrDefault('key2', 'default')); // "default"
  
  // Extending the Set Class
  class CustomSet extends Set {
    toArray() {
      return Array.from(this);
    }
  }
  
  let set = new CustomSet([1, 2, 3]);
  console.log(set.toArray()); // [1, 2, 3]