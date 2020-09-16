function rotateArray(inputArr) {
  let arr = inputArr;
  if(isNaN(Number(arr[arr.length-1]))){
      console.log('Empty');
      return;
    }else {
     let rotations = Number(arr.pop());
     for (let i = 1; i <= rotations; i++) {
         let num = arr.pop();
         arr.unshift(num);
       }   
    } 
      console.log(arr.join(" "));
}

// rotateArray(['1', '2', '3', '4', '2']);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
// rotateArray (['remove', 'remove', 'remove']);