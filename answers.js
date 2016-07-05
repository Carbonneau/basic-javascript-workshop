//Write a function that takes a string and 
//returns the first character of the string. 
//Test your function on a few inputs, including the empty string.

function firstChar(aString) {
    return aString[0];
}

// console.log(firstChar("YAY!!!"))

/* Write a function that takes a string and 
returns the last character of a string. 
Test your function on a few inputs, 
including the empty string. */

function lastChar(aString) {
    return aString[(aString.length - 1)]
}

console.log(lastChar("Hoorah!"))