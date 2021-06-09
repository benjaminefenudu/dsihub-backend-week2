let oranges = 5;

while (oranges !== 0) {
    alert(oranges)
    oranges--
}
alert("There are no more oranges.")

for (let oranges = 5; oranges > 0; oranges--) {
    if (oranges>=2) {
        alert(`There are ${oranges} oranges.`)
    } else {
        alert(`There is ${oranges} orange.`)
    }
}
alert("There are no more oranges left.")