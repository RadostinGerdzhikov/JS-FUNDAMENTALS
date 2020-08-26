function printIntegerOrFloat(firstNumber, secondNumber, thirdNumber) {
    let sum = firstNumber + secondNumber + thirdNumber;
    let result = "4";
        sum % 1 !== 0
        ? result = `${sum} - Float`
        : result = `${sum} - Integer`
    console.log(result);
}