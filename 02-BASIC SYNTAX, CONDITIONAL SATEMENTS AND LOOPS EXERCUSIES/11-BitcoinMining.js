// 1:30:56 zadachata reshenie ot Svetozar lekciq
function printTotalAmountOfBitcoins(arrShift) {
    let totalSum = 0;
    let oneBitcoinPrice = 11949.16;
    let oneGramGoldPrice = 67.51;
    let goldPerDay = 0;
    let sumPerOneDay = 0;
    let arrDays = [];
    let bitcoins = 0;
    arrShift.unshift(0);


    for (let i = 1; i < arrShift.length; i++) {
        if (i % 3 === 0) {
            arrShift[i] = arrShift[i] * 0.7;
        }

        goldPerDay = arrShift[i];
        sumPerOneDay = goldPerDay * oneGramGoldPrice;

        while (sumPerOneDay >= oneBitcoinPrice) {
            sumPerOneDay -= oneBitcoinPrice;
            //totalSum += sumPerOneDay;
            arrDays.push(arrShift.indexOf(arrShift[i]));
            bitcoins += 1;

        }

        totalSum += sumPerOneDay;

        while (totalSum >= oneBitcoinPrice) {
            arrDays.push(arrShift.indexOf(arrShift[i]));
            totalSum -= oneBitcoinPrice;
            bitcoins += 1;
        }
    }
    
    if (arrDays.length !== 0) {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${arrDays.shift()}`);
        console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
        
    } else {
        console.log('Bought bitcoins: 0');
        console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
    }
    
}
    
      // printTotalAmountOfBitcoins([100, 200, 300]);
      // printTotalAmountOfBitcoins([50, 100]);
      printTotalAmountOfBitcoins([3124.15, 504.212, 2511.124]);