function printArrayAreEqualOrNot(firstArr, secondArr) {
    let sumFirstArray = 0;

    for (let i = 0; i < firstArr.length; i++) {
        if (+firstArr[i] === +secondArr[i]) {
            sumFirstArray += +firstArr[i];
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sumFirstArray}`);
}

printArrayAreEqualOrNot(['10', '20', '30'], ['10', '20', '30'])
printArrayAreEqualOrNot(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
printArrayAreEqualOrNot(['1'], ['10'])