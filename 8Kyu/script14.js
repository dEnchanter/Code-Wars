function oddOrEven(array1) {
    //enter code here
    if(array1) {

        var semi = array1.reduce((acc, el) => {
            return acc + el;
        }, 0);
    
        if(semi % 2 === 0){
            return 'even';
        } else {
            return 'odd';     
        }    

    } else if(array1 = []) {
        return 'even';
        
    }
  
 }

 console.log(oddOrEven([1, 2, 3, 4, 5]));

// I - array of numbers [1, 2, 3, 4, 5]

/** 
 * P - add all numbers in array
 * determine if array is even or odd
 * display answer 
 **/ 

// O - even or odd in string data type