function absNum(num) {
  let res = 0;
  const splitted = num
    .toString()
    .split("")
    .map(cur => {
      let newCurr = Number(cur);
      res = res + newCurr;
    });
  return res;
}
console.log(absNum(67589));

// the machine splits the numbers and add them up
