function printAreaTriangle(sideA, sideB,sideC){
   let a = sideA;
   let b = sideB;
   let c = sideC;
   let sideParameter = 0;  
   let s = sideParameter; 

  s = (a + b + c) / 2;
  let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

  console.log(area);



}

printAreaTriangle(2,3.5,4);