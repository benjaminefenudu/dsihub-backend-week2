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
// Method 1
numberList = []; sum = 0;
for (let i=0; i < 20; i++) {
    numberList[i] = (i+1)
    sum = sum + numberList[i]
}
alert(numberList)
alert(sum)

// Method 2
// numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// sum = 0
// for (let i=0; i<numberList.length; i++) {
//    sum = sum + numberList[i]
// }
// alert(sum);


