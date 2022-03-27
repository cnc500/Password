# password
Password Generation

Process

I diagrammed out the logic to generate a password from 8 to 128 characters 
with user selected character types of lowercase letters, uppercase letters, 
numbers, and special characters.

My logic involved generating random numbers in order to select a random 
character from each of the above groups.  Then I generated a variable 
number based upon the number of these groups the user selected.

I removed the value in the array that corresponds to the character that the
user rejected, if any.

I repeated this process adding to the password array as many times as the 
user selected in picking a password length.  A unique password is generated
by this program.

A special note: If the user fails to select all four prompts of
lowercase letters, uppercase letters, numbers and special characters, than 
an alert box appears indicating that the user must choose at least one type 
of character, and the confirm boxes for each type of character cycle again.

Accomplishment

This a nice working program as advertised generating a totally random password
from 8 to 128 characters based upon user selected types of characters!

Deployment

The deployment of the webpage was successful and is at 


A screenshot of it is below:


