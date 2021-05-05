// declare the function with the parameters length, width
function calculateAreaRectangle(length, width) { 
  //use an if statement inside the function to make sure the function will only use numbers  
    if(typeof length === 'number' && typeof width === 'number' ) {
      //set the return parameter of length x width
      return length * width
  // use else statement to return an error message if non-number data types are used
 } else {
 console.log('error')
  }
 }
//call the function to check code
calculateAreaRectangle();

//declare the function with the parameters of arr
function sumOfCubes(arr) {
  // declare variable total which return the sum of cubes when the code has run
  const total = 0;
  // create a for loop to access all characters in an array
    for (const i = 0; i < arr.length; i++) {
      //use an if statement to return undefined if a non-number data type is entered in an array
        if (isNaN(arr[i])){
            total = undefined;
            return total;
        }
        //use the else statement to create a for loop to again access all the characters in an array
    } else { for (const i = 0; i < arr.length;i++) { 
      //cube each number in the array
        arr[i] = arr[i]*arr[i]*arr[i];
        // return the sum of cubes numbers as the total
        return total = total + arr
    }
}