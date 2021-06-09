let password = 123456

// function checkPassword(input, password) {
//     if(input === password) {
//         alert("Successful");
//     } else {
//         alert("Incorrect Password");
//     }
// }


// function checkPassword(input, password) {
//     if(input === password) {
//         return response = "Successful";
//     } else {
//         return response = "Incorrect Password";
//     }
// }


// function checkPassword(input, password) {
//     if(input === password) {
//         return "Successful";
//     } else {
//         return "Incorrect Password";
//     }
// }
// var response = checkPassword(1234, password)
// alert(response)


function checkPassword(input, password) {
    if(input === password) {
        return "Successful";
    } else {
        return "Incorrect Password";
    }
}
alert(checkPassword(1234, password))