function printCommonElementsOfTwoArrays(firstArray, secondArray) {
    let arr1 = firstArray;
    let arr2 = secondArray;
    let resultArr = [];

    if (arr1.length > arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                resultArr.push(arr1[i]);
            }
        }
    } else if (arr1.length < arr2.length) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.includes(arr2[i])) {
                resultArr.push(arr2[i]);
            }
        }
    } else {
        for (let element of arr1) {
            if(arr2.includes(element)){
                resultArr.push(element);
            }
        }
    }
    console.log(resultArr.join('\n'));
  
}


printCommonElementsOfTwoArrays(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);