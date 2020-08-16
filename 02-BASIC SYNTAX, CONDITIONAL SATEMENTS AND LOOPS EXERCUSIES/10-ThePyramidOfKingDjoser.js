// function calculateMateriaForPyramid(base, increment) {
//    // 2:17:09 e съмърито на Киро лекцията  

//    // Щом 1x1 е квадрат
//    // Лице на квадрат a * a
//    // Периметър на квадрат 4 * а;
//    // от големия квдрат вадим малкия плюс четири за ъловите квадратчета.
//    // намаляме с по две за да можем да намерим и вънчния слой, който е от друг материал

//    let stone = 0;
//    let marble = 0;
//    let lapis = 0;

//    // въртим цикъл, вероятно while, защото не знаем докога ще 
//    // е краят.
//    // златото се смята след цикъла, защото може да е или единица или двойка
//    // ако цикълът е едно или две, ще смятаме златото след цикъла/ 

//    let steps = 0; // на колко стъпки ще строим пирамидата 
//    while (base > 2) {
//       steps++;
//       // камъка, блокчето отвътре пак по условие самата база минус две 
//       let stoneBase = base - 2;
//       // ** 2 nна степен лицето на квадрата
//       // incrementa е пo условие
//       stone += stoneBase ** 2 * increment;
//       // проверяваме дали е всяка пета стъпка, там има промяна по условие, външния слой е направен от lapis
//       if (steps % 5 === 0) {
//          // получаваме периметъра на обвивката
//          // периметър - около фигурата
//          // лице вътрешността на фигурата
//          lapis += ((stoneBase * 4) + 4) * increment;
//          // обаче, ако не е всяка пета
//       } else {
//          // търсим периметъра на външната обвивка
//          marble += ((stoneBase * 4) + 4) * increment;
//       }
//       // по условие на всяка стъпка намаляме с две
//       base -= 2;
//    }

//    // търсим златото
//    // от базата е останало или едно или две
//    // всичко е квадратче и го намираме по формулата а * а * increment, инкремента е по условие
//    let gold = (base ** 2) * increment;
//    // увеличваме стъпките с едно, защото златото е на върха
//    steps++;
//    // Материалите ги закръгляме нагоре, защото може да са с десетични запетаи

//    console.log(`Stone required: ${Math.ceil(stone)}`);
//    console.log(`Marble required: ${Math.ceil(marble)}`);
//    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
//    console.log(`Gold required: ${Math.ceil(gold)}`);

//    // Хеигхта или стъпките за направа на пирамидата 
//    // ги умножваме по инкремнта и ги закръгляме надолу

//    //let height = steps * increment;

//    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);


// }

// calculateMateriaForPyramid(12, 1);
// calculateMateriaForPyramid(12, 1);
// calculateMateriaForPyramid(11, 0.75);




function solve(base, increment) {
   let stone = 0;
   let marble = 0;
   let lapis = 0;
   let gold = 0;
   let steps = 0;

   while (base > 2) {
      steps++;
      let stoneBase = base - 2; // базата от камък по условие е base - 2
      stone += stoneBase ** 2 * increment;    
      base -= 2;

      if (steps % 5 === 0) {
         lapis += ((4 * stoneBase) + 4) * increment;
         
      }else {
         marble += ((4 * stoneBase) + 4) * increment;
      }
   }
     
     gold += (base ** 2) * increment;
     steps++;
     console.log(`Stone required: ${Math.ceil(stone)}`);
     console.log(`Marble required: ${Math.ceil(marble)}`);
     console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
     console.log(`Gold required: ${Math.ceil(gold)}`);
     console.log(`Final pyramid height: ${Math.floor(Math.floor(steps*increment))}`);
    
   //Marble required: 112
   //   Lapis Lazuli required: 8
   //   Gold required: 1
   //   Final pyramid height: 6


   }


  function solve1(base, increment) {
   
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;
    
    while (base > 2) {
      steps++;
      let stoneBase = base - 2;
      stone += (stoneBase ** 2) * increment; 

      if (steps % 5 === 0) {
         lapis += ((base * 4) - 4) * increment;
      }else {
         marble += ((base * 4) - 4) * increment;
      }
      base -= 2;
    }

     gold += (base ** 2) * increment; 
     steps++;

     let height = steps * increment;
     
     console.log(`Stone required: ${Math.ceil(stone)}`);
     console.log(`Marble required: ${Math.ceil(marble)}`)
     console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
     console.log(`Gold required: ${Math.ceil(gold)}`)
     console.log(`Final pyramid height: ${Math.floor(height)}`);
   }
  



  //solve(12,1);
  solve1(23, 0.5);