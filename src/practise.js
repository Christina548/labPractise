//create a function that returns true if all parameters are truthy and false otherwise
//0, undefined, null, nan are falsey data types
// [5,4,3,2,1,0] -> false
// (true, true, true) -> true
// n number of inputs always use spread operator
// function checkTrueOrFalse (...args){
//     for (let i = 0; (i < Arguments.length); i++) {
//         if arguments === true {
//             return true
//         } else { 
//             return false
//         }
//     }
// }
// console.log(checkTrueOrFalse([5,4,3,2,1,0]))

var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

  //Create a function that takes two nested arrays and return the sum of the minimum value in each row.
//Examples of input
/* sumOfMinValues([
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
] */
//Output is 26
//Answer
function sumOfMinValues(arr){
    var sum = 0;
        
          for(let i = 0; i < arr.length; i++) {
            let y = arr[i][0];
              for(let x = 0; x < arr[i].length; x++){
                  if(y > arr[i][x]){
                      y = arr[i][x];
                  }
              }
              sum += y;
          }
          return sum;
    }

// Create a function that takes a number as an argument and returns an      
//array of numbers counting down from this number to zero.
 // Example: countdown(5)
 // Output: [5,4,3,2,1,0]
 //Answer:
 
 function countdown(num) {
    let arr = []
    for(let i=num; i>=0; i--){
        arr.push(i)
    }
    return arr
}
console.log(countdown(5))

//Write a function that takes an array of elements and returns only the integers.
//Example: ArrayOfInteger([9, 2, "space", "car", "lion", 16])
//Output: [9, 2, 16]
//Answer:
function ArrayOfInteger(arr) {
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(Number.isInteger(arr[i])==true){
             newArr.push(arr[i]);
        }
        
    }
    return newArr;
}
console.log(ArrayOfInteger([9, 2, "space", "car", "lion", 16]))

function minesweeper (arr) {
    // declare variable of empty array for result to be stored in??
    let newArr = [];
    //for loop goes through each array
    for(let i = 0; i < arr.length; i++) {
        //need to iterate through all arrays
        for(let j = 0; j < arr[i].length; j++){
          //find all 1's and change them into mines represented by x

}
}

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 
//example takes pound sign away from numbers and returns array without pound sign
// var linedata = [
//     ["£14.99,£14.99,£14.99"],
//     ["£34.99,£34.99,£34.99"]
//   ].map(ary =>
//     ary[0].split(',')
//     .map(v => Number(v.replace(/£(\d+(?:\.\d+)?)/g, "$1")))
//   );
  
//   console.log(linedata);