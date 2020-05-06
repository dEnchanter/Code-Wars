function highAndLow(numbers){
    numbers = numbers.split('').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

var score = highAndLow('5862');
console.log(score);



