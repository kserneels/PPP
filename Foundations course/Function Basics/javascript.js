//1
function add7(number) {
    let calculation = number + 7;
    return calculation;
}

console.log(add7(3));

//2
function multiply(n1,n2) {
    let multiply = n1 * n2;
    return multiply;
}
console.log(multiply(3, 5));

//3
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize("Baas"));

//4
function lastLetter(letters) {
    return letters.charAt(letters.length - 1);
}

console.log(lastLetter("January")); //
