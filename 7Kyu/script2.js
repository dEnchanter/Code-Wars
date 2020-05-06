function words(str) {
  if (str.length % 2 === 0) {
    position = str.length / 2;
    var elBefore = str.charAt(position - 1);
    var elAfter = str.charAt(position);
    return [elBefore, elAfter].join('');

  } else if (str.length % 2 === 1) {
    position = Math.floor(str.length / 2);
    el = str.charAt(position);
    return el;
    
  }
}

console.log(words("leavereqw"));
