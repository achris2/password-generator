// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // initialise passwordLength
  var passwordLength = 0; 
  while (true){
  passwordLength = prompt ("Please enter the desired password lenght. It MUST be between 8 and 128 characters");
  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128){
    break;
  } else {
    alert ("Please enter a length between 8 and 128 characters")
  }

  // check character types

  var lowerCase = confirm("Include lowercase characters?");
  var upperCase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm ("Include special characters?")

  // validate that 1 character type is selected

  if (!(lowerCase || upperCase || numeric || special)) {
    alert("You must select at least one character option in the password. Please try again");
    return null;
  }

  // store user preferences 

  var passwordOptions = {
    length: parseInt(passwordLength), 
    lowerCase: lowerCase, 
    upperCase: upperCase,
    numeric: numeric,
    special: special, 
  }; 

  return passwordOptions

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
return "Testing"
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);