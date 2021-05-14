// // function game(arr) {
// //     // Have a function to check the mines
// //     function checkMine(param1, param2) {
// //       // Your logic for finding mines
// //     }
    
// //     function neighborsCounter(param1, param2) {
// //       // Your logic for counting the numbers
// //     }
    
// //     return the results
// //   }


    
    
    
    
    
    
    
    
    
    
    
    
function game(arr) {
    let result = arr
    function findTheMines2 (a, b) {
        a.forEach(element => {element === 1 ? 'x' : 'y'})
    } 
    function neighborsCounter(a, b) {
        arr.forEach(element => {element === 'x' ? 'x' : x++})    
    }
     return arr 
}
console.log(game([0,1,0,1]))











//first half - final 
// let input = [
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 1, 0, 1],
//   [1, 1, 0, 0],
//   ]
// const findTheMines = input.map(row => row.map(num => 
// num === 1 ? 'x' : 'y'));
// findTheMines.forEach(element => {

// })
function game (arr) {
    let result = [];
    function findTheMines (arr, num)
    for (let i = 0; i<arr.length; i++) {
            let y = arr[i][0];
            for (let J = 0; J <arr[i].length; J++) {
                (num => num === 1 ? 'x' : 'y');  
        } 
    }  
} 
console.log(game([1,1,0,0]))
//  if (arr[i] === 1); {
  //  return 'x' 
//      if (arr[i] === '1') [i ++];  
//     }
//     return result;
// }
//         }


// console.log(findTheMines2([[
//         [0, 1, 0, 0],
//         [0, 0, 1, 0],
//         [0, 1, 0, 1],
//         [1, 1, 0, 0],
//        ]]))
