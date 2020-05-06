function sumOfNumbers(N) {
  let result = 0;
  for (let i = 1; i <= N; i++) {
    result = result + i;
  }
  return result;
}

console.log(sumOfNumbers(10));
