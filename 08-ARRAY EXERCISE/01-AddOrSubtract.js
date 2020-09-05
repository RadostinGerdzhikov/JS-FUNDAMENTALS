function solve(arrayInput) {
  let array = arrayInput;
  let sumArray = 0;
  let sumNewArray = 0;
  let newArray = []; 

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
       newArray.push(array[i] + i);      
    }else{
       newArray.push(array[i] - i);      

    }
  }

  for (let i = 0; i < array.length; i++) {
      sumArray += array[i];
      sumNewArray += newArray[i]; 
    }
    
     console.log(newArray);
     console.log(sumArray);
     console.log(sumNewArray);
     
}

solve([5, 15, 23, 56, 35])