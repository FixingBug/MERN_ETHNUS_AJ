// Implementing in JavaScript using an object: Printing keys and values
var person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
  };
  
  console.log("Object keys:");
  console.log(Object.keys(person)); // Output: ['name', 'age', 'occupation']
  
  console.log("Object values:");
  console.log(Object.values(person)); // Output: ['John', 30, 'Developer']
  
  
  // Reverse an array
  var numbers = [1, 2, 3, 4, 5];
  
  console.log("Original array:");
  console.log(numbers); // Output: [1, 2, 3, 4, 5]
  
  console.log("Reversed array:");
  console.log(numbers.reverse()); // Output: [5, 4, 3, 2, 1]
  
  
  // Map, reduce, filter
  var items = [2, 4, 6, 8, 10];
  
  console.log("Mapped array (doubled values):");
  var doubled = items.map(item => item * 2);
  console.log(doubled); // Output: [4, 8, 12, 16, 20]
  
  console.log("Reduced value (sum):");
  var sum = items.reduce((acc, curr) => acc + curr, 0);
  console.log(sum); // Output: 30
  
  console.log("Filtered array (even numbers):");
  var evenNumbers = items.filter(item => item % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
  
  
  // Capitalize string characters
  var text = "hello, world!";
  
  console.log("Original string:");
  console.log(text); // Output: "hello, world!"
  
  console.log("Capitalized string:");
  console.log(text.toUpperCase()); // Output: "HELLO, WORLD!"
  