# password
Password Generation

Process

I diagrammed out the logic to generate a password from 8 to 128 characters 
with user selected character types of lowercase letters, uppercase letters, 
numbers, and special characters.

My logic involved generating random numbers in order to select a random 
character from each of the above groups.  Then I generated another random 
number based upon the number of these groups they selected to choose which 
chosen type of character is selected for the first character of the password.

I removed the value in the array that corresponds to the character that the
user rejected, if any.

I repeated this process adding to the password array as many times as the 
user selected in picking a password length.  A unique password is generated
by this program.

A special note: If the user fails to select the fir three prompts of
lowercase letters, uppercase letters, and numbers, than a alert box appears 
indicating that the user will have a password of only special characters.




