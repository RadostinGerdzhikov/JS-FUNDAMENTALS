function printArrayRotate(arrayInput, numberInput) {
   let arr = arrayInput;
   let number = numberInput;
   for (let i = 1; i <= number; i++) {
      let firstNumOfArr = arr.shift();
      arr.push(firstNumOfArr)
    }
   console.log(arr.join(' '));

}

printArrayRotate([51, 47, 32, 61, 21], 2);