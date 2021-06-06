// Assignment Code

var generateBtn = document.querySelector("#generate");

// Generate random password function, return result
function generatePassword () {

// set character arrays
 var alphaCharacters = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
 var numberCharacters = "0 1 2 3 4 5 6 7 8 9".split(" ");
 var specialCharacters = "! @ # $ % ^ & * ( ) _ +".split(" ");
 var globalCharaters = []

 //set default variables 
 var maxLength = 0;
 var isLowerCase = false;
 var isUpperCase = false;
 var isnumberic = false;
 var isSpecialCharacters = false;
 var random ="";


 // Get max length of the array
 function getMaxLength () {
  result = window.prompt("How many characters would you like in the Password? (Minimum of 8 characters and maximum of 128 characters");

  if (result < 8) {
    window.alert("You must input a number Greater than 8 characters");
    getMaxLength();
  }
  else if (result > 128) {
    window.alert("You must input a number less than than 128 characters");
    getMaxLength();
  };
  
  return result
};

//Confirm for lowercase characters
function getLowerCase () {
  var result = window.confirm("Would you like Lower Case Characters?");
  return result
}

//Confirm for uppcase characters
function getUpperCase () {
  var result = window.confirm("Would you like Upper Case Characters?")
  return result
}

//Confirm for numeric characters
function getNumericCharacters () {
  var result = window.confirm("Would you like Numeric Characters?")
  return result
}

//Confirm for specical characters
function getSpecicalCharacters () {
  var result = window.confirm("Would you like Special Characters?")
  return result
}

// Generate random uppercase characters from alphaCharacters array
function randomUppercase () {
  // Declare random true of false variable.
  var randomBoolean;
 
  // For each character in the alphaCharacters array, assign a random uppercase or lowercase
  for (counter = 0; counter < alphaCharacters.length; counter++) {
    //if random number between 0 and 1 is less than 0.5, assign true, else false. 
   var randomBoolean = Math.random() < 0.5;
   //if randomBoolean = true, assign character to uppercase
     if(randomBoolean) {
         alphaCharacters[counter] = alphaCharacters[counter].toUpperCase();
     }
    //else randomBoolean = false, assign random character to lowercase.
     else {
       alphaCharacters[counter] = alphaCharacters[counter].toLocaleLowerCase();
     };
  };
 
  return alphaCharacters
 };

 // Cenerate uppercase characters
function generateUpperCase () {
  // For each character in the alphaCharacters array, assign a random uppercase of lowercase
  for (counter = 0; counter < alphaCharacters.length; counter++) {
    alphaCharacters[counter] = alphaCharacters[counter].toUpperCase();
  }

  return alphaCharacters
}

// Assign results from window msesages.
maxLength = getMaxLength();
isLowerCase = getLowerCase();
isUpperCase = getUpperCase();
isnumberic = getNumericCharacters();
isSpecialCharacters = getSpecicalCharacters();

console.log("max length = " + maxLength);
console.log("isLowerCase = " + isLowerCase);
console.log("isupperCase = " + isUpperCase);
console.log("isNumeric = " + isnumberic);
console.log("isSpecicalCharacters = " + isSpecialCharacters);


 // join the arrays together for the global password array:

 // First determine what to do with the alphacharacter set

 // 1 - Confirm if random upper and lower case
if (isLowerCase && isUpperCase) {
  globalCharaters = globalCharaters.concat(randomUppercase());
}
 // 2 - Confim if just lowercase
else if (isLowerCase) {
  globalCharaters = globalCharaters.concat(alphaCharacters);
}
 // 3 - Confirm if just uppercase
else if (isUpperCase) {
  globalCharaters = globalCharaters.concat(generateUpperCase());
};

// Then check if numeric characters should be added
if (isnumberic) {
  globalCharaters = globalCharaters.concat(numberCharacters);
};

// Finally check if special characters should be added
if (isSpecialCharacters) {
  globalCharaters = globalCharaters.concat(specialCharacters);
};

// Global character array has been created. 

// Now Generate random string using max length and global character array. 

// Random = random + new random charater from global array, loop until max length.
for (var counter=0; counter < maxLength; counter++) {
  random = random + globalCharaters[Math.floor(Math.random() * globalCharaters.length)];
 };

 // Return result of random varable string. 
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
