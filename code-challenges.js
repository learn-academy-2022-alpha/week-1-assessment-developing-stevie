// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212






// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

//console.log(myNumbers1.concat(myNumbers2).length)
//log and combine myNumbers1 & myNumbers2--> 
//output -->[[3, 7, 0, 36, -9, 8, -7, 42, 9, 13
//.length counts the number of indexes -->
//prints the length of the array instead of the output above making
//output -->10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ahplA"

const currentCohort = "Alpha 2022"

//console.log(currentCohort.split("").reverse().join(""));

//logs value of currentCohort >
//"splits" the values of the string into a index of characters
//"reverses" the order of the string index>
//"joins" them back together into a reversed string>
//output-->"1202 ahplA"

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]



for(let i = 0; i < myArray.length; i++){
    if(myArray.indexOf(i) % 2 !== 0){
      console.log("odd")
    } else {
      console.log("even")
    }
  }

// currently working the way i want to but not getting the correct math
//let i equal zero and is 0
//if i is greater than myArray and its length
//increment the value of i
//i returns the original value
//----> output is wrong but prints (odd,odd,odd,odd,odd,even)


  

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24



