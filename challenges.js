/*
Good morning! Write a function that takes an array of strings and return the longest string in the array.

For example:
const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one.

For example:
const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
console.log(longestString(strings2)); // <--- 'first long string!'
*/
function longestString(arr){
    let checklength = [];
    for (let i=0; i < arr.length; i++){
      checklength.push(arr[i].length);
    }
    let j = checklength.indexOf(Math.max(...checklength));
    return arr[j];
}

const strings1 = ['short', 'really, really long!', 'medium'];
longestString(strings1)

const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
longestString(strings2); // <--- 'first long string!'

/*
Good morning! Write a function called reverseString that accepts a string and returns a reversed copy of the string.

Input Example:
'hello world'
'asdf'
'CS rocks!'

Output Example:
'dlrow olleh'
'fdsa'
'!skcor SC'
*/

function reverseString(str){
    return str.split("").reverse().join("");
}

//Pseudo logic:
    //QUickest way convert number to string and use array methods to reverse. Then convert back to number. ;-)
function reverseNumber(num) {
    let numStr = parseInt(num.toString().split("").reverse().join(""));
    return numStr;
  }  
    //reverseNumber(12345);
    //Works in 2 lines!! hahaha

//Pseudo logic:
    // Take element 1 from array 1, loop through second, if match found add to new array and return
    // technically 1st for loop for array a, second for array b, if statement in array b.
    // array must be defined before for return - scope
    //Shorter way1!!!?
function commonElements(arr1, arr2) {
    let returnArr = [];
    for (let i = 0; i < arr1.length; i++){
      for (let j=0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]){
          returnArr.push(arr1[i])
        }
      }
    }
    return returnArr;
  }
  
//commonElements([1, 2, 3, 4], [3, 4, 5, 6])

const strings1 = ['short', 'really, really long!', 'medium'];
longestString(strings1)

const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
longestString(strings2); // <--- 'first long string!'


//Pseudo logic
/*
1. Create a regexp to check - or underscore
2. when it is found, remove the (-, _) and uppercase the next letter
3. push this to a new array and return the join.

Learn more about str.replace()
*/

function toCamelCase(str) {
  var checkCase = new RegExp(/[-_]/);
  let input = [];
  let i = 0;
  //Check if string is empty
  if (!str){
    //Check first letter case and add it, then iterate
    if(str[i] == str[i].toUpperCase()){
      input.push(str[i])
      console.log("A" + input)
    }
    else{
      input.push(str[i].toLowerCase())
      console.log("B" + input)
    }
    console.log("Value of i" + i)
    //Loops through the rest
    for (i=1; i<str.length; i++){
      console.log("Value of i" + i)
      if (checkCase.test(str[i])){
        console.log(str[i])
        i++;  //Skips adding dashes and underscores and moves to next making it uppercase
        input.push(str[i].toUpperCase());
      }
      else{ 
        input.push(str[i])
      }
    }
  
    return input.join('');
  }
  else{
    return str;
  }
}

toCamelCase("The-stealth-warrior")


// var string = new RegExp(/[a-z][A-Z]/g, "$1,$2");


function NOT (b) {
  if (b === false){
    return true;
  }
  else{
    return false;
  }
}

function AND (x, y) {
  if(x === y){
    if (x===false){
      return false;
    }
    else{
      return true;
    }
  }
  else{
    return false;
  }
}

function NAND(x, y) {
  if (x === y){
    if (x === true){
      return false;
    }
    else{
      return true;
    }
  }
  else{
    return true;
  }

}

function OR(x, y) {
  if (x === y){
    if (x === true){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return true;
  }

}

function XOR(x, y) {
  if (x === y){
    if (x === true){
      return false
    }
    else{
      return false
    }
  }
  else{
    return true;
  }
}


//
// console.log(AND(true, true));   // ---> true
// console.log(AND(true, false));  // ---> false
// console.log(AND(false, true));  // ---> false
// console.log(AND(false, false)); // ---> false

// console.log(NOT(false)) 
// console.log(NOT(true))

// console.log(NAND(true, true));   // ---> false
// console.log(NAND(true, false));  // ---> true
// console.log(NAND(false, true));  // ---> true
// console.log(NAND(false, false)); // ---> true

// console.log(OR(true, true));   // ---> true
// console.log(OR(true, false));  // ---> true
// console.log(OR(false, true));  // ---> true
// console.log(OR(false, false)); // ---> false

console.log(XOR(true, true));   // ---> false
console.log(XOR(true, false));  // ---> true
console.log(XOR(false, true));  // ---> true
console.log(XOR(false, false)); // ---> false


//SOL1: AND
// if(x === y){
//     true;
//     if(x === false){
//       if(y===false){
//         return false;
//       }
//       else{
//         return true;  
//       }
//     }
//   }
//   else{
//     return false;
//   }


/*
Good morning! Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

Input:
'dcba'
'zycxbwa'
'AzycxbCwBaA'
*/

// Pseudocode:
// use array functions sort 

function sortString(str) {
  return str.split("").sort().join("")
}

console.log(sortString("dcba"))