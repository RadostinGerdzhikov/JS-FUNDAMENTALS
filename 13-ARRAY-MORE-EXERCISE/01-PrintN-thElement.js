 function printNthElement(inputArr) {
   let arr = inputArr;
   let step = Number(arr.pop());
   let result = []; 
   for (let i = 0; i < arr.length; i+=step) {
      result.push(arr[i]);
   }  
    console.log(result.join(" "));
 }

//  printNthElement(['1', '2', '3', '4', '5', '6']);
//  printNthElement(['5', '20', '31', '4', '20', '2']);