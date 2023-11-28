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
// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 8 characters but no more than 128.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// have a prompt where each of the criteria asking for user input (prompt, return value that the user typed)
// use confirm to get if they want lowercase, upercase (confirm returns boolean)
// store the value of the input inside an object 
// if they input an invalid number for length (e.g. ) keep prompting them 
// if they input somethign that it is not a number, 
// while user input is invalid, keep prompting them for an answer


// passwordCriteria = {
//   length: 9 //  At least 8 characters but no more than 128.
//   lowerCase: true // boolean, true or false 

// }



// Function for getting a random element from an array
function getRandom(arr) {

  // get a random no in the range of the lenght of the array, to serve as the index of arr 
  // arr.length shows the length of the array 
  // return arr[random_number] - (array at the index of the random number we generated)

}
  function getPasswordOptions() {
    while (true){
      var  passwordLength = prompt("How long do you want your password to be? It needs to be between 12 and 128 carachters");
      if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128)
      return parseInt(passwordLength);} else {
      alert("Please enter a valid number between 8 and 128.");
    } 
// Function to generate password with user input
function generatePassword() {
  console.log("Button Clicked") // testing if button is clicked
  // step 1: prompt the user for the password criteria 
  var lowerCase = confirm ("do you want lowercase characters?");
  let upperCase = confirm ("do you want uppercase characters?");
  let numeric = confirm ("do you want numeric characters?");
  let specialCharacters = confirm("do you want special characters?");
  console.log(passwordLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialCharacters);

  // a. password length (8-128)
  // b. Lowercase, uppercase, 
  // 2. validate the input, ensure that the should validate for each input and at least one character type should be selected
  // 3. generate password 
  // 4. return password 
  var randomPassword = [];
  // initialise array for storing all potential characters that can be in the password
  var potentialChars=[];

  if (lowerCase === true){
    potentialChars += upperCasedCharacters
  } 
  console.log(lowerCase);


  var requiredChars=[]
  // get the password criteria that were returned from the getPasswordOptions()

  // if user chose lowercase, 
  return "password";
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