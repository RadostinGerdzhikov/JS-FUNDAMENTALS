function reverseAnArrayOfStrings(arr) {
   let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
     reversedArr.push(arr[arr.length - i - 1]); 
   } 
   console.log(reversedArr.join(' ')); 
  
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);