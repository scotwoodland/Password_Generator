// Assignment Code
// Define all available characters to be used 
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var symbols = " !#$%&'()*+,-./:;<=>?@][^_`{|}~";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

alert("Press the 'Generate Password Button' to proceed")

function myPassword() {
// Obtain the number of characters for the password, must be a number.
  var passwordLength = parseInt(prompt("How many characters would you like in your password? (Between 8 and 128)"));
// Verify that the length is between 8 and 128.
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Oops, you must choose between 8 and 128 characters. Try again.");
  } else {
    var allPossibleCharacters = "";

    var isUppercase = confirm("Would you like uppercase characters in your password?");

    if (isUppercase === true) {
      allPossibleCharacters = (allPossibleCharacters + uppercase)
      alert("You chose to include uppercase characters in your password.")
    }

    var isLowercase = confirm("Would you like lowercase characters in your password?");

    if (isLowercase === true) {
      allPossibleCharacters = (allPossibleCharacters + lowercase)
    }


    var isNumbers = confirm("Would you like numbers in your password?");

    if (isNumbers === true) {
      allPossibleCharacters = (allPossibleCharacters + numbers)
    }

    var isSymbols = confirm("Would you like special characters in your password?");

    if (isSymbols === true) {
      allPossibleCharacters = (allPossibleCharacters + symbols)
    }

    alert("Your password is generated. Tripple click to select the new password.");

    allPossibleCharacters = allPossibleCharacters.split("");

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var character = allPossibleCharacters[Math.floor(Math.random() * allPossibleCharacters.length)];
      password = (password + character);
    }

    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", myPassword)