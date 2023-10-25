// Problem 1: Write a function to calculate the area of a triangle.
function triangleArea(b, h){
    return 0.5 * (b * h);
}

let area = triangleArea(6, 9);
console.log(area);


// Problem 2: Write a function to convert degrees to radians.
 function degreesToRadians(deg = 0) {
    const pi = 3.1416;
    let radians = deg * (pi / 180);
    if(deg != 0){
        return radians.toFixed(4);
    }else {
            return "Please insert arguments";
        }
    
 }

 const degValue = 90;
 const radValue = degreesToRadians(degValue);
 console.log(radValue);

//  Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
function calculateFactorial(num) {

    if (num === 0 || num === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }
}

console.log(calculateFactorial(5));

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrime(val) {

  
}

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
function mergeArrays() {

}

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year){
    if((0 == year % 4 && 0 != year % 100) || (0 == year % 400)) {
        return "This is a leap year";
    } else {
        return "Not Leap year";
    }
}

console.log(isLeapYear(2004));



// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates() {

}


// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(fahrenheitvalue) {

    let fahrenheit = (fahrenheitvalue - 32) / 1.8;

    return fahrenheit.toFixed(2);
}

console.log(convertToCelsius(90));


// Problem 9: Write a function to find the maximum of five numbers.
function findMaxNumbers() {

}


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
function evenOdd(str_val) {
    let val = str_val;
    let strlength = val.length;
    if(strlength % 2 === 0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(evenOdd("Rasel"));




// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

//*****************Ans to the question no One.*********************

// A. If-else statement checks whether the conditions in the parenthesis evaluates to true or false and switch statement checks if the equality of the value in the parenthesis against the value of the case keyword evaluates to true.
// B. The if-else statement is used to choose between two options, but the switch case statement is used to choose between numerous options.
// C. IF-else used for taking a decisions and Switch statement used to test the value of the given variable against a list of case value .
// D. If-esle statement checks for equality as well as for logical expression . On the other hand, switch checks only for equality.


// 2. What is JavaScript, and what is its primary purpose in web development?

//*****************Ans to the question no Two.*********************

//   JavaScript is a lightweight scripting or programming language. JavaScript is commonly used by web developers to add dynamic interactions to web pages, applications, servers,  and for creating web pages.



// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

//*****************Ans to the question no Three.*********************

// A.	var are globally scoped other hand let and const are block scoped.
// B.	var variables can be updated and re-declared, let variables can be updated but not re-declared, const variables can neither be updated nor re-declared.



// 5. What is the difference between "null" and "undefined" in JavaScript?
//*****************Ans to the question no Five.*********************

// A. null is an assigned value, means nothing other hand undefined means a variable has been declared but not defined yet.
// B. null results in a valid numeric value of 0 and an undefined results in NaN.
