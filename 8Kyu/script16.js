/** NEW KATA */
var summation = function (num) {
    var arr = [];
    var re;

    for(var i = 1; i <= num; i++) {
        arr.push(i);
    };
    
    re = arr.reduce((acc, red) => {
        return acc + red;
    });
    return re;
}

console.log(summation(8));