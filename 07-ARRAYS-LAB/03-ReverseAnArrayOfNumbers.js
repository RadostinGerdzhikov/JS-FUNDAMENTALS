 function reverseAnArrayOfFunction(digit, array) {
    let newArr = [];
    for (let i = 1; i <= digit; i++) {
        if (array[i-1] !== undefined)
           newArr.unshift(array[i-1]); 
        
    } 
    console.log(newArr.join(' '));
}

 reverseAnArrayOfFunction(3, [10, 20, 30, 40, 50]);
 reverseAnArrayOfFunction(4, [-1, 20, 99, 5]);
 reverseAnArrayOfFunction(2, [66, 43, 75, 89, 47]);