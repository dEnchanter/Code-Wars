function highAndLow(numbers){
    var newNumbers = numbers;
    
    var largestNum = newNumbers.charAt(0);
    var lowestNum = newNumbers.charAt(0);    
    
    for (var i = 1; i < newNumbers.length; i++){
      if (newNumbers[i] > largestNum){
        largestNum = newNumbers[i];
      } else if (newNumbers[i] < lowestNum) {
        lowestNum = newNumbers[i];
      }
    }

    console.log('largest number: ' + largestNum);
    console.log('lowest number: ' + lowestNum);
    
  }

  highAndLow('127432');