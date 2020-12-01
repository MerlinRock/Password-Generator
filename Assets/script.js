// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "=", "+", "`", "~", ",", "<", ".", ">", "?", "\/", ";", ":", "'", "\"", "\\", "[", "]", "{", "}", "|", "-", "_"];


// Generate password will determine a password based on input from the user.
function generatePassword() {

  var allUserChoices = [];

  var randomPassword = "";

  // This prompts the user to submit how many characters long they want there password.
  var y = prompt("How many characters do you want in your password?" + "\nMust have at least 8 and no more than 128 characters long");
  var userInputPwLength = parseInt(y);
  console.log(userInputPwLength);

  // This confirms that the user chose a valid number of characters for the
  // password before continuing on.
  if (userInputPwLength >= 8 && userInputPwLength <= 128) {

    //This asks user if they want upper case letters in their password.
    var userInputUc = confirm("Do you want 'upperCase' letters in your password?");
    if (userInputUc) {
      allUserChoices = allUserChoices.concat(upperCase);
      console.log(allUserChoices);
    } 

    //This asks user if they want lower case letters in their password.
    var userInputLc = confirm("Do you want 'lowerCase' letters in your password?");
    if (userInputLc) {
      allUserChoices = allUserChoices.concat(lowerCase);
      console.log(allUserChoices);
    } 


    //This asks user if they want numbers in their password.
    var userInputNum = confirm("Do you want 'numbers' in your password?");
    if (userInputNum) {
      allUserChoices = allUserChoices.concat(numbers);
      console.log(allUserChoices);
    } 

    //This asks user if they want special characters in their password.
    var userInputSc = confirm("Do you want 'special characters' in your password?");
    if (userInputSc) {
      allUserChoices = allUserChoices.concat(specialChar);
      console.log(allUserChoices)
    } 

    // This randomly generates the password
    for(var i = 1; i <= userInputPwLength; i++) {
        var randomChoices = Math.floor(Math.random() * allUserChoices.length);
        console.log(randomChoices)
        randomPassword += allUserChoices[randomChoices]
        console.log(randomPassword)
        
      console.log(allUserChoices)
    }

    return randomPassword;
  } else {
    alert("you must choose a number between 8 and 128");
    return;
  }




}













// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
