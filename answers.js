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

// console.log(addThese(100,200))

/* Write a function that takes two numbers and multiplies them together. 
Test your function on a few inputs. 
Write in your comments what happens 
when you pass something other than a number to your function. */

function multiplyThese(num1, num2) {
    //javascript is weird, even if you pass a number in a string, they still get
    //miltiplied together. true = 1, and false = 0.
    return num1 * num2;
}

// console.log(multiplyThese(10, 10))

/* Write a function that takes two numbers and a string. 
If the string is ‘add’, then return the sum of the numbers. 
If the string is ‘subtract’, return the difference. 
If the string is ‘mult’, return the product. 
If the string is ‘div’, return the ratio. 
Otherwise return 0. */

function aMathFunction(num1, num2, str) {
    switch(str) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "mult":
            return num1 * num2;
        case "div": 
            return num1/num2;
        default:
            return 0;
    }
}

// console.log(aMathFunction(5,5,"div"))





/* Write a function that takes a string and a number, 
and returns the string repeated that many number of times. 
Test your function with various inputs. */

function growString (num,str) {
    var resultString = ""
    var index = 0
    while (index < num) {
        resultString += str;
        index ++;
    }
    return resultString;
}

// console.log(growString(500000,"hello"))




/* Write a function that takes a string, 
and returns the reverse of that string. 
For example, if you pass the function the string “hello”, 
it should return “olleh”. 
Test your function on a few inputs, including the empty string. */

function reverseString (str) {
    var index = str.length - 1;
    var result = ""
    while(index >= 0) {
        result += str[index];
        index --;
    }
    return result;
}

// console.log(reverseString("hello"));



/* Write a function that takes a number and 
returns the factorial of a number. 
The factorial of 5 is 5x4x3x2x1. 
The factorial of 0 is 1. 
Test your input on a few numbers, including negative numbers. */


function factorialOf(num) {
    var iter = (num -1);
    var result = num;
    while(iter > 0) {
        result = (result * (iter));
        iter --;
    }
    return result;
    
}


// console.log(factorialOf(4));




/* Write a function that takes a phrase as a string, 
and returns the longest word in that phrase. 
If the phrase contains more than one such word, 
return the first occurrence. 
Test your function on a few inputs. */



function longestWord(str) {
    var workingArray = str.split(" ");
    var iter = 0
    var resultWord = ""
    while(iter < workingArray.length) {
        if(workingArray[iter].length > resultWord.length) {
            resultWord = workingArray[iter];
            iter ++;
        }
        else {
            iter ++;
        }
        }
        return resultWord;
    }


console.log(longestWord("roses are red and violets are blue, I smell funny and so do you"))