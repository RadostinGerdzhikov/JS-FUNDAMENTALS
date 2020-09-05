function equalsSums(inputArr) {
   let arr = inputArr;
   let indexOfEl = -1;
   for (let i = 0; i < arr.length; i++) {
     let leftSum = 0;
     let rightSum = 0;
      for (let j = i-1; j >= 0; j--) {
        leftSum += arr[j];
      }
      
     for (let k = i + 1; k < arr.length; k++) {
         rightSum += arr[k]
     }
        if(rightSum === leftSum){
            indexOfEl = i;
        } 
    }
    
   indexOfEl !== -1
   ? console.log(indexOfEl)
   : console.log('no')

}

equalsSums([1, 2, 3, 3]);
equalsSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalsSums([1, 2, 3]);
equalsSums([1, 2]);
equalsSums([1]);

