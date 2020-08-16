// function printHumanStatusByAge(age) {
//       let status = "";
//      if (age >= 0 && age <= 2){
//          status = 'baby'  
//      }else if (age > 2 && age <= 13) {
//          status = 'child'
//      }else if (age > 13 && age <= 19) {
//         status = 'teenager'
//     }else if (age > 19 && age <= 65) {
//         status = 'adult'
//     }else if (age >= 66 ) {
//         status = 'elder';
//     }else {
//         console.log('out of bounds');
//     }
//      console.log(status);    
// }


function printHumanStatusByAge(age) {
    let status = "";
   if (age < 0){
       console.log('out of bounds');
       return;
   } 
   if (age <= 2){
       status = 'baby'  
   }else if (age <= 13) {
       status = 'child'
   }else if (age <= 19) {
      status = 'teenager'
  }else if (age <= 65) {
      status = 'adult'
  }else if (age >= 66 ) {
      status = 'elder';
  }
   console.log(status);    
}










printHumanStatusByAge(20);
printHumanStatusByAge(1);
printHumanStatusByAge(100);