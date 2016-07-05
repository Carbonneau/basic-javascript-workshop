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

//console.log(lastChar("Hoorah!"))

/* Write a function that takes a string and a number, 
and returns the character at the position represented by the number. 
The indexing of number should start at 0. 
Test your function on a few inputs, including the empty string.*/

function charPosition(aString,number) {
    return aString[number];
}

// console.log(charPosition("why?",3));

/* Write a function that takes two numbers and adds them together. 
Test your function on a few inputs. 
Write in the comments what happens when you pass something other 
than a number to your function. */

function addThese(num1,num2) {
    //If you add a string and a number, 
    //the result will be the two item concoctenated together
    return num1 + num2;
}

console.log(addThese(100,200))
