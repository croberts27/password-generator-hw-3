// Assignment code here
var passwordLength = 12;
var password = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "@#$%^&*(){}<>/?";

var allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
for (var i = 0; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * allChars.length)
  password += allChars.substring(randomNumber, randomNumber +1);
}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

