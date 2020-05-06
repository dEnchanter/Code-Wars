function removeSmallest(numbers) {

    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    // console.log(indexOfMin);
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }

  let shade = removeSmallest([3,2,1,5,4]);
  console.log(shade)