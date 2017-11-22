var input = document.querySelector("textarea");
var format = document.querySelector("#format");
var clear = document.querySelector("#clear");
var message = document.querySelector("h3");
var outputArr = [];
var outputStr = '';


// Clicking "format" button formats numbers and returns formatted string
format.addEventListener("click", function(){
	// Get numbers from user
	var enteredNumbers = input.value;
	// Remove any non-numerical characters
	var numbersToFormat = enteredNumbers.replace(/\D/g, '');

	// Do work of formatting output such that each 10-digit number is
	// on a new line within the textarea box
	phonify(numbersToFormat);
	stringify(outputArr);
	input.value = outputStr;

	// Error handling, helpful confirmation that correct amount of numbers 
	// were formatted
	if(numbersToFormat.length % 10 !== 0){
		message.textContent = "WARNING: Not All Numbers are 10-Digits, check list and try again."
	}
	else {
		message.textContent	= "Number of Numbers formatted: " + outputArr.length;
	}
	
});

// Clicking "clear" button resets tool to default
clear.addEventListener("click", function() {
	clearInput();
});


// Take string of numbers and slice into 10-digit chunks
// Place each chunk into outputArr
function phonify(str) {
	var slice = '';
	var index = 0;
	var len = 10;

	while(index < str.length){
		slice = str.substr(index, len);
		outputArr.push(slice);

		index += 10;
	}
}

// Place contents of array into an output string where each 10-digit 
// number is on a new line
function stringify(arr) {
	arr.forEach(function(number){
		outputStr += number + '\n'
	});
};

// Reset tool back to default
function clearInput() {
	outputStr = '';
	outputArr = [];
	input.value = '';
	message.textContent = '';
}