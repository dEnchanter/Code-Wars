 function simpleMultiplication(number) {
     if(number % 2 === 0){
       return number * 8;
     } else {
       return number * 9;
     }
     //return n * (n % 2 ? 9 : 8);
 }
 console.log(simpleMultiplication(2));