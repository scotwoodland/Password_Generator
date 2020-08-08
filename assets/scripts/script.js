// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Define all available characters to be used 
var symbols = " !#$%&'()*+,-./:;<=>?@][^_`{|}~";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

// Lets user know that they must press the button (Deleted... inserted the text in html placeholder)
// alert("Press the 'Generate Password Button' to proceed")

function myPassword() {
// Obtain the number of characters for the password, must be a number.
  var passwordLength = parseInt(prompt("How many characters would you like in your password? (Between 8 and 128)"));

// Verify that the length is between 8 and 128. If not... return nothing.
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Oops, you must choose between 8 and 128 characters. Try again.");
  } else {
    var allPossibleCharacters = "";

// Begin a variable for uppercase
    var isUppercase = confirm("Would you like uppercase characters in your password?");

// Include and exclude uppercase WITH confirmation of choices
    if (isUppercase === true) {
      allPossibleCharacters = (allPossibleCharacters + uppercase)
      alert("You chose to include uppercase characters in your password.")
    }
    
    else {
      alert("You chose NOT to include uppercase characters.")
    }
    
    // Begin a variable for lowercase
    var isLowercase = confirm("Would you like lowercase characters in your password?");
    
    // Include and exclude uppercase WITH confirmation of choices
    if (isLowercase === true) {
      allPossibleCharacters = (allPossibleCharacters + lowercase)
      alert("You chose to include lowercase characters in your password.")
    }
    
    else {
      alert("You chose NOT to include lowercase characters.")
    }
    
    // Begin a variable for numbers
    var isNumbers = confirm("Would you like numbers in your password?");
    
    // Include and exclude numbers WITH confirmation of choices
    if (isNumbers === true) {
      allPossibleCharacters = (allPossibleCharacters + numbers)
      alert("You chose to include numbers in your password.")
    }
    
    else {
      alert("You chose NOT to include numbers in your password.")
    }
    
    // Begin a veriable for special characters
    var isSymbols = confirm("Would you like special characters in your password?");
    
    // Include and exclude special chars WITH confirmation of choices
    if (isSymbols === true) {
      allPossibleCharacters = (allPossibleCharacters + symbols)
      alert("You chose to include special characters in your password.")
    }

    else {
      alert("You chose NOT to include special characters.")
    }

    // Prepare the 'password' var for randomization putting everything together
    allPossibleCharacters = allPossibleCharacters.split("");
    var password = "";

    // Loop to add in each applicable character according to defined length and user criterion
    for (var i = 0; i < passwordLength; i++) {
      var character = allPossibleCharacters[Math.floor(Math.random() * allPossibleCharacters.length)];
      password = (password + character);
    }
    
    // Inform user that password is generated.
    // alert("Your password is now generated. It is: " + (password)); (Decided not to use)
    alert("Triple click the text below to select your new password for copying.")

    passwordText.value = password;
  }
}
// Execute 'myPassword' function
generateBtn.addEventListener("click", myPassword)