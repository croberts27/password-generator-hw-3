// Assignment code here
var password = "";
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
// var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ["!","@","#","$","%","^","&","*","(",")","{","}","<",">","/","?"];
// var upperCaseArray = upperCase.split;
// var lowerCaseArray = lowerCase.split;
// var numberArray = number.split;
// var symbolArray = symbol.split;
var emptyArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  var uppercaseConfirm = confirm("Would you like upper case characters?");
  var lowercaseConfirm = confirm("Would you like lower case characters?");
  var numberConfirm = confirm("Would you like to use numbers?");
  var symbolConfirm = confirm("Would you like to use symbols?");
  var passwordLength = prompt("How long do you want your password to be?");

  while (passwordLength > 128 || passwordLength < 8){
    alert("Please choose a different password length");
    passwordLength = prompt("How long do you want your password to be?");
  }
  while ()
  if (uppercaseConfirm){
  randomChar = upperCase[Math.floor(Math.random() * upperCase.length)]
  emptyArray.push(randomChar)
  }
  if (lowercaseConfirm){
    randomChar = lowerCase[Math.floor(Math.random() * lowerCase.length)]
    emptyArray.push(randomChar)
    }
  if (numberConfirm){
  randomChar = number[Math.floor(Math.random() * number.length)]
  emptyArray.push(randomChar)
  }
  if (symbolConfirm){
  randomChar = symbol[Math.floor(Math.random() * symbol.length)]
  emptyArray.push(randomChar)
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);