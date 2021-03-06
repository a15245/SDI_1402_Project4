// Mike Aurin
// SDI 1402
// Project 4
// Building a Library of Functions

// Question 1
// Does a number follow the same pattern as 123-456-7890


var telephoneNumber = function(givenNumber) {
	var validNumber = "555-555-5555",
		givenNumber;
	if (givenNumber.length == validNumber.length) {
	console.log("Question 1: " + true);
		} else {
	console.log("Question 1: " + false);
	}
	return givenNumber;
};

givenNumber = telephoneNumber("561-400-4581");
console.log (givenNumber + " is a valid telephone number");
	
//Question 2
// Does an email contain a ".edu" in the string


var validEmail = function(myEmail) {
	var myEmail = "mikeaurin@fullsail.edu",
		emailCharacters = myEmail.match(["a-z"]+ "@" + ["a-z",".","a-z"]);
	if (emailCharacters != myEmail) {
    	console.log("Question 2: " + true);
	} else {
		console.log("Question 2: " + false);
	}
	
	return myEmail;
};

myEmail = validEmail();
console.log(myEmail + " is a valid email address"); 


// Question 3
// Does a string begin with "http://" or "https://"

var myWebsite = "http://www.droid-life.com";
var myOtherWebsite = "https://www.facebook.com";

if (myWebsite.indexOf(0-6) !== "http://") {
	console.log("Question 3: " + true)
		} else { 
			console.log("Question 3: " + false)
}		if (myOtherWebsite.indexOf(0-7) !== "https://") {
		console.log("Question 3: " + true)
			} else {
		console.log("Question 3: " + false)
		// Extra Credit: Nested Conditional - Deliverable 3
};

// Question 4
//  Take a string that is all lowercase and uppercase the first letter of each word

String.prototype.capitalize = function() {
    return this.charAt(0,11).toUpperCase() + this.slice(1);
}

console.log("Question 4: " + "capitalize this!".capitalize());

//Question 5
// Replacing string separators with different characters


var myString = "These commas seem unnecessary!";
var myString = myString.split(" ");

console.log("Question 5: " + myString);

//Question 6
// Format a number to a specific number of decimal places

var myDecimal = 5.489487342;
console.log("Question 6: " + myDecimal.toFixed(2));

// Question 7
// The question that needs to shave.  Fuzzy-match a number.  Is a number above or below another number with
// a certain percent.

// Question 8
// Find the Number of days difference between two dates

var sisterBirthday = "2014-02-19";
var myBirthday = "2014-08-22";

sisterBirthday = sisterBirthday.split('-');
myBirthday = myBirthday.split('-');

sisterBirthday = new Date(sisterBirthday[0], sisterBirthday[1], sisterBirthday[2]);
myBirthday = new Date(myBirthday[0], myBirthday[1], myBirthday[2]);

sisterBirthday_unixtime = parseInt(sisterBirthday.getTime() / 1000);
myBirthday_unixtime = parseInt(myBirthday.getTime() / 1000);

var timeDifference = myBirthday_unixtime - sisterBirthday_unixtime;

var timeDifferenceInHours = timeDifference / 60 / 60;

var timeDifferenceInDays = timeDifferenceInHours  / 24;

console.log("Question 8: There are " + timeDifferenceInDays + " days between my sister's birthday and my birthday.");

// Question 9 
// Take a string and convert it to produce a number value.

var myNumber = "45";
myNumber = parseInt(myNumber);
console.log("Question 9: The string of '45' is now " + myNumber + ".");
// Extra Credit: Missing a 'parseInt' requirement - Deliverable 1

// Question 10
// Find the smallest value of an array that is greater than a given number


// Question 11
// Find the total value of an array even if some values aren't numbers
var myArray = ["mold", 12, "spores", 7, "fungus", 8, "twinkies"];

var theSum = 0;
for (var i=0; i<myArray.length; i++) {
  if (!isNaN(parseInt(myArray[i]))) { theSum += myArray[i]; }
}
console.log("Question 11: " + theSum);

