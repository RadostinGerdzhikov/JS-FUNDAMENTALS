function sumFirstAndLastArrayElement(arr) {
    let result = Number(arr[0]) + Number(arr[arr.length-1]);
    console.log(result);
}

sumFirstAndLastArrayElement(['20', '30', '40']);