function printCondenseArrayToNumber(numbersInput) {
    let numbers = numbersInput;
    while (numbers.length > 1) {
       let condensed = [];
       for (let i = 0; i < numbers.length - 1; i++) {
          condensed[i] = numbers[i] + numbers[i + 1];
       } 
        numbers = condensed; 
    }

    console.log(numbers[0]); 
}

printCondenseArrayToNumber([2,10,3]);
printCondenseArrayToNumber([5,0,4,1,2]);
printCondenseArrayToNumber([1]);