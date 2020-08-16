function sortNumber(numberOne,numberTwo,numberThree) {
   let arrNums = [];
   arrNums.push(numberOne);  
   arrNums.push(numberTwo);  
   arrNums.push(numberThree);
   arrNums.sort();
   arrNums.reverse();
   console.log(arrNums.join('\n'));  
}

//sortNumber(2,1,3);
// sortNumber(-2,1,3);
 sortNumber(0,0,2);
