// // Task 1-----------------
// var admin = "";
// var newName = "";
// newName = "John";
// admin = newName;
// alert(admin);
// //------------------------


// // Task 2-----------------
// var height = 7
// var base = 3.5
// var area = (0.5 * base * height)
// alert(`The triangle has a height of ${height}cm, a base of ${base}cm,`);
// alert(`Using the formula (half base x height), the area of the triangle is ${area}cm2.`)
// //------------------------

// Task 3-----------------
function withdraw(balance, amount) {
    if (amount > balance) {
        return "Insufficient Balance";
    } else 
        return "Transaction Successful";
}
alert(withdraw(10000000,500000));


// Task 4-----------------
numberList = []; sum = 0;
for (let i=0; i < 20; i++) {
    numberList[i] = (i+1)
    sum = sum + numberList[i]
}
alert(numberList)
alert(sum)

