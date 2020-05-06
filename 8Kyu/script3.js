String.prototype.toJadenCase = function() {

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    return this.split(' ').map(capitalizeFirstLetter).join(' ');
  };
  
  var str = 'i love coding';
  console.log(str.toJadenCase());