// Example 1: Assigning an anonymous function to a variable
const greet = function(name) {
    console.log(`Hello, ${name}!`);
  };
  
  greet("John"); // Output: Hello, John!
  
  // Example 2: Using an anonymous function as a callback
  setTimeout(function() {
    console.log("This message will be displayed after 3 seconds.");
  }, 3000);

