var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var specialChar=["!","@","#","$","%","^","&","(",")","*"];
//datanumber (number of types of characters) starts as 4 for math to work in generating random characters.  This 
//number is reduced by 1 as user declines types of characters.
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() { 
  var password = [];
// prompts for using lowercase letters, uppercase letters, numbers and special characters.  If user chooses no 
// lowercase letters, uppercase letters or numbers, user is alerted and then prompted again for character type selections.
  var useLowerCase = window.confirm ("Would you like to use lowercase letters in your password?  If not, press cancel.");
  var useUpperCase = window.confirm ("Would you like to use uppercase letters in your password?  If not, press cancel.");
  var useNumbers = window.confirm ("Would you like to use numbers in your password?  If not, press cancel.");
  var useSpecialChar = window.confirm ("Would you like to use special characters in your password?  If not, press cancel.");
  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecialChar) {
    window.alert("You must choose at least one type of character to generate a password!");
    useLowerCase = window.confirm ("Would you like to use lowercase letters in your password?  If not, press cancel.");
    useUpperCase = window.confirm ("Would you like to use uppercase letters in your password?  If not, press cancel.");
    useNumbers = window.confirm ("Would you like to use numbers in your password?  If not, press cancel.");
    useSpecialChar = window.confirm ("Would you like to use special characters in your password?  If not, press cancel.");
  }
// Receive input via prompt of how many characters password will be from 8 to 128
  var numberPasswordChar = window.prompt("Please enter number of characters that you want your password to be from 8 to 128.");
//prompt again if number is not from 8 to 128
  if ((numberPasswordChar < 8) || (numberPasswordChar > 128)) {
    numberPasswordChar = window.prompt("You chose " + numberPasswordChar + ". Please enter number of characters that you want your password to be from 8 to 128." );
}
// first character possibilities of password within for loop
for (i=0; i<numberPasswordChar; i++) {
  var dataNumber=4;
  console.log(useLowerCase);
  console.log(useUpperCase);
  console.log(useNumbers);
  console.log(useSpecialChar);
  console.log(numberPasswordChar);
// generate random lowercase letter
  var randomNumber1 = Math.floor(Math.random()*26);
  var lowercaseFirst=lowerCase[randomNumber1];
// generate random uppercase letters
  var randomNumber2 = Math.floor(Math.random()*26);
  var uppercaseFirst=upperCase[randomNumber2];
// generate random numbers
  var randomNumber3 = Math.floor(Math.random()*10);
  var numberFirst = numbers[randomNumber3];
// generate random special characters
  var randomNumber4 = Math.floor(Math.random()*10);
  var specialCharFirst = specialChar[randomNumber4];
// first character possibilities of password
  passwordData = [lowercaseFirst,uppercaseFirst,numberFirst,specialCharFirst];
// if not lowercase than delete lowercaseFirst and decrease dataTypes by 1
  if (!useLowerCase) {
      dataNumber = dataNumber - 1;
      passwordData.shift();
    }
// if not uppercase than delete uppercaseFirst from password array and decrease dataTypes by 1
  if (!useUpperCase) {
      dataNumber = dataNumber - 1;
      if (!useLowerCase) {
        passwordData.shift();
      } else {
        passwordData.splice(1,1);
        }
  }
  console.log(passwordData);  
// if no numbers, than delete numberFirst and decrease dataTypes by 1
  if (!useNumbers) {
    dataNumber = dataNumber - 1;     
    if (!useUpperCase && !useLowerCase) {
      passwordData.shift();
    } 
      else if (!useUpperCase || !useLowerCase) {
        passwordData.splice(1,1);
        }
      else {
        passwordData.splice(2,1);
        }
  }
        console.log(dataNumber);
        console.log(passwordData); 
// if lowercase, uppercase, or number is true, 
//   prompt for using special characters, 
//   generate random character from random characters in password array
// var inputNumberChar=[numberChar]
//   else alert using special char to generate pw and go to for loop to generate remaining characters
  //var useSpecialChar = false;
  //numberPasswordChar = 0; 
  if (!useSpecialChar) {
    dataNumber = dataNumber - 1;
    passwordData.pop();
  }
// Create random character of password from up to four random that may include a lowercase letter, an uppercase letter, 
// a number and a special character. 
  randomNumber = Math.floor(Math.random()*dataNumber);
  var PasswordChar = passwordData[randomNumber];
//create password string array 
// Receive input via prompt of how many characters password will be from 8 to 128
// Generates next password character
    password.push(PasswordChar);
// End of for loop with following bracket
  }
//to get rid of commas in password
  password = password.join("");
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password; 
}
generateBtn.addEventListener("click", writePassword);  
// This was both fun and challenging to write!!!!!!!
