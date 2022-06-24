// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(charAmount, upperCase, lowerCase, numbers, specialSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// getting the user's input, one prompt asking for desired password length, four confirms asking for desired character sets
var charAmount = prompt("How many characters long would you like your password to be? Choose a number between 8 and 128.");
var upperCase = confirm("Include Upper Case? Click OK to include, and Cancel to not include Upper Case Letters");
var lowerCase = confirm("Include Lower Case? Click OK to include, and Cancel to not include Lower Case Letters");
var numbers = confirm("Include Numbers? Click OK to include, and Cancel to not include Numbers");
var specialSymbols = confirm("Include Special Symbols? Click OK to include, and Cancel to not include Special Symbols");

// arrays with stored character sets
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArray =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialSymbolsArray = ['!', '@', '#', '$','%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '~'];





// the generatePassword function will generate a password based on specific character sets and of a specified length. the result is then stored in 'characters' and returned.
function generatePassword() {


// the two 'if' statements below act as a 'gate', in order for the program to run, both 'if' statements must be 'true'

// the first 'if' checks the length given to us by the user and makes sure it is above 8 and below 128. If this is not satisfied, the program breaks out and returns "YOU MUST SELECT AT LEAST ONE PARAMETER" once the generate password button is clicked.
if ( charAmount >= 8 && charAmount <= 128 ) { 

  // the second 'if' checks to make sure at least one of the respective prompts have been confirmed. If none of the prompts have been confirmed, the program breaks out and returns "YOU MUST ENTER A NUMBER BETWEEN 8 AND 128" once the password button is clicked.
  if ( upperCase || lowerCase || numbers || specialSymbols ) {
    
    //the code block below creates an empty charArray array variable. Then, depending on which prompts have been confirmed, the respective arrays are then combined within charArray.
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

    // the code block below creates an empty 'characters' array, then, depending on how long the user wants the password to be and depending on how many prompts were confirmed, it will pick and then store randomly selected characters from the generated 'charArray' from above.
    var characters = [];
    
    for (var i = 0; i < charAmount; i++) {
    characters += charArray[Math.floor(Math.random() * charArray.length)]
  
    console.log(characters);
    
    } return characters
  } return "YOU MUST SELECT AT LEAST ONE PARAMETER"
} return "YOU MUST ENTER A NUMBER BETWEEN 8 AND 128"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

