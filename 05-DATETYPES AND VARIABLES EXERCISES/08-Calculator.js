function printResultFromOperationWithTwoNumbers(firstNumber,operator, secondNumber) {
    let result;
    switch (operator) {
        case '+':
         result = firstNumber + secondNumber; 
         break;
        
        case '-':
         result = firstNumber - secondNumber; 
        break;
        
        case '*':
         result = firstNumber * secondNumber; 
        break; 
    
        case '/':
        result = firstNumber / secondNumber; 
        break; 
    }
      
      console.log(result.toFixed(2));
}

printResultFromOperationWithTwoNumbers(5,'+',10);
printResultFromOperationWithTwoNumbers(25.5,'-',3);