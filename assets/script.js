

// Declare variables //
var generateButton = document.querySelector("#generate");
var copyButton = document.querySelector("#copy");
var specialsArray = ["!", "#", "$", "%", "&", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=","?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charactersArray = [""];
var password = document.querySelector("#password");

// When genrate button is clicked, this function is called //
generateButton.addEventListener("click", function(){
    // user is prompted for desired password length, between 1-128 characters //
    passLength = prompt("How many characters would you like your password to contain?");
    if (passLength < 8 || passLength > 128) {
        alert("Password must be between 8 and 128 characters");
        prompt("How many characters would you like your password to contain?");
    }

    // user is asked to confirm presence of different types of characters //
    var confirmSpecials = confirm("Click OK to confirm including special characters");
    if (confirmSpecials === true){
        // if user confirms, character array is added to final password array //
        charactersArray = charactersArray + specialsArray;
    }

    var confirmNumbers = confirm("Click OK to confirm including numeric characters");
    if (confirmNumbers === true){
        charactersArray = charactersArray + numbersArray;
    }

    var confirmLowers = confirm("Click OK to confirm including lowercase characters");
    if (confirmLowers === true){
        charactersArray = charactersArray + lowersArray;
    }

    var confirmUppers = confirm("Click OK to confirm including uppercase characters");
    if (confirmUppers === true){
        charactersArray = charactersArray + uppersArray;
    }

    // if user declines all character options, user is alerted that at least one choice must be confirmed //
    if (confirmSpecials === false && confirmNumbers === false && confirmLowers === false && confirmUppers ===false){
        alert("Password must contain at least one type of character");
    }

    // random password is generated from final array including types of characters selected //
    var randomPass = "";
    for (var i = 0; i <= passLength; i++){
        randomPass += charactersArray[Math.floor(Math.random() * charactersArray.length)]
    }

    // random password is displayed in textarea on page //
    password.textContent = randomPass;

    // when copy button is clicked, this function is called to copy password //
    copyButton.addEventListener("click", function(){
        var copyTextArea = document.querySelector("textarea");
        copyTextArea.select();
        document.execCommand("copy");
        // an alert is run to notify user that password has been copied to clipboard //
        alert("Copied password to clipboard: " + copyTextArea.value);
    });
});


