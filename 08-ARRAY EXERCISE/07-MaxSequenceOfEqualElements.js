function printMaxSequenceOfEqualElement(arr) {
    let indexOfEl = -1;
    let maxLengthSeq = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let lengthSeq = 1;
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currentNum !== nextNum) {
                break;
            }
            lengthSeq++;
        }
        if (lengthSeq > maxLengthSeq) {
          maxLengthSeq = lengthSeq
          indexOfEl = i; 
        }

    }

     console.log(`${arr[indexOfEl]} `.repeat(maxLengthSeq).trim());
}


printMaxSequenceOfEqualElement([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
printMaxSequenceOfEqualElement([1, 1, 1, 2, 3, 1, 3, 3]);
printMaxSequenceOfEqualElement([4, 4, 4, 4]);
printMaxSequenceOfEqualElement([0, 1, 1, 5, 2, 2, 6, 3, 3]);