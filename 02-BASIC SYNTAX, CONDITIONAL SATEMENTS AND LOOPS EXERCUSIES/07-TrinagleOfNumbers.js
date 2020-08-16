function printTriangleOfNumbers(number) {
    //    for (let i = 1; i <= number; i++) {
    //      console.log(`${i} `.repeat(i));
    //    }

    // Moe решение!

    let arr = [];
    for (let row = 1; row <= number; row++) {
        for (let col = 1; col <= row; col++) {
            arr.push(row)
        }

        console.log(arr.join(" "));
        arr = [];
    }




}


// printTriangleOfNumbers(3);
printTriangleOfNumbers(5);
// printTriangleOfNumbers(6);
