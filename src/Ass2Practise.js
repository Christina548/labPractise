let input = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
   ]
const output = input.map(row => row.map(num => 
num === 1
? 'x'
: 0
));
console.log(output)


// const output = myNumbers.map(row => row.map(num =>
//   num % 2 === 0
//   ? 'even'
//   : 'odd'
// ));
// console.log(output);
