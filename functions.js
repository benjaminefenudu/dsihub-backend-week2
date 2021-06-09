// function showMessage() {

// }

// let addition1 = 4 + 6;
// let addition2 = 5 + 6;
// let addition3 = 10 + 3;
// let addition4 = 4 + 9;

// function addition(a, b) {
//     alert(`a = ${a}, b = ${b}, therefore, a + b = ${(a+b)}`)
// }

// addition(4,6)
// addition(4,9)
// addition("x","y")

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1, 2);
// alert(result);

function foo (i) {
    if (i < 0)
        return;
    alert('begin: ' + i);
    foo(i - 1)
    alert('end: ' + i);
}

foo(3);

// function declarations
// function expressions
