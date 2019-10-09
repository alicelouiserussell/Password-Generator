var userInput = prompt("How many characters would you like your password to contain?");

if (userInput < 8 || userInput > 128) {
    alert("Password must be between 8 and 128 characters");
}