04. Amazing Numbersfunction printAmazingNumber(num) {
	let currentNumber = num;
    let sum = 0;
    while (currentNumber > 0) {
        let digit = currentNumber % 10;
        sum += digit;
        currentNumber = Math.trunc(currentNumber / 10);
    }
      
          let result;
          sum.toString().includes(9)
          ? result = `${num} Amazing? True` 
          : result = `${num} Amazing? False`;
         console.log(result);
    }