function printSpecialNumbersTrueOrFalse(number) {
    let currentNumber = number;
    let sum;
    
    for (let i = 1; i <= currentNumber; i++) {
          let numLoop = i;
          while (numLoop > 0){
          let digit = numLoop % 10;
          sum += digit;
          numLoop = Math.trunc(numLoop/10);
          }   
    
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
    