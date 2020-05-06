//MY SOLUTION
function find_average(array) {

    //THREE LINE SOLUTION
    //a = sum content of array
    let mapArr = array.reduce((acc, red) => acc + red);
    //console.log(mapArr);
    
    //divide a by length of array
    const avg = mapArr / array.length;
    //console.log(avg);

    return avg;

    // TWO LINE SOLUTION
    //return avg / array.length

    // ONE LINE SOLUTION
    // return array.reduce((result, current) => result + current, 0) / array.length;
  }

console.log(find_average([1,2,3]));

//  WITHOUT METHOD SOLUTION
// function find_average(array) {
//     var sum=0;
//     const length=array.length;
//     for (i=0;i<length;i++){
//     sum+=array[i];
//     }
//     return sum/length;
//   }