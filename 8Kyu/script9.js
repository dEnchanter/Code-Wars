function spinWords(words) {
    var arrWords = words.split('');
    var revWords = arrWords.reverse();
    return revWords.join('');
}

console.log(spinWords('Hello i am from the country side'));
