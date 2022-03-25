var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var specialChar=["!","@","#","$","%","^","&","(",")","*";
var password=[lowercaseFirst,uppercaseFirst,numberFirst,specialCharFirst];
var dataNumber=[4];
var inputNumberChar=[numberChar]
var generateBtn = document.querySelector("#generate");

function firstChar() {


}




// generate random character from 4 cases first

// for loop using i=1; x < numberChar; i++ adding random character to password array in each iteration


// Write password to the #password input
function writePassword() { //Their code
  var password = generatePassword(); //Their code  should there be a {} instead of ; ???

// generate random lowercase letter
  var randomNumber1=Math.floor(Math.random()+26);
  var lowercaseFirst=lowerCase[randomNumber1];
// generate random uppercase letters
  var randomNumber2=Math.floor(Math.random()+26);
  var uppercaseFirst=upperCase[randomNumber2];
// generate random numbers
  var randomNumber3=Math.floor(Math.random()+10);
  var numberFirst=numbers[randomNumber3];
// generate random special characters
  var randomNumber4=Math.floor(Math.random()+10);
  var specialCharFirst=numbers[randomNumber4];
// first character possibilities of password
  var password=[lowercaseFirst,uppercaseFirst,numberFirst,specialCharFirst];
// prompt for using lowercase letters

// if not lowercase than delete lowercaseFirst and decrease dataTypes by 1

// prompt for using uppercase letters

// if not uppercase than delete uppercaseFirst and decrease dataTypes by 1

// prompt for using numbers

// if not number tha delete numberFirst and decrease dataTypes by 1

// if lowercase, uppercase, or number is true, 
//   prompt for using special characters, 
//   generate random character from random characters in password array
//   else alert using special char to generate pw and go to for loop to generate remaining characters

// for loop using i=1; x < numberChar; i++ adding random character to password array in each iteration


  var passwordText = document.querySelector("#password"); //Their code

  passwordText.value = password; //Their code

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //Their code
