//first half - final 
let input = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
   ]
const findTheMines = input.map(row => row.map(num => 
num === 1 ? 'x' : 'y'));
//draft of second part
const countTheMines = findTheMines.map(row => row.map(num => 
    num === 'x' ? 'x' : [num++]));
    console.log(findTheMines([
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 0, 1],
            [1, 1, 0, 0],
           ]))

//another draft of second part
//     let result = []; 
//         for (let i = 0; i < input.length; i++) {
//             let y = input[i][0];
//             for (let J = 0; J < input[i].length; J++) {
//             if (input[i] === 'x') [i ++]; {
//             [].push;
//     }
//     return result;
// }
//         }

