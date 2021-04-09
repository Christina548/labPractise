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

//declare the function with the parameters of array
function sumOfCubes([array]) {
  // //use an if statement inside the function to make sure the function will only use numbers
    if (typeof arr === 'number') { 
      //declare array variable  
      let arr = [2,5,6]; 
      //use a for loop to access all the numbers in an array and cube them
          for (let i = 0; i < arr.length;i++) { 
            arr[i] = arr[i]*arr[i]*arr[i]; 
        } 
        // set the return parameters to return the total of cubed numbers in the array
        return arr[i] + arr[i] + arr[i]; 
        // use the else statement to return an error if non-number data types are used
      } else { 
        console.log('error') 
      } 
// call the function to check code
sumOfCubes();