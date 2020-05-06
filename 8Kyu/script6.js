function squareDigits(num){
    let newNum = Array.from(num.toString(), Number);
    //console.log(newNum);
    let newNum2 = newNum.map(x => {return x * x});
    //console.log(newNum2);
    let newNum3 = newNum2.map(String);
    //console.log(newNum3);
    let newNum4 = newNum3.join('');
    console.log(newNum4);
  
}

squareDigits(45678);
