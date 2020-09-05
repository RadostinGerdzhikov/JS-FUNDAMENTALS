// function printTopIntegersOfArray(arr) {
//     let topIntegers = [];
    
//       // todo create two for loops
    
//         for (let i = 0; i < arr.length; i++) {
//             let currentEl = arr[i];
//             let isTopInteger = true;
    
//             for (let j = i+1; j < arr.length/*todo последният елемент винаги е topinteger затова е lenght-1*/; j++) {
//                 let nextEl = arr[j];
    
//                 if(currentEl <= nextEl){
//                     isTopInteger = false;
//                     break;
//                 }
//             }
            
//             if(isTopInteger){
//                 topIntegers.push(currentEl);
//             }
//         }
    
//         console.log(topIntegers.join(' '));
//     }
   
function printTopIntegersOfArray(arr) {
    let topIntegers = [];
    for (let i = 0; i < arr.length; i++) {
       let currentEl = arr[i];
       let isTopIntegers = true;
       
       for (let j = i + 1; j < arr.length; j++) {
           let nextElement = arr[j] 
           if(currentEl <= nextElement){
               isTopIntegers = false;
               break;
           }
       }
       
       if(isTopIntegers){
           topIntegers.push(currentEl)
        }
    }

    console.log(topIntegers.join(' '));
}     

printTopIntegersOfArray([1, 4, 3, 2]);
printTopIntegersOfArray([14, 24, 3, 19, 15, 17]);
printTopIntegersOfArray([41, 41, 34, 20]);
printTopIntegersOfArray([27, 19, 42, 2, 13, 45, 48]);

