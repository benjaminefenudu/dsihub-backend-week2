// function greeting(myName) {
//     alert("Hello " + myName);
// }

// function userInput(callback) {
//     let myName = "Ewosoft";
//     callback(myName);
// }

// // greeting("Ewosoft")

// userInput(greeting); // function2(function1)

// In callback functions, 
// function 2 passes the argument to function 1's parameter

// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();


// function greeting(myName) {
//     alert("Hello " + myName + ". How are you doing today?");
// }

// function userInput(callback) {
//     var myName = prompt("Enter your name: ")
//     callback(myName);
// }

// // greeting("Ewosoft")

// userInput(greeting); // function2(function1)

let sum = (a, b) => { a = a + 4; b = b - 6; return a + b }

// let sum = (a, b) => a + b;

alert(sum(3, 4));