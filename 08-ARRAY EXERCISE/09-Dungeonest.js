function solveOfTaskDungeonestDark(input) {
   let health = 100;
   let coins = 0;
   let inputs = input[0].split("|");
   let commandsInput = 0;
   for (let commands of inputs) {
      commandsInput++;
      commands = commands.split(' ');
      let [command, number] = commands;
      if (command === "potion") {
         let result = 0;
         let needHealth = 100 - health;
         if (needHealth > Number(number)) {
            result = `You healed for ${number} hp.`;
            health += Number(number);
         } else {
            result = `You healed for ${needHealth} hp.`
            health += needHealth;

         }
         console.log(result);
         console.log(`Current health: ${health} hp.`);
      } else if (command === "chest") {
         console.log(`You found ${number} coins.`);
         coins += Number(number);
      } else {
         health -= Number(number);
         if (health > 0) {
            console.log(`You slayed ${command}.`);
         } else {
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${commandsInput}`);
            return;
         }
      }
   }
       console.log("You've made it!");
       console.log(`Coins: ${coins}`);
       console.log(`Health: ${health}`);
}