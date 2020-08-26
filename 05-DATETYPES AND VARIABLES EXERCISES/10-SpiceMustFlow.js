function calculateYield(startingYield) {
    let days = 0;
    let extractSpice = 0;

    while (startingYield >= 100) {
        extractSpice += startingYield;
        if (extractSpice < 26) {
            extractSpice -= extractSpice
        } else {
            extractSpice -= 26;
        }
        startingYield -= 10;
        days++;
    }

    if (extractSpice < 26) {
        extractSpice -= extractSpice
    } else {
        extractSpice -= 26;
    }
    console.log(days);
    console.log(extractSpice);
}

calculateYield(111);    