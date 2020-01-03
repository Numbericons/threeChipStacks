//first check if first stack is as at least as big as the other 2 stacks
//when it is, return lower of 2nd and 3rd elements
//  if (arr[0] >= arr[1] && arr[0] >= arr[2]) {
/*return arr[1] > arr[2] ? arr[1] : arr[2];
  } else {
  if (arr[2] > arr[3])
  }
*/  

//find max value from array
//find at least one element with that max value
//find min value from array
//make count = min
//keep remainder
//add to count the smaller of remainder above and third value

function solve(arr) {
  let maxVal = Math.max(arr[0], arr[1], arr[2]);
  let minVal = Math.min(arr[0], arr[1], arr[2]);
  let minEl = arr.indexOf(minVal);

  let count = maxVal - minVal;
  maxVal -= minVal;

  arr.splice(minEl,1);
  count += arr[0] < arr[1] ? arr[0] : arr[1];

  return count;
}

solve([4, 1, 1])