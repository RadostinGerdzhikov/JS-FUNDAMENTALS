function printNonDecresingSubSeq(arr) {
   let inputArr = arr;
   let resultArr = [inputArr[0]];
   let maxNumber = inputArr[0];
     for (let i =  1; i < inputArr.length; i++) {
       if(inputArr[i] >= maxNumber){
         resultArr.push(inputArr[i])
         maxNumber = inputArr[i];
        }
        
     }  
   console.log(resultArr.join(" "));
}

 //printNonDecresingSubSeq([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
 //printNonDecresingSubSeq([ 1, 2, 3, 4]);
 //printNonDecresingSubSeq([ 20, 3, 2, 15, 6, 1]);
 printNonDecresingSubSeq([100]);