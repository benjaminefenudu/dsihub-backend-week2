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


let user = {
    name: "John",
};

function Hi() {
    alert(this.name);
}

user.sayHi = Hi

user.sayHi();