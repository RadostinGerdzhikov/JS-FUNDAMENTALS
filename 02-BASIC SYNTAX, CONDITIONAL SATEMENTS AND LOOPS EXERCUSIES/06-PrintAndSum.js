function printSumBetweenNumbersOfTwoNumbers(startNumber,endNumber) {
   let sum = 0;
   let arrNums = [];
   for (let i = startNumber; i <= endNumber; i++) {
      arrNums.push(i);
      sum+= i; 
   }  
   
   console.log(arrNums.join(' '));
   console.log(`Sum: ${sum}`);
}

printSumBetweenNumbersOfTwoNumbers(5,10);
printSumBetweenNumbersOfTwoNumbers(0,26);
printSumBetweenNumbersOfTwoNumbers(50,60);