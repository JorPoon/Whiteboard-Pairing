//Interger pairs
/* 
Goal: A function that prints out the pairs of number in a given array that when added together equals 
to the input argument value

Assumptions: No negative integers or values

function: integerPairs 

input: [array of integers], interger value

output: 'integerA, integerB' (adding these 2 integers will equal to the integer value)

Need to find the pairs in the array that equals the interger value:
e.g: ([1, 4, 5, 2], 6)

loops through array
grab first integer,
subtract first integer from value to find second integer
check to see if second integer is in given array
check to see if first and integer has been repeated
return integers in string pairs

*/

const integerPairs = (arr, int) => {
  let sum = int;
  let newArr = [];
  
  return arr.map(num => {
    let intB = sum - num;
    let included = arr.includes(intB);
    let noRepeat = newArr.includes(num);
    if (intB > 0 && included) {
      newArr.push(intB);
      if (!noRepeat) {
        return console.log(`${num} ${intB}`);
      }
    } else {
      return null;
    }
  });
};
