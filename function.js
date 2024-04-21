console.log("======================Part 1: Thinking Functionally==========================");
/**
 * When coding, it is important to approach your work using small, manageable blocks of code. Some functions may become dozens or hundreds of lines long, but keeping things small and simple will help you scale and maintain your code.
This section will have you build a few simple functions to accomplish arbitrary tasks. When building functions, remember that there are many ways to accomplish a task in programming. Sometimes, the shortest route is the best, and sometimes it is not.
Take the following example, which contains five functions that accomplish the same task. If you were looking at this code for the first time, which would make the most sense to you?
 */

//Take an array of numbers and return the sum.
function myArraySum(arr) {
    // initial sum to be 0
    let sum = 0;
    // loop through array of numbers
    for (let i = 0; i < arr.length; i++) {
        // add each to sum
        sum += arr[i];
    }
    // return final sum
    return sum;
}
let numbers = [1, 2, 3, 4, 5];
console.log(myArraySum(numbers)); // 15 

// Take an array of numbers and return the average.
function myArrayAverage(arr) {
    let average = 0;
    // Average calculated using previously built myArraySum function
    return average = myArraySum(arr) / arr.length;
}
// logging average using our previous array of numbers
console.log(myArrayAverage(numbers));

// Take an array of strings and return the longest string.
function myArrayString(arr) {
    // let our longest string be empty for now
    let longestString = "";
    // loop through the array
    for (i = 0; i < arr.length; i++) {
        // compare each string to find the longest string
        if (arr[i].length > longestString.length) {
            // if any current element of an array is longer than length of longest string,
            // our longest string will be the current element 
            longestString = arr[i];
        }
    }
    // return longest string
    return longestString;
}
let arrString = ["Javascript", "something of a kind", "Java is not cooler than javascript"];
console.log(myArrayString(arrString));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function myStrArrLongerThanNum(arr, num) {
    // variable to hold array of string longer than nums
    let longerString = [];
    // loop through an array
    for (i = 0; i < arr.length; i++) {
        // checking if any string's length is greater than 3
        if (arr[i].length > num) {
            // pushing them to an array previouysly initialized
            longerString.push(arr[i]);
        }
    }
    // return array of string longer than number
    return longerString;
}

let testStrings = ["hello", "hi", "bye1", "seeya", "nice"];
console.log(myStrArrLongerThanNum(testStrings, 1));

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printOneToNumber(n) {
    try {
        if (n < 1) {
            // if less than 1 it stops
            return;
        }
        // call function again with n-1 as agrument this continue until n is less than 1
        printOneToNumber(n - 1);
        // print to console
        console.log(n);
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}
printOneToNumber(5);

console.log("======================Part 2: Thinking Methodically==========================");
// our given array of objects  is as follows 
const arrayObject = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]

//Sort the array by age.
// we can use javascript builtin array method , sort to sort the age
arrayObject.sort((a,b) =>a.age - b.age);
console.log(arrayObject);

// Filter the array to remove entries with an age greater than 50.
const filteredArray = arrayObject.filter(person => person.age <= 50);
console.log(filteredArray);

// Map the array to change the “occupation” key to “job” and increment every age by 1.
// for(key in arrayObject){
//     arrayObject.occupation = "Job";
//     arrayObject.age += 1;
// }
// console.log(arrayObject);
// create new array to map properties of object according to the definition of map.
let newArray = arrayObject.map(person =>{
    return{
        // ... spread operator is used to include all properties from original object.
        ...person,
        // overwrites occupation and increment age by 1 as below
        job: person.occupation,
        age: person.age + 1
    };
});
console.log(newArray);

/**
 * Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
 */
// Extract the ages into a new array
const ages = arrayObject.map(person => Number(person.age));

// Calculate the sum of the ages
const sum = ages.reduce((a, b) => a + b, 0);

// Calculate the average age
const average = sum / ages.length;

console.log(average);


console.log("======================Part 3: Thinking Critically==========================");
// Take an object and increment its age field.
function incrementAge(myObject){
    if(!("age" in myObject)){
        myObject.age = 0;
    }
    myObject.age++;
    myObject.updated_at = new Date();
}

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
function copyOfIncrementAge(myObject){
    return { 
        ...myObject, // copy by defition
        age: myObject.age + 1, // age increments
        updated_at: new Date() // date upydated
    };
}
// Test the functions
let testObj1 = { name: "Hom Dahal", occupation: "MERN STACK DEVELOPER" };
incrementAge(testObj1);
console.log(testObj1);

let testObj2 = { name: "Hom Dahal", occupation: "Software Developer", age: 25 };
let testObj2Copy = copyOfIncrementAge(testObj2);
console.log(testObj2);
console.log(testObj2Copy);

