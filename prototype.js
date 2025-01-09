let animal = {
    eats: true,
    walk() {
      console.log("Animal walks");
    }
  };
  
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // Setting the prototype
  
  console.log(rabbit.eats); // true
  rabbit.walk(); // "Animal walks"

  
  console.log(Object.getPrototypeOf(rabbit) === animal); // true