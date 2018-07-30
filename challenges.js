
function longestString(arr){
    let checklength = [];
    for (let i=0; i < arr.length; i++){
      checklength.push(arr[i].length);
    }
    let j = checklength.indexOf(Math.max(...checklength));
    return arr[j];

}

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