function printTseamAccount(arr) {
    let inputArr = arr;
    let indexGame = 0;
    inputArr.pop();
    let gameNameArr = inputArr
        .shift()
        .split(' ');
    for (let i = 0; i < inputArr.length; i++) {
        let [command, game] = inputArr[i].split(' ');
        command = command.toLowerCase();

        if (command == "install") {
            if (!gameNameArr.includes(game)) {
                gameNameArr.push(game);
            }
        }
        if (command == "uninstall") {
            
            if (gameNameArr.includes(game)) {
                indexGame = gameNameArr.indexOf(game);
                gameNameArr.splice(indexGame, 1);
            }
        }
        if (command == "update") {
            if (gameNameArr.includes(game)) {
                indexGame = gameNameArr.indexOf(game);
                let updateGame = gameNameArr[indexGame];
                gameNameArr.splice(indexGame, 1);
                gameNameArr.push(updateGame);
            }
        }
        if (command == "expansion") {
          let [gameName, realExpansion] = game.split('-');
           if(gameNameArr.includes(gameName)) {
               indexGame = gameNameArr.indexOf(gameName);
               gameNameArr.splice(indexGame + 1, 0, gameName + ":" + realExpansion);
           } 
            
        }
    }
    console.log(gameNameArr.join(" "));
}

// printTseamAccount(
//     [
//         'CS WoW Diablo',
//         'Install LoL',
//         'Uninstall WoW',
//         'Update Diablo',
//         'Expansion CS-Go',
//         'Play!'
//     ]
// );

// printTseamAccount(['CS WoW Diablo',
// 'Uninstall XCOM',
// 'Update PeshoGame',
// 'Update WoW',
// 'Expansion Civ-V',
// 'Play!']);


