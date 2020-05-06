function findUniq(arr){
    // univalue
    let uniArr = [];
    arr.map(i => {
        if(uniArr.length !== 0) {
            if(i === uniArr[0]){
                uniArr.push(i)
            }
        } else {
            uniArr.push(i)
        }
    });

    const univalue = arr.filter(i => {
        return !uniArr.includes(i)
    })
    console.log(uniArr)
    return univalue[0];
}

console.log(findUniq([1,1,1,2,1,1]));