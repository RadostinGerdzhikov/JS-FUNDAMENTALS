
function printMergeArray(arr1, arr2) {
    let firstArray = arr1;
    let secondArray = arr2;
    let resultArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            resultArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        }else {
            resultArray.push(firstArray[i] +secondArray[i]); 
        }
    }
      console.log(resultArray.join(' - '));
}

printMergeArray(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)