function sumEvenNumber(arr) {
   let sumEvenElements = 0;
    for (let num of arr) {
      num = Number(num); 
      num % 2 === 0
      ? sumEvenElements += num
      : sumEvenElements; 
    }
    
    console.log(sumEvenElements);
}


sumEvenNumber(['1','2','3','4','5','6']);
sumEvenNumber(['3','5','7','9']);
sumEvenNumber(['2','4','6','8','10']);
