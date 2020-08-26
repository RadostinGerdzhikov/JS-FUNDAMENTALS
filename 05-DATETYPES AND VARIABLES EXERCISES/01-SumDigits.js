function sumDigits(number){
  let sum = 0;
  while (number){
    sum += number % 10;
    number = Math.trunc(number / 10);
}
   console.log(sum); 
}

sumDigits(245678);
sumDigits(543);
sumDigits(97561);