// function findOdd(arr) {
//  var obj = {}
//  arr.forEach(el => {
//    obj[el] ? obj[el]++ : obj[el] = 1;
//  });

//  for(prop in obj) {
//    if(obj[prop] % 2 !== 0) return Number(prop);
//  }
// };

// console.log(findOdd([1,1,1,1,2,2,3,3,4,2,4,4,4,4,4]));

function findOdd(arr) {
  var countOcurrencesOfInt = 0;
  for(let i = 0; i < arr.length; i++) {
    var currentIterationInt = arr[i];
    //console.log(currentIterationInt);
    for(let j = 0; j < arr.length; j++) {
      //console.log(arr[j]);
      
      if(currentIterationInt === arr[j]) {
        countOcurrencesOfInt++;
      }
    }
     if(countOcurrencesOfInt % 2 !== 0){
       return currentIterationInt;
     }
  }
}

console.log(findOdd([1,1,2,3,3]));