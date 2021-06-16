// let users = ["John", " Doe", " Ben"]

// // alert(users [0]);
// // alert(users[1]);
// users[3] = " Emma";
// users[2] = " Peach";
// alert(users);
// alert(users.length)

// // FOR Loop
// let arr = ["Apple", "Orange", "Pear"];
// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }

// // FOR OF Loop
// let fruits = ["Apple", "Orange", "Plum"];
// for (let fruit of fruits) {
//     alert (fruit);
// }

// let user = {
//     name: "John",
//     sayHi: function() {
//         alert(this.name);
//     }
// };

// let person = {
//     name: "Gabriel",
//     age: 20
// };


// user.sayHi();  // Hello!
// person.sayHi();


// let user = {
//     name: "John",
// };

// function Hi() {
//     alert(this.name);
// }

// user.sayHi = Hi

// user.sayHi();

// ARRAY METHODS
//  var animal = "lion;"
//  var animals = ["sheep", "goat", "dog", "cat"];

//  // Push adds an element to the end of the array
// document.write(animals.push(animal)); 

// document.write("<hr>");
// document.write(animals);
// document.write("<hr>");

// // Pop deletes the last element
// animals.pop(); 
// document.write(animals);
// document.write("<hr>");

// let arr = ["I", "go", "home"];
// delete arr[1]; // remove "go"
// document.write(arr);
// document.write(arr.length)
// document.write("<hr>");
// // arr.splice(start[, delete])

// let ary = ["I", "study", "JavaScript"];
// ary.splice(1, 1); 
// document.write(ary);
// document.write("<hr>");
// // Splice deletes an element from an array

// let arz = ["I", "study", "JavaScript", "right", "now"];
// arr.splice(0,3, "Let's", "dance")
// document.write(arz)
// document.write("<hr>");


// // SLICE
// // arr.slice([start, [end]])

// let arr1 = ["t", "e", "s", "t"]
// arr1.slice(1,3); // e, s (copy from 1 to 3)
// document.write(arr1)
// document.write("<hr>");
// arr1.slice(-2); // s, t (copy from -2 till the end)
// document.write("<hr>");

// // CONCAT
// // arr.concat(arg1, arg2, ...)
// let arr2 = [1, 2];
// //c
// document.write(arr.concat([3, 4]))
// document.write("<hr>");

// animals = ["lion", 'goat', 'cow', 'fox', 'geese']
// document.write(animals);
// document.write("<hr>")
// animals.forEach(function(animal) {
//     document.write(`${animal} can also speak? <br>`);
// });
// document.write("<hr>")

// animals.forEach((animal) => {document.write(`${animal} can also speak? <br>`)});

// // let arr3 = ["Biblo", "Gandalf", "Nazgul"];
// // arr3.forEach((item, index, array)) => {
// //     document.write(`${item} is at index ${index} in array ${array}`)
// // }
// document.write("<hr>")

// FIND
// let result = arr.find(function(item, index, array) {

// })

// let users = [
//     {id: 1, name: "John", age: 18},
//     {id: 2, name: "Pete", age: 44},
//     {id: 3, name: "Mary", age: 78}
// ];

// // let user = users.find(item => item.id == 1)
// // document.write(user.name); // John
// // document.write("<hr>");

// // // FILTER
// let someUsers = users.filter(item => item.id < 3);
// console.log(someUsers); // returns new array
// document.write(someUsers[1].age)
// document.write("<hr>");

// let underage = users.filter(item => item.age < 50);
// console.log(underage); // returns new array

// let underAge = users.filter(function(user) {
//     return users.age < 30});
// document.write(underAge); // returns new array


// MAP
// let arr = ["Bilbo", "Gandalf", "Nazgul"];
// let lengths = arr.map(item => item.length);
// document.write(lengths);
// document.write("<hr>");

// let arr2 = [4, 89, 32];
// let calculate = arr2.map(i => i* 6);
// document.write(calculate);
// document.write("<hr>");

// let arr3 = [4, 89, 32];
// let calculate = arr3.map(function(i) {
//         return i*6;  
//     });
// document.write(calculate);

// While forEach carries out the computations, and continues ...
// map returns the result to the array

// document.write(arr);
// reversed = arr.reverse()
// document.write("<br>")
// document.write(reversed)
// document.write("<hr>")

let names = "Bilbo7 Gandalf7 Nazgul";
let arr = names.split("7");

arr.forEach((name) => {
    console.log(`A message to ${name}. `);
})
