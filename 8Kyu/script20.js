/** NEW KATA */
function makeNegative(num) {
    
     if(num > 0) {
         return 0 - num;
     } else if(num < 0) {
         return num;
     } else {
         return 0;
     }

     //one step solution
     //returned a ternary statement
     //return num < 0 ? num : -num;
 }
 console.log(makeNegative(0));
