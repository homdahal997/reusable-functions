console.log("======================Part 1: Thinking Functionally==========================");
/**
 * When coding, it is important to approach your work using small, manageable blocks of code. Some functions may become dozens or hundreds of lines long, but keeping things small and simple will help you scale and maintain your code.
This section will have you build a few simple functions to accomplish arbitrary tasks. When building functions, remember that there are many ways to accomplish a task in programming. Sometimes, the shortest route is the best, and sometimes it is not.
Take the following example, which contains five functions that accomplish the same task. If you were looking at this code for the first time, which would make the most sense to you?
 */

//Take an array of numbers and return the sum.
function myArraySum(arr){
    // initial sum to be 0
    let sum = 0;
    // loop through array of numbers
    for(let i = 0; i < arr.length; i++){
        // add each to sum
        sum += arr[i];
    }
    // return final sum
    return sum;
}
let numbers = [1,2,3,4,5];
console.log(myArraySum(numbers)); // 15 

// Take an array of numbers and return the average.
function myArrayAverage(arr){
    // Average calculated using previously built myArraySum function
    return average = myArraySum(arr)/arr.length;
}
// logging average using our previous array of numbers
console.log(myArrayAverage(numbers));

// Take an array of strings and return the longest string.
function myArrayString(arr){
    // let our longest string be empty for now
    let longestString = "";
    // loop through the array
    for(i = 0; i < arr.length; i++){
        // compare each string to find the longest string
        if(arr[i].length > longestString.length){
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

