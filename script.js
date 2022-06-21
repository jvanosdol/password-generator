// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// var input = prompt("Choose a number");
var add = addNumbers(4, 5);
var product = multiplyNumbers(add, input);


function addNumbers(num1, num2) {
  return (num1 + num2);
}



function multiplyNumbers(add, userNumber) {
  return (add * userNumber);
}



console.log("sum is " + add);
console.log("product is " + product);

// function multiplyNumbers(sum, userNumber) {
//   return (sum * userNumber);
// }

// var userNumber = prompt("choose a number")
// multiplyNumbers(addNumbers, userNumber)