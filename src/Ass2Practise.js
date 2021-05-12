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
    let result = [[]]
    function findTheMines2 (arr) {
        arr.forEach(element => {element === 1 ? 'x' : 'y'})
    } 
    function neighborsCounter(arr) {
        arr.forEach(element => {element === 'x' ? 'x' : x++})    
    }
     return result 
}
console.log(game([0,1,0,1]))











//first half - final 
// let input = [
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 1, 0, 1],
// //     [1, 1, 0, 0],
// //    ]
// const findTheMines = input.map(row => row.map(num => 
// num === 1 ? 'x' : 'y'));
// findTheMines.forEach(element => {

// })
// let result = []; 
//         for (let i = 0; i < input.length; i++) {
//             let y = input[i][0];
//             for (let J = 0; J < input[i].length; J++) {
//             if (input[i] === 'x') [i ++]; {
//             [].push;
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




