function sumTwoSmallestNumber(numbers){
  
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];

}

let lowNos = sumTwoSmallestNumber([6,9,4,2,7,1,3]);
console.log(lowNos);