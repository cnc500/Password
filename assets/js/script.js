var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var specialChar=["!","@","#","$","%","^","&","(",")","*"];
var dataNumber=4;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { //Their code
  console.log("test");
   // var password = generatePassword(); //Their code  should there be a {} instead of ; ???

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
  var passwordData = [lowercaseFirst,uppercaseFirst,numberFirst,specialCharFirst];
// prompt for using lowercase letters
  var useLowerCase = window.confirm ("Would you like to use lowercase letters in your password?  If not, press cancel.");
// if not lowercase than delete lowercaseFirst and decrease dataTypes by 1
    if (!useLowerCase) {
      dataNumber = dataNumber - 1;
      passwordData.shift();
      console.log(passwordData);
    }

// prompt for using uppercase letters
  var useUpperCase = window.confirm ("Would you like to use uppercase letters in your password?  If not, press cancel.");
// if not uppercase than delete uppercaseFirst from password array and decrease dataTypes by 1
  if (!useUpperCase) {
      dataNumber = dataNumber - 1;
      if (!useLowerCase) {
        passwordData.shift();
      } else {
        passwordData.splice(1,1);
        }
  }  
// prompt for using numbers
  var useNumbers = window.confirm ("Would you like to use numbers in your password?  If not, press cancel.");
// if no numbers, than delete numberFirst and decrease dataTypes by 1
        if (!numbers) {
          dataNumber = dataNumber - 1;
        
          if (!useUpperCase && !useLowerCase) {
            passwordData.shift();
          } else if (!useUpperCase || !useLowerCase) {
              passwordData.splice(1,1);
            }
            else {
              passwordData.splice(2,1);
            }
        }
// if lowercase, uppercase, or number is true, 
//   prompt for using special characters, 
//   generate random character from random characters in password array
// var inputNumberChar=[numberChar]
//   else alert using special char to generate pw and go to for loop to generate remaining characters
  //var useSpecialChar = false;
  numberPasswordChar = 0;
  if (useLowerCase || useUpperCase || useNumbers) {
    useSpecialChar = window.confirm ("Would you like to use special characters in your password?  If not, press cancel.");
    if (!useSpecialChar) {
      dataNumber = dataNumber - 1;
      passwordData.pop();
    }
  }
  else {
    window.alert("Your password will be generated using only special characters.");
    }
  
// Create random first character of password from up to four random that may include a lowercase letter, an uppercase letter, 
// a number and a special character.
  randomNumber = Math.floor(Math.random()*dataNumber);
  var firstPasswordChar = passwordData[randomNumber];
//create password string array
  var password = [firstPasswordChar]
// Receive input via prompt of how many characters password will be from 8 to 128

  var numberPasswordChar = window.prompt("Please enter number of characters that you want your password to be from 8 to 128.");

    
  for (i=1;i<numberPasswordChar;i++) {
  
    //add in correction alert if number is not from 8 to 128


    randomNumber = Math.floor(Math.random()*dataNumber);
// Generates next password character
    var nextPasswordChar = passwordData[randomNumber];
    password.push(nextPasswordChar);
    console.log(password);
  }
//to get rid of commas in password
password = password.join("");

  randomNumber = Math.floor(Math.random()*dataNumber);
  var firstPasswordChar = passwordData[randomNumber];

  

    console.log(password);
        


// for loop using i=1; x < numberChar; i++ adding random character to password array in each iteration


  var passwordText = document.querySelector("#password"); //Their code

  passwordText.value = password; //Their code

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //Their code
