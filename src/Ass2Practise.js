function game (arr) {
    let result = [];
    function findTheMines (array, num){
    for (let a = 0; a<array.length; a++) {
            // let num = array[a][0];
            for (let J = 0; J <array[a].length; J++) {
                if (num === 1){
                    num = 'x'
    }
function checkForMines () {
//create a for loop to access the elements in the rows of the nested array
for(let i = 0; i < rows; i++){
    //use another for loop to access all the elements in the columns of the nested arrays 
        for(let j = 0; j < cols; j++){ 
//declare variables for elements surrounding y
let elementLeft = (rows -1)
let elementRight = (rows +1)
let elementUp = (cols + 1)
let elementDown = (cols -1)
let elementUpLeft = (cols +1 + rows -1)
let elementUpRight = (cols + 1 + rows +1)
let elementDownLeft = (cols -1 + rows -1)
let elementDownRight = (cols -1 + rows +1) 

 //use an if statement to check whether the element is strictly equal to 0
     if (y === 0) {
      //what to do if y === 0
    //if statement to check whether the element to the left of y is x
    } if (elementLeft = x){
     //if the element is x increment y by 1
         y++
    //if statement to check whether the element to the right of y is x
    } if (elementRight = x){
        //if the element is x increment y by 1
         y++
    //if statement to check whether the element above y is x
    } if (elementUp = x){
        //if the element is x increment y by 1
         y++
    //if statement to check whether the element down from y is x
    } if (elementDown = x){
        //if the element is x increment y by 1
        y++
    //if statement to check whether the element above y and to the left is x
    } if (elementUpLeft = x){
        //if the element is x increment y by 1
        y++
    //if statement to check whether the element above y and to the right is x
    } if (elementUpRight = x){
        //if the element is x increment y by 1
         y++
    //if statement to check whether the element down from y and to the left is x
    }if (elementDownLeft = x){
        //if the element is x increment y by 1
        y++
    //if statement to check whether the element down from y and to the right is x
    } if (elementDownRight = x){
         //if the element is x increment y by 1
         y++
    //all other elements are surrounding
    } arr[i][j] = surrounding;
    //else statement to return false if none of these conditions are met
        else {
            false
            }
        } 
    //return the results
    } return result;
}
            }}}}
//print out the outcome
console.log(game([0,1,0,0,], [1,0,0,0,]))



// var getNeighbors = function(id){
//     let row = parseInt(id[0]);
//     let column = parseInt(id[1]);
//     var neighbors = [];
//     for (var i = 0; i<neighbors.length; i++){
//     neighbors.push ((row- 1) + "" + (column - 1));
//     neighbors.push((row - 1) + "" + column);
//     neighbors.push((row -1) + "" + (column + 1));
//     neighbors.push((row + "" (column - 1)),
//     neighbors.push((row + "" (column + 1)),
//     neighbors.push ((row+ 1) + "" + (column - 1)),
//     neighbors.push((row + 1) + "" + column),
//     neighbors.push((row +1) + "" + (column + 1)),
//     {
// //         if (neighbors [i].length >2){
// //             neighbors.splice(i,1){
// //             i--;
// //         }
// //     }
// //     return neighbors
// // }
// console.log(getNeighbors([1,0,0,0]))
// // for(let i = 0; i < rows; i++){
// //     for(let j = 0; j < cols; j++){
// //         if (y === 0) {

// //      if(condition){
//             // a var is = 0 to check the surroundings neighbors
//             //not a mine
//             //check surroundings if it's a mine 
            
//             //left
//             //if(condition){
//             // check the left neighbor
//         //     }
//         //     //right
//         //     //if(condition){
//         //     //check the right neighbor 
//         //     }
//         //     //up
//         //     //if(condition){
//         //     // check the top neighbor
//         //     }
//         //     //down
//         //     //if(condition){
//         //     // check the bottom neighbor
//         //     }
//         //     //up left
//         //     //if(condition){
//         //     // check the top left neighbor
//         //     }
//         //     //up right
//         //     //if(condition){
//         //     // check the top right neighbor
//         //     }
//         //     //down left
//         //     //if(condition){
//         //     // check the bottom left neighbor
//         //     }
//         //     //down right
//         //     //if(condition){
//         //     // check the bottom right neighbor
//         //     }
//         //     //arr[i][j] = surrounding 
//         // }
//         // else {
//         //     false
//         // }
