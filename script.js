// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharacters = ["#", "@", "$", "%", "*"];

function userOptions() {
  var passwordLength = parseInt(
    prompt("how many characters would you like your password to be?")
  );

  if (isNaN(passwordLength) === true) {
    alert("please provide a number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("password must greater than 7 and less than 129 characters");
    return;
  }

  var useLowercase = confirm("click ok to use lowercase letters");
  var useUppercase = confirm("click ok to use uppercase letters");
  var useNumbers = confirm("click ok to use numbers");
  var useSpecialCharacters = confirm("click ok to use special Characters");

  if (
    useLowercase === false &&
    useUppercase === false &&
    useNumbers === false &&
    useSpecialCharacters === false
  ) {
    alert("you must select at least one option");
    return;
  }

  var userChoices = {
    passwordLength: passwordLength,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
    useNumbers: useNumbers,
    useSpecialCharacters: useSpecialCharacters,
  };
  return userChoices;
}

function generatePassword(choices){
  console.log(choices)
  let choicesArr = [];
  let password = '';

  // Build you choicesArr
  // check if
  //   useLowercase is true
  //     gonname merge lower case array into choicesArr
  //   useUppercase is true
  //     gonname merge upper case array into choicesArr
  //   useNumbers is true
  //     gonname merge numbers case array into choicesArr
  //   useSpecialCharacters is true
  //     gonname merge special char case array into 
  
  //
  //   merging example = 
  //    choicesArr = [...choicesArr, ...newArray]

  // pick random chars from chocesArr up to the length the user selected
  // loop base on user input length
  //   randomIdx = <random number inside the range of the array (choicesArr)>
  //   password += choicesArr[randomIdx]
  // How to get a random item from array

  return password;
}
// Write password to the #password input
function writePassword() {
  var choices = userOptions();
   var password = generatePassword(choices)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
