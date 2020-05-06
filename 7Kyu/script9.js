function quadEquation(a, b, c) {
  const result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  const result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  return [result1, result2];
}

console.log(quadEquation(4, 8, -2));
