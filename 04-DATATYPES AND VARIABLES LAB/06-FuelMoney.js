function calculateMoneyForFuel(distance, passengers, litterPrice) {
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let total = litterPrice * neededFuel;
    console.log(`Needed money for that trip is ${total}lv.`);
}