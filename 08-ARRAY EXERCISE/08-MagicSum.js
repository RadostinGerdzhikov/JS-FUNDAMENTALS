function printPairsSumEqualToNumber(arrayInput, digitInput) {
    let arr = arrayInput;
    let digit = digitInput;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currentNum + nextNum === digit) {
              console.log(currentNum, nextNum);
            }
        }
    }

}

printPairsSumEqualToNumber(
    [1, 7, 6, 2, 19, 23],
    8
)
printPairsSumEqualToNumber(
    [14, 20, 60, 13, 7, 19, 8],
    27

)

printPairsSumEqualToNumber(
    [1, 2, 3, 4, 5, 6],
    6
    

)