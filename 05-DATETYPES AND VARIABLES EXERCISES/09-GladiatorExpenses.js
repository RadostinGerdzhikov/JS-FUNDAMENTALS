function printGladiatorExpenses(fightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalPrice = 0;

    for (let i = 1; i <= fightsCount; i++) {
        if (i % 2 === 0){
            totalPrice += helmetPrice;
        }

        if(i % 3 === 0){
            totalPrice += swordPrice;
        }

        if(i % 6 === 0){
            totalPrice += shieldPrice;
        } 

        if(i % 12 === 0){
            totalPrice += armorPrice;
        }

    }
        

        console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}   
    printGladiatorExpenses(7, 2, 3, 4, 5);
    printGladiatorExpenses(23, 12.50, 21.50, 40, 200);
