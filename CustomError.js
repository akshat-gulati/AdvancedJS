function readUser(json) {
    let user;
    try {
      user = JSON.parse(json);
    } catch (e) {
      throw new SyntaxError("Invalid JSON format");
    }
  
    if (!user.name) {
      throw new ValidationError("Missing property: name", "name");
    }
    if (!user.age) {
      throw new ValidationError("Missing property: age", "age");
    }
  
    return user;
  }
  
// ----------------------------------------------------------------------------------------------------------

  // Usage example
  try {
    let user = readUser('{"name": "John"}');
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`Validation error on ${error.field}: ${error.message}`);
    } else {
      console.error(error.message);
    }
  }
  class ValidationError extends Error {
    constructor(message, field) {
      super(message);
      this.name = "ValidationError";
      this.field = field; // Custom property
    }
  }
  
  // Usage example
  try {
    throw new ValidationError("Invalid input", "username");
  } catch (error) {
    console.error(error.name); // "ValidationError"
    console.error(error.message); // "Invalid input"
    console.error(error.field); // "username"
    console.error(error.stack); // Stack trace
  }