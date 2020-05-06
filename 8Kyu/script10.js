function XO(str) {

    var str = str.toLowerCase().split('');
    //console.log(newStr);
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
    
}

console.log(XO('xXooo'));