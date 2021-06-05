// Assignment Code

var generateBtn = document.querySelector("#generate");

// Generate random password function, return result
function generatePassword () {


// set character arrays
 var alphaCharacters = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
 var numberCharacters = "0 1 2 3 4 5 6 7 8 9".split(" ");
 var specialCharacters = "! @ # $ % ^ & * ( ) _ +".split(" ");
 var maxLenth;

 // Get max length of the array
function getMaxLenth () {
  var result = window.prompt("How many characters would you like in the Password? (Minimum of 8 characters and maximum of 128 characters")
  return result
}

maxLenth = getMaxLenth()

function 

// Generate random uppercase characters from alphaCharacters array
  function randomUppercase () {
    // Declare random true of false variable.
    var randomBoolean;
   
    // For each character in the alphaCharacters array, assign a random uppercase of lowercase
    for (counter = 0; counter < alphaCharacters.length; counter++) {
     var randomBoolean = Math.random() < 0.5;
       if(randomBoolean) {
           alphaCharacters[counter] = alphaCharacters[counter].toUpperCase(); console.log(alphaCharacters[counter]);
       }
       else {
         alphaCharacters[counter] = alphaCharacters[counter].toLocaleLowerCase(); console.log(alphaCharacters[counter]);
       }
    }
   
    return alphaCharacters
   }





 // join the arrays together for the global password array
 var globalCharaters = alphaCharacters.concat(numberCharacters,specialCharacters); 
 
 // Declare random string to be "".
 var random ="";  
 
// Randdom = random + new random charater from global array, loop until max length of charactes has bene met
for (var counter=0; counter < maxLenth; counter++) {
  random = random + globalCharaters[Math.floor(Math.random() * globalCharaters.length)];
 };

return random;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
