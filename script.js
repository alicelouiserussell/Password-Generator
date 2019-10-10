// Random character arrays //
var specialOptions = ["!", "#", "$", "%", "&", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=","?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allOptions = [" ", "!", "#", "$", "%", "&", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=","?", "@", "[", "^", "_", "`", "{", "|", "}", "~", 
1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Initial user input prompt, determining password length //
var userLength = prompt("How many characters would you like your password to contain?");

if (userLength < 8 || userLength > 128) {
    alert("Password must be between 8 and 128 characters");
    prompt("How many characters would you like your password to contain?");
}

// Confirming use of each character type in password // 
// Generating random character for each type //
var confirmSpecial = confirm("Click OK to confirm including special characters");
    
if (confirmSpecial) {
    var randSpecial = specialOptions[Math.floor(Math.random() * specialOptions.length)];
 }

var confirmNumber = confirm("Click OK to confirm including numeric characters");

if (confirmNumber) {
    var randNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];
}

var confirmLower = confirm("Click OK to confirm including lowercase characters");

if (confirmLower) {
    var randLower = lowerOptions[Math.floor(Math.random() * lowerOptions.length)];
}

var confirmUpper = confirm("Click OK to confirm including uppercase characters");

if (confirmUpper) {
    var randUpper = upperOptions[Math.floor(Math.random() * upperOptions.length)];
}


if ((confirmSpecial === true) && (confirmNumber === true) && (confirmLower === true) && (confirmUpper === true)){
    console.log(randSpecial + randNumber + randLower + randUpper);
}

var passPartOne = randSpecial + randNumber + randLower + randUpper;
var passRemain = userLength - 4;
console.log(passRemain);

var passPartTwo = "";
for (var i = 0; i <= passRemain; i++){
   passPartTwo += allOptions[Math.floor(Math.random() * allOptions.length)];
}

var randomPassword = passPartOne + passPartTwo;
console.log(randomPassword);

var password = document.getElementById("password");

password.textContent = randomPassword;
password.appendChild(randomPassword);

