function numDivisionNumber(number) {
    // 2, 3, 6, 7, and 10.
    let arr = []; 
    if (number % 2 === 0) {
      arr.push(2)  
    }else if(number % 3 === 0){
        arr.push(3);
    }else if(number % 6 === 0){
        arr.push(6);
    }else if(number % 7 === 0){
        arr.push(7);
    }else if(number % 10 === 0){
        arr.push(10);
    }

    console.log(arr);
}

numDivisionNumber(30);
numDivisionNumber(15);
numDivisionNumber(12);
numDivisionNumber(1643);