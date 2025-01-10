let promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      resolve("Success!"); // Fulfilled
      // reject("Error!"); // Rejected
    }, 1000);
  });
  
  promise.then(
    result => console.log(result), // "Success!"
    error => console.log(error) // "Error!"
  );