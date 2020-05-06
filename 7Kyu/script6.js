function reverseNum(num) {
  const strNum = num.toString();
  // console.log(typeof strNum);
  const arrNum = strNum
    .split("")
    .reverse()
    .join("");
  // console.log(arrNum);
  return arrNum;
}

console.log(reverseNum(54321));

// function reverseNum(num) {
//   const strNum = num.toString();
//   // console.log(typeof strNum);
//   const arrNum = strNum.split("").map(Number);
//   const revNum = arrNum.sort((a, b) => b - a).join("");
//   // console.log(revNum);
//   return revNum;
// }

// console.log(reverseNum(12345));
