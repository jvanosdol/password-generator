// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(charAmount, upperCase, lowerCase, numbers, specialSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var charAmount = prompt("Choose a number between 8 and 128.");
var upperCase = confirm("Include Upper Case? Click OK to include, and Cancel to not include Upper Case Letters");
var lowerCase = confirm("Include Lower Case? Click OK to include, and Cancel to not include Lower Case Letters");
var numbers = confirm("Include Numbers? Click OK to include, and Cancel to not include Numbers");
var specialSymbols = confirm("Include Special Symbols? Click OK to include, and Cancel to not include Special Symbols");

var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArray =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialSymbolsArray = ['!', '@', '#', '$','%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '~'];

function generatePassword() {

if ( charAmount >= 8 && charAmount <= 128 ) { 
  if ( upperCase || lowerCase || numbers || specialSymbols ) {
    
    charArray = [];

    if ( upperCase ) {
      charArray = charArray.concat(upperCaseArray);
    }
    if ( lowerCase ) {
      charArray = charArray.concat(lowerCaseArray);
    }
    if ( numbers ) {
      charArray = charArray.concat(numbersArray);
    }
    if ( specialSymbols ) {
      charArray = charArray.concat(specialSymbolsArray);
    }

  var characters = [];
    
    for (var i = 0; i < charAmount; i++) {
    characters += charArray[Math.floor(Math.random() * charArray.length)]
    
  
    console.log(characters);
    
    } 

  return characters
  
} return "YOU MUST SELECT AT LEAST ONE PARAMETER"


} return "YOU MUST ENTER A NUMBER BETWEEN 8 AND 128"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

